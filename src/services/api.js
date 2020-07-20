const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};


const login = data => {
  return fetch(`${API_ROOT}/login`,{
    method:"POST",
    headers: headers(),
    body: JSON.stringify({"user":data})
  })
  .then(res => res.json())
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/profile`,{
    headers:headers()
  }).then(res => res.json())
};

const createUser = data => {
return fetch(`${API_ROOT}/users`,{
  method:"POST",
  headers: headers(),
  body: JSON.stringify({"user":data})
})
.then(res => res.json())
};


export const api = {
  auth: {
    login,
    getCurrentUser
  },
  newUser: {
    createUser
  }
};