use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();

    let mut temp = n;
    let mut cycle = 0;

    loop {
        let first = temp / 10;
        let second = temp % 10;
        let last = (first + second) % 10;

        temp = second * 10 + last;
       
        cycle += 1;
        if temp == n{
            break;
        }
    }

    writeln!(output, "{cycle}");
} 
