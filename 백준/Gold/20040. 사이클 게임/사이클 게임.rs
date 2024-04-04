use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn find(p: &mut Vec<usize>, x: usize) -> usize {
    if p[x] != x {
        p[x] = find(p, p[x]);
    }
    p[x]
}

fn union(p: &mut Vec<usize>, a: usize, b: usize) {
    let ap = find(p, a);
    let bp = find(p, b);
    p[ap] = bp;
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();

    let mut answer = 0;
    let mut p: Vec<usize> = (0..n).map(|x| x).collect();

    for i in 0..m {
        let a: usize = input.next().unwrap().parse().unwrap();
        let b: usize = input.next().unwrap().parse().unwrap();
        if find(&mut p, a) != find(&mut p, b) {
            union(&mut p, a, b);
        } else {
            if answer != 0 {
                continue;
            }
            answer = i + 1;
        }
    }
    writeln!(output, "{answer}");
} 
