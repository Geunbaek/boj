use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();

    let mut scores: Vec<usize> = (0..n).map(|x| input.next().unwrap().parse::<usize>().unwrap()).collect();

    scores.sort();

    let mut answer = 0;
    let (mut left, mut right) = (0, n - 1);

    while left < right {
        if scores[left] + scores[right] < m {
            left += 1;
        } else {
            answer += 1;
            left += 1;
            right -= 1;
        }
    }
    writeln!(output, "{answer}");
}   

