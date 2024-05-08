use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();

    let mut x_max = 0;
    let mut x_min = n;
    let mut y_max = 0;
    let mut y_min = n;

    for y in 0..n {
        let line: Vec<char> = input.next().unwrap().chars().collect();
        for x in 0..n {
            if line[x] == 'G' {
                x_max = cmp::max(x_max, x);
                x_min = cmp::min(x_min, x);
                y_max = cmp::max(y_max, y);
                y_min = cmp::min(y_min, y);
            }
        } 
    }

    let mut answer = 0;
    if x_max != x_min {
        answer += cmp::min(x_max, n - 1 - x_min)
    }
    if y_max != y_min {
        answer += cmp::min(y_max, n - 1 - y_min);
    }
    writeln!(output, "{}", answer);

}   
