const axios = require("axios");

async function getAccountBalance(url) {
  try {
    const response = await axios.get(`${url}/getbalance`);
    return response.data.balance;
  } catch (error) {
    console.error("Error getting account balance:", error.message);
    return null;
  }
}

module.exports = getAccountBalance;