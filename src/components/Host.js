import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host }) {
  // You can use props to pass host data and onClick event handler
  return (
    <Card
      className={host.selected ? "host selected" : "host"} // Use host.selected to determine the class
      onClick={() => {
        // Handle host selection click here
      }}
      image={host.imageUrl} // Use host.imageUrl to display the host image
      raised
      link
    />
  );
}

export default Host;

