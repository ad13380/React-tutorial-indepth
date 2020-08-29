import React from "react";

const MemoComp = ({ name }) => {
  return <div>{name}</div>;
};

export default React.memo(MemoComp); // note the use of higher order components
