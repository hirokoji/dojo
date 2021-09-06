use std::net::TcpListener;
use std::io::{BufReader, BufWriter, BufRead, Write};

fn main() {
    println!("Hello, world!");

    let listener = TcpListener::bind("127.0.0.1:10000").unwrap();

    while let Ok((stream, _)) = listener.accept(){

        let stream0 = stream.try_clone().unwrap();
        let mut reader = BufReader::new(stream0);
        let mut writer = BufWriter::new(stream);

        let mut buf = String::new();
        reader.read_line(&mut buf).unwrap();
        writer.write(buf.as_bytes()).unwrap();
        // writer.write("response".as_bytes()).unwrap();
        writer.flush().unwrap();



    }
}
