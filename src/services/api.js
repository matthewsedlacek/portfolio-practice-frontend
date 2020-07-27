const API_ROOT = `http://localhost:3000/api/v1`;
const API = `http://localhost:3000/`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
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
  console.log(data);
  return fetch(`${API_ROOT}/profile`, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());
};

const createUser = (data) => {
  console.log(data);
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

const newPortfolio = (data, currentUser) => {
  console.log(data);
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

const getStockPrices = () => {
  return fetch(`${API}/stock_prices/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getCompanies = () => {
  return fetch(`${API}/companies/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const newBuyTransaction = (data, portfolio, quantity, transactionValue) => {
  let stockId = parseInt(data[data.length - 1].id);
  let portfolioId = parseInt(portfolio.id);
  let purchaseQuantity = parseInt(quantity);
  return fetch(`${API}/transactions/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      stock_price_id: stockId,
      portfolio_id: portfolioId,
      buy_sell: "buy",
      quantity: purchaseQuantity,
      value: transactionValue,
    }),
  }).then((res) => res.json());
};

const stockPurchase = (portfolio, transactionValue) => {
  console.log(portfolio);
  let portfolioId = portfolio.id;
  let currentValue = portfolio.available_cash;
  let newValue = currentValue - transactionValue;
  console.log(newValue);
  console.log(transactionValue);
  return fetch(`${API}/portfolios/${portfolioId}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      available_cash: newValue,
    }),
  }).then((res) => res.json());
};

const newSellTransaction = (data, portfolio, quantity, transactionValue) => {
  let stockId = parseInt(data[data.length - 1].id);
  let portfolioId = parseInt(portfolio.id);
  let purchaseQuantity = parseInt(quantity);
  return fetch(`${API}/transactions/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      stock_price_id: stockId,
      portfolio_id: portfolioId,
      buy_sell: "sell",
      quantity: purchaseQuantity,
      value: transactionValue,
    }),
  }).then((res) => res.json());
};

const stockSale = (portfolio, transactionValue) => {
  console.log(portfolio);
  let portfolioId = portfolio.id;
  let currentValue = portfolio.available_cash;
  let newValue = currentValue + transactionValue;
  console.log(newValue);
  console.log(transactionValue);
  return fetch(`${API}/portfolios/${portfolioId}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      available_cash: newValue,
      // need logic to tell if gain or loss
    }),
  }).then((res) => res.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser,
  },
  newUser: {
    createUser,
  },
  userData: {
    getPortfolios,
    newPortfolio,
    newBuyTransaction,
    newSellTransaction,
    stockPurchase,
    stockSale,
  },
  stockPrices: {
    getStockPrices,
  },
  companyData: {
    getCompanies,
  },
};
