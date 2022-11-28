use std::io::{ stdin, Read };

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();

    let y: i32 = input.next().unwrap().parse().unwrap();
    println!("{}", y - 2541 + 1998);
}