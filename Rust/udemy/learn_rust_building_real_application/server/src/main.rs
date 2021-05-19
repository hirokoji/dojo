mod server;
mod http;

use std::option::Option;
use server::Server;
use http::request::Request;

fn main() {
    let server = Server::new("127.0.0.1:8080".to_string());
    server.run();
}
