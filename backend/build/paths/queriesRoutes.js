var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { queries } from './../contract-methods/index.js';
import express from 'express';
export const router = express.Router();
// Path to send a query (query - only read state, does not change the state)
// Query: TrafficLight/TrafficLight (ServiceName/MethodName)
router.get('/traffic-light', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // using the specified command, using the variables 
        // in app.locals (these are specified in the main "index.ts" file)
        const response = yield queries.queryTrafficLight(req.app.locals.sails, req.app.locals.signer.address);
        // Send the response from the contract (it is a 
        // json string)
        res.send(JSON.stringify(response));
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
