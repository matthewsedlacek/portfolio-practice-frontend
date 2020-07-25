import React, { useState, useEffect, useRef } from "react";
// import {
//   Button,
//   ButtonGroup,
//   DropdownButton,
//   MenuItem,
//   Dropdown,
// } from "react-bootstrap";

const PortfolioInfo = (props) => {
  // const [display, setDisplay] = useState(false);
  // const [options, setOptions] = useState([]);
  // const [search, setSearch] = useState("");
  // const [items, setItems] = useState([]);
  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const handleClickOutside = (e) => {
  //   const { current: wrap } = wrapperRef;
  //   if (wrap && !wrap.contains(e.target)) {
  //     setDisplay(false);
  //   }
  // };

  // const compArray = props.companies.map((comp) => comp.name);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  //   let filteredCompanies = props.companies.filter((company) =>
  //     company.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setOptions(filteredCompanies);
  // };

  // const handleFilter = (e) => {
  //   setSearch(e.target.value);
  // };

  // const setName = (name) => {
  //   setSearch(name);
  //   setDisplay(false);
  // };

  // const handleCompanyClick = (companyObject) => {
  //   props.selectCompany(companyObject);
  //   setName(companyObject.name);
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.handleSubmit(event);
  // };

  // const { portfolios } = props.portfolios;

  return (
    <div
    // ref={wrapperRef}
    >
      {/* Name{" "}
      <input
        type="text"
        id="auto"
        placeholder="Company Name"
        onClick={() => setDisplay(!display)}
        onChange={handleChange}
      />
      {display && (
        <div className="autoContainer">
          {options.map((companyObject, i) => {
            return (
              <div
                onClick={() => handleCompanyClick(companyObject)}
                className="option"
                key={i}
                tabIndex="0"
              >
                <span>{companyObject.name}</span>
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export default PortfolioInfo;
