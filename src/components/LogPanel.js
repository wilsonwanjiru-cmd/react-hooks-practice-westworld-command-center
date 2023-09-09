import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel() {
  // You can use a state variable to store logs
  const [logs, setLogs] = React.useState([]);

  function handleActivateAll() {
    // Handle activating all hosts
    // Log the action
    setLogs([...logs, Log.warn("Activating all hosts!")]);
  }

  function handleDecommissionAll() {
    // Handle decommissioning all hosts
    // Log the action
    setLogs([...logs, Log.notify("Decommissioning all hosts.")]);
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      <Button
        fluid
        color={"red"}
        content={"ACTIVATE ALL"}
        onClick={handleActivateAll} // Add onClick event
      />
    </Segment>
  );
}

export default LogPanel;

