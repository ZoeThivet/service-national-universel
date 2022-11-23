import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PlanTransportBreadcrumb from "../components/PlanTransportBreadcrumb";
import { Box, BoxHeader, MiniTitle, Badge, AlertPoint, BigDigits, Loading, regionList } from "../components/commons";
import { Link, useHistory, useLocation } from "react-router-dom";
import ChevronRight from "../../../assets/icons/ChevronRight";
import { PlainButton } from "../components/Buttons";
import { cohortList, formatRate, parseQuery } from "../util";
import ExternalLink from "../../../assets/icons/ExternalLink";
import People from "../../../assets/icons/People";
import ProgressBar from "../components/ProgressBar";
import ProgressArc from "../components/ProgressArc";
import Select from "../components/Select";
import FrenchMap from "../../../assets/icons/FrenchMap";
import { capture } from "../../../sentry";
import { toastr } from "react-redux-toastr";
import API from "../../../services/api";
import { region2department } from "snu-lib";
import SchemaEditor from "./SchemaEditor";

export default function SchemaRepartition({ region, department }) {
  const history = useHistory();
  const location = useLocation();
  const [isNational, setIsNational] = useState(!region && !department);
  const [isRegional, setIsRegional] = useState(region && !department);
  const [isDepartmental, setIsDepartmental] = useState(!!(region && department));
  const [cohort, setCohort] = useState(getDefaultCohort());
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({
    capacity: 0,
    total: 0,
    assigned: 0,
    intradepartmental: 0,
    intradepartmentalAssigned: 0,
    centers: 0,
    toRegions: [],
  });
  const [data, setData] = useState({ rows: getDefaultRows() });

  function getDefaultCohort() {
    const { cohort } = parseQuery(location.search);
    if (cohort) {
      console.log("default cohort = ", cohort);
      return cohort;
    } else {
      console.log("default cohort = ", cohortList[0].value);
      return cohortList[0].value;
    }
  }

  useEffect(() => {
    loadData();
  }, [cohort]);

  useEffect(() => {
    let capacity = 0;
    let total = 0;
    let assigned = 0;
    let intradepartmental = 0;
    let intradepartmentalAssigned = 0;
    let centers = 0;
    let toRegions = [];

    if (data.toCenters) {
      for (const row of data.toCenters) {
        toRegions.push({ name: row.name, departments: row.departments });
        capacity += row.capacity ? row.capacity : 0;
        centers += row.centers ? row.centers : 0;
      }
      for (const row of data.rows) {
        total += row.total ? row.total : 0;
        assigned += row.assigned ? row.assigned : 0;
        intradepartmental += row.intradepartmental ? row.intradepartmental : 0;
        intradepartmentalAssigned += row.intradepartmentalAssigned ? row.intradepartmentalAssigned : 0;
      }
    } else {
      for (const row of data.rows) {
        capacity += row.capacity ? row.capacity : 0;
        total += row.total ? row.total : 0;
        assigned += row.assigned ? row.assigned : 0;
        intradepartmental += row.intradepartmental ? row.intradepartmental : 0;
        intradepartmentalAssigned += row.intradepartmentalAssigned ? row.intradepartmentalAssigned : 0;
        centers += row.centers ? row.centers : 0;
      }
    }
    setSummary({ capacity, total, assigned, intradepartmental, intradepartmentalAssigned, centers, toRegions });
  }, [data]);

  function getDefaultRows() {
    if (department) {
      return [];
    } else if (region) {
      return region2department[region].map(createEmptyRow);
    } else {
      return regionList.map(createEmptyRow);
    }
  }

  function createEmptyRow(name) {
    return {
      name,
      capacity: 0,
      total: 0,
      assigned: 0,
      intradepartmental: 0,
      intradepartmentalAssigned: 0,
    };
  }

  async function loadData() {
    try {
      setLoading(true);
      let url = "/schema-de-repartition";
      if (region) {
        url += "/" + region;
      }
      if (department) {
        url += "/" + department;
      }
      const { data, ok } = await API.get(url + "/" + cohort);
      if (!ok) return toastr.error("Oups, une erreur est survenue lors de la récupération des données");
      setData(data);
      setLoading(false);
    } catch (e) {
      capture(e);
      toastr.error("Oups, une erreur est survenue lors de la récupération des données");
    }
  }

  function goToNational() {
    console.log("goTo national...");
    history.push("/plan-de-transport/schema-repartition?cohort=" + cohort);
  }

  function goToRegion() {
    if (region) {
      history.push(`/plan-de-transport/schema-repartition/${region}?cohort=${cohort}`);
    }
  }

  function goToDepartment() {
    if (region && department) {
      history.push(`/plan-de-transport/schema-repartition/${region}/${department}?cohort=${cohort}`);
    }
  }

  function goToRow(row) {
    if (region) {
      history.push(`/plan-de-transport/schema-repartition/${region}/${row.name}?cohort=${cohort}`);
    } else {
      history.push(`/plan-de-transport/schema-repartition/${row.name}?cohort=${cohort}`);
    }
  }

  async function exportDetail() {
    console.log("TODO: export detail");
  }

  return (
    <div>
      <Breadcrumbs items={[{ label: "Plan de transport", to: "/plan-de-transport" }, { label: "Schéma de répartition" }]} />
      <div className="p-[30px]">
        <div className="flex items-center justify-between">
          <PlanTransportBreadcrumb
            region={region ? { label: region } : null}
            department={department ? { label: department } : null}
            onGoToNational={goToNational}
            onGoToRegion={goToRegion}
          />
          <Select options={cohortList} value={cohort} onChange={(e) => setCohort(e)} />
        </div>
        <div className="flex my-[40px]">
          <div className="flex flex-col grow">
            <BoxVolontaires className="grow mb-[8px]" summary={summary} loading={loading} />
            <BoxAffectation className="grow mt-[8px]" summary={summary} loading={loading} />
          </div>
          <BoxDisponibilite className="grow mx-[16px]" summary={summary} loading={loading} isNational={isNational} />
          <BoxCentres className="grow" summary={summary} loading={loading} isDepartmental={isDepartmental} />
        </div>
        {isDepartmental ? (
          <SchemaEditor
            onExportDetail={exportDetail}
            region={region}
            department={department}
            cohort={cohort}
            groups={data && data.groups ? data.groups : { intra: [], extra: [] }}
            summary={summary}
            onChange={loadData}
          />
        ) : (
          <DetailTable rows={data.rows} loading={loading} isNational={isNational} onGoToRow={goToRow} onExportDetail={exportDetail} />
        )}
      </div>
    </div>
  );
}

