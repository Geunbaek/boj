use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());


    let n: usize = input.next().unwrap().parse().unwrap();
    let z: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();

    let mut ban: HashSet<usize> = HashSet::new();

    for _ in 0..m {
        let b: usize = input.next().unwrap().parse().unwrap();
        ban.insert(b - 1);
    }

    for i in 1..z {
        let mut now = 0;
        let mut flag: bool = true;
        let mut visited: HashSet<usize> = HashSet::new();
        visited.insert(now);

        loop {
            now += i;
            now %= n;
            if ban.contains(&now) {
                flag = false;
                break;
            }
            if visited.contains(&now) {
                flag = false;
                break;
            }
            if now == z - 1 {
                break;
            }
            visited.insert(now);
        }

        if flag && now == z - 1 {
            writeln!(output, "{}", i);
            break;
        }
    }

}   

