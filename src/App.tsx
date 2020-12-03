import React from "react";
import { Grid } from "./components/Grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid tickTime={2000} numberOfColumns={50} numberOfRows={50} />
    </div>
  );
}

export default App;
