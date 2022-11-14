import React from "react";
import { Switch } from "react-router-dom";
import { SentryRoute } from "../../sentry";
import Home from "./Home";
import TableauRepartition from "./tableau-repartition";
import SchemaRepartition from "./schema-repartition";

export default function PlanTransport() {
  return (
    <Switch>
      <SentryRoute path="/plan-de-transport/tableau-repartition" component={TableauRepartition} />
      <SentryRoute path="/plan-de-transport/schema-repartition" component={SchemaRepartition} />
      <SentryRoute path="/plan-de-transport" component={Home} />
    </Switch>
  );
}