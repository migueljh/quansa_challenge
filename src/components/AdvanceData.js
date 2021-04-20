import React from "react";
import { TextField } from "@material-ui/core";

function AdvanceData(props) {
  const onChangeInput = (e) => {
    props.onChangeInput(e.target.name, e.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-required"
        type="number"
        name="amount"
        label="Amount"
        value={props.amount}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
      <TextField
        id="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        name="day"
        label="Day"
        value={props.day}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
      <TextField
        id="standard-required"
        name="type"
        label="Type"
        value={props.type}
        disabled={true}
      />
      <TextField
        id="standard-required"
        type="number"
        name="amount"
        label="Amount"
        value={props.amount}
        disabled={true}
      />
      <TextField
        id="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        name="tobePaidAt"
        label="To be paid at"
        value={props.tobePaidAt}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
      <TextField
        id="date"
        name="paidAt"
        label="Paid at"
        type="date"
        value={props.paidAt}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
      <TextField
        id="standard-required"
        type="string"
        name="status"
        label="Status"
        value={props.status}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
    </div>
  );
}

export default AdvanceData;
