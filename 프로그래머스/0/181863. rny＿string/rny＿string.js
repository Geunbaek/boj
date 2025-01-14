function solution(rny_string) {
    return [...rny_string].map(char => char === 'm' ? "rn" : char).join("");
}