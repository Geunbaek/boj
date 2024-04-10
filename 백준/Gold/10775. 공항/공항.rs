use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn find(p: &mut Vec<usize>, x:usize) -> usize {
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

    let g: usize = input.next().unwrap().parse().unwrap();
    let p: usize = input.next().unwrap().parse().unwrap();

    let mut s: Vec<usize> = (0..g + 1).map(|x| x).collect();
    let planes: Vec<usize> = (0..p).map(|_| input.next().unwrap().parse::<usize>().unwrap()).collect();
    let mut answer = 0;

    for (i, plane) in planes.into_iter().enumerate() {
        let empty = find(&mut s, plane);
        if empty == 0 {
            break;
        }

        let empty_p = find(&mut s, empty - 1);

        union(&mut s, empty, empty_p);
        answer += 1;
    }
    writeln!(output, "{}", answer);
} 
