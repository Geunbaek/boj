function solution(babbling) {
    function search(word) {
        let now = ""
        let prev = ""
        
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            now += char;
            if (now !== prev && words.has(now)) {
                prev = now;
                now = ""               
            }
        }
        
        return now === ""
    }
    
    
    const words = new Set(["aya", "ye", "woo", "ma"])
    
    return babbling.map(search).filter(Boolean).length;
}