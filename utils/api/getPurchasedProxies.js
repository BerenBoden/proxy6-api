const axios = require("axios");
const overwriteJson = require("../utility/overwriteJson");
const extractAddress = require("../utility/extractAddress");

async function getPurchasedProxies(url, format = "address", version) {
  try {
    const response = await axios.get(`${url}/getproxy`);
    const proxy = extractAddress(response.data.list);
    overwriteJson("proxies.json", proxy);
    proxy.map((p) => console.log(+p.version, +version));
    console.log(
      `Your Proxies: ${proxy
        .filter((p) => +p.version === +version)
        .map((p) => p[format])}`
    );
  } catch (error) {
    console.error("Error getting purchased proxies:", error.message);
    return null;
  }
}

module.exports = getPurchasedProxies;
