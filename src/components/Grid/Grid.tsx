import React, { useCallback, useEffect, useState } from "react";
import { Cell } from "../Cell/Cell";
import "./Grid.scss";
import { calculateRows } from "./gridUtils";

interface Props {
  tickTime: number;
  numberOfRows: number;
  numberOfColumns: number;
}

export const Grid: React.FC<Props> = ({
  tickTime,
  numberOfRows,
  numberOfColumns,
}) => {
  const [currentTick, setCurrentTick] = useState(0);
  const [rows, setRows] = useState<number[][]>([[0]]);

  console.log("GRID RENDER -- ", rows);

  /**
   * Start random init
   * */
  const randomInit = useCallback(() => {
    console.log("randomInit called");
    const rowsNew: number[][] = [[0]];
    for (let i = 0; i < numberOfRows; i++) {
      rowsNew[i] = [];
      for (let j = 0; j < numberOfColumns; j++) {
        rowsNew[i][j] = Math.random() >= 0.5 ? 1 : 0;
      }
    }
    setRows(rowsNew);
  }, [numberOfRows, numberOfColumns]);

  useEffect(() => {
    randomInit();
  }, [randomInit]);
  /**
   * End random init
   * */

  /**
   * Start ticking (based on currentTick state)
   * */

  // init
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTick((currentTick) => currentTick + 1);
    }, tickTime);
    return () => {
      clearInterval(interval);
    };
  }, [tickTime]);

  // ticking
  useEffect(() => {
    if (currentTick > 0) setRows(calculateRows(rows));
  }, [currentTick]);
  /**
   * End ticking
   * */

  const gridStyles = {
    gridTemplateColumns: `repeat(${numberOfColumns}, 10px)`,
    gridTemplateRows: `repeat(${numberOfRows}, 10px)`,
  };

  return (
    <div className={"Grid"} style={gridStyles}>
      {rows.map((row, rowIdx) => (
        /**
         * Key props use indexes by default,
         * but in our case it's fine (I hope :) )
         * */
        <React.Fragment key={rowIdx}>
          {row.map((cell, columnIdx) => (
            <Cell alive={!!cell} key={columnIdx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
