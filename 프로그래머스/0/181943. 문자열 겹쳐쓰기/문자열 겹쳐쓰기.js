function solution(my_string, overwrite_string, s) {
    const m = overwrite_string.length;
    
    const my_string_array = [...my_string];
    
    my_string_array.splice(s, m, ...overwrite_string)
    return my_string_array.join("");
}