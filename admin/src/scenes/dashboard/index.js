import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Inscription from "./inscription";

export default () => {
  const [currentTab, setCurrentTab] = useState("inscriptions");

  return (
    <>
      <TabNavigation>
        <TabNavigationList>
          <TabItem onClick={() => setCurrentTab("inscriptions")} isActive={currentTab === "inscriptions"}>
            Inscriptions
          </TabItem>
          <TabItem onClick={() => setCurrentTab("volontaires")} isActive={currentTab === "volontaires"}>
            Volontaires
          </TabItem>
          <TabItem onClick={() => setCurrentTab("organisations")} isActive={currentTab === "organisations"}>
            Organisations
          </TabItem>
          <TabItem onClick={() => setCurrentTab("missions")} isActive={currentTab === "missions"}>
            Missions
          </TabItem>
        </TabNavigationList>
      </TabNavigation>
      <Wrapper>
        {currentTab === "inscriptions" && <Inscription />}
        {currentTab === "volontaires" && <div>Bientôt disponible</div>}
        {currentTab === "organisations" && <div>Bientôt disponible</div>}
        {currentTab === "missions" && <div>Bientôt disponible</div>}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 20px 40px;
`;
const TabNavigation = styled.nav``;
const TabNavigationList = styled.ul`
  padding-left: 30px;
  display: flex;
  list-style-type: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;
const TabItem = styled.li`
  padding: 16px;
  position: relative;
  font-size: 16px;
  color: #979797;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
    color: #5245CC;
    font-weight: bold;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background-color: #5245CC;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  `}
`;
