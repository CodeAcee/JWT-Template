import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Store from "./store/index.ts";

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({
  store,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider value={{store}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
