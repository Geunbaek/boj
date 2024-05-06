use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let r:usize = input.next().unwrap().parse().unwrap();
    let c:usize = input.next().unwrap().parse().unwrap();
    let mut board: Vec<Vec<usize>> = vec![vec![0; c]; r];

    for y in 0..r {
        for x in 0..c {
            let cell:usize = input.next().unwrap().parse().unwrap();
            board[y][x] = cell;
         } 
    }

    let mut dp: Vec<Vec<usize>> = vec![vec![0; c + 1]; r + 1];

    for y in 1..=r {
        for x in 1..=c {
            let left = dp[y][x - 1] + board[y - 1][x - 1];
            let top = dp[y - 1][x] + board[y - 1][x - 1];
            let dia = dp[y - 1][x - 1] + board[y - 1][x - 1];

            dp[y][x] = cmp::max(left, cmp::max(top, dia));
        }
    }

    writeln!(output, "{}", dp[r][c]);
}   
