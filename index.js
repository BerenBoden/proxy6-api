const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const axios = require('axios');
const fs = require('fs');

const API_KEY = "00";
const BASE_URL = `https://proxy6.net/api/${API_KEY}`;

// Your existing functions: appendJsonToFile, getAvailableProxies, getPrice, buyProxy, purchaseProxy

async function main(argv) {
  try {
    const command = argv.command;

    switch (command) {
      case "getAvailableProxies":
        const availableProxies = await getAvailableProxies(argv.country, argv.ip_version);
        console.log(`Available proxies: ${availableProxies}`);
        break;

      case "getPrice":
        const price = await getPrice(argv.count, argv.period, argv.ip_version);
        console.log(`Price: ${price}`);
        break;

      case "purchaseProxy":
        await purchaseProxy(argv.count, argv.period, argv.country, argv.ip_version, argv.type);
        break;

      default:
        console.error("Invalid command");
        break;
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const argv = yargs(hideBin(process.argv))
  .command('getAvailableProxies', 'Get available proxies', (yargs) => {
    yargs.option('country', { type: 'string', demandOption: true, description: 'Country code' });
    yargs.option('ip_version', { type: 'number', default: 4, description: 'IP version (4 or 6)' });
  })
  .command('getPrice', 'Get price', (yargs) => {
    yargs.option('count', { type: 'number', demandOption: true, description: 'Number of proxies' });
    yargs.option('period', { type: 'number', demandOption: true, description: 'Period in days' });
    yargs.option('ip_version', { type: 'number', default: 4, description: 'IP version (4 or 6)' });
  })
  .command('purchaseProxy', 'Purchase proxy', (yargs) => {
    yargs.option('count', { type: 'number', demandOption: true, description: 'Number of proxies' });
    yargs.option('period', { type: 'number', demandOption: true, description: 'Period in days' });
    yargs.option('country', { type: 'string', default: 'us', description: 'Country code' });
    yargs.option('ip_version', { type: 'number', default: 4, description: 'IP version (4 or 6)' });
    yargs.option('type', { type: 'string', default: 'http', description: 'Proxy type (http or socks)' });
  })
  .demandCommand(1, 'Please specify a command')
  .help()
  .argv;

main(argv);