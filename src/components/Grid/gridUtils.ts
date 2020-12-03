export const getOriginalState = (
  numberOfRows: number,
  numberOfColumns: number
) => {
  const rowsNew: number[][] = [[0]];
  for (let i = 0; i < numberOfRows; i++) {
    rowsNew[i] = [];
    for (let j = 0; j < numberOfColumns; j++) {
      rowsNew[i][j] = Math.random() >= 0.5 ? 1 : 0;
    }
  }
  return rowsNew;
};

export const getLivingNeighboursCount = (
  array: number[][],
  rowIdx: number,
  columnIdx: number
) => {
  const neighbours = [];
  if (rowIdx > 0) {
    if (columnIdx > 0) neighbours.push(array[rowIdx - 1][columnIdx - 1]);

    neighbours.push(array[rowIdx - 1][columnIdx]);

    if (columnIdx < array[rowIdx].length - 1)
      neighbours.push(array[rowIdx - 1][columnIdx + 1]);
  }

  if (columnIdx > 0) {
    neighbours.push(array[rowIdx][columnIdx - 1]);
  }

  if (columnIdx < array[rowIdx].length - 1) {
    neighbours.push(array[rowIdx][columnIdx + 1]);
  }

  if (rowIdx < array.length - 1) {
    if (columnIdx > 0) {
      neighbours.push(array[rowIdx + 1][columnIdx - 1]);
    }
    neighbours.push(array[rowIdx + 1][columnIdx]);

    if (columnIdx < array[rowIdx].length - 1) {
      neighbours.push(array[rowIdx + 1][columnIdx + 1]);
    }
  }

  return neighbours.filter((el) => el === 1).length;
};

export const calculateRows = (rows: number[][]) => {
  const rowsNew = (rows as Array<number[]>).map((row, rowIdx) => {
    return (row as Array<number>).map((cell, columnIdx) => {
      const livingNeighbours = getLivingNeighboursCount(
        rows,
        rowIdx,
        columnIdx
      );
      if (livingNeighbours < 2 && cell === 1) return 0;
      if (livingNeighbours > 3 && cell === 1) return 0;
      if (livingNeighbours === 3 && cell === 0) return 1;
      return cell;
    });
  });

  return rowsNew;
};
