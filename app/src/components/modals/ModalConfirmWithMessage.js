import React, { useState } from "react";
import { Modal } from "reactstrap";

import { ModalContainer, Content, Footer, Header } from "./Modal";
import ModalButton from "../buttons/ModalButton";
import CloseSvg from "../../assets/Close";

export default function ModalConfirmWithMessage({ isOpen, topTitle = "alerte", title, message, onChange, onConfirm, placeholder = "Votre message..." }) {
  const [messageTextArea, setMessageTextArea] = useState();
  const [sending, setSending] = useState(false);

  const submit = async () => {
    setSending(true);
    onConfirm(messageTextArea);
  };

  return (
    <Modal centered isOpen={isOpen} toggle={onChange}>
      <ModalContainer>
        <CloseSvg className="close-icon" height={10} width={10} onClick={onChange} />
        <Header>{topTitle}</Header>
        <Content>
          <h1>{title}</h1>
          <p>{message}</p>
          <textarea placeholder={placeholder} rows="15" value={messageTextArea} onChange={(e) => setMessageTextArea(e.target.value)} />
        </Content>
        <Footer>
          <ModalButton loading={sending} disabled={sending || !messageTextArea} onClick={submit} primary>
            Confirmer
          </ModalButton>
          <ModalButton disabled={sending} onClick={onChange}>
            Annuler
          </ModalButton>
        </Footer>
      </ModalContainer>
    </Modal>
  );
}
