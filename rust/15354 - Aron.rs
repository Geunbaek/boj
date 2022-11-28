use std::io::{ stdin, Read };

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s).expect("fail");

    let mut input = s.split_whitespace();

    let n = input.next().unwrap().parse::<usize>().unwrap();
    let mut v: Vec<String> = Vec::new();
    for _ in 0..n {
        let c = input.next().unwrap().to_string();
        match v.len() {
            0 => v.push(c),
            m => {
                if v[m - 1] != c {
                    v.push(c);
                }
            }
        }
    }
    println!("{}", v.len() + 1)
}