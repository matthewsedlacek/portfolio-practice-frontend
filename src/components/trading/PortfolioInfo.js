import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const PortfolioInfo = (props) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) setDisplay(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setOptions(
      props.portfolios.filter((p) =>
        p.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handlePortfolioClick = (portfolio) => {
    props.selectPortfolio(portfolio);
    setSearch(portfolio.name);
    setDisplay(false);
  };

  const { singlePortfolio } = props;

  return (
    <div>
      <Typography variant="subtitle1" style={{ fontWeight: 600, marginBottom: 8 }}>
        Select Portfolio
      </Typography>
      <div ref={wrapperRef}>
        <TextField
          fullWidth
          type="text"
          placeholder="Portfolio name"
          onClick={() => setDisplay(!display)}
          onChange={handleChange}
          value={search}
        />
        {display && (
          <div className="autoContainer">
            {options.map((portfolio, i) => (
              <div
                key={i}
                onClick={() => handlePortfolioClick(portfolio)}
                className="option"
                tabIndex="0"
              >
                {portfolio.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {singlePortfolio.locked_in_value && (
        <div style={{ marginTop: 16 }}>
          <div className="portfolioStatRow">
            <Typography variant="body2" color="textSecondary">Total Value</Typography>
            <Typography variant="body1">${parseFloat(singlePortfolio.locked_in_value).toFixed(2)}</Typography>
          </div>
          <div className="portfolioStatRow">
            <Typography variant="body2" color="textSecondary">Available Cash</Typography>
            <Typography variant="body1">${parseFloat(singlePortfolio.available_cash).toFixed(2)}</Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioInfo;
