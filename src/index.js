import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persist } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
