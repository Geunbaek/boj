use std::{io::{stdin, Read, BufWriter, stdout, Write}, cmp, collections::{VecDeque, HashSet}};

fn init(tree: &mut Vec<isize>, nums: &Vec<isize>, node: usize, start: usize, end: usize) -> isize {
    if start == end {
        tree[node] = nums[start];
        return tree[node];
    }

    tree[node] = init(tree, nums, node * 2, start, (start + end) / 2) + init(tree, nums, node * 2 + 1, (start + end) / 2 + 1 , end);
    return tree[node];
}

fn sub_sum(tree: &mut Vec<isize>, node:usize, start: usize, end: usize, left: usize, right: usize) -> isize {
    if left > end || right < start {
        return 0;
    }

    if left <= start && end <= right {
        return tree[node];
    }
    return sub_sum(tree, node * 2, start, (start + end) / 2 , left, right) + sub_sum(tree, node * 2 + 1, (start + end) / 2 + 1, end, left, right);
}

fn update(tree: &mut Vec<isize>, node: usize, start: usize, end: usize, index: usize, diff: isize) {
    if index < start || index > end {
        return;
    }
    tree[node] += diff;

    if start != end {
        update(tree, node * 2, start, (start + end) / 2, index, diff);
        update(tree, node * 2 + 1, (start + end) / 2 + 1, end, index, diff);
    }
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());
    
    let n: usize = input.next().unwrap().parse().unwrap();
    let m: usize = input.next().unwrap().parse().unwrap();
    let k: usize = input.next().unwrap().parse().unwrap();

    let mut nums:Vec<isize> = vec![];
    let mut tree:Vec<isize> = vec![0; 3_000_000];

    for _ in 0..n {
        let num: isize = input.next().unwrap().parse().unwrap();
        nums.push(num);
    }
    init(&mut tree, &nums, 1, 0, n - 1);
    for _ in 0..(m + k) {
        let a: usize = input.next().unwrap().parse().unwrap();
        let b: usize = input.next().unwrap().parse().unwrap();
        let c: isize = input.next().unwrap().parse().unwrap();

        if a == 1 {
            let diff = c - nums[b - 1];
            nums[b - 1] = c;
            update(&mut tree, 1, 0, n - 1, b - 1, diff);
        }else {
            let sum = sub_sum(&mut tree, 1, 0, n - 1, b - 1, (c - 1) as usize);
            writeln!(output, "{}", sum);
        }
            
    }

}
