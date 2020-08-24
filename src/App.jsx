import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Modal from "react-modal";
import { faArrowLeft, faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
Modal.setAppElement("#root");
library.add(faArrowLeft, faArrowRight, faBars, faTimes);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RecoilRoot>
          <Pages />
        </RecoilRoot>
      </Router>
    </>
  );
};

render(<App />, document.querySelector("#root"));
