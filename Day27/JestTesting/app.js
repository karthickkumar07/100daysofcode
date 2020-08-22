const axios = require("axios");

const functions = {
  add: (n1, n2) => n1 + n2,
  isNull: () => null,
  checkvalue: (x) => x,
  isUndefined: () => undefined,
  createUser: () => {
    const user = "karthick";
    const email = "karthi@spart.com";
    const details = user + " " + email;
    return details;
  },
  createuserObject: () => {
    const user = {
      firstname: "karthi",
      lastname: "krish",
    };
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/5")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
