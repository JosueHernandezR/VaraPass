import { queries } from './../contract-methods/index.js';
import express from 'express';

export const router = express.Router();

// Path to send a query (query - only read state, does not change the state)
// Query: TrafficLight/TrafficLight (ServiceName/MethodName)
router.get('/traffic-light', async (req, res) => {
    try {
        // using the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = await queries.queryTrafficLight(
            req.app.locals.sails,
            req.app.locals.signer.address
        );

        // Send the response from the contract (it is a 
        // json string)
        res.send(JSON.stringify(response));
    } catch(error: any) {
        // An error occurred, sending an error message
        console.log('Error: ', error.message)
        res.status(500).json({
            error: 'Error while sending message to the contract',
            details: (error as Error).message
        });
    }
});