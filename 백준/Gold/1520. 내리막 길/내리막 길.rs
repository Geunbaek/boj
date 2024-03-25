use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::exit
};

fn dfs(r: usize, c: usize, board: &Vec<Vec<usize>>, dp: &mut Vec<Vec<isize>>, x: usize, y: usize) -> isize {
    if x == c - 1 && y == r - 1 {
        return 1;
    }

    if dp[y][x] != -1 {
        return dp[y][x];
    }

    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    let cur = board[y][x];
    let mut ret = 0;
    for i in 0..4 {
        let nx = (x as i32 + dx[i]) as usize;
        let ny = (y as i32 + dy[i]) as usize;

        if !(nx < c && ny < r) {
            continue;
        }

        if board[ny][nx] < cur {
            ret += dfs(r, c, board, dp, nx, ny);
        }
    }

    dp[y][x] = ret;
    ret
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let r: usize = input.next().unwrap().parse().unwrap();
    let c: usize = input.next().unwrap().parse().unwrap();

    let mut board: Vec<Vec<usize>> = vec![vec![0; c]; r];
    let mut dp: Vec<Vec<isize>> = vec![vec![-1; c]; r];

    for y in 0..r {
        for x in 0..c {
            let num: usize = input.next().unwrap().parse().unwrap();
            board[y][x] = num;
        }
    }

    writeln!(output, "{}", dfs(r, c, &board, &mut dp, 0, 0));
} 
