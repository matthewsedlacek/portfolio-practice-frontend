import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const OrderForm = (props) => {
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
      props.companies.filter((c) =>
        c.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleCompanyClick = (company) => {
    props.selectCompany(company);
    setSearch(company.name);
    setDisplay(false);
  };

  return (
    <div>
      <Typography variant="subtitle1" style={{ fontWeight: 600, marginBottom: 8 }}>
        Order Form
      </Typography>
      <form>
        <div ref={wrapperRef} style={{ marginBottom: 16 }}>
          <TextField
            fullWidth
            type="text"
            label="Company Name"
            placeholder="Search companies"
            onClick={() => setDisplay(!display)}
            onChange={handleChange}
            value={search}
          />
          {display && (
            <div className="autoContainer">
              {options.map((company, i) => (
                <div
                  key={i}
                  onClick={() => handleCompanyClick(company)}
                  className="option"
                  tabIndex="0"
                >
                  {company.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ marginBottom: 16 }}>
          <TextField
            fullWidth
            type="number"
            label="Shares"
            placeholder="Number of shares"
            onChange={props.handleQuantityChange}
            value={props.updatedQuantity}
          />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2e7d32", color: "white", flex: 1 }}
            type="submit"
            onClick={props.handleBuyStock}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#c62828", color: "white", flex: 1 }}
            type="submit"
            onClick={props.handleSellStock}
          >
            Sell
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
