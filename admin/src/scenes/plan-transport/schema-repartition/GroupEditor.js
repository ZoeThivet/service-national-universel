import React, { useEffect, useState } from "react";
import { GROUPSTEPS } from "../util";
import GroupCreator from "./group/GroupCreator";
import { toastr } from "react-redux-toastr";
import { capture } from "../../../sentry";
import api from "../../../services/api";
import GroupModification from "./group/GroupModification";
import GroupConfirmDelete from "./group/GroupConfirmDelete";
import GroupUpdateYoungCounts from "./group/GroupUpdateYoungCounts";

export default function GroupEditor({ group, className = "", onChange }) {
  const [step, setStep] = useState(group._id ? GROUPSTEPS.MODIFICATION : GROUPSTEPS.CREATION);

  let oldGroup = null;

  useEffect(() => {
    if (oldGroup === null || group === null || oldGroup._id !== group._id) {
      setStep(group && group._id ? GROUPSTEPS.MODIFICATION : GROUPSTEPS.CREATION);
    }
  }, [group]);

  function onChangeStep(newStep) {
    setStep(newStep);

    if (newStep === GROUPSTEPS.CANCEL) {
      onChange(null);
    }
  }

  async function onCreate(group, nextStep) {
    if (group === null) {
      onChange && onChange(null);
    } else {
      try {
        let changedGroup = null;
        const result = await api.post("/schema-de-repartition", group);
        if (result.ok) {
          toastr.success("Le groupe a été créé.");
          changedGroup = result.data;
        } else {
          toastr.error("Nous n'avons pas pu créer ce groupe. Veuillez réessaye dans quelques instants.");
          return;
        }
        if (nextStep) {
          setStep(nextStep);
          onChange && onChange(changedGroup);
        } else {
          onChange && onChange(null);
        }
      } catch (err) {
        capture(err);
        toastr.error("Nous n'avons pas pu créer ce groupe. Veuillez réessaye dans quelques instants.");
      }
    }
  }

  async function onDelete(group) {
    try {
      const result = await api.remove("/schema-de-repartition/" + group._id);
      if (result.ok) {
        toastr.success("Le groupe a été supprimé.");
        onChange && onChange(null, true);
      } else {
        toastr.error("Nous n'avons pas pu supprimer ce groupe. Veuillez réessayer dans quelques instants.");
      }
    } catch (err) {
      capture(err);
      toastr.error("Nous n'avons pas pu supprimer ce groupe. Veuillez réessayer dans quelques instants.");
    }
  }

  async function onUpdate(group) {
    try {
      let changedGroup = null;
      const result = await api.put("/schema-de-repartition/" + group._id, group);
      if (result.ok) {
        toastr.success("Vos modifications ont été enregistrées.");
        changedGroup = result.data;
      } else {
        toastr.error("Nous n'avons pas pu enregistrer vos modifications. Veuillez réessaye dans quelques instants.");
        return;
      }

      onChange && onChange(changedGroup);
    } catch (err) {
      capture(err);
      toastr.error("Nous n'avons pas pu enregistrer vos modifications. Veuillez réessaye dans quelques instants.");
    }
  }

  switch (step) {
    case GROUPSTEPS.CREATION:
      return <GroupCreator className={className} group={group} onCreate={onCreate} onChangeStep={onChangeStep} />;
    case GROUPSTEPS.MODIFICATION:
      return <GroupModification className={className} group={group} onChangeStep={onChangeStep} />;
    case GROUPSTEPS.CONFIRM_DELETE_GROUP:
      return <GroupConfirmDelete className={className} group={group} onChangeStep={onChangeStep} onDelete={onDelete} />;
    case GROUPSTEPS.YOUNG_COUNTS:
      return <GroupUpdateYoungCounts className={className} group={group} onChangeStep={onChangeStep} onChange={onUpdate} />;
    default:
      return <div>TODO STEP: {step}</div>;
  }
}