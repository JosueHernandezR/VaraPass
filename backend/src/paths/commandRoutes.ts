import { commands } from './../contract-methods/index.js';
import express from 'express';

export const router = express.Router();

// Path to send a message (coommand - Changes the state)
// First command: TrafficLight/Green (ServiceName/MethodName)
router.post('/Green', async (req, res) => {
    try {
        // Uusing the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = await commands.commandGreen(
            req.app.locals.sails,
            req.app.locals.signer
        );

        // Send the response from the contract
        res.send(response);
    } catch(error: any) {
        // An error occurred, sending an error message
        console.log('Error: ', error.message)
        res.status(500).json({
            error: 'Error while sending message to the contract',
            details: (error as Error).message
        });
    }
});

// Path to send a message (coommand - Changes the state)
// Second command: TrafficLight/Yellow (ServiceName/MethodName)
router.post('/Yellow', async (req, res) => {
    try {
        // using the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = await commands.commandYellow(
            req.app.locals.sails,
            req.app.locals.signer
        );

        // Send the response from the contract
        res.send(response);
    } catch(error: any) {
        // An error occurred, sending an error message
        console.log('Error: ', error.message)
        res.status(500).json({
            error: 'Error while sending message to the contract',
            details: (error as Error).message
        });
    }
});

// Path to send a message (coommand - Changes the state)
// Third command: TrafficLight/Green (ServiceName/MethodName)
router.post('/Red', async (req, res) => {
    try {
        // using the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = await commands.commandRed(
            req.app.locals.sails,
            req.app.locals.signer
        );

        // Send the response from the contract
        res.send(response);
    } catch(error: any) {
        // An error occurred, sending an error message
        console.log('Error: ', error.message)
        res.status(500).json({
            error: 'Error while sending message to the contract',
            details: (error as Error).message
        });
    }
});