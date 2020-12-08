import React, { useCallback, useEffect, useState } from "react";
import { Cell } from "../Cell/Cell";
import "./Grid.scss";
import { calculateRows, getOriginalState } from "./gridUtils";

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
  const [rows, setRows] = useState<number[][]>([[]]);

  /**
   * Start random init
   * */
  const randomInit = useCallback(() => {
    setRows(getOriginalState(numberOfRows, numberOfColumns));
  }, [numberOfRows, numberOfColumns]);

  useEffect(() => {
    randomInit();
  }, [randomInit, numberOfRows, numberOfColumns, tickTime]);
  /**
   * End random init
   * */

  /**
   * Start ticking (based on currentTick state)
   * */
  // init interval of ticking
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTick((currentTick) => currentTick + 1);
    }, tickTime);
    return () => {
      clearInterval(interval);
    };
  }, [tickTime]);

  // recalculation
  useEffect(() => {
    const f = () => {
      setRows((rows) => calculateRows(rows));
    };
    if (currentTick > 0) f();
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
         * Note: Key props use indexes by default,
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
