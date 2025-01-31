const API_URL = "http://localhost:5000/api";

export const submitSurvey = async (answers) => {
  return fetch(`${API_URL}/survey`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  }).then(res => res.json());
};

export const fetchResults = async (token) => {
    return fetch(`${API_URL}/survey`, {
      headers: { Authorization: token },
    }).then(res => res.json());
  };
export const login = async (email, password) => {
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(res => res.json());
  };
