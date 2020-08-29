import React from "react";

const ChildComponent = ({ onGreet }) => {
  return (
    <div>
      <button onClick={() => onGreet("child")}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
