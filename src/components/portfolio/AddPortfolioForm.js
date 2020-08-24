import React, { Component } from "react";
import Container from "react-bootstrap/Container";

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
      <Container>
        <div>
          <form>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Portfolio Name"
                onChange={this.onChange}
                value={title}
              />
              <input
                type="number"
                name="value"
                placeholder="Amount"
                step="100.0"
                onChange={this.onChange}
                value={amount}
              />
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Create New Portfolio
            </button>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddPortfolioForm;
