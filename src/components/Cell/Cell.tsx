import React, { useEffect, useState } from "react";
import "./Cell.scss";

interface Props {
  alive: boolean;
}

export const Cell: React.FC<Props> = React.memo(
  ({ alive }) => {
    return <div className={`Cell ${alive ? "alive" : "dead"}`}></div>;
  },
  () => true
);
