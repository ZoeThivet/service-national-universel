import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import { useHistory } from "react-router-dom";
import { ROLES, translate } from "snu-lib";
import Loader from "../../../../../components/Loader";
import { capture } from "../../../../../sentry";
import api from "../../../../../services/api";
import { getInitials, getStatusClass, translateStatus } from "../../../components/commons";
import Chat from "../../components/Icons/Chat";
import Quote from "../../components/Icons/Quote";
import Thumbs from "../../components/Icons/Thumbs";
import View from "../../modificationPanel/View";

export default function Modification({ demandeDeModification, getModification }) {
  const [panel, setPanel] = React.useState({ open: false });
  const [tagsOptions, setTagsOptions] = React.useState(null);
  const user = useSelector((state) => state.Auth.user);
  const history = useHistory();

  const redirectDemande = new URLSearchParams(window.location.search).get("demande");

  const getTags = async () => {
    try {
      const { ok, code, data: reponseTags } = await api.get(`/tags?type=modification_bus`);
      if (!ok) {
        return toastr.error("Oups, une erreur est survenue lors de la récupération des tags", translate(code));
      }
      const options = reponseTags.map((tag) => {
        return { value: tag._id, label: tag.name };
      });
      setTagsOptions(options);
    } catch (e) {
      capture(e);
      toastr.error("Oups, une erreur est survenue lors de la récupération des tags");
    }
  };

  React.useEffect(() => {
    if (panel.open) {
      const id = panel.modification._id;
      const index = demandeDeModification.findIndex((item) => item._id === id);
      const newModification = demandeDeModification[index];
      setPanel({ open: true, modification: newModification });
    }
    if (redirectDemande) {
      const id = redirectDemande;
      const index = demandeDeModification.findIndex((item) => item._id === id);
      const newModification = demandeDeModification[index];
      setPanel({ open: true, modification: newModification });
      history.replace({
        search: null,
      });
    }
  }, [demandeDeModification]);

  React.useEffect(() => {
    getTags();
  }, []);

  if (!demandeDeModification || !tagsOptions)
    return (
      <div className="p-8 w-1/2 bg-white rounded-xl">
        <Loader />
      </div>
    );

  return (
    <div className="p-8 w-1/2 bg-white rounded-xl">
      <div className="text-xl leading-6 text-[#242526]">Demandes de modifications ({demandeDeModification.length})</div>
      <div className="mt-4 flex flex-col overflow-y-auto gap-4 max-h-[300px]">
        {demandeDeModification.map((modification, index) => (
          <div key={index} className=" flex flex-col gap-2 mr-1">
            <div
              className={`group relative flex flex-col gap-2 rounded-xl bg-[#F6F7F9] w-full p-4 ${[ROLES.TRANSPORTER, ROLES.ADMIN].includes(user.role) ? "cursor-pointer" : ""}`}
              onClick={() => [ROLES.TRANSPORTER, ROLES.ADMIN].includes(user.role) && setPanel({ open: true, modification })}>
              {[ROLES.TRANSPORTER, ROLES.ADMIN].includes(user.role) && (
                <div className="absolute top-0 right-0 w-full h-full rounded-xl bg-black opacity-70 hidden group-hover:flex items-center justify-center transition duration-300 ease-in-out">
                  <div className="text-white text-base font-bold leading-6 hover:underline">Voir la demande</div>
                  <div className="absolute bottom-3 right-5 text-white text-sm leading-6 flex items-center gap-1">
                    <Chat className="text-white" />
                    {modification?.messages.length} Commentaire(s)
                  </div>
                </div>
              )}
              <div className="flex justify-start">
                <Quote className="text-gray-400" />
              </div>
              <div className="text-sm text-gray-800 leading-5 whitespace-pre-wrap">{modification.requestMessage}</div>
              <div className="flex justify-end">
                <Quote className="text-gray-400 rotate-180" />
              </div>
            </div>

            <div className="flex justify-between py-1">
              <div className="flex gap-2 items-center">
                <div className={`flex items-center justify-center text-white text-xs rounded-full h-[22px] px-3 ${getStatusClass(modification.status)}`}>
                  {translateStatus(modification.status)}
                </div>
                {modification?.opinion && [ROLES.TRANSPORTER, ROLES.ADMIN].includes(user.role) && (
                  <div className="flex items-center justify-center text-white text-xs rounded-full h-[22px] w-[22px] bg-[#3D5B85]">
                    <Thumbs className={`text-white h-3 w-3 ${modification.opinion === "false" && "rotate-180"}`} />
                  </div>
                )}
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center text-blue-600 text-[10px] rounded-full h-[22px] w-[22px] bg-gray-100 border-[1px] border-white shadow-md">
                  {getInitials(modification?.requestUserName)}
                </div>
                <div className="text-xs text-gray-800">
                  {modification?.requestUserName}, {dayjs(modification.createdAt).locale("fr").format("DD/MM/YYYY • HH:mm")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <View
        open={panel.open}
        setOpen={() => setPanel({ open: false })}
        modification={panel.modification}
        getModification={getModification}
        tagsOptions={tagsOptions}
        getTags={getTags}
      />
    </div>
  );
}
