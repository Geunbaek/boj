use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let heights: Vec<usize> = (0..n).map(|x| input.next().unwrap().parse::<usize>().unwrap()).collect();

    let mut answer = 0;
    for i in 0..n {
        let mut count = 0;
        for j in (0..i).rev() {
            let mut flag = true;

            let (x, y) = (i + 1, heights[i]);
            let (nx, ny) = (j + 1, heights[j]);
            
            let a = (ny as f64 - y as f64) / (nx as f64 - x as f64);
            let b = y as f64 - (a * x as f64);
            
            for k in j + 1..i {
                let (x, y) = (k + 1, heights[k]);
                if a * x as f64 + b <= y as f64 {
                    flag = false;
                    break;
                }
            }
            if flag {
                count += 1;
            }
        }

        for j in i + 1..n {
            let mut flag = true;

            let (x, y) = (i + 1, heights[i]);
            let (nx, ny) = (j + 1, heights[j]);
            let a = (ny as f64 - y as f64) / (nx as f64 - x as f64);
            let b = y as f64 - (a * x as f64);
            
            for k in i + 1..j {
                let (x, y) = (k + 1, heights[k]);
                if a * x as f64 + b <= y as f64 {
                    flag = false;
                    break;
                }
            }
            if flag {
                count += 1;
            }
        }

        answer = cmp::max(answer, count);
    }
    writeln!(output, "{}", answer);
}   
