import React, { ChangeEvent } from "react";

interface Props {
  numberOfColumns: number;
  setNumberOfColumns: (value: number) => void;
  numberOfRows: number;
  setNumberOfRows: (value: number) => void;
  tickTime: number;
  setTickTime: (value: number) => void;
}

export const GridControls: React.FC<Props> = React.memo(
  ({
    numberOfColumns,
    setNumberOfColumns,
    numberOfRows,
    setNumberOfRows,
    tickTime,
    setTickTime,
  }) => {
    const fields = [
      {
        id: 1,
        placeholder: "Number of rows (max 100)",
        value: numberOfRows,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          setNumberOfRows(+e.target.value > 100 ? 100 : +e.target.value),
      },
      {
        id: 2,
        placeholder: "Number of columns (max 100)",
        value: numberOfColumns,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          setNumberOfColumns(+e.target.value > 100 ? 100 : +e.target.value),
      },
      {
        id: 3,
        placeholder: "Tick time",
        value: tickTime,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          setTickTime(+e.target.value),
      },
    ];
    return (
      <div className={`GridControls`}>
        {fields.map(({ placeholder, value, onChange, id }) => (
          <div className={"labeled-field"} key={id}>
            <div className="title">{placeholder}</div>
            <div className="input">
              <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
);
