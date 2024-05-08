use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};
fn is_prime(num: usize) -> bool{
    for i in 2..(num as f64).sqrt() as usize + 1 {
        if num % i == 0 {
            return false;
        }
    }
    true
}
fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n = 123_456 * 2 + 1;
    let mut dp = vec![1; n];

    for i in 2..n {
        if dp[i] == 0 {
            continue;
        }

        if !is_prime(i) {
            continue;
        }

        let mut temp = i;
        while temp + i < n {
            temp += i;
            dp[temp] = 0;
        }
    }

    loop {
        let n: usize = input.next().unwrap().parse().unwrap();
        if n == 0 {
            break;
        }
        
        let mut answer = 0;

        for i in n + 1..=2 * n {
            if dp[i] == 1 {
                answer += 1;
            }
        }
        writeln!(output, "{}", answer);
    }


}   
