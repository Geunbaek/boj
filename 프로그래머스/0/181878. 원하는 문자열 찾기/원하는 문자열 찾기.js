function solution(myString, pat) {
    const tempString = myString.toLowerCase();
    const tempPat = pat.toLowerCase()

    return Number(tempString.includes(tempPat));
}