use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());


    let n: usize = input.next().unwrap().parse().unwrap();
    let str: Vec<char> = input.next().unwrap().chars().collect();
    let mut dp = vec![0; n];

    for i in 0..n {
        if i + 3 >= n {
            break;
        }

        if str[i] == 'p' && str[i + 1] == 'P' && str[i + 2] == 'A' && str[i + 3] == 'p' {
            if i == 0 {
                dp[i + 3] = 1;
            } else {
                dp[i + 3] = dp[i - 1] + 1;
            }
        } else {
            if i == 0 {
                dp[i] = cmp::max(0, dp[i]);
            } else {
                dp[i] = cmp::max(dp[i], dp[i - 1]);
            }
        }
    }
    writeln!(output, "{:?}", dp.iter().max().unwrap());
}   

