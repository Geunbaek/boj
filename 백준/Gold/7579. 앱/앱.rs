use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();
    let mut active_memories: Vec<usize> = vec![];
    let mut disable_memories: Vec<usize> = vec![];
    let mut total = 0;
    let mut answer: usize = 0;

    for _ in 0..n {
        let memory: usize = input.next().unwrap().parse().unwrap();
        active_memories.push(memory);
    }
    for _ in 0..n {
        let cost: usize = input.next().unwrap().parse().unwrap();
        total += cost;
        answer += cost;
        disable_memories.push(cost);
    }
    
    let mut dp: Vec<Vec<usize>> = vec![vec![0; total + 1]; n + 1];
    
    for y in 1..=n {
        let memory = active_memories[y - 1];
        let cost = disable_memories[y - 1];
        for x in 0..=total {
            if x < cost {
                dp[y][x] = dp[y - 1][x];
            } else {
                dp[y][x] = cmp::max(dp[y - 1][x], dp[y - 1][x - cost] + memory);
            }
            
            if dp[y][x] >= m {
                answer = cmp::min(answer, x);
            }
        }
    }

    writeln!(output, "{}", answer);
}   
