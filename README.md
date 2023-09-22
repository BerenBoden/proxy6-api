Proxy6 API CLI
A command-line interface (CLI) application for purchasing and managing proxies using the Proxy6 API.

Prerequisites
Node.js
An API key from Proxy6
Installation
Clone the repository or download the source code
Install the required dependencies:
npm install
Usage
The application supports the following commands:

getAvailableProxies: Retrieves the number of available proxies for a specified country and IP version
getPrice: Retrieves the price for purchasing a specified number of proxies for a specific period and IP version
purchaseProxy: Purchases proxies and saves them to a JSON file
Examples:
To get the number of available proxies for the United States with IPv4:
```
node index.js getAvailableProxies --country us --ip_version 4
```

To get the price for purchasing 10 proxies for 30 days with IPv4:
```
node index.js getPrice --count 10 --period 30 --ip_version 4
```

To purchase 10 proxies for 30 days with IPv4, from the United States, and using the HTTP protocol:
```
node index.js purchaseProxy --count 10 --period 30 --country us --ip_version 4 --type http
```
Open the index.js file and replace the following line with your own API key or store in a .env file:

const API_KEY = "your_api_key_here";

Contributing
Feel free to submit pull requests, report bugs, or suggest new features.

License
This project is licensed under the MIT License - see the LICENSE file for details.
