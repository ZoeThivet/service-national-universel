import React from "react";
import useDevice from "../../../hooks/useDevice";
import save from "../../../assets/save.svg";

const index = {
  PRESENTATION: "1",
  VERIFICATION: "2",
  CONSENTEMENT: "3",
  PRESENTATION_PARENT2: "1",
  VERIFICATION_PARENT2: "2",
  CONSENTEMENT_PARENT2: "3",
};

const wording = {
  PRESENTATION: "Présentation",
  VERIFICATION: "Vérification des informations renseignées",
  CONSENTEMENT: "Mon consentement",
  PRESENTATION_PARENT2: "Présentation",
  VERIFICATION_PARENT2: "Vérification des informations renseignées",
  CONSENTEMENT_PARENT2: "Mon consentement",
};

const next = {
  PRESENTATION: "Vérification des informations renseignées",
  VERIFICATION: "Mon consentement",
  CONSENTEMENT: null,
  PRESENTATION_PARENT2: "Vérification des informations renseignées",
  VERIFICATION_PARENT2: "Mon consentement",
  CONSENTEMENT_PARENT2: null,
};

const Navbar = ({ step, onSave }) => {
  const desktop = useDevice() === "desktop";
  return (
    <div className="bg-[#f9f6f2] px-3 py-3  text-[#161616] w-full">
      <div className={`flex flex-col justify-center ${desktop && "w-1/2 mx-auto my-0"}`}>
        <div className="flex justify-between">
          <div>
            <div className="text-sm">Étape {index[step]} sur 3</div>
            <div className="text-lg font-bold mt-2">{wording[step]}</div>
          </div>
          {onSave && <img src={save} onClick={onSave} className="cursor-pointer" alt="save" />}
        </div>

        <div className="flex space-x-2 w-full mt-2">
          <div className="basis-1/3 bg-[#000091] h-2"></div>
          <div className={`basis-1/3  h-2 ${step !== "PRESENTATION" && step !== "PRESENTATION_PARENT2" ? "bg-[#000091]" : "bg-[#C6C6FB]"}`}></div>
          <div className={`basis-1/3  h-2 ${["CONSENTEMENT", "CONSENTEMENT_PARENT2", "DOCUMENTS"].includes(step) ? "bg-[#000091]" : "bg-[#C6C6FB]"}`}></div>
        </div>
        {desktop && (
          <div className="flex space-x-1 text-xs mt-2 text-[#666666]">
            <div className="font-bold">{["PRESENTATION", "PRESENTATION_PARENT2", "VERIFICATION", "VERIFICATION_PARENT2"].includes(step) && "Étape suivante:"}</div>
            <div>{next[step]}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
