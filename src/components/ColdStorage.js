import React from "react";
import { Segment } from "semantic-ui-react";
import Host from "./Host"; // Import the Host component

function ColdStorage({ hostsInStorage }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        {/* Render hosts in Cold Storage using the Host component */}
        {hostsInStorage.map((host) => (
          <Host key={host.id} host={host} />
        ))}
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;



