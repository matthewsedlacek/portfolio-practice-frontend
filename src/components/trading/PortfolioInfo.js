import React, { useState, useEffect, useRef } from "react";
// import {
//   Button,
//   ButtonGroup,
//   DropdownButton,
//   MenuItem,
//   Dropdown,
// } from "react-bootstrap";

const PortfolioInfo = (props) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    let filteredPortfolios = props.portfolios.filter((portfolio) =>
      portfolio.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptions(filteredPortfolios);
  };

  const setName = (name) => {
    setSearch(name);
    setDisplay(false);
  };

  const handlePortfolioClick = (portfolioObject) => {
    props.selectPortfolio(portfolioObject);
    setName(portfolioObject.name);
  };

  return (
    <div ref={wrapperRef}>
      Name{" "}
      <input
        type="text"
        id="auto"
        placeholder="Select Portfolio"
        onClick={() => setDisplay(!display)}
        onChange={handleChange}
        value={search}
      />
      {display && (
        <div className="autoContainer">
          {options.map((portfolioObject, i) => {
            return (
              <div
                onClick={() => handlePortfolioClick(portfolioObject)}
                className="option"
                key={i}
                tabIndex="0"
              >
                <span>{portfolioObject.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PortfolioInfo;
