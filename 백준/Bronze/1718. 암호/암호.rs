use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.lines();
    let mut output = BufWriter::new(stdout());

    let o: Vec<char> = input.next().unwrap().chars().collect();
    let c: Vec<char> = input.next().unwrap().chars().collect();
    let mut answer = String::new();

    let n = o.len();
    let m = c.len();

    for i in 0..n {
        let secret = c[i % m] as u8;
        let origin_word = o[i] as u8;

        if o[i] == ' ' {
            answer.push(o[i]);
            continue;
        }

        let mut new_word = origin_word - (secret - 'a' as u8 + 1);

        if new_word < 'a' as u8 {
            let diff = 'a' as u8 - new_word;
            new_word = 'z' as u8 - diff + 1;
        }

        let converted_word = char::from(new_word);
        answer.push(converted_word);
    }

    writeln!(output, "{}", answer);

}   
