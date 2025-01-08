function solution(q, r, code) {
    return [...code]
        .map((char, index) => index % q === r ? char : "")
        .join("")
}