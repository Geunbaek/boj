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

fn get_mst(n: usize, edges: &Vec<(usize, usize, usize)>) -> Vec<(usize, usize, usize)> {
    let mut p: Vec<usize> = (0..n + 1).map(|x| x).collect();
    let mut edges = edges.clone();
    edges.sort();
    
    let mut mst: Vec<(usize, usize, usize)> = vec![];
    for (c, x, y) in edges {
        if find(&mut p, x) != find(&mut p, y) {
            union(&mut p, x, y);
            mst.push((c, x, y));
        }
        if mst.len() == n - 1 {
            break;
        }
    }

    mst
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();
    let k: usize = input.next().unwrap().parse().unwrap();
    let mut edges: Vec<(usize, usize, usize)> = vec![];
    let mut scores: Vec<usize> = vec![];

    for i in 0..m {
        let u: usize = input.next().unwrap().parse().unwrap();
        let v: usize = input.next().unwrap().parse().unwrap();

        edges.push((i + 1, u, v));
    }

    for _ in 0..k {
        let mst = get_mst(n, &edges);
        if mst.len() == n - 1 {
            let score = mst.iter().map(|x| x.0).sum::<usize>();
            scores.push(score);
            let min = mst[0];
            edges = edges.into_iter().filter(|x| x.0 != min.0).collect();
        } else {
            scores.push(0);
        }
    }

    for score in scores {
        write!(output, "{} ", score);
    }
}   
