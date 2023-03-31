import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import SignIn from "@pages/SignIn";
import { GlobalStyle } from "@styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
);
