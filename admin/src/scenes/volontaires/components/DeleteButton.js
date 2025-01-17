import React, { useState } from "react";
import styled from "styled-components";

import { translate } from "../../../utils";
import api from "../../../services/api";
import { toastr } from "react-redux-toastr";
import { useHistory } from "react-router-dom";
import ModalConfirm from "../../../components/modals/ModalConfirm";
import ModalReferentDeleted from "../../../components/modals/ModalReferentDeleted";

export default function DeleteButton({ young }) {
  const history = useHistory();
  const [modal, setModal] = useState({ isOpen: false, onConfirm: null });
  const [modalReferentDeleted, setModalReferentDeleted] = useState({ isOpen: false });

  const onClick = () => {
    setModal({
      isOpen: true,
      onConfirm: () => onConfirm(),
      title: "Êtes-vous sûr(e) de vouloir supprimer ce profil ?",
      message: "Cette action est irréversible.",
    });
  };

  const onReferentDeleted = () => {
    setModalReferentDeleted({
      isOpen: true,
    });
  };

  const onConfirm = async () => {
    try {
      const { ok, code } = await api.put(`/young/${young._id}/soft-delete`);
      if (!ok && code === "OPERATION_UNAUTHORIZED") return toastr.error("Vous n'avez pas les droits pour effectuer cette action");
      if (!ok) return toastr.error("Une erreur s'est produite :", translate(code));
      return onReferentDeleted();
    } catch (e) {
      console.log(e);
      return toastr.error("Oups, une erreur est survenue pendant la suppression du profil :", translate(e.code));
    }
  };
  return (
    <>
      <DeleteBtn onClick={onClick}>Supprimer</DeleteBtn>
      <ModalConfirm
        isOpen={modal?.isOpen}
        title={modal?.title}
        message={modal?.message}
        onCancel={() => setModal({ isOpen: false, onConfirm: null })}
        onConfirm={() => {
          modal?.onConfirm();
          setModal({ isOpen: false, onConfirm: null });
        }}
      />
      <ModalReferentDeleted isOpen={modalReferentDeleted?.isOpen} onConfirm={() => history.push("/volontaire")} />
    </>
  );
}

const DeleteBtn = styled.button`
  background-color: #bd2130;
  border: none;
  border-radius: 5px;
  padding: 7px 30px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  :hover {
    background: #dc3545;
  }
`;
