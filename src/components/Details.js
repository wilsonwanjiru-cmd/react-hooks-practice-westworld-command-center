import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";

function Details({ selectedHost }) {
  return (
    <Segment id="details" className="HQComps">
      {selectedHost ? (
        <Image size="medium" src={selectedHost.imageUrl} />
      ) : (
        <Image size="medium" src={Images.westworldLogo} />
      )}
    </Segment>
  );
}

export default Details;

