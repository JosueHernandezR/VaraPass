import { HexString } from '@gear-js/api';

interface ContractSails {
  programId: HexString,
  idl: string
}

export const ACCOUNT_ID_LOCAL_STORAGE_KEY = 'account';

export const ADDRESS = {
  NODE: 'wss://testnet.vara.network',
};

export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  NOTFOUND: '*',
};

// To use the example code, enter the details of the account that will pay the vouchers, etc. (name and mnemonic)
export const sponsorName = "test3";
export const sponsorMnemonic = "elder mushroom hurry address require illegal session myself local auction lunch kind";

export const CONTRACT_DATA: ContractSails = {
  programId: '0xae13a0e8feeb5bcc9b9830875201b0edb6ef0d1945edd62abf5ce13c73661767',
  idl: `
  type KeyringData = struct {
    address: str,
    encoded: str,
  };
  
  type KeyringEvent = enum {
    KeyringAccountSet,
    Error: KeyringError,
  };
  
  type KeyringError = enum {
    KeyringAddressAlreadyEsists,
    UserAddressAlreadyExists,
    UserCodedNameAlreadyExists,
    UserDoesNotHasKeyringAccount,
    KeyringAccountAlreadyExists,
    SessionHasInvalidCredentials,
    UserAndKeyringAddressAreTheSame,
  };
  
  type KeyringQueryEvent = enum {
    LastWhoCall: actor_id,
    SignlessAccountAddress: opt actor_id,
    SignlessAccountData: opt KeyringData,
  };
  
  type VnftManagerEvents = enum {
    VFTContractIdSet,
    NewNFTMinted,
    NftBurned,
    TokenTransferred,
    NewAdminAdded: actor_id,
    Error: VnftManagerErrors,
  };
  
  type VnftManagerErrors = enum {
    OnlyAdminsCanDoThatAction,
    VftContractIdNotSet,
    ContractIsNotApproved,
    ErrorInVNFTContract: str,
    OperationWasNotPerformed,
  };
  
  type TokenMetadata = struct {
    name: str,
    description: str,
    media: str,
    reference: str,
  };
  
  type VnftManagerQueryEvents = enum {
    UserNumOfTokensOwned: u256,
    UserNumOfTokensOwnedAsu128: u128,
    NFTAddressApproved: opt actor_id,
    NFTOwner: actor_id,
    Error: VnftManagerErrors,
  };
  
  constructor {
    New : ();
    NewWithVnftContractId : (vnft_contract_id: actor_id);
  };
  
  service Keyring {
    BindKeyringDataToUserAddress : (user_address: actor_id, keyring_data: KeyringData) -> KeyringEvent;
    BindKeyringDataToUserCodedName : (user_coded_name: str, keyring_data: KeyringData) -> KeyringEvent;
    query KeyringAccountData : (keyring_address: actor_id) -> KeyringQueryEvent;
    query KeyringAddressFromUserAddress : (user_address: actor_id) -> KeyringQueryEvent;
    query KeyringAddressFromUserCodedName : (user_coded_name: str) -> KeyringQueryEvent;
  };
  
  service VnftManagerSvc {
    AddAdmin : (new_admin_address: actor_id) -> VnftManagerEvents;
    BurnNft : (from: actor_id, token_id: u256) -> VnftManagerEvents;
    MintNft : (to: actor_id, token_metadata: TokenMetadata) -> VnftManagerEvents;
    SetVftContractId : (vft_contract_id: actor_id) -> VnftManagerEvents;
    TransferFrom : (from: actor_id, to: actor_id, token_id: u256) -> VnftManagerEvents;
    query NftAddressApproved : (token_id: u256) -> VnftManagerQueryEvents;
    query NftOwnerByTokenId : (token_id: u256) -> VnftManagerQueryEvents;
    query NumOfNftsFromUser : (user_address: actor_id) -> VnftManagerQueryEvents;
    query NumOfNftsFromUserAsU128 : (user_address: actor_id) -> VnftManagerQueryEvents;
  };
  
  `
};