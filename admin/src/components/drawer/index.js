import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { totalNewTickets, totalOpenedTickets, totalClosedTickets, ROLES, colors } from "../../utils";
import MailOpenIcon from "../MailOpenIcon";
import MailCloseIcon from "../MailCloseIcon";
import SuccessIcon from "../SuccessIcon";
import api from "../../services/api";
import Badge from "../Badge";
import plausibleEvent from "../../services/pausible";
import { environment } from "../../config";

const DrawerTab = ({ title, to, onClick, beta }) => {
  if (environment === "production" && beta) return null;
  return (
    <div onClick={onClick} className=" hover:bg-snu-purple-800 hover:shadow-lg block">
      <NavLink to={to} className="block py-3 pl-3 text-base hover:!text-white" activeClassName="block bg-snu-purple-300 py-3 pl-3 font-bold">
        {title}
        {beta ? <Badge className="ml-2" text="bêta" color={colors.yellow} /> : null}
      </NavLink>
    </div>
  );
};

const BlankSeparator = () => (
  <div
    style={{
      height: "1.5rem",
    }}
  />
);

const DrawerTabWithIcons = ({ title, children, to, onClick }) => {
  return (
    <div onClick={onClick} className="hover:bg-snu-purple-800 hover:shadow-lg block">
      <NavLink to={to} className=" py-3 pl-3 text-base block hover:!text-white" activeClassName=" bg-snu-purple-300 py-3 pl-3 font-bold">
        <div>
          <div>{title}</div>
          <div className="flex content-center">{children}</div>
        </div>
      </NavLink>
    </div>
  );
};

function responsible({ user, onClick }) {
  return (
    <>
      <DrawerTab to={`/structure/${user.structureId}`} title="Ma structure" onClick={onClick} />
      <DrawerTab to="/mission" title="Missions" onClick={onClick} />
      <DrawerTab to="/volontaire" title="Volontaires" onClick={onClick} />
    </>
  );
}

function supervisor({ onClick }) {
  return (
    <>
      <DrawerTab to="/structure" title="Structures" onClick={onClick} />
      <DrawerTab to="/mission" title="Missions" onClick={onClick} />
      <DrawerTab to="/user" title="Utilisateurs" onClick={onClick} />
      <DrawerTab to="/volontaire" title="Volontaires" onClick={onClick} />
    </>
  );
}

function admin({ onClick, newTickets, openedTickets, closedTickets, tickets }) {
  return (
    <>
      <DrawerTab to="/structure" title="Structures" onClick={onClick} />
      <DrawerTab to="/mission" title="Missions" onClick={onClick} />
      <DrawerTab to="/user" title="Utilisateurs" onClick={onClick} />
      <DrawerTab to="/volontaire" title="Volontaires" onClick={onClick} />
      <DrawerTab to="/inscription" title="Inscriptions" onClick={onClick} />
      <DrawerTab to="/centre" title="Centres" onClick={onClick} />
      <DrawerTab to="/point-de-rassemblement" title="Points de rassemblement" onClick={onClick} />
      <DrawerTab to="/contenu" title="Contenus" onClick={onClick} />
      <DrawerTab to="/objectifs" title="Objectifs" onClick={onClick} />
      <DrawerTab to="/association" title="Annuaire des associations" onClick={onClick} />
      <DrawerTabWithIcons to="/boite-de-reception" title="Boîte de réception" onClick={onClick}>
        {!tickets ? (
          <div />
        ) : (
          <>
            <div className="flex justify-center content-center rounded-lg w-14 mr-2.5 px-2  bg-rose-500">
              <MailCloseIcon />
              <div>{newTickets}</div>
            </div>
            <div className="flex justify-center content-center rounded-lg w-14 mr-2.5 px-2  bg-amber-400">
              <MailOpenIcon />
              <div>{openedTickets}</div>
            </div>
            <div className="flex justify-center content-center rounded-lg w-14 mr-2.5 px-2  bg-green-500">
              <SuccessIcon />
              <div>{closedTickets}</div>
            </div>
          </>
        )}
      </DrawerTabWithIcons>
    </>
  );
}

function referent({ onClick, newTickets, openedTickets, closedTickets, tickets }) {
  return (
    <>
      <DrawerTab to="/equipe" title="Mon équipe" onClick={onClick} />
      <DrawerTab to="/structure" title="Structures" onClick={onClick} />
      <DrawerTab to="/mission" title="Missions" onClick={onClick} />
      <DrawerTab to="/user" title="Utilisateurs" onClick={onClick} />
      <DrawerTab to="/volontaire" title="Volontaires" onClick={onClick} />
      <DrawerTab to="/inscription" title="Inscriptions" onClick={onClick} />
      <DrawerTab to="/centre" title="Centres" onClick={onClick} />
      <DrawerTab to="/contenu" title="Contenus" onClick={onClick} />
      <DrawerTab to="/association" title="Annuaire des associations" onClick={onClick} />
      <DrawerTabWithIcons to="/boite-de-reception" title="Boîte de réception" onClick={onClick}>
        {!tickets ? (
          <div />
        ) : (
          <>
            <div className="flex justify-center content-center rounded-lg w-14 mr-2.5 px-2  bg-rose-500">
              <MailCloseIcon />
              <div>{newTickets}</div>
            </div>
            <div className="flex justify-center content-center rounded-lg w-14 mr-2.5 px-2  bg-amber-400">
              <MailOpenIcon />
              <div>{openedTickets}</div>
            </div>
            <div className="flex justify-center content-center rounded-lg w-14 mr-2.5 px-2  bg-green-500">
              <SuccessIcon />
              <div>{closedTickets}</div>
            </div>
          </>
        )}
      </DrawerTabWithIcons>
    </>
  );
}

