import React from "react";
import { useSelector } from "react-redux";

import { YOUNG_STATUS } from "../../utils";
import WaitingValidation from "./waitingValidation";
import WaitingCorrection from "./waitingCorrection";
import Validated from "./validated";
import Refused from "./refused";

import Cohort2019 from "./2019";
import Cohort2020 from "./2020";

export default () => {
  const young = useSelector((state) => state.Auth.young) || {};

  const renderStep = () => {
    if (young.cohort === "2019") return <Cohort2019 />;
    if (young.cohort === "2020") return <Cohort2020 />;
    if (young.status === YOUNG_STATUS.WAITING_CORRECTION) return <WaitingCorrection />;
    if (young.status === YOUNG_STATUS.WAITING_VALIDATION) return <WaitingValidation />;
    if (young.status === YOUNG_STATUS.VALIDATED) return <Validated />;
    if (young.status === YOUNG_STATUS.REFUSED) return <Refused />;
    return <div />;
  };

  return renderStep();
};
