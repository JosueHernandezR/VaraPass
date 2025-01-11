# Express Node Sails

Web server with node and express that contains paths to each command and queries from a contract (In this case [Traffic light contract](https://github.com/Vara-Lab/traffic-light-integration/tree/main/traffic_light_contract))

This script contains necessary functions as well as examples to be able to communicate with a contract, using commands and queries.

## Table of contents:

- [Instalation](#instalation)
- [Setting the environment](#setting-the-environment)
- [Setting the signer](#setting-the-signer)
- [Compilation and execution](#compilation-and-execution)
- [Node server links](#node-server-links)
- [Files and directories](#files-and-directories)

## Instalation

1. You need to go to the directory where you will download the repository.
2. Once you are in the directory, you need to run the following command in your terminal:

```bash
git clone https://github.com/Vara-Lab/Node-Express-Sails.git
```

3. Next, you have to enter in the directory created by git, using:

```bash
cd Node-Express-Sails
```

4. WIth this, you can now set the environment!

## Setting the environment

> You need to install Node 18 or above.

- To install the project dependencies, run the following command in your terminal:

```bash
yarn
```

if you don't have yarn installed, you need to execute the next command to install yarn globally:

```bash
npm i -g yarn
```

## Setting the signer

In the node server, you will need the wallet data that will sign the messages in the script, you have to set the wallet name and the wallet mnemonic to create the signer from that data.

To set this filds, you have to go to the `src/consts.ts` file, and put the wallet data in the constants: `WALLET_NAME` and `WALLET_MNEMONIC`:

```typescript
export const WALLET_NAME: string = ''; // set the wallet name
export const WALLET_MNEMONIC: string = ''; // set the wallet mnemonic
```

## compilation and execution

To compile the node server, you need to run the following command in your terminal:

```bash
yarn tsc
```

And to run the node server (`after running it, it's important to compile it first`), you need to execute the next command in your terminal:

```bash
yarn start
```

With this step, you will see how the server starts and show you the link to use it.

## Node server links

You can use this example links to check the functionality of the server.

- **http://localhost:3000/ (GET):** root path, will send you the text "Hello, Sails!"
- **http://localhost:3000/queries/traffic-light (GET):** This will return you the result of reading the state of the contract with the method "TrafficLigh"
- **http://localhost:3000/command/Green (POST):** This will send the command "Green" to the contract, and will return you the response from the contract.
- **http://localhost:3000/command/Yellow (POST):** This will send the command "Yellow" to the contract, and will return you the response from the contract.
- **http://localhost:3000/command/Red (POST):** This will send the command "Red" to the contract, and will return you the response from the contract.

## Files and directories

- **contract-methods directory:** This directory contains the commands and queries of the contract to be executed.
- **paths directory:** This directory contains all "routers" for node to be used in the server.
- **consts.ts file:** In this file you will find all the constants that you can use in the script, you can change it to set your contract data.
- **utils.ts file:** In this file you will find some helper functions that will help you to handle some common aspects, like create a new GearAPi instance, Sails instance, etc.
- **index.ts file:** Here you will find the main functions that will execute the script to send al the messages and queries to the contract.