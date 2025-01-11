#![no_std]

// necesary crates
use sails_rs::prelude::*;

use keyring_service::services::keyring_service::KeyringService;

// import our modules 
pub mod states;
pub mod services;


// Import service to be used for the program
use services::{
    traffic_light_service::TrafficLightService,
    // signless_service::SignlessService,
    // query_service::QueryService
};

// Traffic light program struct to build the program (there can only be one per contract)
#[derive(Default)]
pub struct TrafficLightProgram;

// Traffic light program, it host one or more services and it expose them to the 
// externar consumer.
// Only one program is allowed per application
#[program]
impl TrafficLightProgram {
    // Application constructor (it is an associated function)
    // It can be called once per application lifetime.
    pub fn new() -> Self {
        TrafficLightService::seed();
        KeyringService::seed();

        Self
    }

    #[route("Keyring")]
    pub fn keyring_svc(&self) -> KeyringService {
        KeyringService::new()
    }

    // Method working with "&self", havind no other parameters are treated as exposed
    // service constructors, and are called each time when an incoming request message 
    // needs to be dispatched to a selected service
    // It has "message routing", This will change the way a service will be called 
    // (if omitted, the method name will be used, in this case TrafficLightSvc).
    #[route("TrafficLight")]
    pub fn traffic_light_svc(&self) -> TrafficLightService {
        TrafficLightService::new()
    }
}