function headCenter({ onClick, user }) {
  return (
    <>
      {user.cohesionCenterId && <DrawerTab to={`/centre/${user.cohesionCenterId}`} title="Mon Centre" onClick={onClick} />}
      <DrawerTab to="/user" title="Utilisateurs" onClick={onClick} />
      <DrawerTab to="/volontaire" title="Volontaires" onClick={onClick} />
      <DrawerTab to="/contenu" title="Contenus" onClick={onClick} />
      <BlankSeparator />
    </>
  );
}

function visitor({ onClick }) {
  return (
    <>
      <BlankSeparator />
    </>
  );
}

const Drawer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.Auth.user);
  const newTickets = useSelector((state) => state.Tickets.new);
  const openedTickets = useSelector((state) => state.Tickets.open);
  const closedTickets = useSelector((state) => state.Tickets.closed);
  const tickets = useSelector((state) => state.Tickets.tickets);
  const [open, setOpen] = useState();
  useEffect(() => {
    setOpen(props.open);
    setIsOpen(props.open);
  }, [props.open]);

  useEffect(() => {
    try {
      let tags = [];
      if (user?.role === ROLES.ADMIN) tags.push(["AGENT_Startup_Support"]);
      else if (user?.role === ROLES.REFERENT_DEPARTMENT) tags.push(["AGENT_Référent_Département", `DEPARTEMENT_${user.department}`]);
      else if (user?.role === ROLES.REFERENT_REGION) tags.push(["AGENT_Référent_Région", `REGION_${user.region}`]);

      const getTickets = async (tags) => {
        const { data } = await api.post(`/zammad-support-center/ticket/search-by-tags?withArticles=true`, { tags });
        props.dispatchTickets(data);
      };
      if (tags.length) getTickets(tags);
    } catch (e) {
      console.log("Oups, une erreur s'est produite.");
    }
  }, []);

  const handleClick = () => {
    if (open) {
      props.onOpen(false);
    }
  };

  if (!user) return <div />;

  return (
    <div className="min-h-screen max-w-[220px] bg-snu-purple-900 text-white fixed z-10 overflow-y-auto bottom-0 top-[56px] pb-4">
      {!isOpen ? (
        <nav open={open} id="drawer" className="text-white text-base font-normal min-h-full">
          <div className="absolute inset-y-0 left-0 transform -translate-x-full lg:block lg:translate-x-0 lg:relative">
            <ul className="divide-y divide-slate-700">
              <DrawerTab to="/dashboard" title="Tableau de bord" onClick={handleClick} />
              {user.role === ROLES.HEAD_CENTER && headCenter({ user, onClick: handleClick })}
              {user.role === ROLES.SUPERVISOR && supervisor({ user, onClick: handleClick })}
              {user.role === ROLES.RESPONSIBLE && responsible({ user, onClick: handleClick })}
              {user.role === ROLES.ADMIN && admin({ onClick: handleClick, newTickets, openedTickets, closedTickets, tickets })}
              {[ROLES.REFERENT_DEPARTMENT, ROLES.REFERENT_REGION].includes(user.role) && referent({ onClick: handleClick, newTickets, openedTickets, closedTickets, tickets })}
              {user.role === ROLES.VISITOR && visitor({ user, onClick: handleClick })}
            </ul>
          </div>
        </nav>
      ) : (
        <nav open={open} id="drawer" className="bg-snu-purple-900 text-white text-base font-normal min-h-full">
          <div>
            <ul className="divide-y divide-slate-700">
              <DrawerTab to="/dashboard" title="Tableau de bord" onClick={handleClick} />
              {user.role === ROLES.HEAD_CENTER && headCenter({ user, onClick: handleClick })}
              {user.role === ROLES.SUPERVISOR && supervisor({ user, onClick: handleClick })}
              {user.role === ROLES.RESPONSIBLE && responsible({ user, onClick: handleClick })}
              {user.role === ROLES.ADMIN && admin({ onClick: handleClick, newTickets, openedTickets, closedTickets, tickets })}
              {[ROLES.REFERENT_DEPARTMENT, ROLES.REFERENT_REGION].includes(user.role) && referent({ onClick: handleClick, newTickets, openedTickets, closedTickets, tickets })}
              {user.role === ROLES.VISITOR && visitor({ user, onClick: handleClick })}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchTickets: (tickets) => {
    dispatch({
      type: "FETCH_TICKETS",
      payload: {
        tickets,
        new: totalNewTickets(tickets),
        open: totalOpenedTickets(tickets),
        closed: totalClosedTickets(tickets),
      },
    });
  },
});

let container = connect(null, mapDispatchToProps)(Drawer);

export default container;
