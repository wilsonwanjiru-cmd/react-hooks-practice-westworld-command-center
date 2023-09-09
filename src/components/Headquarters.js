import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage";

function Headquarters() {
  // Define a sample array of hosts in storage (replace this with your actual data)
  const hostsInStorage = [
    { id: 1, name: "Host 1" },
    { id: 2, name: "Host 2" },
    // Add more hosts as needed
  ];

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        {/* Render the HostList component here */}
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* Pass the hostsInStorage array as a prop to ColdStorage */}
        <ColdStorage hostsInStorage={hostsInStorage} />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;



