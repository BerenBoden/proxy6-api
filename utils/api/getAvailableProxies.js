const axios = require("axios");

async function getAvailableProxies(url, country, ip_version) {
  try {
    const response = await axios.get(
      `${url}/getcount?country=${country}&version=${ip_version}`
    );
    console.log(response.data.count);
    return;
  } catch (err) {
    console.log(err);
    return;
  }
}

module.exports = getAvailableProxies;