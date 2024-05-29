use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn bfs(n: usize, m: usize, board: &Vec<Vec<usize>>, visited: &mut Vec<Vec<usize>>, x:usize, y: usize ) -> usize {
    let mut q: VecDeque<(usize, usize)> = VecDeque::new();
    q.push_back((x, y));
    visited[y][x] = 1;

    let mut count = 1;

    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    while let Some((x, y)) = q.pop_front() {
        for i in 0..4 {
            let nx = (x as i32 + dx[i]) as usize;
            let ny = (y as i32 + dy[i]) as usize;
            if !(nx < m && ny < n) {
                continue;
            }

            if board[ny][nx] == 0 {
                continue;
            }

            if visited[ny][nx] == 1 {
                continue;
            }

            visited[ny][nx] = 1;
            q.push_back((nx, ny));
            count += 1;
        }
    }

    count
}


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();
    let k: usize = input.next().unwrap().parse().unwrap();

    let mut board: Vec<Vec<usize>> = vec![vec![0; m]; n];
    let mut visited: Vec<Vec<usize>> = vec![vec![0; m]; n];

    for _ in 0..k {
        let r: usize = input.next().unwrap().parse().unwrap();
        let c: usize = input.next().unwrap().parse().unwrap();
        board[r - 1][c - 1] = 1;
    }

    let mut max = 0;
    for y in 0..n {
        for x in 0..m {
            if visited[y][x] == 0 && board[y][x] == 1 {
                max = cmp::max(max, bfs(n, m, &board, &mut visited, x, y));
            }
        }
    }
    writeln!(output, "{max}");
}   
