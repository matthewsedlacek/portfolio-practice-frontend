import React, { Fragment } from "react";
import { api } from "../services/api";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsList from "../components/profile/news/NewsList";

class Profile extends React.Component {
  state = {
    awards: [],
    newsArray: [],
    watchList: [],
  };

  componentDidMount() {
    // this.fetchNews();
    this.fetchCompanies();
  }

  fetchNews = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.marketNews.getNews().then((data) => {
        this.setState({ newsArray: data });
      });
    }
  };

  fetchCompanies = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.companyData.getCompanies().then((data) => {
        this.setState({ companies: data });
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
          <Col>
            <h2>Awards</h2>
          </Col>
          <Col>
            <h2>Market News</h2>
            <div>
              <NewsList news={this.state.newsArray.data} />
            </div>
          </Col>
          <Col>
            <h2>Watchlist</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
