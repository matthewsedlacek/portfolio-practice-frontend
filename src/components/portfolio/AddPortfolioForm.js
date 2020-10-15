import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class AddPortfolioForm extends Component {
  onChange = (e) => {
    this.props.handleChange(e);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(event);
    this.form.reset();
  };

  render() {
    const { title, amount } = this.props.newPortfolio;
    return (
      <Container>
        <br></br>
        <div>
          <Form ref={(form) => (this.form = form)}>
            <Row className="portfolioCreateBar">
              <Col>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Portfolio Name"
                  onChange={this.onChange}
                  value={title}
                />
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    name="value"
                    placeholder="Amount"
                    step="100.0"
                    onChange={this.onChange}
                    value={amount}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Button
              variant="primary"
              active
              type="submit"
              onClick={this.handleSubmit}
            >
              Create New Portfolio
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default AddPortfolioForm;
