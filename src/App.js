import "./styles.css";
import React, { createContext } from "react";
import Component_A from "../Component-A";

const Fname = createContext();

export default function App() {
  return (
    <div className="App">
      <Fname.Provider value={"Dhoni"}>
        <Component_A />
      </Fname.Provider>
      {/* <Component-B />
      <Component-C /> */}
    </div>
  );
}
export { Fname };
