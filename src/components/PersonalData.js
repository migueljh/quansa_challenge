import React from "react";
import { TextField } from "@material-ui/core";

function PersonalData(props) {

  const onChangeInput = (e) => {
    props.onChangeInput(e.target.name, e.target.value)
  };

  return (
    <div>
      <TextField
        id="standard-required"
        name="userId"
        label="ID"
        value={props.userId}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="documentNumber"
        label="Document Number"
        value={props.documentNumber}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="firstName"
        label="First Name"
        value={props.firstName}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="lastName"
        label="Last Name"
        value={props.lastName}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="email"
        label="Email"
        value={props.email}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="phoneNumber"
        label="Phone Number"
        value={props.phoneNumber}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="companyName"
        label="Company Name"
        value={props.companyName}
        onChange={onChangeInput}
        disabled={true}
      />
    </div>
  );
}

export default PersonalData;
