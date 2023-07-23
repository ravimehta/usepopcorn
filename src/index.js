import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating size={32} />
    <StarRating
      size={32}
      labels={["Terrible", "Bad", "OK", "Good", "Amazing"]}
    />
  </React.StrictMode>
);
