import './polyfill'
import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";



axios.defaults.baseURL = process.env.REACT_APP || "http://localhost:4000";

axios.defaults.baseURL = process.env.REACT_APP;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoralisProvider
    serverUrl="https://hzgmh0bhktiz.usemoralis.com:2053/server"
    appId="TvlbElMKEQ3ozadXOqUAthnvVYSIKgNIIrllWHBi"
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MoralisProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
