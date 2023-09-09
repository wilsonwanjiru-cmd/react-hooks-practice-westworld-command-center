import React from "react";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./WestworldMap"; // Import the WestworldMap component
import Headquarters from "./Headquarters"; // Import the Headquarters component
import "../stylesheets/App.css";

function App() {
  return (
    <Segment id="app">
      <WestworldMap />
      <Headquarters />
    </Segment>
  );
}

export default App;

