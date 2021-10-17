import Container from "@material-ui/core/Container";
import Header from "components/App/Header";
import NotFound from "components/NotFound";
import { Programmes } from "pages/Programme";
// import { StudyMaterial } from "pages/StudyMaterial";
import Course from "pages2/Course";
// import { Courses } from "pages/Course";
import Programme from "pages2/Programme";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as Routes from "routes";

/**
 * Main layout of the app, when user is authenticated
 */
const AppLayout = ({ toggleThemeMode }) => {
  return (
    <Container maxWidth="sm">
      <Switch>
        <Route exact path={Routes.HOME}>
          <Header toggleThemeMode={toggleThemeMode} />
          <Programmes />
        </Route>

        <Route exact path={Routes.PROGRAMME}>
          <Header toggleThemeMode={toggleThemeMode} showBackButton={true} />
          <Programme />
        </Route>

        <Route exact path={Routes.COURSE}>
          <Header toggleThemeMode={toggleThemeMode} showBackButton={true} />
          <Course />
        </Route>

        <Redirect to={Routes.HOME} />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
};

export default AppLayout;
