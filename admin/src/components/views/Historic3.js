/**
 * Cette version de l'historique considère que les données, la pagination et les filtres se font côté serveur.
 */
import React, { useState } from "react";
import { formatStringLongDate, translateModelFields, isIsoDate, translateHistory } from "../../utils";
import { formatLongDateFR, translateAction } from "snu-lib";
import FilterIcon from "../../assets/icons/Filter";
import UserCard from "../UserCard";
import MultiSelect from "../../scenes/dashboard/components/MultiSelect";
import { HiOutlineArrowRight } from "react-icons/hi";
import Pagination3 from "../Pagination3";

export default function Historic3({ model, data, refName, path, pagination, changePage, filters, changeFilters }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const activeFilters = getActiveFilters();

  function getActiveFilters() {
    let filters = [];
    for (const [key, value] of Object.entries(filters)) {
      if (value.length) filters.push({ [key]: value });
    }
    return filters;
  }

  function filterData() {
    let d = data;
    if (activeFilters?.length) d = d.filter((e) => filterEvent(e, activeFilters));
    if (query) d = d.filter((e) => searchEvent(e, query));
    return d;
  }

  function filterEvent(event, filters) {
    return filters.every((filter) => {
      return Object.entries(filter).some(([key, value]) => value.includes(event[key]));
    });
  }

  function searchEvent(e, query) {
    const serializedQuery = query.toLowerCase().trim();
    const matchFieldName = translateModelFields(model, e.path).toLowerCase().includes(serializedQuery);
    const matchOriginalValue = (isIsoDate(e.originalValue) ? formatStringLongDate(e.originalValue) : e.originalValue)?.toLowerCase().includes(serializedQuery);
    const matchFromValue = (isIsoDate(e.value) ? formatStringLongDate(e.value) : e.value)?.toLowerCase().includes(serializedQuery);

    return matchFieldName || matchOriginalValue || matchFromValue;
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-md text-slate-700">
      {!data.length && <div className="italic p-4">Aucune donnée</div>}
      <div className="w-full flex p-4 gap-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <input onChange={(e) => setQuery(e.target.value)} value={query} className="border p-2 rounded-lg w-64 text-xs" placeholder="Rechercher..." />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`group py-2 px-3 rounded-lg flex items-center gap-2 ${isOpen ? "bg-gray-500 hover:bg-gray-100" : "bg-gray-100 hover:bg-gray-500"}`}>
            <FilterIcon className={isOpen ? "fill-gray-100 group-hover:fill-gray-500" : "fill-gray-500 group-hover:fill-gray-100"} />
            <p className={isOpen ? "text-gray-100 group-hover:text-gray-500" : "text-gray-500 group-hover:text-gray-100"}>Filtres</p>
          </button>
        </div>
        <Pagination3
          pageCount={pagination.pageCount}
          currentPage={pagination.page}
          changePage={changePage}
          count={pagination.count}
          itemsPerPage={pagination.itemsPerPage}
          itemsCount={data.length}
          className="p-4"
        />
      </div>
      {isOpen && FilterDrawer({ data, filters, changeFilters, activeFilters, model })}
      <table className="table-fixed w-full">
        <thead>
          <tr className="uppercase border-t border-t-slate-100">
            {refName && <th className="font-normal px-4 py-3 text-xs text-gray-500">{refName}</th>}
            <th className="font-normal px-4 py-3 text-xs text-gray-500">Action</th>
            <th className="font-normal px-4 py-3 text-xs text-gray-500">Détails</th>
            <th className="font-normal px-4 py-3 text-xs text-gray-500 w-16"></th>
            <th className="font-normal px-4 py-3 text-xs text-gray-500"></th>
            <th className="font-normal px-4 py-3 text-xs text-gray-500">Auteur</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <Event key={index} e={e} index={index} model={model} refName={refName} path={path} />
          ))}
        </tbody>
      </table>
      <hr className="border-t border-t-slate-100" />
      <Pagination3
        pageCount={pagination.pageCount}
        currentPage={pagination.page}
        changePage={changePage}
        count={pagination.count}
        itemsPerPage={pagination.itemsPerPage}
        itemsCount={data.length}
        className="p-4"
      />
    </div>
  );
}

function FilterButton({ filter, setCustomFilter, customFilter }) {
  const checked = filter.label === customFilter.label;

  function handleChange() {
    if (checked) return setCustomFilter({ label: "", value: null });
    return setCustomFilter(filter);
  }

  return (
    <label className={`text-blue-500 py-2 px-3 m-0 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-50 ${checked && "bg-blue-50"}`}>
      <FilterIcon className="fill-blue-300" />
      {filter.label}
      <input type="checkbox" checked={checked} onChange={() => handleChange()} className="hidden" />
    </label>
  );
}

function CustomFilters({ customFilterOptions, setCustomFilter, customFilter }) {
  return (
    <div className="flex flex-wrap gap-4">
      {customFilterOptions.map((filter) => (
        <FilterButton key={filter.label} filter={filter} setCustomFilter={setCustomFilter} customFilter={customFilter} />
      ))}
    </div>
  );
}

function Event({ e, index, model, refName, path }) {
  return (
    <tr key={index} className="border-t border-t-slate-100 hover:bg-slate-50 cursor-default">
      {refName && (
        <td className="px-4 py-3 cursor-pointer overflow-hidden">
          <a href={`/${path}/${e.ref}`}>{e.refName}</a>
        </td>
      )}
      <td className="px-4 py-3 overflow-hidden">
        <p className="text-gray-400 truncate">
          {translateAction(e.op)} • {formatLongDateFR(e.date)}
        </p>
        <p>{translateModelFields(model, e.path)}</p>
      </td>
      <td className="px-4 py-3 truncate text-gray-400">{translateHistory(e.path, e.originalValue)}</td>
      <td className="px-4 py-3">
        <HiOutlineArrowRight />
      </td>
      <td className="px-4 py-3 truncate">{translateHistory(e.path, e.value)}</td>
      <td className="px-4 py-3 overflow-hidden">
        <UserCard user={e.user} />
      </td>
    </tr>
  );
}

function FilterDrawer({ data, filters, changeFilters, model }) {
  function getOptions(key) {
    const arr = data?.map((e) => e[key]);
    return [...new Set(arr)];
  }

  function getAuthorOptions() {
    let options = {};
    data.forEach((e) => {
      if (options[e.authorId] === undefined) {
        options[e.authorId] = { label: e.author, value: e.authorId };
      }
    });
    return Object.values(options);
  }

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-slate-50">
      <MultiSelect
        options={getOptions("path").map((e) => ({ label: translateModelFields(model, e), value: e }))}
        value={filters.path}
        onChange={(path) => changeFilters((f) => ({ ...f, ...{ path } }))}
        label="Donnée modifiée"
      />
      <MultiSelect
        options={getOptions("op").map((e) => ({ label: translateAction(e), value: e }))}
        value={filters.op}
        onChange={(op) => changeFilters((f) => ({ ...f, ...{ op } }))}
        label="Type d'action"
      />
      <MultiSelect options={getAuthorOptions()} value={filters.author} onChange={(author) => changeFilters((f) => ({ ...f, ...{ author } }))} label="Auteur de la modification" />
    </div>
  );
}
