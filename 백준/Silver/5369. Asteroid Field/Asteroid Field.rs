use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let t: usize = input.next().unwrap().parse().unwrap();
    
    for _ in 0..t {
        let n: usize = input.next().unwrap().parse().unwrap();
        let mut board: Vec<Vec<char>> = vec![];
        
        for _ in 0..n {
            let line: Vec<char> = input.next().unwrap().chars().collect();
            board.push(line)
        }

        let mut q: VecDeque<(usize, usize, usize)> = VecDeque::new();
        let mut visited: HashSet<(usize, usize)> = HashSet::new();
        q.push_back((0, 0, 0));
        visited.insert((0, 0));
        let dx = [-1, 0, 1, 0];
        let dy = [0, -1, 0, 1];
    
        let mut answer = 0;

        while let Some((x, y, c)) = q.pop_front() {
            if board[y][x] == 'd' {
                answer = c;
                break;
            }
            
            for i in 0..4 {
                let nx = (x as i32 + dx[i]) as usize;
                let ny = (y as i32 + dy[i]) as usize;
    
                if !(nx < n && ny < n) {
                    continue;
                }
    
                if visited.contains(&(nx, ny)) {
                    continue;
                }

                if board[ny][nx] == '*' {
                    continue;
                }

                q.push_back((nx, ny, c + 1));
                visited.insert((nx, ny));
            }
        }

        if answer == 0 {
            writeln!(output, "-1");
        } else {
            writeln!(output, "{answer}");
        }
    }

}   
