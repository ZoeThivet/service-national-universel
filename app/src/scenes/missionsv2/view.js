import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import { toastr } from "react-redux-toastr";
import { useSelector } from "react-redux";

import api from "../../services/api";
import { translate, formatStringDateTimezoneUTC, htmlCleaner } from "../../utils";
import SocialIcons from "../../components/SocialIcons";
import ApplyModal from "./components/ApplyModal";
import ApplyDoneModal from "./components/ApplyDoneModal";
import Loader from "../../components/Loader";
import Badge from "../../components/Badge";
import DomainThumb from "../../components/DomainThumb";
import DayTile from "../../components/DayTile";
import DoubleDayTile from "../../components/DoubleDayTile";
import plausibleEvent from "../../services/plausible";

export default function View(props) {
  const [mission, setMission] = useState();
  console.log("✍️ ~ mission", mission);
  const [modal, setModal] = useState(null);
  const [disabledApplication, setDisabledApplication] = useState(false);
  const young = useSelector((state) => state.Auth.young);

  const getMission = async () => {
    const id = props.match && props.match.params && props.match.params.id;
    if (!id) return setMission(null);
    const { data } = await api.get(`/mission/${id}`);
    return setMission(data);
  };
  useEffect(() => {
    getMission();
  }, []);

  useEffect(() => {
    function getDiffYear(a, b) {
      const from = new Date(a);
      from.setHours(0, 0, 0, 0);
      const to = new Date(b);
      to.setHours(0, 0, 0, 0);
      const diffTime = Math.abs(to - from);
      const res = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
      if (!res || isNaN(res)) return "?";
      return res;
    }

    // si c'est une préparation militaire
    // on vérifie que le vonlontaire aura plus de 16 ans au début de la mission
    if (mission?.isMilitaryPreparation === "true") {
      const ageAtStart = getDiffYear(mission.startAt, young.birthdateAt);
      setDisabledApplication(ageAtStart < 16);
    }
  }, [mission]);

  const getTags = () => {
    const tags = [];
    mission.city && tags.push(mission.city + (mission.zip ? ` - ${mission.zip}` : ""));
    // tags.push(mission.remote ? "À distance" : "En présentiel");
    mission.domains.forEach((d) => tags.push(translate(d)));
    return tags;
  };

  if (mission === undefined) return <Loader />;

  return (
    <div className="bg-white mx-4 pb-12 my-4 rounded-xl">
      {/* BEGIN HEADER */}
      <div className="flex justify-between p-8 border-b-[1px] border-gray-100">
        <div className="flex">
          {/* icon */}
          <div className="flex items-center">
            <DomainThumb domain={mission.domains[0]} size="3rem" />
          </div>

          {/* infos mission */}
          <div className="flex flex-col">
            <div className="space-y-2">
              <div className="text-gray-500 text-xs uppercase">{mission.structureName}</div>
              <div className="text-gray-900 font-bold text-base">{mission.name}</div>
              <div className="flex space-x-2">
                {getTags()?.map((e, i) => (
                  <div key={i} className="flex justify-center items-center text-gray-600 border-gray-200 border-[1px] rounded-full px-4 py-1 text-xs">
                    {e}
                  </div>
                ))}
                {mission.isMilitaryPreparation === "true" ? (
                  <div className="flex justify-center items-center bg-blue-900 text-white border-gray-200 border-[1px] rounded-full px-4 py-1 text-xs">Préparation militaire</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-xs text-gray-700">
            {mission.application ? (
              <Link to={`/candidature`}>Voir la candidature</Link>
            ) : (
              <ApplyButton
                applied={mission.application}
                placesLeft={mission.placesLeft}
                placesTotal={mission.placesTotal}
                setModal={setModal}
                disabledApplication={disabledApplication}
              />
            )}
          </div>
        </div>
      </div>
      {/* END HEADER */}

      <Box>
        <Row>
          <Col md={6} style={{ borderRight: "2px solid #f4f5f7" }}>
            <Wrapper>
              <Legend>La mission en quelques mots</Legend>
              <Detail title="Format" content={translate(mission.format)} />
              <Detail title="Objectifs" content={mission.description} />
              <Detail title="Actions" content={mission.actions} />
              <Detail title="Contraintes" content={mission.contraintes} />
              <InfoStructure title="à propos de la structure" structure={mission.structureId} />
            </Wrapper>
          </Col>
          <Col md={6}>
            <Wrapper>
              <Legend>
                <DoubleDayTile date1={mission.startAt} date2={mission.endAt} />
                {mission.startAt && mission.endAt
                  ? `Du ${formatStringDateTimezoneUTC(mission.startAt)} au ${formatStringDateTimezoneUTC(mission.endAt)}`
                  : "Aucune date renseignée"}
              </Legend>
              <Detail title="Fréquence" content={mission.frequence} />
              {mission.duration ? <Detail title="Durée estimée" content={`${mission.duration} heure(s)`} /> : null}
              <Detail title="Période pour réaliser la mission" content={mission.period} />
              <Detail title="Lieu" content={[mission.address, mission.zip, mission.city, mission.department]} />
            </Wrapper>
          </Col>
        </Row>
      </Box>
      <Footer>
        <ApplyButton
          applied={mission.application}
          placesLeft={mission.placesLeft}
          placesTotal={mission.placesTotal}
          setModal={setModal}
          disabledApplication={disabledApplication}
        />
      </Footer>
    </div>
  );
}

const ApplyButton = ({ applied, placesLeft, placesTotal, setModal, disabledApplication }) => {
  if (applied)
    return (
      <div className="flex flex-col items-center">
        <Link to="/candidature">
          <div className="px-5 py-2 bg-[#31c48d] text-white rounded-full shadow-md hover:cursor-pointer hover:scale-105 text-center">Voir&nbsp;la&nbsp;candidature</div>
        </Link>
        <p className="button-subtitle">Vous avez déjà candidaté à cette mission</p>
      </div>
    );

  if (disabledApplication)
    return (
      <div className="flex flex-col items-center">
        <div className="px-5 py-2 bg-coolGray-300 text-coolGray-500 rounded-full shadow-md hover:cursor-not-allowed text-center">Candidater</div>
        <p className="button-subtitle">
          Vous ne pouvez pas candidater à cette Préparation Militaire car vous n&apos;aurez pas 16 ans révolus au 1er jour de la mission.
          <br />
          Pour en savoir plus{" "}
          <a
            className="underline hover:underline hover:text-snu-purple-300"
            href="https://support.snu.gouv.fr/base-de-connaissance/je-televerse-mes-justificatifs-pour-ma-preparation-militaire"
            target="_blank"
            rel="noreferrer">
            cliquez ici
          </a>
        </p>
      </div>
    );
  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="group flex gap-1 rounded-[10px] border-[1px] py-2.5 px-2 w-52 items-center border-blue-600 hover:border-[#4881FF] bg-blue-600 hover:bg-[#4881FF] cursor-pointer"
        onClick={() => {
          setModal("APPLY");
          plausibleEvent("Phase2/CTA missions - Candidater");
        }}>
        {/* <HiOutlineSearch className="text-blue-300" /> */}
        <div className="text-white text-sm text-center flex-1">Candidater</div>
      </div>
      <div className="text-gray-500 text-xs">
        Place(s) disponible(s)&nbsp;:&nbsp;{placesLeft}/{placesTotal}
      </div>
    </div>
  );
};

const Detail = ({ title, content }) => {
  const [value] = useState((Array.isArray(content) && content) || [content]);
  return content && content.length ? (
    <div className="detail">
      <div className="detail-title">{title}</div>
      {value.map((e, i) => (
        <div key={i} className="detail-text" dangerouslySetInnerHTML={{ __html: htmlCleaner(translate(e)) }} />
      ))}
    </div>
  ) : (
    <div />
  );
};

const InfoStructure = ({ title, structure }) => {
  const [value, setValue] = useState();
  const [expandNote, setExpandNote] = useState(false);
  useEffect(() => {
    (async () => {
      const { ok, data, code } = await api.get(`/structure/${structure}`);
      if (!ok) toastr.error("Oups, une erreur est survenue lors de la récupération de la structure", translate(code));
      else setValue(data.description);
      return;
    })();
  }, []);
  if (!value) return <div />;

  const preview = value.substring(0, 200);
  const rest = value.substring(200);

  const toggleNote = () => {
    setExpandNote(!expandNote);
  };

  return value ? (
    <div className="detail">
      <div className="detail-title">{title}</div>
      <div className="detail-text">
        {rest ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: preview + (expandNote ? rest : " ...") + " " }} />
            <div className="see-more" onClick={toggleNote}>
              {expandNote ? "  VOIR MOINS" : "  VOIR PLUS"}
            </div>
          </>
        ) : (
          preview
        )}
      </div>
    </div>
  ) : (
    <div />
  );
};

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  p {
    margin-top: 1rem;
    text-align: center;
    color: #6b7280;
    font-size: 0.75rem;
  }
