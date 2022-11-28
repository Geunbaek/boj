use std::io::{ stdin, Read };

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();

    let id = input.next().unwrap();
    println!("{}??!", id);
}