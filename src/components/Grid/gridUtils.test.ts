import { getLivingNeighboursCount } from "./gridUtils";

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
