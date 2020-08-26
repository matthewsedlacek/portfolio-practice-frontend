import React from "react";
import { api } from "../services/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsList from "../components/profile/news/NewsList";
import SearchBar from "../components/profile/watchlist/SearchBar";
import Watchlist from "../components/profile/watchlist/Watchlist";
import AwardList from "../components/profile/awards/AwardList";

class Profile extends React.Component {
  state = {
    newsArray: [],
    watchList: [],
    companies: [],
    searchedCompanies: [],
    portfolios: [],
    profitablePortfolios: [],
    transactions: [],
  };

  componentDidMount() {
    this.fetchWatchlist();
    this.fetchNews();
    this.fetchCompanies();
    this.fetchPortfolios();
    this.fetchTransactions();
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

  fetchTransactions = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.stockPrices.getTransactions().then((data) => {
        this.setState({ transactions: data });
      });
    }
  };

  fetchPortfolios = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getPortfolios().then((data) => {
        this.setState({ portfolios: data });
        this.findProfitablePortfolios();
      });
    }
  };

  findProfitablePortfolios = () => {
    const newPortfolios = this.state.portfolios.filter(
      (portfolio) => portfolio.starting_value < portfolio.locked_in_value
    );
    this.setState({
      profitablePortfolios: newPortfolios,
    });
  };

  fetchWatchlist = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getWatchList().then((data) => {
        this.setState({ watchList: data });
      });
    }
  };

  handleCompanySelect = (company) => {
    this.setState({
      searchedCompanies: company,
    });
  };

  handleWatchListAdd = () => {
    api.userData
      .newWatchListItem(this.state.searchedCompanies, this.props.currentUser)
      .then((res) => {
        this.fetchWatchlist();
      });
  };

  handleWatchListRemove = (watchedItem) => {
    api.userData.deleteWatchListItem(watchedItem).then((res) => {
      this.fetchWatchlist();
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={4} bg="dark">
            <h1>Welcome {this.props.currentUser.username}</h1>{" "}
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <SearchBar
              companies={this.state.companies}
              selectCompany={this.handleCompanySelect}
              watchListAdd={this.handleWatchListAdd}
            />
          </Col>
        </Row>
        <Row>
          <br></br>
          <br></br>{" "}
        </Row>
        <Row>
          <Col>
            <h2>Awards</h2>
            <AwardList
              portfolios={this.state.portfolios}
              transactions={this.state.transactions}
              profitablePortfolios={this.state.profitablePortfolios}
            />
          </Col>
          <Col>
            <h2>Market News</h2>
            <div>
              <NewsList news={this.state.newsArray.data} />
            </div>
          </Col>
          <Col>
            <h2>Watchlist</h2>
            <div>
              <Watchlist
                userWatchList={this.state.watchList}
                handleDelete={this.handleWatchListRemove}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
