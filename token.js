const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const newToken = jwt.sign({ id },'vjkcsavdjkasvdj123dsf', {
    expiresIn: "7d",
  });
  return newToken;
};

module.exports = generateToken;
