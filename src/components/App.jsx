import React from "react";
import Form from "./Form";

let userIsResistered = false;

function App() {
  return (
    <div className="container">
      <Form isResistered={userIsResistered} />
    </div>
  );
}

export default App;
