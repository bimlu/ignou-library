import { useQuery } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Loading } from "components/Loading";
import { ASSIGNMENT_TREE_ITEM_LIMIT } from "constants/DataLimit";
import { GET_ASSIGNMENT_TREE } from "graphql/programme";
import { useThemeToggler } from "hooks/useThemeToggler";
import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useStore } from "store";
import { SET_DATA_TREE } from "store/datatree";
import AppLayout from "./AppLayout";
import BackToTop from "./Header/BackToTop";
import ScrollToTop from "./ScrollToTop";

/**
 * Root component of the app
 */
const App = () => {
  const [themeMode, toggleThemeMode] = useThemeToggler();
  const lightTheme = useMemo(
    () =>
      createTheme({
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
      createTheme({
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

  const [{ datatree }, dispatch] = useStore();
  const { data, loading, error } = useQuery(GET_ASSIGNMENT_TREE, {
    variables: {
      skip: 0,
      limit: ASSIGNMENT_TREE_ITEM_LIMIT,
    },
  });

  useEffect(() => {
    data && dispatch({ type: SET_DATA_TREE, payload: data.getAssignmentTree.programmes });
  }, [data]);

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

  // console.log(data)

  if (loading || !datatree.programmes) {
    return <Loading top="xl" />;
  }

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      <Router>
        <ScrollToTop>
          <AppLayout toggleThemeMode={toggleThemeMode} />
        </ScrollToTop>
        <BackToTop />
      </Router>
    </ThemeProvider>
  );
};

export default App;
