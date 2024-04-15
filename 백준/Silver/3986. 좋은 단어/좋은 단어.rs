use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut answer = 0;
    for _ in 0..n {
        let word = input.next().unwrap();
        let mut stack:Vec<char> = vec![];

        for c in word.chars() {
            if !stack.is_empty() && *stack.last().unwrap() == c {
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        if stack.is_empty() {
            answer += 1;
        }
    }
    writeln!(output, "{}", answer);
} 
