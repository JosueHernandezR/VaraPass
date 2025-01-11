import { 
    createGearApi, 
    sailsInstance, 
    gearKeyringByWalletData 
} from "./utils.js";
import { 
    CONTRACT_ID, 
    IDL, 
    NETWORK, 
    WALLET_MNEMONIC, 
    WALLET_NAME 
} from "./consts.js";
import { commandRoutes, queryRoutes } from "./paths/index.js";
import express from "express";

// Create express instance
const app = express();

const startServer = async () => {
    try {
        // Set the api
        const api = await createGearApi(NETWORK);
        // Set the sails instance
        const sails = await sailsInstance(
            api,
            NETWORK,
            CONTRACT_ID,
            IDL
        );
        // Set the signer 
        const signer = await gearKeyringByWalletData(
            WALLET_NAME,
            WALLET_MNEMONIC
        );

        // Save the variables in 'app.locals' to use them in each route
        app.locals.sails = sails;
        app.locals.api = api;
        app.locals.signer = signer;

        // Middleware and paths
        app.use(express.json()); // Accept JSON
        // Path for contract commands
        app.use('/command', commandRoutes); 
        // Path for contract querys
        app.use('/queries', queryRoutes);
        // Set the root path
        app.get('/', (_, res) => {
            res.send('Hello, Sails!');
        });

        // Specify the port
        const port = 3000;

        // Start de server with express and set the server variable, 
        // to handle when the sserver is closed.
        const server = app.listen(port, () => {
            console.log('Server listening in http://localhost:3000');
        });

        // Set the process when the dev close the server
        process.on('SIGINT', () => {
            console.log('C\nlosing server...');
            // Disconnect from vara network
            app.locals.api.provider.disconnect();
            // Close the server
            server.close(() => {
                console.log('Server was closed!');
            });
        });
    } catch(e) {
        console.log('Error while starting the server!');
        throw e;
    }
}

startServer().catch(error => {
    console.log('Error in server!');
    throw error;
});