import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Page from "./Page";

// Actions
export const cskMatchAction = () => ({ type: "CSK_MATCH" });
export const miMatchAction = () => ({ type: "MI_MATCH" });
export const subscribedAction = () => ({ type: "SUBSCRIBE_MATCH" });

const initialValue = {
  result: "subscribe to watch result",
  isSubscribed: false,
};

//Reducer
const iplReducer = (state = initialValue, actions) => {
  switch (actions.type) {
    case "SUBSCRIBE_MATCH":
      return {
        ...state,
        isSubscribed: !state.isSubscribed,
      };
    case "CSK_MATCH":
      return {
        result: "Yellow Wins",
        isSubscribed: true,
      };
    case "MI_MATCH":
      return {
        result: "Blue Lost",
        isSubscribed: true,
      };
    default:
      return {
        ...state,
      };
  }
};

//store
let store = createStore(iplReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(cskMatchAction());
// store.dispatch(miMatchAction());
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Page />
      </Provider>
    </div>
  );
};

export default App;
