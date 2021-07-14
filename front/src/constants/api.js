const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const BASE_URL = `http://${SERVER_URL}:${SERVER_PORT}/`;

const api = {
  exampleUrl: {
    getAll: BASE_URL + "examples",
  },
};

export default api;
