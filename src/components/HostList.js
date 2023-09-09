import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"; // Import the Host component

function HostList() {
  // You can map through host data and render Host components
  const hosts = []; // Replace with your host data

  return (
    <Card.Group itemsPerRow={6}>
      {hosts.map((host) => (
        <Host key={host.id} host={host} />
      ))}
    </Card.Group>
  );
}

export default HostList;
