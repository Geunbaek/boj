
function solution(myString, pat) {
    let lastIndex = 0;
    for (let i = 0; i < myString.length; i ++) {
        const temp = myString.slice(i, i + pat.length);
        if (temp === pat) {
            lastIndex = i + pat.length;
        }
    }
    return myString.slice(0, lastIndex)
}