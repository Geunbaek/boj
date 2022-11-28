use std::io::{ stdin, Read };

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let A: i32 = input.next().unwrap().parse().unwrap();
    let B = input.next().unwrap();

    for c in B.chars().rev() {
        println!("{}", c.to_string().parse::<i32>().unwrap() * A);
    }
    println!("{}", B.to_string().parse::<i32>().unwrap() * A);
}