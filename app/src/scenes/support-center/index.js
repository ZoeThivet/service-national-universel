import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import styled from "styled-components";

import { Hero, HeroContainer, Separator } from "../../components/Content";

//! This component isn't finished.

export default () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8283/young", {
          method: "GET",
          mode: "cors",
          headers: {
            "Accept": "application/json"
          }
        });
        if (!response.ok) return console.log('Request failed', response);
        const data = await response.json();
        console.log(data);
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, []);

  return (
    <HeroContainer>
      <Container>
        <section className="help-section">
          <h2>Besoin d'aide ?</h2>
          <p style={{ color: "#6B7280", }}>Vous rencontrez un problème technique ou souhaitez en savoir plus sur les phases de votre parcours volontaire ? N'hésitez pas à consulter notre base de connaissance !</p>
          <LinkButton href="https://support.selego.co/help/fr-fr" target="_blank">
            Base de connaissance
          </LinkButton>
        </section>
        <Card>
          <h4 style={{ marginLeft: "0.5rem" }}>
            Quelques articles pour vous aider :
          </h4>
          <div className="division">
            <div className="block">
              <section>
                <h5>{articles?.[49]?.title}</h5>
                <p>Depuis l'onglet "Mission d'intérêt général", cliquez sur la rubrique "Trouver une mission"...</p>
              </section>
              <a className="block-link" href="https://support.selego.co/help/fr-fr/13-phase-2-mission-d-interet-general/33-je-cherche-une-mission-mig" target="_blank">Lire la suite</a>
            </div>
            <div className="block">
              <section>
                <h5>{articles?.[42]?.title}</h5>
                <p>Connectez vous à votre espace volontaire, accédez à "Mon profil"...</p>
              </section>
              <a className="block-link" href="https://support.selego.co/help/fr-fr/10-mon-compte/51-je-modifie-mon-identifiant-email" target="_blank">Lire la suite</a>
            </div>
            <div className="block">
              <section>
                <h5>{articles?.[41]?.title}</h5>
                <p>Les missions réalisées correspondent aux missions que vous avez déjà effectuées. En fonction du statut...</p>
              </section>
              <a className="block-link" href="https://support.selego.co/help/fr-fr/13-phase-2-mission-d-interet-general/38-je-consulte-mes-missions-realisees" target="_blank">Lire la suite</a>
            </div>
          </div>
        </Card>
      </Container>
    </HeroContainer>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .help-section {
    text-align: center;
    max-width: 600px;
    margin: 0 20px;
  }
`;

const LinkButton = styled.a`
  background-color: #5245cc;
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  transition: opacity 0.3s;
  :hover {
    color: #fff;
    background: #463bad;
  }
`;

const Card = styled.div`
  margin-top: 0.5rem;
  padding: 3rem;
  .division {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    margin: 0.5rem;
    height: 170px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
  }
  .block-link {

  }

  @media (min-width: 1024px) {
    .division {
      flex-direction: row;
    }
    .block {
      height: auto;
      width: 240px;
    }
  }

`
