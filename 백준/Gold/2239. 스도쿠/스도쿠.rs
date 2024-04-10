use std::{
    cmp, collections::{ BinaryHeap, HashMap, HashSet, VecDeque }, io::{ stdin, stdout, BufWriter, Read, Write }
};

fn make_sudoku(sudoku: &mut Vec<Vec<usize>>, depth: usize, answer: &mut Vec<Vec<usize>>) {
    if depth >= 81 {
        *answer = sudoku.clone();
        return;
    }

    if !answer.is_empty() {
        return;
    }
 
    let (x, y) = (depth % 9, depth / 9);

    if sudoku[y][x] != 0 {
        make_sudoku(sudoku, depth + 1, answer);
    } else {
        for num in 1..=9_usize {
            if check_col(sudoku, x, num) && check_row(sudoku, y, num) && check_square(sudoku, x, y, num) {
                sudoku[y][x] = num;
                make_sudoku(sudoku, depth + 1, answer);
                sudoku[y][x] = 0;
            }
        }
    }
}

fn check_row(sudoku: &Vec<Vec<usize>>, y: usize, num: usize) -> bool {
    for x in 0..9 {
        if sudoku[y][x] == num {
            return false;
        }
    }
    true
}

fn check_col(sudoku: &Vec<Vec<usize>>, x: usize, num: usize) -> bool {
    for y in 0..9 {
        if sudoku[y][x] == num {
            return false;
        }
    }
    true
}

fn check_square(sudoku: &Vec<Vec<usize>>, x: usize, y: usize, num: usize) -> bool {
    let xp = x / 3;
    let yp = y / 3;

    let (sx, sy) = (3 * xp, 3 * yp);
    for ny in sy..sy+3 {
        for nx in sx..sx+3 {
            if sudoku[ny][nx] == num {
                return false;
            }
        }
    }
    true
}

fn main() {
    let mut s = String::new();

    stdin().read_to_string(&mut s);

    let mut input = s.split_ascii_whitespace();
    let mut output = BufWriter::new(stdout());

    let mut sudoku: Vec<Vec<usize>> = vec![];

    for _ in 0..9 {
        let line:Vec<usize> = input.next().unwrap().chars().map(|x| x.to_digit(10).unwrap() as usize).collect();
        sudoku.push(line);
    }
    let mut answer: Vec<Vec<usize>> = vec![];
    make_sudoku(&mut sudoku, 0, &mut answer);

    for l in answer {
        let line = l.iter().map(|x| x.to_string()).collect::<Vec<String>>().join("");
        writeln!(output, "{}", line);
    }
} 
