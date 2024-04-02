use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn binary_search(lis: &Vec<isize>, num: isize) -> usize {
    let (mut left, mut right) = (0, lis.len() - 1);

    while left <= right {
        let mid = left + (right - left) / 2;

        if lis[mid] == num {
            return mid;
        } else if lis[mid] < num {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let n: usize = input.next().unwrap().parse().unwrap();
    let mut nums :Vec<isize> = vec![isize::MIN];


    for _ in 0..n {
        let num: isize = input.next().unwrap().parse().unwrap();
        nums.push(num);
    }

    let mut lis= vec![];
    let mut lis_all:Vec<(usize, isize)> = vec![];

    for num in nums {
        if lis.is_empty() {
            lis.push(num);
            continue;
        }

        let l = lis.len();
        if lis[l - 1] < num {
            lis.push(num);
            lis_all.push((l, num));
        } else {
            let index = binary_search(&lis, num);
            lis[index] = num;
            lis_all.push((index, num));
        }
    }
    let mut answer = vec![];
    let mut l = lis.len() - 1;

    while let Some((index, num)) = lis_all.pop() {
        if index == l {
            answer.push(num);
            l -= 1;
        }
    }
    writeln!(output, "{}", lis.len() - 1);
    writeln!(output, "{}", answer.iter().rev().map(|x| x.to_string()).collect::<Vec<String>>().join(" "));
} 
