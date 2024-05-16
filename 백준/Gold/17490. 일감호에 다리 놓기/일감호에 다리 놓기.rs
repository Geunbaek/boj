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
    let k: usize = input.next().unwrap().parse().unwrap();
    
    let mut p: Vec<usize> = (0..n + 1).map(|x| x).collect();
    let mut edges: Vec<(usize, usize, usize)> = vec![];

    for i in 0..n {
        let d: usize = input.next().unwrap().parse().unwrap();
        edges.push((d, 0, i + 1));
    }
    
    let mut ban: HashSet<usize> = HashSet::new();
    for _ in 0..m {
        let u: usize = input.next().unwrap().parse().unwrap();
        let v: usize = input.next().unwrap().parse().unwrap();
        if cmp::min(u, v) == 1 && cmp::max(u, v) == n {
            ban.insert(n);
        } else {
            ban.insert(cmp::min(u, v));
        }
    }

    for i in 1..=n {
        if ban.contains(&i) {
            continue;
        }
        if i == n {
            edges.push((0, 1, n));
        } else {
            edges.push((0, i, i + 1));
        }
    }

    edges.sort();

    let mut cost = 0;
    let mut connect = 0;
    let mut nodes: HashSet<usize> = HashSet::new();

    for (c, u, v) in edges {
        if find(&mut p, u) != find(&mut p, v) {
            cost += c;
            union(&mut p, u, v);
            connect += 1;
            nodes.insert(u);
            nodes.insert(v);
        }
        if nodes.contains(&0) && connect == n {
            break;
        }
        if !nodes.contains(&0) && connect == n - 1 {
            break
        }
    }

    if cost <= k {
        writeln!(output, "YES");
    } else {
        writeln!(output, "NO");
    }
}   
