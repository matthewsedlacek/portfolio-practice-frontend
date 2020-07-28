import React, { Fragment } from "react";
import { api } from "../services/api";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Profile extends React.Component {
  state = {
    awards: [],
    news: [],
    watchList: [],
  };

  componentDidMount() {
    this.fetchNews();
    // this.fetchCompanies();
  }

  fetchNews = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.marketNews.getNews().then((data) => {
        this.setState({ news: data });
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col bg="dark">
            <h1>Welcome {this.props.currentUser.username}</h1>{" "}
          </Col>
        </Row>
        <Row>
          <br></br>
          <br></br>{" "}
        </Row>
        <Row>
          <Col>Awards</Col>
          <Col>Market News</Col>
          <Col>Watchlist</Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
