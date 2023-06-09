const axios = require("axios");
const extractAddress = require("../utility/extractAddress");

async function purchaseProxy(url, country, count, period, type, version = 4) {
  console.log(type)
  try {
    const response = await axios.get(
      `${url}/buy?count=${count}&period=${period}&country=${country}&type=${type}&version=${version}`
    );
    const proxy = extractAddress(response.data.list);
    console.log(
      `Successfully purchased ${count} ${type} ipv${version} ${country} proxy for ${period} days: ${proxy.address}`
    );
  } catch (error) {
    console.error(error.message);
    return;
  }
}

module.exports = purchaseProxy;
