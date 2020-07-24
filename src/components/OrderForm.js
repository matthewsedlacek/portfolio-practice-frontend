import React, { Component, useState, useEffect, useRef } from "react";
import { Button, ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";

const OrderForm = (props) => {
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

  const compArray = props.companies.map((comp) => comp.name);

  const handleChange = (e) => {
    setSearch(e.target.value);
    let filteredCompanies = props.companies.filter((company) =>
      company.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptions(filteredCompanies);
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  const setName = (name) => {
    setSearch(name);
    setDisplay(false);
  };

  const handleCompanyClick = (companyObject) => {
    props.selectCompany(companyObject);
    setName(companyObject.name);
  };

  // const populateOptions(options) {
  //   return options.map((option, index) => (
  //     <option key={index} value={option}>{option}</option>
  //   ));
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.handleSubmit(event);
  // };

  const { portfolios } = props.portfolios;

  return (
    <div>
      <form>
        <div>
          Portfolio
          <DropdownButton
            title="Select Portfolio"
            className="m-b m-t"
            id="dropdown-organization"
          >
            {props.portfolios.map((portfolio, i) => (
              <option key={i}>{portfolio.name}</option>
            ))}
          </DropdownButton>
          <div ref={wrapperRef}>
            Name{" "}
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
            )}
          </div>
          Quantity{" "}
          <input
            type="number"
            name="value"
            placeholder="Amount"
            step="1.0"
            // onChange={onChange}
          />
        </div>
        <button type="submit">Buy</button>
        <button type="submit">Sell</button>
      </form>
    </div>
  );
};

export default OrderForm;
