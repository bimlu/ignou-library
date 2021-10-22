import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useThemeToggler } from "hooks/useThemeToggler";
import React, { useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./AppLayout";
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
