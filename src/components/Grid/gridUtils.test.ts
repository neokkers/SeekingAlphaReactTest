import { getLivingNeighboursCount, calculateRows } from "./gridUtils";

const getLivingNeighboursCountSquare = (
  rowIdx: number,
  columnIdx: number,
  expected: number
) => {
  test(`getLivingNeighboursCount on 2 2x2 squares (rowIdx = ${rowIdx}, columnIdx = ${columnIdx}) (= ${expected})`, () => {
    expect(
      getLivingNeighboursCount(
        [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 1, 1],
          [0, 0, 1, 1],
        ],
        rowIdx,
        columnIdx
      )
    ).toBe(expected);
  });
};

const calculateRowsSquareTest = (expected: number[][]) => {
  test(`calculateRowsSquareTest on 2x2 isolated  square (needs to keep original state)`, () => {
    expect(
      calculateRows([
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ])
    ).toStrictEqual(expected);
  });
};

const calculateRows3LineTest = (expected: number[][]) => {
  test(`calculateRows3LineTest (needs to switch state)`, () => {
    expect(
      calculateRows([
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ])
    ).toStrictEqual(expected);
  });
};

const calculateRowsCircus = (expected: number[][]) => {
  test(`calculateRowsCircus (third picture from task) (needs to switch state)`, () => {
    expect(
      calculateRows([
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ])
    ).toStrictEqual(expected);
  });
};

getLivingNeighboursCountSquare(0, 0, 3);
getLivingNeighboursCountSquare(0, 1, 3);
getLivingNeighboursCountSquare(0, 2, 2);
getLivingNeighboursCountSquare(0, 3, 0);

getLivingNeighboursCountSquare(1, 0, 3);
getLivingNeighboursCountSquare(1, 1, 4);
getLivingNeighboursCountSquare(1, 2, 4);
getLivingNeighboursCountSquare(1, 3, 2);

getLivingNeighboursCountSquare(2, 0, 2);
getLivingNeighboursCountSquare(2, 1, 4);
getLivingNeighboursCountSquare(2, 2, 4);
getLivingNeighboursCountSquare(2, 3, 3);

getLivingNeighboursCountSquare(3, 0, 0);
getLivingNeighboursCountSquare(3, 1, 2);
getLivingNeighboursCountSquare(3, 2, 3);
getLivingNeighboursCountSquare(3, 3, 3);

calculateRowsSquareTest([
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
]);

calculateRows3LineTest([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]);

calculateRowsCircus([
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]);
