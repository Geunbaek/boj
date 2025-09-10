const sumRow = (table, y) => {
    return table[y].reduce((acc, cur) => acc + cur, 0);
}

const sumCol = (table, x) => {
    return new Array(table.length).fill(0).reduce((acc, _, i) => acc + table[i][x], 0);
}

const getReceivedGift = (table, target, giftInfo) => {
    let count = 0;
    for (let i = 0; i < table.length; i ++) {
        if (i === target) continue;
        
        if (table[target][i] > table[i][target]) {
            count += 1;
        } 
        
        if (table[target][i] === table[i][target] 
            && giftInfo[target].points > giftInfo[i].points) {
            count += 1;
        }
    }
    return count;
}

function solution(friends, gifts) {
    const n = friends.length;
    const friendMap = friends.reduce((acc, friend, i) => ({...acc, [friend]: i}), {});
    const giftConnect = Array.from({length: n}, () => new Array(n).fill(0));
    const giftInfo = []

    for (const gift of gifts) {
        const [sender, receiver] = gift.split(" ");
        const u = friendMap[sender];
        const v = friendMap[receiver];
        giftConnect[u][v] += 1;
    }     
    
    for (let i = 0; i < n; i++) {
        const sendPoint = sumRow(giftConnect, i);
        const receivePoint = sumCol(giftConnect, i);
        giftInfo.push({
            sendPoint,
            receivePoint,
            points: sendPoint - receivePoint
        })
    }
    let answer = 0;
    for (let i = 0; i < n; i++) {
        const receivedGift = getReceivedGift(giftConnect, i, giftInfo);
        answer = Math.max(answer, receivedGift)
    }
    return answer;
}