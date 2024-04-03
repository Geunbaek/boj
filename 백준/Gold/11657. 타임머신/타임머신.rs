use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

const INF:isize = 100_000_000;

fn bellman_ford(n: usize, m: usize, edges: &Vec<(usize, usize, isize)>, start: usize) -> (bool, Vec<isize>) {
    let mut dist = vec![INF; n + 1];
    dist[start] = 0;

    for y in 0..n {
        for x in 0..m {
            let (now, next, cost) = edges[x];
            if dist[now] != INF && dist[next] > dist[now] + cost {
                dist[next] = dist[now] + cost;
                if y == n - 1 {
                    return (true, dist);
                }
            }
        }
    }
    return (false, dist);
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();
    let mut edges: Vec<(usize, usize, isize)> = vec![];
    
    for _ in 0..m {
        let a: usize = input.next().unwrap().parse().unwrap();
        let b: usize = input.next().unwrap().parse().unwrap();
        let c: isize = input.next().unwrap().parse().unwrap();
        edges.push((a, b, c));
    }  

    let (has_negative_cycle, dist) = bellman_ford(n, m, &edges, 1);
    if !has_negative_cycle {
        for x in 2..=n {
            if dist[x] == INF {
                writeln!(output, "-1");
            } else {
                writeln!(output, "{}", dist[x]);
            }
        }
    } else {
        writeln!(output, "-1");
    }
} 
