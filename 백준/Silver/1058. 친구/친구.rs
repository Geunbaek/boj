use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn dij(n: usize, graph: &Vec<Vec<usize>>, start: usize) -> Vec<usize> {
    let mut dist = vec![usize::MAX; n];
    let mut h: BinaryHeap<(isize, usize)> = BinaryHeap::new();

    h.push((0, start));

    while let Some((d, now)) = h.pop() {
        let d = -d as usize;
        if dist[now] <= d  {
            continue;
        }

        dist[now] = d;

        for next in graph[now].iter() {
            if dist[*next] > d + 1 {
                h.push((-(d as isize + 1), *next));
            }
        }
    }

    dist
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.lines();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();

    let mut graph: Vec<Vec<usize>> = vec![vec![]; n];
    
    for y in 0..n {
        let line: Vec<char> = input.next().unwrap().chars().collect();
        for x in 0..n {
            if line[x] == 'Y' {
                graph[y].push(x);
                graph[x].push(y);
            }
        }
    }
    
    let mut max = 0;
    for i in 0..n {
        let dist =  dij(n, &graph, i);
        let mut count = 0;
        
        for j in 0..n {
            if 0 < dist[j] && dist[j] <= 2 {
                count += 1;
            }
        }
        max = cmp::max(max, count);
    }

    writeln!(output, "{max}");
}   
