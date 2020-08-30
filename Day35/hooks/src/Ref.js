import React, { useState, useRef, useEffect } from "react";

const Ref = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");
  const inputRef = useRef();
  useEffect(() => {
    prevName.current = name;
  });
  function focus() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>
        My name is {name} and my lastname is {prevName.current}{" "}
      </h3>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default Ref;
