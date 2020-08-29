import React from "react";

const NameList = () => {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  return (
    <div>
      {names.map((name, index) => (
        <h1 key={index}> {name} </h1>
      ))}
    </div>
  );
};

export default NameList;
