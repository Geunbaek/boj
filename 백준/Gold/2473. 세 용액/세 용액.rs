use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut oils: Vec<isize> = (0..n).map(|_| input.next().unwrap().parse::<isize>().unwrap()).collect();

    oils.sort();

    let mut answer = vec![];
    let mut diff = isize::MAX;

    for mid in 0..n {
        let cur = oils[mid];

        let mut left = 0;
        let mut right = n - 1;
        while left < right {
            let sum = cur + oils[right] + oils[left];
    
            if sum.abs() < diff && left != mid && right != mid {
                diff = sum.abs();
                answer = vec![oils[right], oils[mid], oils[left]];
            }
    
            if sum < 0 {
                left += 1;
            } else {
                right -= 1;
            }
         
        }
    }
    

    answer.sort();
    
    writeln!(output, "{} {} {}", answer[0], answer[1], answer[2]);
   
} 
