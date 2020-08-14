import React, { Fragment } from "react";
import Day from "./daytrader.png";
import First from "./firststock.png";
import Gain from "./growportfolio.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const AwardList = (props) => {
  console.log(props.portfolios.length);
  return (
    <Fragment>
      <TableContainer className="profileContainer">
        <Table>
          <TableBody>
            <div>
              <br></br>
              <TableRow>
                <br></br>
                <TableCell>
                  <img
                    alt="First Stock Purchase"
                    src={First}
                    className="awardThumbnail"
                    target="_blank"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    First Stock Purchase
                    <i />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <br></br>
                <TableCell>
                  <img
                    alt="Day Trader"
                    src={Day}
                    className="awardThumbnail"
                    target="_blank"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    Day Trader
                    <i />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <br></br>
                <TableCell>
                  <img
                    alt="Gain on Stock Sale"
                    src={Gain}
                    className="awardThumbnail"
                    target="_blank"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    Gain on Stock Sale
                    <i />
                  </div>
                </TableCell>
              </TableRow>
              {/* <div>
                <img
                  alt="Day Trader"
                  src={Day}
                  className="awardThumbnail"
                  target="_blank"
                />
              </div>
              <div>
                <div>
                  Day Trader
                  <i />
                </div>
              </div>
            </div>
            <div>
              <img
                alt="Gain on Stock Sale"
                src={Gain}
                className="awardThumbnail"
                target="_blank"
              />
            </div>
            <div>
              <div>
                Gain on Stock Sale
                <i />
              </div> */}
            </div>
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default AwardList;
