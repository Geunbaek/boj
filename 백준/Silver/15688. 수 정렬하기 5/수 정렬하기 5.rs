use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut nums: Vec<isize> = (0..n).map(|_| input.next().unwrap().parse::<isize>().unwrap()).collect();

    nums.sort();

    for num in nums {
        writeln!(output, "{num}");
    }
}   
