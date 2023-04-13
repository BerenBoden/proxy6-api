const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const fs = require("fs");
const dotenv = require("dotenv");
const getAvailableProxies = require("./utils/getAvailableProxies");
const getPrice = require("./utils/getPrice");
const purchaseProxy = require("./utils/purchaseProxy");
const getAccountBalance = require("./utils/getAccountBalance");

dotenv.config();
const BASE_URL = `https://proxy6.net/api/${process.env.API_KEY}`;

// Your existing functions: appendJsonToFile, getPrice, buyProxy, purchaseProxy

async function main(argv) {
  debugger;
  try {
    const command = argv._[0];
    switch (command) {
      case "getAvailableProxies":
        const availableProxies = await getAvailableProxies(
          BASE_URL,
          argv.country,
          argv.ip_version
        );
        console.log(`Available proxies: `, availableProxies);
        break;

      case "getPrice":
        const price = await getPrice(
          BASE_URL,
          argv?.count,
          argv?.period,
          argv?.ip_version
        );
        console.log(`Price: ${price}`);
        break;

      case "purchaseProxy":
        await purchaseProxy(
          BASE_URL,
          argv?.count,
          argv?.period,
          argv?.ip_version,
          argv?.type
        );
        break;
      case "getAccountBalance":
        const balance = await getAccountBalance(BASE_URL);
        console.log(`Balance: ${balance}`);
        break;
      default:
        console.error("Invalid command");
        break;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const argv = yargs(hideBin(process.argv))
  .command("getAvailableProxies", "Get available proxies", (yargs) => {
    yargs.option("country", {
      type: "string",
      demandOption: true,
      description: "Country code",
    });
    yargs.option("ip_version", {
      type: "number",
      default: 4,
      description: "IP version (4 or 6)",
    });
  })
  .command("getPrice", "Get price", (yargs) => {
    yargs.option("count", {
      type: "number",
      demandOption: true,
      description: "Number of proxies",
    });
    yargs.option("period", {
      type: "number",
      demandOption: true,
      description: "Period in days",
    });
    yargs.option("ip_version", {
      type: "number",
      default: 4,
      description: "IP version (4 or 6)",
    });
  })
  .command("purchaseProxy", "Purchase proxy", (yargs) => {
    yargs.option("count", {
      type: "number",
      demandOption: true,
      description: "Number of proxies",
    });
    yargs.option("period", {
      type: "number",
      demandOption: true,
      description: "Period in days",
    });
    yargs.option("country", {
      type: "string",
      default: "us",
      description: "Country code",
    });
    yargs.option("ip_version", {
      type: "number",
      default: 4,
      description: "IP version (4 or 6)",
    });
    yargs.option("type", {
      type: "string",
      default: "http",
      description: "Proxy type (http or socks)",
    });
  })
  .demandCommand(1, "Please specify a command")
  .help().argv;

main(argv);
