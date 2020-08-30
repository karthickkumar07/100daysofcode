// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable

import React, { useState, memo, useCallback } from "react";

const Callback = (props) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div>
      Count: {count}
      <br />
      <Increment increment={increment} />
      <br />
    </div>
  );
};

export default Callback;

const Increment = memo((props) => {
  console.log("increment rendered");
  return <button onClick={props.increment}>Increment</button>;
});
