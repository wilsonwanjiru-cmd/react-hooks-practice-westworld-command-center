import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"; // Import the Area component

function WestworldMap() {
  return (
    <Segment id="map">
  <Area name="some_area" limit={6} />
  <Area name="another_area" limit={4} />
  <Area name="yet_another_area" limit={8} />
  {/* Add more Area components here */}
</Segment>
  );
}

export default WestworldMap;


