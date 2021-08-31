import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { HeroContainer, Hero, Content } from "../../components/Content";
import api from "../../services/api";

export default () => {
  const young = useSelector((state) => state.Auth.young);

  const [referentManagerPhase2, setReferentManagerPhase2] = useState();
  useEffect(() => {
    (async () => {
      const { ok, data } = await api.get(`/referent/manager_phase2/${young.department}`);
      if (ok) return setReferentManagerPhase2(data);
    })();
  }, []);
  const renderStep = () => {
    return (
      <>
        <HeroContainer>
          <Hero>
            <div className="content">
              <h1>
                Réalisez vos <strong>84 heures de mission d'intérêt général</strong>
              </h1>
              <p>
                Partez à la découverte de l'engagement en réalisant 84 heures de mission d'intérêt général, au sein d'une ou plusieurs structures, en contribuant à leurs activités
                concrètes !
              </p>
              <p>A vous de jouez : candidatez directement sur des missions parmi celles proposées dans cet espace !</p>
              <Separator />
              <p>
                <strong>Préférences de missions</strong>
                <br />
                Ces choix permettront à l'administration de vous proposer des missions en cohérence avec vos motivations.
                <br />
                <Link to="/preferences">Renseigner mes préférences de missions {">"}</Link>
              </p>
              <p>
                <strong>Vos missions d'intérêt général</strong>
                <br />
                Consulter des milliers de missions disponibles pour la réalisation de votre phase 2, candidatez-y, classez vos choix et suivez vos candidatures
                <br />
                <Link to="/mission">Trouver une mission {">"}</Link>
              </p>
            </div>
            <div className="thumb" />
          </Hero>
        </HeroContainer>
        {referentManagerPhase2 ? (
          <HeroContainer>
            <Hero>
              <Content style={{ width: "100%" }}>
                <h2>Contactez votre référent pour plus d’informations</h2>
                {referentManagerPhase2?.firstName} {referentManagerPhase2?.lastName} -{" "}
                <StyledA href={`mailto:${referentManagerPhase2?.email}`}>{referentManagerPhase2?.email}</StyledA>
              </Content>
            </Hero>
          </HeroContainer>
        ) : null}
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
const StyledA = styled.a`
  font-size: 1rem;
  color: #5145cd;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
