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
    // console.log(rowIdx, columnIdx);
    neighbours.push(array[rowIdx + 1][columnIdx]);

    if (columnIdx < array[rowIdx].length - 1) {
      neighbours.push(array[rowIdx + 1][columnIdx + 1]);
    }
  }

  return neighbours.filter((el) => el === 1).length;
};
