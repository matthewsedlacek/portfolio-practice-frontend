// const API_ROOT = `http://localhost:3000/api/v1`;
// const API = `http://localhost:3000`;

const API_ROOT = `https://salty-ravine-43340.herokuapp.com/api/v1`;
const API = `https://salty-ravine-43340.herokuapp.com`;

const NEWS = `https://stocknewsapi.com/api/v1/category?section=general&items=50&token=`;
const WATCHED_STOCK = `https://finnhub.io/api/v1/quote?symbol=`;
const FINNHUB_TOKEN = process.env.REACT_APP_FINNHUB_API_KEY;
const NEWS_TOKEN = process.env.REACT_APP_NEWS_API_KEY;
const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

const newsHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

const stockHeaders = () => {
  return {
    "Content-Type": "text/plain",
    Accept: "text/plain",
  };
};

const login = (data) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
};

const getCurrentUser = (data) => {
  return fetch(`${API_ROOT}/profile`, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());
};

const createUser = (data) => {
  return fetch(`${API_ROOT}/users/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      user: {
        username: data.username,
        password: data.password,
      },
    }),
  }).then((res) => res.json());
};

const getPortfolios = () => {
  return fetch(`${API}/portfolios/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getNews = () => {
  return fetch(`${NEWS}${NEWS_TOKEN}`, { headers: newsHeaders() }).then((res) =>
    res.json()
  );
};

const getWatchListPrice = (ticker) => {
  return fetch(`${WATCHED_STOCK}${ticker}&token=${FINNHUB_TOKEN}`, {
    headers: stockHeaders(),
  }).then((res) => res.json());
};

const getCurrentStockPrice = (ticker) => {
  return fetch(`${WATCHED_STOCK}${ticker}&token=${FINNHUB_TOKEN}`, {
    headers: stockHeaders(),
  }).then((res) => res.json());
};

const newPortfolio = (data, currentUser) => {
  return fetch(`${API}/portfolios`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      name: data.name,
      starting_value: data.value,
      user_id: currentUser.id,
      locked_in_value: data.value,
      available_cash: data.value,
    }),
  }).then((res) => res.json());
};

const newWatchlist = (data) => {
  return fetch(`${API}/watchlists`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      id: data.id,
      user_id: data.id,
    }),
  }).then((res) => res.json());
};

const getTransactions = () => {
  return fetch(`${API}/transactions/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getCompanies = () => {
  return fetch(`${API}/companies/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getWatchList = () => {
  return fetch(`${API}/watchlist_companies`, {
    headers: headers(),
  }).then((res) => res.json());
};

const newBuyTransaction = (
  portfolio,
  quantity,
  tradeValue,
  companyId,
  stockPrice
) => {
  let portfolioId = parseInt(portfolio.id);
  let purchaseQuantity = parseInt(quantity);
  return fetch(`${API}/transactions/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      portfolio_id: portfolioId,
      buy_sell: "buy",
      quantity: purchaseQuantity,
      value: tradeValue,
      share_price: stockPrice,
      company_id: companyId,
    }),
  }).then((res) => res.json());
};

const stockPurchase = (portfolio, transactionValue) => {
  let portfolioId = portfolio.id;
  let currentValue = portfolio.available_cash;
  let newValue = currentValue - transactionValue;
  return fetch(`${API}/portfolios/${portfolioId}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      available_cash: newValue,
    }),
  }).then((res) => res.json());
};

const newSellTransaction = (
  company,
  portfolio,
  quantity,
  transactionValue,
  stockPrice
) => {
  let portfolioId = parseInt(portfolio.id);
  let sellQuantity = parseInt(quantity);
  return fetch(`${API}/transactions/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      portfolio_id: portfolioId,
      buy_sell: "sell",
      quantity: sellQuantity,
      value: transactionValue,
      share_price: stockPrice,
      company_id: company.id,
    }),
  }).then((res) => res.json());
};

const stockSale = (portfolio, transactionValue, totalGainLoss) => {
  let portfolioId = portfolio.id;
  let currentValue = portfolio.available_cash;
  let newValue = currentValue + transactionValue;
  let newPortfolioValue = portfolio.locked_in_value + totalGainLoss;
  return fetch(`${API}/portfolios/${portfolioId}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      available_cash: newValue,
      locked_in_value: newPortfolioValue,
    }),
  }).then((res) => res.json());
};

const newWatchListItem = (company, user) => {
  return fetch(`${API}/watchlist_companies`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      watchlist_id: user.id,
      company_id: company.id,
    }),
  }).then((res) => res.json());
};

const deleteWatchListItem = (watchedItem) => {
  return fetch(`${API}/watchlist_companies/${watchedItem.id}`, {
    method: "DELETE",
    headers: headers(),
  }).then((res) => res.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser,
  },
  newUser: {
    createUser,
    newWatchlist,
  },
  userData: {
    getPortfolios,
    newPortfolio,
    newBuyTransaction,
    newSellTransaction,
    stockPurchase,
    stockSale,
    getWatchList,
    newWatchListItem,
    deleteWatchListItem,
  },
  stockPrices: {
    getTransactions,
    getWatchListPrice,
    getCurrentStockPrice,
  },
  marketNews: {
    getNews,
  },
  companyData: {
    getCompanies,
  },
};
