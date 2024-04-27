use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};


fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.lines();
    let mut output = BufWriter::new(stdout());

    let mut total :f64= 0.0;
    let mut cache: HashMap<&str, usize> = HashMap::new();
    let mut names: Vec<&str> = vec![];

    while let Some(name) = input.next() {
        total += 1.0;

        if !cache.contains_key(name) {
            names.push(name);
        }
        cache.entry(name).and_modify(|x| *x += 1).or_insert(1);
    }
    names.sort();

    for name in names {
        let num = (((cache[&name] * 100) as f64 / total) * 10000.0).round() / 10000.0;
        writeln!(output, "{} {:.4}", name, num);
    }

}   
