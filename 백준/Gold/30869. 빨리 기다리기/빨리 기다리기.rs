use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::exit
};

fn dij(n: usize, graph: &Vec<Vec<(usize, isize, isize)>>, k: usize) -> Vec<isize> {
    let mut h: BinaryHeap<_> = BinaryHeap::new();

    let mut times = vec![isize::MAX; n + 1];

    h.push((0, 1, k));

    while let Some((time, now, k)) = h.pop() {
        let time = -time;

        if times[now] <= time {
            continue;
        }

        times[now] = time;

        for (next, cost, g) in graph[now].iter() {
            if time % *g == 0 { 
                if times[*next] > time + *cost {
                    h.push((-(time + *cost), *next, k));
                }
            } else {
                let next_time = *g * ((time / *g) + 1);
                if times[*next] > (next_time + *cost) {
                    h.push((-(next_time + *cost), *next, k));
                }
            }

            if k >= 1 && times[*next] > time + *cost {
                h.push((-(time + *cost), *next, k - 1));
            }
        }
    }

    times
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();
    let k: usize = input.next().unwrap().parse().unwrap();

    let mut graph: Vec<Vec<(usize, isize, isize)>> = vec![vec![]; n + 1];

    for _ in 0..m {
        let s: usize = input.next().unwrap().parse().unwrap();
        let e: usize = input.next().unwrap().parse().unwrap();
        let t: isize = input.next().unwrap().parse().unwrap();
        let g: isize = input.next().unwrap().parse().unwrap();
        graph[s].push((e, t, g))
    }
    let times = dij(n, &graph, k);

    if times[n] == isize::MAX {
        writeln!(output, "-1");
    } else {
        writeln!(output, "{}", times[n]);
    }
} 