function BoxVolontaires({ summary, className = "", loading }) {
  return (
    <Box>
      <div className={`flex items-center mb-[10px] ${className}`}>
        <MiniTitle>Volontaires</MiniTitle>
        {!loading && summary.intradepartmental > 0 && (
          <>
            <Badge className="mx-[8px]">{formatRate(summary.assigned, summary.total)} affectés</Badge>
            <Link to="">
              <ExternalLink className="text-[#9CA3AF] hover:text[#000000]" />
            </Link>
          </>
        )}
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center">
          <People className="text-[#9CA3AF]" />
          <BigDigits className="mx-[8px]">{summary.total}</BigDigits>
          {summary.intradepartmental > 0 ? (
            <div className="">dont {summary.intradepartmental} intra-départemental</div>
          ) : (
            <Badge>{formatRate(summary.assigned, summary.total)} affectés</Badge>
          )}
        </div>
      )}
    </Box>
  );
}

function BoxAffectation({ summary, className = "", loading }) {
  return (
    <Box className={className}>
      <MiniTitle className="mb-[10px]">Affectation des volontaires</MiniTitle>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProgressBar total={summary.total} value={summary.assigned} className="my-[10px]" />
          <div className="flex items-center">
            <div className="flex items-center mr-[16px] text-[12px] leading-[14px] text-[#1F2937]">
              <div className="rounded-[100px] w-[7px] h-[7px] bg-[#303958]" />
              <b className="mx-[5px]">{summary.assigned}</b>
              affectés
            </div>
            <div className="flex items-center mr-[16px] text-[12px] leading-[14px] text-[#1F2937]">
              <div className="rounded-[100px] w-[7px] h-[7px] bg-[#E5E7EB]" />
              <b className="mx-[5px]">{summary.total - summary.assigned}</b>
              <span>restants</span>
            </div>
          </div>
        </>
      )}
    </Box>
  );
}

function BoxDisponibilite({ summary, className = "", loading, isNational }) {
  console.log("summary: ", summary);
  return (
    <Box className={`flex flex-column justify-between pb-[0px] ${className}`}>
      <div>
        <MiniTitle className="mb-[10px]">Disponibilité des places</MiniTitle>
        {loading ? (
          <Loading />
        ) : (
          <>
            {!isNational && summary.toRegions && <div className="text-[13px] leading-[1.3em] text-[#6B7280] mb-[10px]">{summary.toRegions.map((r) => r.name).join(", ")}</div>}
            <div className="flex">
              <Badge className="">{summary.capacity} places</Badge>
            </div>
          </>
        )}
      </div>
      <div className="mt-[30px] h-[130px]">
        {loading ? <Loading /> : <ProgressArc total={summary.capacity} value={summary.assigned} legend="Places libres" hilight={summary.capacity - summary.assigned} />}
      </div>
    </Box>
  );
}

