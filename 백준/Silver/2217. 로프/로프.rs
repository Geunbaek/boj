use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let mut n: usize = input.next().unwrap().parse().unwrap();
    let mut weights: Vec<usize> = vec![];

    for _ in 0..n {
        let w: usize = input.next().unwrap().parse().unwrap();
        weights.push(w);
    }
    weights.sort();

    let mut max = 0;

    for w in weights {
        max = cmp::max(max, n * w);
        n -= 1;
    }

    writeln!(output, "{}", max);
}   
