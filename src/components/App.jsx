import React from "react";
import Login from "./Login";

let isLoggedIn = true;

const currentTime = new Date(2021, 3, 4, 1).getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login  />} */}
      {currentTime > 12 ? (
        <h1>Who is working now??</h1>
      ) : (
        <p>I am sleeping..,</p>
      )}
    </div>
  );
}

export default App;
