var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const queryTrafficLight = (sails, userAddress) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield sails
                .services // function to get services
                .TrafficLight // Service selected (TrafficLight)
                .queries // Get the queries from the service (queries - no changes state)
                .TrafficLight(userAddress); // Query selected from the service
            // Return the response
            resolve(response);
        }
        catch (e) {
            reject(e);
        }
    }));
};
