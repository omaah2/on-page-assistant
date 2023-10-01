import React from "react";
import HomePage from "./components/Home"; // Import the HomePage component
import Assistant from "./components/Assistant"; // Import the Assistant component

function App() {
  return (
    <div className="App">
      {/* Include the HomePage component */}
      <HomePage />

      {/* Include the Assistant component */}
      <Assistant />
    </div>
  );
}

export default App;
