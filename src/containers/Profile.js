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
        if (Array.isArray(data)) this.setState({ companies: data });
      });
    }
  };

  fetchTransactions = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.stockPrices.getTransactions().then((data) => {
        if (Array.isArray(data)) this.setState({ transactions: data });
      });
    }
  };

  fetchPortfolios = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getPortfolios().then((data) => {
        if (Array.isArray(data)) {
          this.setState({ portfolios: data }, () => {
            this.findProfitablePortfolios();
          });
        }
      });
    }
  };

  findProfitablePortfolios = () => {
    const newPortfolios = this.state.portfolios.filter(
      (portfolio) =>
        parseFloat(portfolio.starting_value) < parseFloat(portfolio.locked_in_value)
    );
    this.setState({ profitablePortfolios: newPortfolios });
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
    this.setState({ searchedCompanies: company });
  };

  handleWatchListAdd = () => {
    const company = this.state.searchedCompanies;
    if (!company || !company.id) return;
    api.userData
      .newWatchListItem(company, this.props.currentUser)
      .then(() => {
        this.setState({ searchedCompanies: [] });
        this.fetchWatchlist();
      });
  };

  handleWatchListRemove = (watchedItem) => {
    api.userData.deleteWatchListItem(watchedItem).then(() => this.fetchWatchlist());
  };

  render() {
    return (
      <Container style={{ paddingTop: 24 }}>
        <Row style={{ marginBottom: 16, alignItems: "center" }}>
          <Col md={6}>
            <h4>Welcome, {this.props.currentUser.username}</h4>
          </Col>
          <Col md={6}>
            <SearchBar
              companies={this.state.companies}
              selectCompany={this.handleCompanySelect}
              watchListAdd={this.handleWatchListAdd}
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <h6 className="sectionHeading">Awards</h6>
            <AwardList
              portfolios={this.state.portfolios}
              transactions={this.state.transactions}
              profitablePortfolios={this.state.profitablePortfolios}
            />
          </Col>
          <Col md={5}>
            <h6 className="sectionHeading">Market News</h6>
            <NewsList news={this.state.newsArray} />
          </Col>
          <Col md={4}>
            <h6 className="sectionHeading">Watchlist</h6>
            <Watchlist
              userWatchList={this.state.watchList}
              handleDelete={this.handleWatchListRemove}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
