use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut nums: Vec<usize> = (0..n).map(|_| input.next().unwrap().parse::<usize>().unwrap()).collect();

    nums.sort();

    let mut answer = 0;

    for i in 0..n {
        let num1 = nums[i];
        let mut left = i + 1;
        let mut right = n - 1;

        while left <= right {
            let mid = left + (right - left) / 2;
            let num2 = nums[mid];
            let is_check = num1 <= num2 && num1 as f64 >= 0.9 * num2 as f64;
            if is_check {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if right > i {
            answer += (right - i);
        }
    }

    writeln!(output, "{answer}");
}   
