use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let t: usize = input.next().unwrap().parse().unwrap();

    for _ in 0..t {
        let n: usize = input.next().unwrap().parse().unwrap();
        let mut arr: Vec<(usize, usize)> = vec![];
        let mut min_p = usize::MAX;
        let mut min_l = usize::MAX;
        let mut answer = 0;

        for _ in 0..n {
            let p: usize = input.next().unwrap().parse().unwrap();
            let l: usize = input.next().unwrap().parse().unwrap();
            arr.push((p, l));
        }

        arr.sort();
        for (p, l) in arr {
            if min_p <= p && min_l <= l { 
                continue;
            }

            min_p = cmp::min(min_p, p);
            min_l = cmp::min(min_l, l);
            answer += 1;
        }   
        writeln!(output, "{}", answer);
    }
} 
