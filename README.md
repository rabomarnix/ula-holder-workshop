# ULA workshop

This repo contains the source code for an ionic app which can run on ios, android and browser.
Your task is to implement [ULA](https://github.com/rabobank-blockchain/universal-ledger-agent) plugins, in order to build your own identity app.

## Setup

- Install [node.js](https://nodejs.org/en/)
- Install Ionic with `npm install ionic -g`
- Install Cordova: `npm install cordova@8.1.2 -g`
- Install app dependencies with `cd app`, `npm install`

During the workshop preparation, you have received a website in which you can create an account and generate a QR code.

## Work!

This basic app has a QR code scanner, but misses the following:
1. Logic for interpreting the QR code
2. Logic for receiving and sending credentials
3. Logic for storing and receiving credentials locally

You will initialize and load the following plugins to feed your app with the required logic:
1. [universal-ledger-agent](https://github.com/rabobank-blockchain/universal-ledger-agent)
2. [ula-process-eth-barcode](https://github.com/rabobank-blockchain/ula-process-eth-barcode)
3. [ula-vp-controller](https://github.com/rabobank-blockchain/ula-vp-controller)
4. [ula-vc-data-management](https://github.com/rabobank-blockchain/ula-vc-data-management)

**Tip:** [You can follow the full integration guide for all plugins above here](https://github.com/rabobank-blockchain/universal-ledger-agent/blob/master/docs/Integration.md#installing-the-components).

After initializing these plugins with their dependencies, you need to tie the knots:
- Send the QR scanner payload to the ULA to kick off the credential exchange process
- In case of sending credentials to a third party, the user needs to give consent
- Show the credentials
- Show the exchange transactions

## Running the app
You can use the live reload feature by running `ionic serve`,
but unfortunately the QR code scanner isn't available with live reload.
In order to properly use all native features in the browser, run `ionic cordova run browser`.
