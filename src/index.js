import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
const app = document.getElementById("app");
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  app
);
