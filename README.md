# Crypto Dashboard mini-app

## Live demo

https://crypto-wallet-info.netlify.app/

## What is it?

The app aims to leverage wide range of Dynamic SDK's wallets and blockchains connectors to allow for connecting addresses from multiple networks and display information about all owned wallets at one glance.

The app consists of 2 tabs:

- **Dashboard tab**: displays basic information about connected wallets, like total balance of USD and native token across all connected wallets, as well as some transactions, inflows and outflows info.
- **Transactions tab**: allows for looking up transactions for any of the connected wallets

---

## Running the app

Run `npm install` to install dependencies

Run `npm start` to start for dev development

---

You need .env file to run the app.

`.env.sample` file contains all necessary env variables.

Blockchain explorers (i.e. backend) can run on public keys provided in this file, although you will quickly hit an API limit and will have to wait for it to cool down.

You will however need to change `VITE_DYNAMIC_SDK_KEY` env var for Dynamic SDK (i.e. authorization). The app uses the Advanced tier of [Dynamic service](https://dynamic.xyz/).
