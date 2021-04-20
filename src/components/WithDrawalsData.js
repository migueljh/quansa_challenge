import React from "react";
import { TextField } from "@material-ui/core";

function WithDrawalsData(props) {
  const onChangeInput = (e) => {
    props.onChangeInput(e.target.name, e.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-required"
        name="type"
        label="Type"
        value={props.type}
        disabled={props.disabled === false ? true : false}
      />
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
        id="standard-required"
        type="string"
        name="status"
        label="Status"
        value={props.status}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
      <TextField
        id="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        name="createdAt"
        label="Created At"
        value={props.createdAt}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
      <TextField
        id="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        name="paidAt"
        label="Paid At"
        value={props.paidAt}
        onChange={onChangeInput}
        disabled={props.disabled === false ? true : false}
      />
    </div>
  );
}

export default WithDrawalsData;
