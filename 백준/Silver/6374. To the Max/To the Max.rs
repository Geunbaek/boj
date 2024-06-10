use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut dp: Vec<Vec<isize>> = vec![vec![0; n + 1]; n + 1];
    for y in 1..n + 1 {
        for x in 1..n + 1 {
            let num: isize = input.next().unwrap().parse().unwrap();
            dp[y][x] = num;
        }
    }

    for y in 0..=n {
        let mut temp = 0;
        for x in 0..=n {
            temp += dp[y][x];
            dp[y][x] = temp;
        }
    }

    for x in 0..=n {
        let mut temp = 0;
        for y in 0..=n {
            temp += dp[y][x];
            dp[y][x] = temp;
        }
    }
    
    let mut answer = isize::MIN;
    for y1 in 1..=n {
        for x1 in 1..=n {
            for y2 in 0..y1 {
                for x2 in 0..x1 {
                    let size = dp[y1][x1] - dp[y2][x1] - dp[y1][x2] + dp[y2][x2];
                    answer = cmp::max(answer, size);
                }
            }
        }
    }
    writeln!(output, "{answer}");
}   
