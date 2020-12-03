import React from "react";
import { Grid } from "./components/Grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid tickTime={3000} numberOfColumns={5} numberOfRows={5} />
    </div>
  );
}

export default App;
