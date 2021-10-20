import { createStore } from "redux";

import "./App.css";

function App() {
  const defaultState = {
    welcome: "Hello",
    otherState: "other...",
  };
  const greeting = (state = defaultState, action) => {
    switch (action.type) {
      case "GREET_ME":
        return { ...state, welcome: "Hello Holiday" };
      case "GREET_WORLD":
        return { ...state, welcome: "Hello World" };
      default:
        return state;
    }
  };
  const store = createStore(greeting);
  console.log(store, store.getState());

  store.dispatch({ type: "GREET_WORLD" });
  console.log(store.getState());

  return <div className="App">App</div>;
}

export default App;
