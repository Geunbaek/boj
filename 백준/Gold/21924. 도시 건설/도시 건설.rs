use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn find(p: &mut Vec<usize>, x: usize) -> usize {
    if p[x] != x {
        p[x] = find(p, p[x]);
    }
    p[x]
}

fn union(p: &mut Vec<usize>, x: usize, y: usize) {
    let xp = find(p, x);
    let yp = find(p, y);
    p[xp] = yp;
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();
    let mut cost = 0;
    let mut edges: Vec<(usize, usize, usize)> = vec![];
    let mut p: Vec<usize> = (0..=n).map(|x| x).collect();

    for _ in 0..m {
        let a: usize = input.next().unwrap().parse().unwrap();
        let b: usize = input.next().unwrap().parse().unwrap();
        let c: usize = input.next().unwrap().parse().unwrap();
        edges.push((c, a, b));
        cost += c;
    }

    edges.sort();
    
    let mut connect = 0;
    let mut saved_cost = 0;
    for (c, a, b) in edges {
        if find(&mut p, a) != find(&mut p, b) {
            union(&mut p, a, b);
            connect += 1;
            saved_cost += c;
        }
    }

    if connect < n - 1 {
        writeln!(output, "-1");
    } else {
        writeln!(output, "{}", cost - saved_cost);
    }
}   
