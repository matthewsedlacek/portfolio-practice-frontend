import React from "react";
import Transaction from "./Transaction";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const PortfolioCard = (props) => {
  const renderTransactions = () => {
    return props.portfolio.transactions.map((selectedTransaction) => {
      return <Transaction transaction={selectedTransaction} />;
    });
  };

  const useRowStyles = makeStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  });

  function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        { date: "2020-01-05", customerId: "11091700", amount: 3 },
        { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
      ],
    };
  }

  function Row(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell align="right">{props.name}</TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Transactions
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Ticker</TableCell>
                      <TableCell align="left">Company Name</TableCell>
                      <TableCell align="left">Quantity</TableCell>
                      <TableCell align="left">Transaction Price ($)</TableCell>
                      <TableCell align="left">Transaction Value ($)</TableCell>
                      <TableCell align="left">Current Price ($)</TableCell>
                      <TableCell align="left">Total Value ($)</TableCell>
                      <TableCell align="left">Gain/Loss ($)</TableCell>
                      <TableCell align="left">Type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{renderTransactions()}</TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };

  const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99)];

  return (
    <TableContainer component={Paper} style={{ marginTop: 10 }}>
      <Table aria-label="collapsible table">
        <TableHead className="portfolioTableContainer">
          <TableRow>
            <TableCell />
            <TableCell component="th" scope="row" align="right">
              {props.portfolio.name}
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              Value: $
              {props.portfolio.locked_in_value
                ? props.portfolio.locked_in_value.toFixed(2)
                : ""}
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              Buying Power: $
              {props.portfolio.available_cash
                ? props.portfolio.available_cash.toFixed(2)
                : ""}
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              Available Cash: $
              {props.portfolio.available_cash
                ? props.portfolio.available_cash.toFixed(2)
                : ""}
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              {" "}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row Ticker key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PortfolioCard;
