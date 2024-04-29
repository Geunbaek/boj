use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let k: usize = input.next().unwrap().parse().unwrap();

    let coins: Vec<usize> = (0..n).map(|_| input.next().unwrap().parse::<usize>().unwrap()).collect();
    let mut dp: Vec<usize> = vec![0; k + 1];
    dp[0] = 1;

    for y in 0..n {
        let coin = coins[y];
        for x in coin..=k {
            dp[x] += dp[x - coin];
        }
    }
    writeln!(output, "{:?}", dp[k]);
}   
