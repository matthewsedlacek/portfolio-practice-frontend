import React, { Fragment } from "react";
import Day from "./daytrader.png";
import First from "./firststock.png";
import Gain from "./growportfolio.png";

const AwardList = (props) => {
  //   const awardArray = [
  //     { img_src: { Day }, title: "Day Trader" },
  //     { img_src: { First }, title: "First Stock Purchase" },
  //     { img_src: { Gain }, title: "Gain on Stock Sale" },
  //   ];

  //   const renderAwards = () => {
  //     return awardArray.map((singleAward) => {
  //       return <AwardCard award={singleAward} />;
  //     });
  //   };

  return (
    <Fragment>
      <div className="profileContainer">
        <table>
          <tbody>
            <div>
              <br></br>
              <div>
                <br></br>
                <div>
                  <img
                    alt="First Stock Purchase"
                    src={First}
                    className="newsThumnail"
                    target="_blank"
                  />
                </div>
                <div>
                  <div>
                    First Stock Purchase
                    <i />
                  </div>
                </div>
              </div>
              <div>
                <img
                  alt="Day Trader"
                  src={Day}
                  className="newsThumnail"
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
                className="newsThumnail"
                target="_blank"
              />
            </div>
            <div>
              <div>
                Gain on Stock Sale
                <i />
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AwardList;
