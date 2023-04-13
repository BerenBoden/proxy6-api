const axios = require("axios");

async function getPrice(url, count, period, version = 4) {
  try {
    const response = await axios.get(
      `${url}/getprice?count=${count}&period=${period}&version=${version}`
    );
    return response.data.price;
  } catch (error) {
    console.error(error);
    return;
  }
}

module.exports = getPrice;
