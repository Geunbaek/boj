use std::io::{ stdin, Read };

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let A: i32 = input.next().unwrap().parse().unwrap();
    let B: i32 = input.next().unwrap().parse().unwrap();
    let C: i32 = input.next().unwrap().parse().unwrap();

    println!("{}", (A + B) % C);
    println!("{}", ((A % C) + (B % C)) % C);
    println!("{}", (A * B) % C);
    println!("{}", ((A % C) * (B % C)) % C);
}