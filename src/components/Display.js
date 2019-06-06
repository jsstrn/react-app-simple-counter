import React from "react";
import "../styles/Display.css";

function Display({ value, style }) {
  return <div className={`display ${style}`}>{value}</div>;
}

export default Display;
