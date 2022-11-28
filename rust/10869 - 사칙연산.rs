use std::io::{ stdin, Read };

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();

    let a: i32 = input.next().unwrap().parse().unwrap();
    let b: i32 = input.next().unwrap().parse().unwrap();
    println!("{}\n{}\n{}\n{}\n{}", a + b, a - b, a * b, a / b, a % b);
}