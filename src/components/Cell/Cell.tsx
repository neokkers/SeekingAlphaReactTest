import React from "react";
import "./Cell.scss";

interface Props {
  alive: boolean;
}

export const Cell: React.FC<Props> = React.memo<Props>(
  ({ alive }) => {
    return <div className={`Cell ${alive ? "alive" : "dead"}`}></div>;
  },
  (prevProps, nextProps) => prevProps.alive === nextProps.alive
);
