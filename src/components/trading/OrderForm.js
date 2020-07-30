import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

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

  const handleSellStock = (event) => {
    event.preventDefault();
    props.handleSellStock(event);
  };

  const onQuantityChange = (e) => {
    props.handleQuantityChange(e);
  };

  return (
    <div>
      <form>
        <div align="center">Order Form</div>
        <div>
          <div ref={wrapperRef}>
            Company Name{" "}
            <div align="center">
              <TextField
                type="text"
                id="auto"
                placeholder="Company Name"
                onClick={() => setDisplay(!display)}
                onChange={handleChange}
                value={search}
                label="Required"
              />
            </div>
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
          <div>
            Quantity
            <div align="center">
              <TextField
                type="number"
                id="standard-number"
                label="# of Shares"
                name="value"
                style={{ marginTop: 0 }}
                // InputLabelProps={{
                //   shrink: true,
                // }}
                placeholder="Amount"
                step="1.0"
                onChange={onQuantityChange}
                value={props.tradeQuantity}
              />
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleBuyStock}
        >
          Buy
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: 10 }}
          onClick={handleSellStock}
        >
          Sell
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
