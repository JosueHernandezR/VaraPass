pub mod extended_vnft_client;
// pub mod app_client;
// pub mod clients;

// use clients::app_client::{
//     Receiver as ReceiverClient,
//     QuerySvc as ReceiverQueryClient
// };

// use sails_rs::{
//     prelude::*,
//     cell::RefCell,
//     gstd::calls::GStdRemoting
// };

// pub mod services; // set services module
// pub mod clients;

// use clients::app_client::{
//     Receiver as ReceiverClient,
//     QuerySvc as ReceiverQueryClient
// };


// pub struct MyProgram {
//     pub receiver_client: RefCell<ReceiverClient<GStdRemoting>>,
//     pub receiver_query_client: RefCell<ReceiverQueryClient<GStdRemoting>>
// }

// #[program]
// impl MyProgram {
//     // program initializer with both clients
//     pub fn new() -> Self {
//         // Set first client 
//         let receiver_client = RefCell::new(
//             ReceiverClient::new(GStdRemoting)
//         );

//         // Set second client (queries)
//         let receiver_query_client = RefCell::new(
//             ReceiverQueryClient::new(GStdRemoting)
//         );

//         // Return an instance of the program with clientes 
//         Self {
//             receiver_client,
//             receiver_query_client
//         }
//     }

//     // services ...
// }