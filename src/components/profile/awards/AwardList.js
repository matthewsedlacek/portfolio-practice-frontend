import React from "react";
import First from "./firststock.png";
import Blur from "./question-mark.png";
import Gain from "./growportfolio.png";

const Award = ({ unlocked, image, lockedImage, label }) => (
  <div className="awardItem">
    <img
      alt={label}
      src={unlocked ? image : lockedImage}
      className={`awardThumbnail ${unlocked ? "" : "awardLocked"}`}
    />
    <span className="awardLabel">{label}</span>
  </div>
);

const AwardList = ({ transactions, profitablePortfolios }) => (
  <div className="awardList">
    <p className="awardHint">Collect awards by trading daily</p>
    <Award
      unlocked={transactions.length > 0}
      image={First}
      lockedImage={Blur}
      label="First Stock Purchase"
    />
    <Award
      unlocked={profitablePortfolios.length > 0}
      image={Gain}
      lockedImage={Blur}
      label="Gain on Stock Sale"
    />
  </div>
);

export default AwardList;
