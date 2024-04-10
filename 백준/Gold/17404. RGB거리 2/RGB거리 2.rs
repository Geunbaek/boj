use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::Output
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut rgbs: Vec<Vec<usize>> = vec![];
    let mut ans = usize::MAX;    

    for _ in 0..n {
        let r: usize = input.next().unwrap().parse().unwrap();
        let g: usize = input.next().unwrap().parse().unwrap();
        let b: usize = input.next().unwrap().parse().unwrap();
        rgbs.push(vec![r, g, b]);
    }

    for i in 0..3 {
        let mut dp: Vec<Vec<usize>> = vec![vec![1_000_001; 3]; n];
        dp[0][i] = rgbs[0][i];
        for y in 1..n {
            dp[y][0] = rgbs[y][0] + cmp::min(dp[y - 1][1], dp[y - 1][2]);
            dp[y][1] = rgbs[y][1] + cmp::min(dp[y - 1][0], dp[y - 1][2]);
            dp[y][2] = rgbs[y][2] + cmp::min(dp[y - 1][0], dp[y - 1][1]);
        }

        for x in 0..3 {
            if i != x {
                ans = cmp::min(ans, dp[n - 1][x]);
            }
        }
    }
    writeln!(output, "{}", ans);
} 
