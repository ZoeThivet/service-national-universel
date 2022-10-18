import React, { useContext, useEffect, useState } from "react";
import ConsentDone from "../../../assets/icons/ConsentDone";
import Footer from "../../../components/footerV2";
import { RepresentantsLegauxContext } from "../../../context/RepresentantsLegauxContextProvider";

export default function Done({ parentId }) {
  const { young } = useContext(RepresentantsLegauxContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (young) {
      if (parentId === 1) {
        if (young.parentAllowSNU === "true") {
          setTitle("Merci, nous avons bien enregistré votre consentement.");
          setText("Le dossier de votre enfant a bien été enregistré, celui-ci sera étudié ultérieurement.");
        } else {
          setTitle("Merci, nous avons bien enregistré votre refus.");
          setText("L'inscription de votre enfant a bien été refusée.");
        }
      } else {
        if (young.parent2AllowImageRights === "true") {
          setTitle("Merci, nous avons bien enregistré votre accord de droit à l'image.");
        } else {
          setTitle("Merci, nous avons bien enregistré votre refus du droit à l'image.");
        }
      }
    }
  }, [young]);

  return (
    <>
      <div className="bg-white p-4 text-[#161616]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <ConsentDone />
            <h1 className="text-[22px] font-bold flex-1">{title}</h1>
          </div>
          <hr className="my-2 h-px bg-gray-200 border-0" />
          <p className="text-[#161616] text-base ">{text}</p>
          <p className="text-[#161616] text-base mt-2">Vous pouvez à présent fermer cette page.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
