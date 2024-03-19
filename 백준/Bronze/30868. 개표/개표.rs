use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, process::exit
};
fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());


    let t: usize = input.next().unwrap().parse().unwrap();
    
    for _ in 0..t {
        let n: usize = input.next().unwrap().parse().unwrap();

        let p = n / 5;
        let l = n % 5;
        let mut str = String::new();

        for _ in 0..p {
            str.push_str("++++");
            str.push_str(" ");
        }
        
        for _ in 0..l {
            str.push_str("|");
        }
        writeln!(output, "{}", str);
    }

} 
