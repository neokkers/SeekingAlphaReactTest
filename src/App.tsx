import React, { useState } from "react";
import { Grid } from "./components/Grid/Grid";
import { GridControls } from "./components/Grid/GridControls";

function App() {
  const [numberOfColumns, setNumberOfColumns] = useState(50);
  const [numberOfRows, setNumberOfRows] = useState(50);
  const [tickTime, setTickTime] = useState(2000);
  return (
    <div className="App">
      <GridControls
        numberOfColumns={numberOfColumns}
        setNumberOfColumns={setNumberOfColumns}
        numberOfRows={numberOfRows}
        setNumberOfRows={setNumberOfRows}
        tickTime={tickTime}
        setTickTime={setTickTime}
      />
      <Grid
        tickTime={tickTime}
        numberOfColumns={numberOfColumns}
        numberOfRows={numberOfRows}
      />
    </div>
  );
}

export default App;
