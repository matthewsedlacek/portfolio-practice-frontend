import React, { Component, useState, useEffect, useRef } from "react";

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

  // useEffect(() => {
  //   companiesArray();
  // }, []);

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
    // props.onfilterCompanies(e);
  };

  const setName = (name) => {
    setSearch(name);
    setDisplay(false);
  };

  const handleCompanyClick = (companyObject) => {
    props.selectCompany(companyObject);
    setName(companyObject.name);
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.handleSubmit(event);
  // };

  // const { title, amount } = props.newPortfolio;
  return (
    <div>
      <form>
        <div>
          Portfolio
          <input type="text" placeholder="Portfolio" />
          Name{" "}
          <input
            type="text"
            id="auto"
            placeholder="Company Name"
            onClick={() => setDisplay(!display)}
            onChange={handleChange}
            // onChange={(e) => setSearch(e.target.value)}
            // onChange={(e) => handleFilter(e)}
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
