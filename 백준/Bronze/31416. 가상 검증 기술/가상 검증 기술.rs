use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::exit
};

fn get_time(ta: usize, tb: usize, va: usize, vb:usize) -> usize {
    let mut va = va;
    let mut a = ta * va;
    let mut b = tb * vb;

    if a < b {
        return b;
    }

    let mut a = 0;
    while va > 0 {
        if b > a {
            a += ta;
            va -= 1;
        } else {
            if va % 2 == 0 {
                a += ta;
                b += ta;
                va -= 2;
            } else {
                if a < b {
                    a += ta;
                } else {
                    b += ta;
                }
                va -= 1;
            }
        }
    }
    return cmp::max(a, b);
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let q: usize = input.next().unwrap().parse().unwrap();

    for _ in 0..q {
        let ta: usize = input.next().unwrap().parse().unwrap();
        let tb: usize = input.next().unwrap().parse().unwrap();
        let va: usize = input.next().unwrap().parse().unwrap();
        let vb: usize = input.next().unwrap().parse().unwrap();
        writeln!(output, "{}", get_time(ta, tb, va, vb));
    }
} 
