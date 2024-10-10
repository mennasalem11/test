import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./Apps/App";
// import Login from "./Login";
// import List from "./ListsAndKeys";
// import { List2 } from "./ListsAndKeys";
// import ProductsList from "./Example/ProductsList";
// import ProductsListAPI from "./API_Project/ProductsListAPI";
// -----------
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import AppECommerce from "./Apps/AppECommerce";
// -----------
import AppCrud from "./Apps/AppCrud";
// -----------
// import AppContext from "./Apps/AppContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      {/* <AppECommerce /> */}
      {/* ------------------- */}
      <AppCrud />
      {/* ------------------- */}
      {/* <AppContext/> */}
      
      {/* ------------------- */}
    </BrowserRouter>
  </>
);
