import React, { Component } from "react";

class OrderForm extends Component {
  handleFilter = (e) => {
    console.log(e.target.value);
    console.log(this.props);
    this.props.onfilterCompanies(e);
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.handleSubmit(event);
  // };

  render() {
    // const { title, amount } = this.props.newPortfolio;
    return (
      <div>
        <form>
          <div>
            Name{" "}
            <input
              type="text"
              placeholder="Company Name"
              onChange={(e) => this.handleFilter(e)}
            />
            Quantity{" "}
            <input
              type="text"
              name="name"
              // placeholder="Portfolio Name"
              // onChange={this.onChange}
              // value={this.props.newPortfolio.title}
            />
          </div>
          <button type="submit">Buy</button>
          <button type="submit">Sell</button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
