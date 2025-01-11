var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const commandGreen = (sails, signer) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const transaction = yield sails
            .services // function to get services
            .TrafficLight // Service selected (TrafficLight)
            .functions // Get the functions from the service (commands - change state)
            .Green() // Command selected from service, if there are arguments, they are put here
            .withAccount(signer) // Set the account that will sign the message
            .calculateGas(); // Calculate gas fees for extrinsic
        // Sign the message, and get the blockhash and the "async" response
        const { blockHash, response } = yield transaction.signAndSend();
        // Print the block hash
        console.log(`Block hash: ${blockHash}`);
        try {
            // Waiting for response from contract
            const contractResponse = yield response();
            // return response 
            resolve(contractResponse);
        }
        catch (e) {
            reject(e);
        }
    }));
};
export const commandYellow = (sails, signer) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const transaction = yield sails
            .services // function to get services
            .TrafficLight // Service selected (TrafficLight)
            .functions // Get the functions from the service (commands - change state)
            .Yellow() // Command selected from service, if there are arguments, they are put here
            .withAccount(signer) // Set the account that will sign the message
            .calculateGas(); // Calculate gas fees for extrinsic
        // Sign the message, and get the blockhash and the "async" response
        const { blockHash, response } = yield transaction.signAndSend();
        // Print the block hash
        console.log(`Block hash: ${blockHash}`);
        try {
            // Waiting for response from contract
            const contractResponse = yield response();
            // return response 
            resolve(contractResponse);
        }
        catch (e) {
            reject(e);
        }
    }));
};
export const commandRed = (sails, signer) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const transaction = yield sails
            .services // function to get services
            .TrafficLight // Service selected (TrafficLight)
            .functions // Get the functions from the service (commands - change state)
            .Red() // Command selected from service, if there are arguments, they are put here
            .withAccount(signer) // Set the account that will sign the message
            .calculateGas(); // Calculate gas fees for extrinsic
        // Sign the message, and get the blockhash and the "async" response
        const { blockHash, response } = yield transaction.signAndSend();
        // Print the block hash
        console.log(`Block hash: ${blockHash}`);
        try {
            // Waiting for response from contract
            const contractResponse = yield response();
            // return response 
            resolve(contractResponse);
        }
        catch (e) {
            reject(e);
        }
    }));
};
