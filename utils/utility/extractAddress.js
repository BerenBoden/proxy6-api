function extractAddress(response) {
  const proxies = [];
  for (const key in response) {
    if (response.hasOwnProperty(key)) {
      const value = response[key];
      const { host, port, user, pass, type } = value;
      if (typeof value === "object" && value.hasOwnProperty("id")) {
        listId = value.id;
      }
      const mubeng = `${type}://${user}:${pass}@${host}:${port}`;
      const proxychains = `${type} ${host} ${port} ${user} ${pass}`;
      const address = `${type}://${host}:${port}@${user}:${pass}`;
      const shortAddress = `$${host}:${port}@${user}:${pass}`;
      proxies.push({
        mubeng,
        proxychains,
        address,
        shortAddress,
        host,
        port,
        user,
        pass,
        type,
      });
    }
  }
  return proxies;
}
module.exports = extractAddress;
