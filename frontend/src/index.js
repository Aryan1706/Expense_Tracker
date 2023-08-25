import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

/*
package.json
,
  "devDependencies": {
    "@babel/preset-env": "^7.21.4"
  }


  web-vitals k upper paste krna hai ye
  "tls-test": "https://tls-test.npmjs.com/tls-test-1.0.0.tgz",
*/
