import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchBar = (props) => {
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

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    props.watchListAdd(e);
    setSearch("");
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
      <div ref={wrapperRef} style={{ flex: 1 }}>
        <TextField
          fullWidth
          type="text"
          label="Add to Watchlist"
          placeholder="Search company name"
          onClick={() => setDisplay(!display)}
          onChange={handleChange}
          value={search}
          size="small"
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
      <Button
        variant="contained"
        style={{ backgroundColor: "#2395cb", color: "white", marginTop: 2 }}
        onClick={handleAddToWatchlist}
        type="submit"
      >
        Add
      </Button>
    </div>
  );
};

export default SearchBar;
