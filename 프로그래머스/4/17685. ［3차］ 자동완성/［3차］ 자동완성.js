class TrieNode {
    constructor(value, isEnd = false){
        this.value = value;
        this.count = 1;
        this.children = {};
        this.isEnd = isEnd;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode(null);
    }
    
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in node.children)) {
                node.children[char] = new TrieNode(char, i === word.length - 1);
            } else {
                node.children[char]['count'] += 1;
            }
            node = node.children[char]
        }
    }
    
    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (node.children[char]['count'] === 1) {
                return i + 1;
            } 

            node = node.children[char]
        }
        return word.length
    }
}

function solution(words) {
    const trie = new Trie()
    
    for (const word of words) {
        trie.insert(word);
    }
    
    let answer = 0;
    for (const word of words) {
        answer += trie.search(word);
    }
    return answer;
}