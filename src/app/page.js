"use client";
import { Provider } from "react-redux";
import store from "./components/store";
import React from "react";
import App from "./components/App";

function page() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

export default page;
