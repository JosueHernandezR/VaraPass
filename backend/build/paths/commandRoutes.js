var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { commands } from './../contract-methods/index.js';
import express from 'express';
export const router = express.Router();
// Path to send a message (coommand - Changes the state)
// First command: TrafficLight/Green (ServiceName/MethodName)
router.post('/Green', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Uusing the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = yield commands.commandGreen(req.app.locals.sails, req.app.locals.signer);
        // Send the response from the contract
        res.send(response);
    }
    catch (error) {
        // An error occurred, sending an error message
        console.log('Error: ', error.message);
        res.status(500).json({
            error: 'Error while sending message to the contract',
            details: error.message
        });
    }
}));
// Path to send a message (coommand - Changes the state)
// Second command: TrafficLight/Yellow (ServiceName/MethodName)
router.post('/Yellow', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // using the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = yield commands.commandYellow(req.app.locals.sails, req.app.locals.signer);
        // Send the response from the contract
        res.send(response);
    }
    catch (error) {
        // An error occurred, sending an error message
        console.log('Error: ', error.message);
        res.status(500).json({
            error: 'Error while sending message to the contract',
            details: error.message
        });
    }
}));
// Path to send a message (coommand - Changes the state)
// Third command: TrafficLight/Green (ServiceName/MethodName)
router.post('/Red', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // using the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = yield commands.commandRed(req.app.locals.sails, req.app.locals.signer);
        // Send the response from the contract
        res.send(response);
    }
    catch (error) {
        // An error occurred, sending an error message
        console.log('Error: ', error.message);
        res.status(500).json({
            error: 'Error while sending message to the contract',
            details: error.message
        });
    }
}));
