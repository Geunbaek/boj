use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::exit
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let a = input.next().unwrap();
    let b = input.next().unwrap();
    if a.len() < b.len() {
        write!(output, "no");
    } else {
        write!(output, "go" );
    }
} 
