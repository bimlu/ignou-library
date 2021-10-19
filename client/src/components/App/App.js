import { useQuery } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { COLLEGE_TREE_ITEM_LIMIT } from "constants/DataLimit";
import { GET_COLLEGES_WITH_PROGRAMMES_COURSES } from "graphql/college";
import { useThemeToggler } from "hooks/useThemeToggler";
import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useStore } from "store";
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

  const [, dispatch] = useStore();

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

  // useEffect(() => {
  //   collegesData && dispatch({ type: SET_DATA_TREE, payload: collegesData.getColleges.colleges });
  // }, [collegesData]);

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
