import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { cskMatchAction, miMatchAction, subscribedAction } from "./App";
const Page = () => {
  const match = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux State Page</h1>
      <p>{match.isSubscribed ? "true" : "false"}</p>
      <h2>{match.result}</h2>
      <button
        disabled={!match.isSubscribed}
        onClick={() => dispatch(cskMatchAction())}
      >
        CSK MATCH
      </button>
      &nbsp;
      <button
        disabled={!match.isSubscribed}
        onClick={() => dispatch(miMatchAction())}
      >
        MI MATCH
      </button>
      &nbsp;
      <button onClick={() => dispatch(subscribedAction())}>
        {!match.isSubscribed ? "Subscribe to watch Result" : "unSubscribe"}
      </button>
    </div>
  );
};

export default Page;
