use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let r: usize = input.next().unwrap().parse().unwrap();
    let c: usize = input.next().unwrap().parse().unwrap();

    let mut board: Vec<Vec<&str>> = vec![vec!["."; n]; n];

    board[r - 1][c - 1] = "v";

    let mut q: VecDeque<(usize, usize)> = VecDeque::new();

    q.push_back((c - 1, r - 1));

    let dx = [-1, 1, 1, -1];
    let dy = [-1, -1, 1, 1];
    while let Some((x, y)) = q.pop_front() {
        for i in 0..4 {
            let nx = (x as i32 + dx[i]) as usize;
            let ny = (y as i32 + dy[i]) as usize;
            if !(nx < n && ny < n) {
                continue;
            }

            if board[ny][nx] == "v" {
                continue;
            }

            board[ny][nx] = "v";
            q.push_back((nx, ny));
        }
    }

    for y in 0..n {
        writeln!(output, "{}", board[y].join(""));
    }
}   
