import React, { Component } from "react";

class AddPortfolioForm extends Component {
  onChange = (e) => {
    console.log(e);
    this.props.handleChange(e);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(event);
  };

  render() {
    const { title, amount } = this.props.newPortfolio;
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Portfolio Name"
              onChange={this.onChange}
              value={this.props.newPortfolio.title}
            />
            <input
              type="number"
              name="value"
              placeholder="Amount"
              step="100.0"
              onChange={this.onChange}
              value={this.props.newPortfolio.amount}
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Create New Portfolio
          </button>
        </form>
      </div>
    );
  }
}

export default AddPortfolioForm;
