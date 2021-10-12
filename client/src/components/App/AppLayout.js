import Container from "@material-ui/core/Container";
import BottomNavigation from "components/App/BottomNavigation";
import Header from "components/App/Header";
import { Spacing } from "components/Layout";
import NotFound from "components/NotFound";
import { College, Colleges, CreateCollege } from "pages/College";
import { Course, Courses, CreateCourse } from "pages/Course";
import Explore from "pages/Explore";
import Home from "pages/Home";
import Messages from "pages/Messages";
import Notifications from "pages/Notifications";
import People from "pages/People";
import { CreatePost, Post } from "pages/Post";
import Profile from "pages/Profile";
import { CreateProgramme, Programme, Programmes } from "pages/Programme";
import { StudyMaterial } from "pages/StudyMaterial";
import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Routes from "routes";

/**
 * Main layout of the app, when user is authenticated
 */
const AppLayout = ({ toggleThemeMode }) => {
  return (
    <>
      <Spacing top="sm" bottom="xl">
        <Container maxWidth="sm">
          <Switch>
            {/* College App List Pages */}
            <Route exact path={Routes.COLLEGES}>
              <Colleges />
            </Route>

            <Route exact path={Routes.PROGRAMMES}>
              <Programmes />
            </Route>

            <Route exact path={Routes.COURSES}>
              <Courses />
            </Route>

            <Route exact path={Routes.POSTS}>
              {/* <Posts /> */}
              <StudyMaterial />
            </Route>
            {/* *************** */}

            {/* College App Detail pages */}
            <Route exact path={Routes.COLLEGE}>
              <College />
            </Route>

            <Route exact path={Routes.PROGRAMME}>
              <Programme />
            </Route>

            <Route exact path={Routes.COURSE}>
              <Course />
            </Route>

            <Route exact path={Routes.POST}>
              <Post />
            </Route>
            {/* *************** */}

            {/* College App Create pages */}
            <Route exact path={Routes.CREATE_COLLEGE}>
              <CreateCollege />
            </Route>

            <Route exact path={Routes.CREATE_PROGRAMME}>
              <CreateProgramme />
            </Route>

            <Route exact path={Routes.CREATE_COURSE}>
              <CreateCourse />
            </Route>

            <Route exact path={Routes.CREATE_POST}>
              <CreatePost />
            </Route>
            {/* **************** */}

            {/* Main App pages*/}
            <Route exact path={Routes.HOME}>
              <Header toggleThemeMode={toggleThemeMode} />
              <Home />
            </Route>

            <Route exact path={Routes.EXPLORE}>
              <Explore />
            </Route>

            <Route exact path={Routes.PEOPLE}>
              <People />
            </Route>

            <Route exact path={Routes.NOTIFICATIONS}>
              <Notifications />
            </Route>

            <Route exact path={Routes.MESSAGES}>
              <Messages />
            </Route>

            <Route exact path={Routes.USER_PROFILE}>
              <Profile />
            </Route>
            {/* ************* */}

            {/* Fallback page */}
            <Route>
              <NotFound />
            </Route>
            {/* ************** */}
          </Switch>
        </Container>
      </Spacing>

      <BottomNavigation />
    </>
  );
};

export default AppLayout;
