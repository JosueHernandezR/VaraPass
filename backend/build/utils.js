var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GearApi, GearKeyring } from "@gear-js/api";
import { Keyring } from "@polkadot/api";
import { Sails } from "sails-js";
import { SailsIdlParser } from "sails-js-parser";
// Function that create a GearApi instance with the given network
export const createGearApi = (network) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const api = yield GearApi.create({
                providerAddress: network
            });
            resolve(api);
        }
        catch (e) {
            reject(e);
        }
    }));
};
// Function that returns the signer from wallet name and mneminic
export const gearKeyringByWalletData = (walletName, walletMenemonic) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const signer = yield GearKeyring.fromMnemonic(walletMenemonic, walletName);
            resolve(signer);
        }
        catch (e) {
            reject(e);
        }
    }));
};
// Function that returns the signer from wallet name and mnemonic
export const keyringByWalletData = (walletName, walletMenemonic) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
            const signer = keyring.addFromMnemonic(walletMenemonic);
            resolve(signer);
        }
        catch (e) {
            reject(e);
        }
    }));
};
// Function that reuturns a Sails intance from given GearApi, network, contractId and idl
export const sailsInstance = (api, network, contractId, idl) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const parser = yield SailsIdlParser.new();
        const sails = new Sails(parser);
        try {
            sails.setApi(api);
            sails.setProgramId(contractId);
            sails.parseIdl(idl);
            resolve(sails);
        }
        catch (e) {
            reject(e);
        }
    }));
};
