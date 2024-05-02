use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn bfs(n: usize, m: usize, board: &Vec<Vec<String>>, x: usize, y: usize, visited: &mut Vec<Vec<usize>>, target: usize) -> usize {
    let mut q: VecDeque<(usize, usize)> = VecDeque::new();
    q.push_back((x, y));

    let mut count = 1;
    visited[y][x] = target;

    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    while let Some((x, y)) = q.pop_front() {
        for i in 0..4 {
            let nx = (x as i32 + dx[i]) as usize;
            let ny = (y as i32 + dy[i]) as usize;
            if !(nx < m && ny < n) {
                continue;
            }

            if visited[ny][nx] != 0 {
                continue;
            }

            if board[ny][nx] != "0" {
                continue;
            }

            visited[ny][nx] = target;
            q.push_back((nx, ny));
            count += 1;
        }
    }

    count
}

fn bfs2(n: usize, m: usize, board: &Vec<Vec<String>>, x: usize, y: usize, cache: &HashMap<usize, usize>, v: &Vec<Vec<usize>>) -> String {
    let mut q: VecDeque<(usize, usize)> = VecDeque::new();
    q.push_back((x, y));

    let mut visited: HashSet<(usize, usize)> = HashSet::new();
    let mut visited2: HashSet<usize> = HashSet::new();
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

            if v[ny][nx] != 0 {
                if visited2.contains(&v[ny][nx]){
                    continue;
                }
                count += cache[&v[ny][nx]];
                visited2.insert(v[ny][nx]);
                continue;
            }

            if visited.contains(&(nx, ny)) {
                continue;
            }

            if board[ny][nx] != "0" {
                continue;
            }

            visited.insert((nx, ny));
            q.push_back((nx, ny));
            count += 1;
        }
    }

    count.to_string()
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();

    let mut board: Vec<Vec<String>> = vec![];
    let mut cache: HashMap<usize, usize> = HashMap::new();
    let mut visited: Vec<Vec<usize>> = vec![vec![0; m]; n];

    for _ in 0..n {
        let line: Vec<String> = input.next().unwrap().chars().map(|x| x.to_string()).collect();
        board.push(line);
    }

    let mut target = 1;
    for y in 0..n {
        for x in 0..m {
            if visited[y][x] != 0 {
                continue;
            }
            if board[y][x] == "0" {
                let count = bfs(n, m, &board, x, y, &mut visited, target);
                cache.insert(target, count); 
                target += 1;
            }
        }
    }

    for y in 0..n {
        for x in 0..m {
            if board[y][x] == "1" {
                board[y][x] = bfs2(n, m, &board, x, y, &cache, &visited);
            }
        }
    }

    for l in board {
        let li: Vec<String> = l.iter().map(|x| (x.parse::<usize>().unwrap() % 10).to_string()).collect();
        writeln!(output, "{}", li.join(""));
    }
   
}   
