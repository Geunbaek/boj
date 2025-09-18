function solution(words) {

    words.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

    let r = 0, a, b, c;

    words.forEach((w, i) => {
        const right = words[i + 1] || words[i - 1];
        const left = words[i - 1] || words[i + 1];

        for (let i = 1, l = w.length; i <= l; i++) {
            r++;
            a = w.substring(0, i);
            if (a != left.substring(0, i) && a != right.substring(0, i))
                return;
        }
    });

    return r;

}