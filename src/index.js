import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import { SignUpModal } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  // PRAVIM JOS JEDNU GRANU STATE-A
  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => {
          setUseDarkTheme(true);
        }}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => {
          setUseDarkTheme(false);
        }}
      >
        Default Theme
      </button>
      <div
        style={{
          backgroundColor: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,

          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* PROSLEDJUJEM MODALU, POMENUTI STATE I SET STATE FUNKCIJU */}
        <SignUpModal
          modalIsShown={modalIsShown}
          setModalIsShown={setModalIsShown}
        />
        {/* A OVDE DODAJEM DUGME KOJE TREBA DA PRIKAZE MODAL KADA KLIKNEM NA NJEGA */}
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => {
            setModalIsShown(true);
          }}
        >
          Show Modal
        </button>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
