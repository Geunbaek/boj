use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn check_squar(board: &Vec<Vec<i32>>, x: usize, y: usize, size: usize) -> bool {
    let target = board[y][x];

    for ny in y..y+size {
        for nx in x..x+size {
            if board[ny][nx] != target {
                return false;
            }
        }
    }
    true
} 

fn recur(board: &Vec<Vec<i32>>, x: usize, y: usize, size: usize, answer: &mut HashMap<i32, i32>) {
    if check_squar(board, x, y, size) {
        answer.entry(board[y][x]).and_modify(|x| *x += 1).or_insert(1);
    } else {
        let next_size = size / 3;

        for ny in 0..3 {
            for nx in 0..3 {
                recur(board, x + (nx * next_size), y + (ny * next_size), next_size, answer);
            }
        }
    }
} 

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut board: Vec<Vec<i32>> = vec![vec![0; n]; n];

    for y in 0..n {
        for x in 0..n {
            let num: i32 = input.next().unwrap().parse().unwrap();
            board[y][x] = num;
        }
    }

    let mut answer: HashMap<i32, i32> = HashMap::from([(0,0),(-1,0),(1, 0)]);

    recur(&board, 0, 0, n, &mut answer);

    writeln!(output, "{}", answer[&-1]);
    writeln!(output, "{}", answer[&0]);
    writeln!(output, "{}", answer[&1]);
} 
