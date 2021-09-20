import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";

import { Hero, HeroContainer, Separator } from "../../components/Content";
import tickets from "./tickets";
import { fr } from "date-fns/locale";
import API from "../../services/api";

const articles = [
  {
    title: "Je cherche une mission",
    body: `Depuis l'onglet "Mission d'intérêt général", cliquez sur la rubrique...`,
    url: "https://support.selego.co/help/fr-fr/13-phase-2-mission-d-interet-general/33-je-cherche-une-mission-mig",
  },
  {
    title: "Je modifie mon identifiant e-mail",
    body: `Connectez vous à votre espace volontaire, accédez à "Mon profil"...`,
    url: "https://support.selego.co/help/fr-fr/10-mon-compte/51-je-modifie-mon-identifiant-email",
  },
  {
    title: "Je consulte mes missions réalisées",
    body: `Les missions réalisées correspondent aux missions que vous avez déjà...`,
    url: "https://support.selego.co/help/fr-fr/13-phase-2-mission-d-interet-general/38-je-consulte-mes-missions-realisees",
  },
];

export default () => {
  const [userTickets, setUserTickets] = useState(null);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await API.get("/support-center/ticket");
        if (!response.ok) return console.log(response);
        setUserTickets(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <HeroContainer>
      <Container>
        <section className="help-section">
          <h2>Besoin d'aide&nbsp;?</h2>
          <p style={{ color: "#6B7280" }}>
            Vous souhaitez en savoir plus sur les phases de votre parcours volontaire ou sur le fonctionnement de votre espace&nbsp;? N'hésitez pas à consulter notre{" "}
            <strong>base de connaissance</strong>&nbsp;!
            <br /> Vous avez un problème technique ou souhaitez contacter un référent ? Contactez notre service de support.
          </p>
          <div className="buttons">
            <LinkButton href="https://support.selego.co/help/fr-fr/3-volontaire" target="_blank">
              Base de connaissance
            </LinkButton>
            <InternalLink to="/ticket">Contacter quelqu'un</InternalLink>
          </div>
        </section>
        <Card>
          <h4 style={{ marginLeft: "0.5rem" }}>Quelques articles pour vous aider&nbsp;:</h4>
          <div className="division">
            {articles.map((article) => (
              <div className="block" key={article.url}>
                <h6>{article.title}</h6>
                <p>{article.body}</p>
                <p>
                  <a className="block-link" href={article.url} target="_blank">
                    Lire la suite
                  </a>
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Container>
      <List>
        <section className="ticket titles">
          <p>Numéro du ticket</p>
          <p>Sujet</p>
          <p className="ticket-date">Dernière mise à jour</p>
        </section>
        {userTickets?.reverse().map((ticket) => (
          <NavLink to={`/ticket/${ticket.id}`} key={ticket.id} className="ticket">
            <p>{ticket.id}</p>
            <p>{ticket.title}</p>
            <p className="ticket-date">il y a {formatDistanceToNow(new Date(ticket.last_contact_at || ticket.updated_at), { locale: fr })}</p>
          </NavLink>
        ))}
      </List>
    </HeroContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .help-section {
    max-width: 500px;
    text-align: center;
    margin: 0 20px;
  }
  .buttons {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    text-align: center;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0.5rem 1.5rem;
    .help-section {
      text-align: left;
    }
    .buttons {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
`;

const LinkButton = styled.a`
  max-width: 230px;
  margin: 0.3rem;
  background-color: #5245cc;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  transition: opacity 0.3s;
  :hover {
    color: #fff;
    background: #463bad;
  }
`;
const InternalLink = styled(NavLink)`
  max-width: 230px;
  margin: 0.3rem;
  background-color: #5245cc;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
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
  margin-top: 2rem;
  min-width: 330px;
  .division {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .block {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
    margin: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
  }
  .block p,
  .block a {
    margin: 0;
    font-size: 0.9rem;
  }
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const List = styled.div`
  background-color: #fff;
  margin: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  overflow: hidden;
  .ticket {
    color: black;
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    :not(:first-child):hover {
      background-color: #dce2e7 !important;
    }
  }
  .ticket p {
    margin: 0;
  }
  .ticket:nth-child(2n) {
    background-color: #eee;
  }
  .ticket-date {
    justify-self: end;
  }
  .titles {
    font-weight: bold;
  }
`;
