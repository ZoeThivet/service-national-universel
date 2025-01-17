import React, { useState } from "react";
import { Spinner } from "reactstrap";
import { department2region, departmentLookUp } from "snu-lib/region-and-departments";
import InfoIcon from "../../../components/InfoIcon";
import GhostButton from "./GhostButton";

export default function VerifyAddress({ address, zip, city, onSuccess, onFail, disabled = false, isVerified = false, buttonClassName = "", buttonContainerClassName = "" }) {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);

  const getSuggestions = async (text) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?autocomplete=1&q=${text}`, {
        mode: "cors",
        method: "GET",
      });
      const res = await response.json();
      const arr = res.features.filter((e) => e.properties.type !== "municipality");

      setLoading(false);
      if (arr.length > 0) setSuggestion({ ok: true, status: "FOUND", ...arr[0] });
      else setSuggestion({ ok: false, status: "NOT_FOUND" });
    } catch (e) {
      setLoading(false);
    }
  };

  const formatResult = (suggestion) => {
    let depart = suggestion.properties.postcode.substr(0, 2);
    if (["97", "98"].includes(depart)) {
      depart = suggestion.properties.postcode.substr(0, 3);
    }
    if (depart === "20") {
      depart = suggestion.properties.context.substr(0, 2);
      if (!["2A", "2B"].includes(depart)) depart = "2B";
    }

    return {
      address: suggestion.properties.name,
      zip: suggestion.properties.postcode,
      city: suggestion.properties.city,
      department: departmentLookUp[depart],
      departmentNumber: depart,
      location: { lon: suggestion.geometry.coordinates[0], lat: suggestion.geometry.coordinates[1] },
      region: department2region[departmentLookUp[depart]],
      cityCode: suggestion.properties.citycode,
    };
  };

  if (suggestion) {
    if (!suggestion.ok) {
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-500 text-center text-sm">L&apos;adresse saisie n&apos;a pas été trouvée.</div>
          <GhostButton name="Réessayer" onClick={() => setSuggestion(null)} />
        </div>
      );
    }
    return (
      <div className="w-full">
        <b className="mb-8">Est-ce que c&apos;est la bonne adresse ?</b>
        <p>{suggestion.properties.name}</p>
        <p>{`${suggestion.properties.postcode}, ${suggestion.properties.city}`}</p>
        <div className="grid grid-cols-2 gap-4">
          <GhostButton
            onClick={() => {
              onFail(formatResult(suggestion));
              setSuggestion(null);
            }}
            name="Non"
          />
          <GhostButton
            onClick={() => {
              onSuccess(formatResult(suggestion));
              setSuggestion(null);
            }}
            name="Oui"
          />
        </div>
      </div>
    );
  }

  if (isVerified) return <Message>L&apos;adresse a été vérifiée</Message>;

  return (
    <>
      <div className={buttonContainerClassName}>
        <GhostButton
          className={buttonClassName}
          disabled={disabled}
          name={
            <div>
              {loading && <Spinner size="sm" key={"verifaddress"} style={{ borderWidth: "0.1em", marginRight: "0.5rem" }} />}
              Vériﬁer mon adresse
            </div>
          }
          onClick={() => {
            if (disabled || !address || !zip || !city || loading) return;
            getSuggestions(`${address}, ${city} ${zip}`);
          }}
        />
      </div>
      {(!address || !zip || !city) && <Message>Pour vérifier votre adresse vous devez remplir les champs adresse de résidence, code postale et ville.</Message>}
    </>
  );
}

const Message = ({ children, className = "" }) => (
  <div className={`flex items-center rounded-md p-3 text-["#32257f"] bg-[#edecfc] ${className}`}>
    <InfoIcon className="mt-1" color="#32257f" />
    <div className="ml-2">{children}</div>
  </div>
);
