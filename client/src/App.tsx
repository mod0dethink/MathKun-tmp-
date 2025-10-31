import React from "react";
import HandwritingCanvas from "./components/HandwritingCanvas";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <HandwritingCanvas />
    </div>
  );
};

export default App;
