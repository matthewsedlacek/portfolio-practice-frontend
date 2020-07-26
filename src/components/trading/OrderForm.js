import React, { useState, useEffect, useRef } from "react";
// import {
//   Button,
//   ButtonGroup,
//   DropdownButton,
//   MenuItem,
//   Dropdown,
// } from "react-bootstrap";

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

  const handleChange = (e) => {
    setSearch(e.target.value);
    let filteredCompanies = props.companies.filter((company) =>
      company.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptions(filteredCompanies);
  };

  const setName = (name) => {
    setSearch(name);
    setDisplay(false);
  };

  const handleCompanyClick = (companyObject) => {
    props.selectCompany(companyObject);
    setName(companyObject.name);
  };

  const handleBuyStock = (event) => {
    event.preventDefault();
    props.handleBuyStock(event);
  };

  const onQuantityChange = (e) => {
    props.handleQuantityChange(e);
  };

  return (
    <div>
      <form>
        <div>
          <div ref={wrapperRef}>
            Name{" "}
            <input
              type="text"
              id="auto"
              placeholder="Company Name"
              onClick={() => setDisplay(!display)}
              onChange={handleChange}
              value={search}
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
            onChange={onQuantityChange}
            value={props.tradeQuantity}
          />
        </div>
        <button type="submit" onClick={handleBuyStock}>
          Buy
        </button>
        <button type="submit">Sell</button>
      </form>
    </div>
  );
};

export default OrderForm;
