import { createStore } from "redux";

import "./App.css";

function App() {
  const defaultState = {
    welcome: "Hello",
    otherState: "other...",
  };
  const greeting = (state = defaultState, action) => {
    switch (action.type) {
      case "GREET_NAME":
        return { ...state, welcome: `Hello ${action.name}` };
      case "GREET_WORLD":
        return { ...state, welcome: "Hello World" };
      default:
        return state;
    }
  };
  const store = createStore(greeting);
  console.log(store, store.getState());

  const name = "Holiday";
  store.dispatch({ type: "GREET_NAME", name });
  console.log(store.getState());

  store.dispatch({ type: "GREET_NAME", name: "Lucky" });
  console.log(store.getState());

  return <div className="App">App</div>;
}

export default App;
