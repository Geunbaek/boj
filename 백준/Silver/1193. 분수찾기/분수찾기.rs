use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut up = 1;
    let mut down = 1;
    let mut state = 1;

    for _ in 1..n {
        if state == 0 {
            if down == 1 {
                state = 1;
                up += 1;
                continue;
            }
            up += 1;
            down -= 1;
        } else {
            if up == 1 {
                state = 0;
                down += 1;
                continue;
            }
            up -= 1;
            down += 1;
        }
    }

    writeln!(output, "{up}/{down}");
}   
