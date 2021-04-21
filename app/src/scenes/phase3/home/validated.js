import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DownloadAttestationButton from "../../../components/buttons/DownloadAttestationButton";

export default () => {
  const young = useSelector((state) => state.Auth.young) || {};

  const renderStep = () => {
    return (
      <>
        <Hero>
          <div className="content">
            <h1>
              <strong>{young.firstName}</strong>, vous avez validé votre Phase 3 !
            </h1>
            <p>Félicitations, vous êtes allé(e) au bout de votre parcours SNU ! L’équipe du Service Nationale Univerel vous souhaite une belle continuation !</p>
            <Separator />
            <p>
              <strong>Mon engagement prolongé</strong>
              <br />
              Retrouver l'historique de votre mission de phase 3
              <br />
              <Link to="/phase3/valider">Consulter ma mission {">"}</Link>
            </p>
            <p>
              <strong>Attestation de réalisation de Phase 3</strong>
              <br />
              Télécharger votre attestation de réalisation de votre phase 3
              <br />
              <DownloadAttestationButton style={{ color: "#5949d0", textAlign: "left", fontSize: "1rem" }} young={young} uri="3">
                Télécharger mon attestation {">"}
              </DownloadAttestationButton>
            </p>
          </div>
          <div className="thumb" />
        </Hero>
      </>
    );
  };

  return renderStep();
};
const Separator = styled.hr`
  margin: 2.5rem 0;
  height: 1px;
  border-style: none;
  background-color: #e5e7eb;
`;
const Hero = styled.div`
  border-radius: 0.5rem;
  margin: 1rem auto;
  max-width: 80rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .content {
    width: 65%;
    @media (max-width: 768px) {
      width: 100%;
    }
    padding: 60px 30px 60px 50px;
    position: relative;
    background-color: #fff;
    > * {
      position: relative;
      z-index: 2;
    }
  }
  h1 {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    color: #161e2e;
    margin-bottom: 20px;
    font-weight: 500;
    line-height: 1;
  }
  p {
    color: #6b7280;
    font-size: 1.25rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    a {
      font-size: 1rem;
      color: #5949d0;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .thumb {
    min-height: 400px;
    background: url(${require("../../../assets/phase3.jpg")}) no-repeat center;
    background-size: cover;
    flex: 1;
  }
`;
