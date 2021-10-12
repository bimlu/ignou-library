import Container from "@material-ui/core/Container";
import Header from "components/App/Header";
import NotFound from "components/NotFound";
import { Courses } from "pages/Course";
import { Programmes } from "pages/Programme";
import { StudyMaterial } from "pages/StudyMaterial";
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
        <Route exact path={Routes.PROGRAMMES}>
          <Header toggleThemeMode={toggleThemeMode} />
          <Programmes />
        </Route>

        <Route exact path={Routes.COURSES}>
          <Header toggleThemeMode={toggleThemeMode} />
          <Courses />
        </Route>

        <Route exact path={Routes.POSTS}>
          <Header toggleThemeMode={toggleThemeMode} />
          <StudyMaterial />
        </Route>

        <Redirect to={Routes.PROGRAMMES} />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
};

export default AppLayout;
