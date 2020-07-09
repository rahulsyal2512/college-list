import React from "react";
import Colleges from "./modules/components/College";
import ErrorBoundary from "./modules/components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <p className="heading">Colleges in North India</p>
      <Colleges />
    </ErrorBoundary>
  );
}

export default App;
