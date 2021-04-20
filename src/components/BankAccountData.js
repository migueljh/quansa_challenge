import React from "react";
import { TextField } from "@material-ui/core";

function BankAccountData(props) {
  const onChangeInput = (e) => {
    props.onChangeInput(e.target.name, e.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-required"
        name="salary"
        label="Salary"
        value={props.salary}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="accountNumber"
        label="Account Number"
        value={props.accountNumber}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="name"
        label="Name"
        value={props.name}
        onChange={onChangeInput}
        disabled={true}
      />
      <TextField
        id="standard-required"
        name="balance"
        label="Balance"
        value={props.balance}
        onChange={onChangeInput}
        disabled={true}
      />
    </div>
  );
}

export default BankAccountData;
