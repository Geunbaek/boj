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

    let s: Vec<char> = input.next().unwrap().chars().collect();
    for _ in 0..m {
        let temp = input.next().unwrap();
        let mut index = 0;
        let mut flag = false;
        for c in temp.chars() {
            if c == s[index] {
                index += 1;
            }

            if index == n {
                flag = true;
                break;
            }
        }
        if flag {
            writeln!(output, "true");
        } else {
            writeln!(output, "false");
        }
    }

}   

