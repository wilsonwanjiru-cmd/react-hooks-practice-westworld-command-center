import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo() {
  const [options] = useState([
    { key: "some_area", text: "Some Area", value: "some_area" },
    { key: "another_area", text: "Another Area", value: "another_area" },
  ]);

  const [value, setValue] = useState("some_area");

  function handleOptionChange(e, { value }) {
    // Handle option change here
    setValue(value);
  }

  function handleRadioChange() {
    console.log("The radio button fired");
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={/* pass in the right image here */}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {"Bob"} | {true ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={"Active"}
                checked={true}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
