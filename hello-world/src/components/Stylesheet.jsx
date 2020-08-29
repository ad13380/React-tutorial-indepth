import React from "react";
import "./myStyles.css";
import styles from "./appStyles.module.css";

const Stylesheet = (props) => {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
};

export default Stylesheet;
