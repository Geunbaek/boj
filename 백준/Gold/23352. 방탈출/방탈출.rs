use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn bfs(r: usize, c: usize, board: &Vec<Vec<usize>>, x: usize, y: usize) -> (usize, usize) {
    let mut q: VecDeque<(usize, usize, usize)> = VecDeque::new();
    let mut visited: Vec<Vec<usize>> = vec![vec![0; c]; r];

    visited[y][x] = 1;
    q.push_back((x, y, 0));

    let mut max = 0;
    let mut num = 0;

    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    while let Some((x, y, cnt)) = q.pop_front() {
        let mut flag = false;

        for i in 0..4 {
            let nx = (x as i32 + dx[i]) as usize;
            let ny = (y as i32 + dy[i]) as usize;
            if !(nx < c && ny < r) {
                continue;
            }
            if visited[ny][nx] == 1 {
                continue;
            }
            if board[ny][nx] == 0 {
                continue;
            }
            flag = true;
            visited[ny][nx] = 1;
            q.push_back((nx, ny, cnt + 1));
        }

        if !flag {
            if max > cnt {
                continue;
            } else if max < cnt {
                max = cnt;
                num = board[y][x];
            } else {
                num = cmp::max(num, board[y][x]);
            }
        }
    }
    (max, num + board[y][x])
}   

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let r: usize = input.next().unwrap().parse().unwrap();
    let c: usize = input.next().unwrap().parse().unwrap();

    let mut board: Vec<Vec<usize>> = vec![vec![0; c]; r];

    for y in 0..r {
        for x in 0..c {
            let cell: usize = input.next().unwrap().parse().unwrap();
            board[y][x] = cell;
        }
    }

    let mut max = 0;
    let mut cnt = 0;
    for y in 0..r {
        for x in 0..c {
            if board[y][x] == 0 {
                continue;
            }
            let (c, num) = bfs(r, c, &board, x, y);
            if c > cnt {
                cnt = c;
                max = num;
            } else if c < cnt {
                continue;
            } else {
                max = cmp::max(max, num);
            }
        }
    }
    writeln!(output, "{max}");
}   
