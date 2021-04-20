import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonalData from "./PersonalData";
import SessionData from "./SessionData";
import BankAccountData from "./BankAccountData";
import WithDrawalsData from "./WithDrawalsData";
import AdvanceData from "./AdvanceData";
import {
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "65ch",
      display: "flex",
      justifyContent: "center",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionDetails: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Form() {
  const [expanded, setExpanded] = useState(false);
  const [disabled, setDisabled] = useState(false);
  let dataStoraged = JSON.parse(localStorage.getItem("personalData")) || [];
  const [state, setState] = useState({
    userId: dataStoraged.userId,
    documentNumber: dataStoraged.documentNumber,
    firstName: dataStoraged.firstName,
    lastName: dataStoraged.lastName,
    email: dataStoraged.email,
    phoneNumber: dataStoraged.phoneNumber,
    companyName: dataStoraged.companyName,
    session: {
      device: !dataStoraged.session ? "" : dataStoraged.session.device,
      deviceOS: !dataStoraged.session ? "" : dataStoraged.session.deviceOS,
      deviceId: !dataStoraged.session ? "" : dataStoraged.session.deviceId,
      appVersion: !dataStoraged.session ? "" : dataStoraged.session.appVersion,
    },
    salary: dataStoraged.salary,
    bank: {
      accountNumber: !dataStoraged.bank ? "" : dataStoraged.bank.accountNumber,
      name: !dataStoraged.bank ? "" : dataStoraged.bank.name,
    },
    balance: dataStoraged.balance,
    withdrawals: [
      {
        type: "NORMAL",
        amount: !dataStoraged.withdrawals
          ? ""
          : dataStoraged.withdrawals[0].amount,
        status: !dataStoraged.withdrawals
          ? ""
          : dataStoraged.withdrawals[0].status,
        createdAt: !dataStoraged.withdrawals
          ? ""
          : dataStoraged.withdrawals[0].createdAt,
        paidAt: !dataStoraged.withdrawals
          ? ""
          : dataStoraged.withdrawals[0].paidAt,
      },
    ],
    advance: {
      amount: !dataStoraged.advance ? "" : dataStoraged.advance.amount,
      day: !dataStoraged.advance ? "" : dataStoraged.advance.day,
      withdrawals: [
        {
          type: "ADVANCE",
          amount: !dataStoraged.advance
            ? " "
            : dataStoraged.advance.withdrawals[0].amount,
          tobePaidAt: !dataStoraged.advance
            ? ""
            : dataStoraged.advance.withdrawals[0].tobePaidAt,
          paidAt: !dataStoraged.advance
            ? ""
            : dataStoraged.advance.withdrawals[0].paidAt,
          status: !dataStoraged.advance
            ? ""
            : dataStoraged.advance.withdrawals[0].status,
        },
      ],
    },
  });

  const onChangeSession = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      session: {
        ...prevState.session,
        [name]: value,
      },
      bank: {
        ...prevState.bank,
        [name]: value,
      },
      withdrawals: prevState.withdrawals.map((withdrawal) => {
        return {
          ...withdrawal,
          [name]: value,
        };
      }),
    }));
    localStorage.setItem("personalData", JSON.stringify({ ...state, value }));
  };

  const handleContextInput = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      advance: {
        ...prevState.advance,
        [name]: value,
        withdrawals: prevState.advance.withdrawals.map((withdrawals) => {
          return {
            ...withdrawals,
            [name]: value,
          };
        }),
      },
    }));
    localStorage.setItem("personalData", JSON.stringify({ ...state, value }));
  };

  const handleDisabled = () => {
    disabled === false ? setDisabled(true) : setDisabled(false);
  };

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setDisabled(false);
  };

  console.log(state)

  const classes = useStyles();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {state.firstName} {state.lastName} Info
      </h1>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Contact Info</Typography>
            <Typography className={classes.secondaryHeading}>
              User Identification, Name, Phone Number, Email, Company Info,
              Device Info
            </Typography>
          </AccordionSummary>
          <div className={classes.accordionDetails}>
            <AccordionDetails>
              <PersonalData
                userId={state.userId}
                documentNumber={state.documentNumber}
                firstName={state.firstName}
                lastName={state.lastName}
                email={state.email}
                phoneNumber={state.phoneNumber}
                companyName={state.companyName}
                onChangeInput={onChangeSession}
              />
              <SessionData
                device={state.session.device}
                deviceOS={state.session.deviceOS}
                deviceId={state.session.deviceId}
                appVersion={state.session.appVersion}
                onChangeInput={onChangeSession}
              />
            </AccordionDetails>
          </div>
        </Accordion>

        <div>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Bank Account Info
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Number Account, Bank Name, Balance, Salary
              </Typography>
            </AccordionSummary>
            <div className={classes.accordionDetails}>
              <AccordionDetails>
                <BankAccountData
                  salary={state.salary}
                  accountNumber={state.bank.accountNumber}
                  name={state.bank.name}
                  balance={state.balance}
                  onChangeInput={onChangeSession}
                />
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                Withdrawals Info
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Withdrawals
              </Typography>
            </AccordionSummary>
            <div className={classes.accordionDetails}>
              <AccordionDetails>
                <WithDrawalsData
                  type={state.withdrawals[0].type}
                  amount={state.withdrawals[0].amount}
                  status={state.withdrawals[0].status}
                  createdAt={state.withdrawals[0].createdAt}
                  paidAt={state.withdrawals[0].paidAt}
                  disabled={disabled}
                  onChangeInput={onChangeSession}
                />
              </AccordionDetails>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDisabled}
              >
                {disabled === false ? "Edit Info" : "Save Changes"}
              </Button>
            </div>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>Advance</Typography>
              <Typography className={classes.secondaryHeading}>
                Advance Withdrawals
              </Typography>
            </AccordionSummary>
            <div className={classes.accordionDetails}>
              <AccordionDetails>
                <AdvanceData
                  amount={state.advance.amount}
                  day={state.advance.day}
                  type={state.advance.withdrawals[0].type}
                  tobePaidAt={state.advance.withdrawals[0].tobePaidAt}
                  paidAt={state.advance.withdrawals[0].paidAt}
                  status={state.advance.withdrawals[0].status}
                  disabled={disabled}
                  onChangeInput={handleContextInput}
                />
              </AccordionDetails>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDisabled}
              >
                {disabled === false ? "Edit Info" : "Save Changes"}
              </Button>
            </div>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Form;