function BoxCentres({ summary, className = "", loading, isNational, isDepartmental }) {
  return (
    <Box className={`overflow-hidden ${className}`}>
      <FrenchMap className="absolute right-[-40px] top-[30px] z-[0]" />
      <MiniTitle className="mb-[10px] flex items-center">
        {isDepartmental ? (
          <>
            <span className="mr-[8px]">Régions d&apos;accueil</span>
            {loading ? <Loading width="w-1/3" /> : <Badge>{summary.centers} CENTRES</Badge>}
          </>
        ) : (
          "Centres"
        )}
      </MiniTitle>
      {!isDepartmental && <>{loading ? <Loading width="w-1/3" /> : <BigDigits>{summary.centers}</BigDigits>}</>}
      {!isNational && loading ? (
        <Loading width="w-1/3" />
      ) : (
        <ul className="list-none">
          {summary.toRegions.map((region) => (
            <>
              <li key={region.name} className="text-[#171725] text-[15px] leading-[18px] font-bold mt-[12px]">
                {region.name}
              </li>
              {isDepartmental && (
                <li key={region.name + "-deps"} className="text-[#1F2937] text-[12px], leading-[14px] mt-[2px]">
                  {region.departments.join(", ")}
                </li>
              )}
            </>
          ))}
        </ul>
      )}
      <Link to="/plan-de-transport/tableau-repartition" className="flex items-center absolute right-[20px] bottom-[14px] text-[#2563EB] text-[12px] hover:text-[#000000]">
        Table de répartition <ChevronRight className="ml-[5px]" />
      </Link>
    </Box>
  );
}

function DetailTable({ rows, className = "", loading, isNational, onGoToRow, onExportDetail }) {
  function goToRow(row) {
    onGoToRow && onGoToRow(row);
  }

  return (
    <Box className={className}>
      <BoxHeader title="">
        <PlainButton onClick={onExportDetail}>Exporter</PlainButton>
      </BoxHeader>
      <div className="">
        <table className="w-[100%]">
          <thead className="text-[#7E858C] text-[11px] leading-[16px] uppercase">
            <tr className="border-b-[1px] border-b-[#F4F5FA]">
              <th className="font-medium py-[17px] pr-[16px]">{isNational ? "Régions" : "Départements"}</th>
              <th className="font-medium py-[17px] pr-[16px]">Volontaires</th>
              <th className="font-medium py-[17px] pr-[16px]">Places restantes</th>
              <th className="font-medium py-[17px] pr-[16px]">Volontaires en intra-départemental</th>
              <th className="font-medium py-[17px]">Places restantes dans le département</th>
            </tr>
          </thead>
          <tbody className="font-medium text-[14px] leading-[16px] text-[#1F2937]">
            {rows.map((row) => (
              <tr key={row.name} className="border-b-[1px] border-b-[#F4F5FA] hover:bg-[#F2F5FC]" onClick={() => goToRow(row)}>
                <td className="py-[17px] px-[9px] font-bold text-[15px] text-[#242526] whitespace-nowrap">
                  {row.name}
                  {row.code ? " (" + row.code + ")" : ""}
                </td>
                <td className="py-[17px] px-[8px]">
                  {loading ? (
                    <Loading />
                  ) : (
                    <div className="flex items-center">
                      <div className="mr-[8px]">{row.total}</div>
                      <Badge className="">{formatRate(row.assigned, row.total)} affectés</Badge>
                    </div>
                  )}
                </td>
                <td className="py-[17px] px-[8px]">
                  {loading ? (
                    <Loading />
                  ) : (
                    <div className="flex items-center">
                      <AlertPoint threshold={50} value={row.capacity - row.assigned} />
                      <span>{row.capacity - row.assigned}</span>
                    </div>
                  )}
                </td>
                <td className="py-[17px] px-[8px]">
                  {loading ? (
                    <Loading />
                  ) : (
                    <div className="flex items-center">
                      <div className="">{row.intradepartmental}</div>
                      <Badge mode={row.intradepartmentalAssigned === row.intradepartmental ? "green" : "blue"} className="mx-[8px]">
                        {formatRate(row.intradepartmentalAssigned, row.intradepartmental)}
                      </Badge>
                      <Link to="">
                        <ExternalLink className="text-[#9CA3AF]" />
                      </Link>
                    </div>
                  )}
                </td>
                <td className="py-[17px] px-[8px]">
                  {loading ? (
                    <Loading />
                  ) : (
                    <div className="flex items-center">
                      <AlertPoint threshold={0} value={row.intraCapacity - row.intradepartmentalAssigned} />
                      {row.intraCapacity - row.intradepartmentalAssigned}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}