import React, { useCallback, useEffect, useState } from "react";
import { Cell } from "../Cell/Cell";
import "./Grid.scss";
import { getLivingNeighboursCount } from "./utils";

interface Props {
  tickTime: number;
  numberOfRows: number;
  numberOfColumns: number;
}

const generateKey = (idx: number) => {
  return `${idx}_${new Date().getTime()}`;
};

// const areEqual<> = (prevProps, nextProps) => true;

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
    console.log(rowsNew);
    // calculateRows(rowsNew);
  }, [numberOfRows, numberOfColumns]);

  useEffect(() => {
    randomInit();
  }, [randomInit]);
  /**
   * End random init
   * */

  // Calculate new rows
  const calculateRows = (
    rows: number[][],
    setRows: (rows: number[][]) => void
  ) => {
    console.log("RECALCULATE ", rows);
    const rowsNew = (rows as Array<number[]>).map((row, rowIdx) => {
      return (row as Array<number>).map((cell, columnIdx) => {
        const livingNeighbours = getLivingNeighboursCount(
          rows,
          rowIdx,
          columnIdx
        );
        console.log(livingNeighbours);
        if (livingNeighbours < 2 && cell === 1) return 0;
        if (livingNeighbours > 3 && cell === 1) return 0;
        if (livingNeighbours === 3 && cell === 0) return 1;
        return cell;
      });
    });
    // console.log(rows, rowsNew);

    setRows(rowsNew);
  };

  const tick = () => {
    setCurrentTick((currentTick) => currentTick + 1);
  };

  useEffect(() => {
    if (currentTick > 0) calculateRows(rows, setRows);
  }, [currentTick]);

  useEffect(() => {
    const interval = setInterval(tick, tickTime);
    return () => {
      clearInterval(interval);
    };
  }, [tickTime]);

  const gridStyles = {
    gridTemplateColumns: `repeat(${numberOfColumns}, 10px)`,
    gridTemplateRows: `repeat(${numberOfRows}, 10px)`,
  };

  return (
    <div className={"Grid"} style={gridStyles}>
      {rows.map((row, rowIdx) => (
        <React.Fragment key={generateKey(rowIdx)}>
          {row.map((cell, columnIdx) => (
            <Cell alive={!!cell} key={generateKey(columnIdx)} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
