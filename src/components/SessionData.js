import React from "react";
import { TextField } from "@material-ui/core";

function SessionData(props) {
  const onChangeInput = (e) => {
    props.onChangeInput(e.target.name, e.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-required"
        name="device"
        label="Device"
        value={props.device}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="deviceOS"
        label="DeviceOS"
        value={props.deviceOS}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="deviceId"
        label="Device ID"
        value={props.deviceId}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="appVersion"
        label="App Version"
        value={props.appVersion}
        onChange={onChangeInput}
        disabled={true}
      />
    </div>
  );
}

export default SessionData;
