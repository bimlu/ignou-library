import { useQuery } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Loading } from "components/Loading";
import NotFound from "components/NotFound";
import { COLLEGE_TREE_ITEM_LIMIT } from "constants/DataLimit";
import { GET_COLLEGES_WITH_PROGRAMMES_COURSES } from "graphql/college";
import { GET_AUTH_USER } from "graphql/user";
import { useThemeToggler } from "hooks/useThemeToggler";
import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useStore } from "store";
import { SET_AUTH_USER } from "store/auth";
import { SET_DATA_TREE } from "store/datatree";
import { CLEAR_EXPLORE_ROUTE, CLEAR_PEOPLE_ROUTE } from "store/route";
import AppLayout from "./AppLayout";
import ScrollToTop from "./ScrollToTop";

/**
 * Root component of the app
 */
const App = () => {
  const [themeMode, toggleThemeMode] = useThemeToggler();
  const lightTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "light",
          border: {
            light: "#f5f5f5",
            main: "#e0e0e0",
            dark: "#bdbdbd",
          },
        },
        zIndex: {
          xs: 10,
          sm: 20,
          md: 30,
          lg: 40,
          xl: 50,
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              "*::-webkit-scrollbar": {
                width: "0.55em",
                height: "0.55em",
              },
              "*::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,.4)",
                borderRadius: "2em",
              },
            },
          },
        },
      }),
    [themeMode]
  );

  const darkTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          border: {
            light: "#f5f5f5",
            main: "#e0e0e0",
            dark: "#bdbdbd",
          },
          primary: {
            main: "#64b5f6",
          },
          secondary: {
            main: "#f48fb1",
          },
        },
        zIndex: {
          xs: 10,
          sm: 20,
          md: 30,
          lg: 40,
          xl: 50,
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              "*::-webkit-scrollbar": {
                width: "0.55em",
              },
              "*::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255,255,255,.4)",
                borderRadius: "2em",
              },
            },
          },
        },
      }),
    [themeMode]
  );

  const [{ message, datatree }, dispatch] = useStore();
  const { loading, subscribeToMore, data: authUserData, error } = useQuery(GET_AUTH_USER);
  const { data: collegesData } = useQuery(GET_COLLEGES_WITH_PROGRAMMES_COURSES, {
    variables: {
      skip: 0,
      limit: COLLEGE_TREE_ITEM_LIMIT,
    },
  });

  useEffect(() => {
    dispatch({ type: CLEAR_EXPLORE_ROUTE });
    dispatch({ type: CLEAR_PEOPLE_ROUTE });
  }, []);

  useEffect(() => {
    authUserData && dispatch({ type: SET_AUTH_USER, payload: authUserData.getAuthUser });
  }, [authUserData]);

  useEffect(() => {
    collegesData && dispatch({ type: SET_DATA_TREE, payload: collegesData.getColleges.colleges });
  }, [collegesData]);

  if (error) {
    const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (isDevelopment) {
      console.error(error);
    }
    const devErrorMessage =
      "Sorry, something went wrong. Please open the browser console to view the detailed error message.";
    const prodErrorMessage = "Sorry, something went wrong. We're working on getting this fixed as soon as we can.";
    return <NotFound message={isDevelopment ? devErrorMessage : prodErrorMessage} showHomePageLink={false} />;
  }

  if (loading || !datatree.colleges) {
    return <Loading top="xl" />;
  }

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      <Router>
        <ScrollToTop>
          <AppLayout toggleThemeMode={toggleThemeMode} />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
};

export default App;
