use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::exit
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut butters: Vec<(isize, isize)> = vec![];

    for _ in 0..n {
        let x: isize = input.next().unwrap().parse().unwrap();
        let h: isize = input.next().unwrap().parse().unwrap();
        butters.push((x, h));
    }

    butters.sort();

    let (mut left, mut right) = (0, 1_000_000_001);
    let mut answer = 0;
    while left <= right {
        let mid = left + (right - left) / 2;

        let mut flag = true;
        for i in 1..n {
            let (lx, lh) = butters[i - 1];
            let (rx, rh) = butters[i];
            let lhmin = cmp::min(lh / 2, mid);
            let rhmin = cmp::min(rh / 2, mid);
            
            if lhmin + rhmin >= rx - lx {
                flag = false;
                break;
            }
        } 

        if flag {
            left = mid + 1;
            answer = cmp::max(answer, mid);
        } else {
            right = mid - 1;
        }
    }
    if answer == 1_000_000_001 {
        writeln!(output, "forever");
    } else {
        writeln!(output, "{answer}");
    }
} 
