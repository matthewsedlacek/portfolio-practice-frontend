import React from "react";
import Transaction from "./Transaction";
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

const PortfolioCard = ({ portfolio }) => {
  const [open, setOpen] = React.useState(false);

  const lockedInValue = parseFloat(portfolio.locked_in_value) || 0;
  const availableCash = parseFloat(portfolio.available_cash) || 0;
  const startingValue = parseFloat(portfolio.starting_value) || 0;
  const gainLoss = lockedInValue - startingValue;
  const gainLossColor = gainLoss >= 0 ? "#2e7d32" : "#c62828";

  return (
    <TableContainer component={Paper} style={{ marginTop: 16 }}>
      <Table aria-label="portfolio">
        <TableHead>
          <TableRow style={{ backgroundColor: "#f5f5f5" }}>
            <TableCell style={{ width: 48 }}>
              <IconButton size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                {portfolio.name}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" color="textSecondary">Total Value</Typography>
              <Typography variant="body1">${lockedInValue.toFixed(2)}</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" color="textSecondary">Available Cash</Typography>
              <Typography variant="body1">${availableCash.toFixed(2)}</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" color="textSecondary">Gain / Loss</Typography>
              <Typography variant="body1" style={{ color: gainLossColor, fontWeight: 600 }}>
                {gainLoss >= 0 ? "+" : ""}${gainLoss.toFixed(2)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom>Transactions</Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Ticker</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell align="right">Qty</TableCell>
                        <TableCell align="right">Price Paid ($)</TableCell>
                        <TableCell align="right">Total Cost ($)</TableCell>
                        <TableCell align="right">Current Price ($)</TableCell>
                        <TableCell align="right">Current Value ($)</TableCell>
                        <TableCell align="right">Gain / Loss ($)</TableCell>
                        <TableCell align="center">Type</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {portfolio.transactions.map((t) => (
                        <Transaction key={t.id} transaction={t} />
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PortfolioCard;
