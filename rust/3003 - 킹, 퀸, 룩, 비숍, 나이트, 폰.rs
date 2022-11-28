use std::io::{ stdin, Read };

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let chess = vec![1, 1, 2, 2, 2, 8];
    let mut answer: Vec<String> = vec![];

    for i in 0..6 {
        let piece: i32 = input.next().unwrap().parse().unwrap();
        answer.push((chess[i] - piece).to_string());
    }
    println!("{}", answer.connect(" "));
}