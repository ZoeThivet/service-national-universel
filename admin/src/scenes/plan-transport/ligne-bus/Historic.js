import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Loader from "../../../components/Loader";
import HistoryComponent from "../../../components/views/Historic3";
import API from "../../../services/api";
import { Title } from "../components/commons";
import Select from "../components/Select";
import { cohortList } from "../util";
import { createEvent } from "../../../utils";

export default function Historic() {
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state) => state.Auth.user);
  const [cohort, setCohort] = React.useState("Février 2023 - C");
  const [data, setData] = React.useState([]);
  const [pagination, setPagination] = React.useState({ count: 0, page: 0, pageCount: 0 });
  const [currentPage, setCurrentPage] = React.useState(0);
  const [filters, setFilters] = React.useState({ op: [], user: [], path: [] });

  useEffect(() => {
    getPatches();
  }, [cohort, currentPage]);

  useEffect(() => {
    if (currentPage !== 0) {
      setCurrentPage(0);
    } else {
      getPatches();
    }
  }, [filters]);

  // console.log("🚀 ~ file: Historic.js:17 ~ Historic ~ data", data);
  const formattedData = formatHistory(data, user.role);

  // Insert fetch and format logic here
  const getPatches = async () => {
    console.log("getPatches - Filters = ", filters);
    setLoading(true);
    try {
      let query = { page: currentPage };
      if (filters.op && filters.op.length > 0) {
        query.op = filters.op.join(",");
      }
      if (filters.author && filters.author.length > 0) {
        query.userId = filters.author.join(",");
      }
      if (filters.path && filters.path.length > 0) {
        query.path = filters.path.join(",");
      }
      const queryString = Object.keys(query)
        .map((key) => key + "=" + query[key])
        .join("&");
      const { ok, data, pagination } = await API.get(`/ligne-de-bus/patches/${cohort}?${queryString}`);
      if (!ok) return;
      setData(data);
      setPagination(pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  function changePage(page) {
    console.log("Change Page : ", page);
    setCurrentPage(page);
  }

  return (
    <>
      <Breadcrumbs items={[{ label: "Plan de transport", to: "/ligne-de-bus" }, { label: "Historique du plan de transport" }]} />
      <div className="w-full px-8 pt-3 pb-4">
        <div className="flex pb-6 items-center justify-between">
          <Title>Historique du plan de transport</Title>
          <Select options={cohortList} value={cohort} onChange={(e) => setCohort(e)} />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <HistoryComponent
            model="young"
            data={formattedData}
            refName="Ligne"
            path={"ligne-de-bus"}
            pagination={pagination}
            changePage={changePage}
            filters={filters}
            changeFilters={setFilters}
          />
        )}
      </div>
    </>
  );
}

export function formatHistory(data, role) {
  if (data) {
    return data.map((e) => createEvent(e, e.value, e.originalValue, role));
  } else {
    return [];
  }
}
