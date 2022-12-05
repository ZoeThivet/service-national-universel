import React from "react";
import PanelV2 from "../../../components/PanelV2";

export default function Panel({ open, setOpen }) {
  const onClose = () => {
    setOpen(false);
  };

  console.log("open 1", open);

  return (
    <PanelV2 title="Demandes de modifications" open={open} onClose={onClose}>
      test
    </PanelV2>
  );
}