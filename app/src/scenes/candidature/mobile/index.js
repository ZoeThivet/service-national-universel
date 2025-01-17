import React from "react";
import { useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Loader from "../../../components/Loader";
import api from "../../../services/api";
import CardCandidature from "./components/CardCandidature";
import EyeOff from "../../../assets/icons/EyeOff";
import Eye from "../../../assets/icons/Eye";

export default function IndexPhase2Mobile() {
  const young = useSelector((state) => state.Auth.young);
  const [applications, setApplications] = React.useState();
  const [toggleButtonDisplayHidden, setToggleButtonDisplayHidden] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const getApplications = async () => {
    try {
      const { ok, data } = await api.get(`/young/${young._id.toString()}/application`);
      if (ok) {
        data.sort((a, b) => Number(a.priority) - Number(b.priority));
        return setApplications(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getApplications();
  }, []);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = async (result) => {
    setLoading(true);
    if (!result.destination || result.destination.index === result.source.index) return setLoading(false);
    // we change the front first for a better UX
    setApplications((prev) => reorder(prev, result.source.index, result.destination.index).map((application, index) => ({ ...application, priority: index + 1 })));

    //then we change in the back
    const { data } = await api.post(`/application/${result.draggableId}/change-classement/${result.destination.index}`);
    // and we update to make sure everything is ok
    setApplications(data);
    setLoading(false);
  };

  if (!applications) return <Loader />;

  return (
    <div className="bg-white pb-5">
      {/* BEGIN HEADER */}
      <div className="bg-gray-700">
        <div className="px-4 pt-4 pb-3">
          <div className="text-white font-bold text-3xl">Il vous reste {Math.max(0, 84 - Number(young.phase2NumberHoursDone || 0))}h à effectuer</div>
          <div className="text-gray-300 text-sm mt-2 mb-2 font-normal">
            <div>L&apos;ordre de vos choix de missions sera pris en compte pour l&apos;attribution de votre MIG.</div>
            <div>Pour modifier l&apos;ordre, attrapez la droite du bloc et déplacez-le.</div>
          </div>
          <div className="flex space-x-2 mt-4 items-center">
            <ToggleVisibility value={toggleButtonDisplayHidden} onClick={() => setToggleButtonDisplayHidden((e) => !e)} />
          </div>
        </div>
        <img className="rounded-t-lg w-full " src={require("../../../assets/phase2MobileHeader.png")} />
      </div>
      {/* END HEADER */}

      {/* BEGIN CANDIDATURES */}
      <div className="px-3 -mt-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {applications
                  .filter((application) => toggleButtonDisplayHidden || application.hidden !== "true")
                  .map((application, i) => (
                    <CardCandidature
                      key={`${application._id.toString()}_${application.priority}`}
                      application={application}
                      index={i}
                      onChange={getApplications}
                      loading={loading}
                    />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {/* END CANDIDATURES */}
    </div>
  );
}

const ToggleVisibility = ({ value, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={`flex items-center w-9 h-4 rounded-full ${value ? "bg-blue-600" : "bg-gray-200"} cursor-pointer transition duration-100 ease-in`}>
        <div
          className={`flex justify-center items-center h-5 w-5 rounded-full border-[1px] border-gray-200 bg-[#ffffff] ${
            value ? "translate-x-[16px]" : "translate-x-0"
          } transition duration-100 ease-in shadow-nina`}>
          {value ? <Eye className="text-gray-400" width={10} height={10} /> : <EyeOff className="text-gray-400" width={10} height={10} />}
        </div>
      </div>
      <div className="text-gray-300 text-sm">Afficher les candidatures masquées</div>
    </>
  );
};
