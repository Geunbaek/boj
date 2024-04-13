use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }, ops::Index, process::Output
};

fn is_upper(word: &char) -> bool {
    return 'A' as u8 <= *word as u8 && *word as u8 <= 'Z' as u8;
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let ucpc: Vec<char> = vec!['U', 'C', 'P', 'C'];
    let mut i = 0;
    
    loop {
        if let Some(word) = input.next() {
            for c in word.chars() {
                if c == ucpc[i] {
                    i += 1;
                }
                if i >= ucpc.len() {
                    break;
                }
            }
            if i >= ucpc.len() {
                break;
            }
        } else {
            break;
        }
    }

    if i >= ucpc.len() {
        writeln!(output, "I love UCPC");
    } else {
        writeln!(output, "I hate UCPC");
    }
} 