`;

const Legend = styled.div`
  color: rgb(38, 42, 62);
  margin-bottom: 20px;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  font-weight: 500;
`;
const Box = styled.div`
  width: ${(props) => props.width || 100}%;
  height: 100%;
  background-color: #fff;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.05));
  margin-bottom: 33px;
  border-radius: 8px;
`;

const Heading = styled(Container)`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  h1 {
    color: #161e2e;
    font-size: 3rem;
    font-weight: 700;
    padding-right: 3rem;
    @media (max-width: 768px) {
      padding-right: 1rem;
      font-size: 1.1rem;
    }
  }
  p {
    &.title {
      color: #42389d;
      font-size: 1rem;
      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
      font-weight: 700;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    &.button-subtitle {
      margin-top: 1rem;
      text-align: center;
      color: #6b7280;
      font-size: 0.75rem;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
`;

const Wrapper = styled.div`
  padding: 3rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  .detail {
    font-size: 1rem;
    text-align: left;
    margin-top: 2rem;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
    &-title {
      font-size: 0.8rem;
      margin-right: 1rem;
      color: #798399;
      text-transform: uppercase;
    }
    &-text {
      color: #242526;
    }
    .see-more {
      font-style: normal;
      color: #696974;
      margin-bottom: 0.8rem;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: underline;
      :hover {
        color: #5145cd;
      }
    }
  }
`;

const HeadCard = styled.div`
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
  min-height: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 0.5rem;
  }
  p {
    margin: 0;
    color: #929292;
    span {
      color: #242526;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 0.3rem 0;
    }
  }
  .social-link {
    color: #aaa;
    border: solid 1px #aaa;
    padding: 5px 7px 7px 7px;
    margin: 5px;
    border-radius: 5px;
    :hover {
      color: #5145cd;
    }
  }
  .social-icons-container {
    margin-left: auto;
    @media (max-width: 768px) {
      margin: 0.5rem 0;
    }
  }
`;