function solution(myString) {
    return [...myString]
        .map((char) => 
             (char === "a" || char === "A")
             ? "A" 
             : char.toLowerCase()
            )
        .join("")
}