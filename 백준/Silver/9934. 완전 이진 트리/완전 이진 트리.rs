use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn make_tree(k: usize, pre_order: &Vec<usize>, tree: &mut Vec<Vec<usize>>, depth: usize, left: usize, right: usize) {
    if left == right {
        tree[depth].push(pre_order[left]);
        return;
    }

    let mid = left + (right - left) / 2;

    tree[depth].push(pre_order[mid]);

    make_tree(k, pre_order, tree, depth + 1, left, mid - 1);
    make_tree(k, pre_order, tree, depth + 1, mid + 1, right);
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let k: u32 = input.next().unwrap().parse().unwrap();
    
    let pre_order: Vec<usize> = (0..(2usize.pow(k) - 1)).map(|_| input.next().unwrap().parse::<usize>().unwrap()).collect();
    let mut tree: Vec<Vec<usize>> = vec![vec![]; k as usize];
    
    make_tree(k as usize,  &pre_order, &mut tree, 0, 0, 2usize.pow(k) - 2);

    for l in tree {
        let line_2_str = l.iter().map(|x| x.to_string()).collect::<Vec<String>>().join(" ");
        writeln!(output, "{}", line_2_str);
    }


} 
