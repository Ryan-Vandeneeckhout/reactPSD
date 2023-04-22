import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { AuthContextProvider } from "./components/context/AuthContext.js";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimes,
  faAngleUp,
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
  faMusic,
  faBuildingColumns,
  faArrowRightFromBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
// FontAwesome Global Icons Added
library.add(
  fab,
  faBars,
  faAngleUp,
  faPause,
  faPlay,
  faTimes,
  faAngleRight,
  faAngleLeft,
  faMusic,
  faBuildingColumns,
  faArrowRightFromBracket,
  faCircleUser
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
