# Receiver contract

When compiling (inside the wasm folder or in the root path), two files will be created, "app.idl" which specifies the types, services, etc; and "app_client.rs (contains all the necessary code) which will be used to communicate with this contract (receiver client), both files will be inside the `wasm` directory.

To upload the contract, you have to go to [IDEA](https://idea.gear-tech.io/programs?node=wss%3A%2F%2Ftestnet.vara.network) and upload the .opt.wasm (in target/wasm32-unknown-unknown/release) and idl files that were generatedo

To be able to communicate with this contract, you need to copy the "app_client.rs" on your contract files and use it in your code.

