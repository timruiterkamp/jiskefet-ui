import React from "react";
import "../../scss/layout/index.scss";
export default function PageWrapper(props) {
  return <section>{props.children}</section>;
}
