const axios = require("axios");

async function purchaseProxy(url, country, count, period, type, version = 4) {
  try {
    const response = await axios.get(
      `${url}/buy?count=${count}&period=${period}&country=${country}&type=${type}&version=${version}`
    );
        console.log(response)
    let listId = "";
    for (const key in response.data.list) {
      if (response.data.list.hasOwnProperty(key)) {
        const value = response.data.list[key];
        if (typeof value === "object" && value.hasOwnProperty("id")) {
          listId = value.id;
        }
      }
    }

    return listId;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = purchaseProxy;
