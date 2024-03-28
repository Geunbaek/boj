use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::exit
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();

    let mut nums = vec![];

    for _ in 0..n {
        let num: isize = input.next().unwrap().parse().unwrap();
        nums.push(num);
    }

    nums.sort_by(|a, b| b.cmp(&a));

    for i in 0..n {
        writeln!(output, "{}", nums[i]);
    }
} 
