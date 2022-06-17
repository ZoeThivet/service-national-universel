import React from "react";
import { Link } from "react-router-dom";
import { translateApplication, translate } from "../../../utils";
import DomainThumb from "../../../components/DomainThumb";
import LocationMarker from "../../../assets/icons/LocationMarker";
import EyeOff from "../../../assets/icons/EyeOff";
import Eye from "../../../assets/icons/Eye";
import Check from "../../../assets/icons/Check";
import SixDotsVertical from "../../../assets/icons/SixDotsVertical";
import { Draggable } from "react-beautiful-dnd";
import api from "../../../services/api";
import { toastr } from "react-redux-toastr";

export default function mission({ mission }) {
  const theme = {
    background: {
      WAITING_VALIDATION: "bg-sky-100",
      WAITING_VERIFICATION: "bg-sky-100",
      WAITING_ACCEPTATION: "bg-orange-500",
      VALIDATED: "bg-[#71C784]",
      DONE: "bg-[#5694CD]",
      REFUSED: "bg-[#0B508F]",
      CANCEL: "bg-[#F4F4F4]",
      IN_PROGRESS: "bg-indigo-600",
      ABANDON: "bg-gray-50",
    },
    text: {
      WAITING_VALIDATION: "text-sky-600",
      WAITING_VERIFICATION: "text-sky-600",
      WAITING_ACCEPTATION: "text-white",
      VALIDATED: "text-white",
      DONE: "text-white",
      REFUSED: "text-white",
      CANCEL: "text-[#6B6B6B]",
      IN_PROGRESS: "text-white",
      ABANDON: "text-gray-400",
    },
  };

  const tags = [];
  mission.city && tags.push(mission.city + (mission.zip ? ` - ${mission.zip}` : ""));
  mission.domains.forEach((d) => tags.push(translate(d)));

  return (
    <Link
      to={`/mission/${mission._id}`}
      className="bg-white relative flex w-full justify-between shadow-nina rounded-xl p-4 border-[1px] border-[#ffffff] hover:border-gray-200 mb-4">
      <div className="flex flex-1">
        {/* icon */}
        <div className="flex items-center">
          <DomainThumb domain={mission?.domain} size="3rem" />
        </div>

        {/* infos mission */}
        <div className="flex flex-col flex-1">
          <div className="space-y-2">
            <div className="flex space-x-4">
              <div className="text-gray-500 text-xs uppercase font-medium">{mission?.structureName}</div>
            </div>
            <div className="text-gray-900 font-bold text-base">{mission?.name}</div>
            <div className="flex space-x-2">
              {tags.map((e, i) => (
                <div key={i} className="flex justify-center items-center text-gray-600 border-gray-200 border-[1px] rounded-full px-4 py-1 text-xs">
                  {e}
                </div>
              ))}
              {mission?.isMilitaryPreparation === "true" ? (
                <div className="flex justify-center items-center bg-blue-900 text-white border-gray-200 border-[1px] rounded-full px-4 py-1 text-xs">Préparation militaire</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-between">
        {/* TODO */}
        {/* DISTANCE */}
        <div className="flex basis-[60%] items-center justify-end space-x-2">
          <LocationMarker className="text-gray-400" />
          <div className="text-gray-800 text-base font-bold">à 11 km</div>
        </div>
        {/* END DISTANCE */}

        {/* STATUT */}
        <div className="flex basis-[40%] items-center justify-end">
          <div className="text-gray-500 text-xs font-normal">
            Places disponibles:&nbsp;{mission?.placesLeft}/{mission?.placesTotal}
          </div>
        </div>
        {/* END STATUT */}
      </div>
    </Link>
  );
}