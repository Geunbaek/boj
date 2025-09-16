const DISCOUNT_RATE = [10, 20, 30, 40];

const connectDiscountRate = (results, length) => {
    if (results.length >= length) {
        return [results]
    }
    const ret = []
    for (const rate of DISCOUNT_RATE) {
        ret.push(...connectDiscountRate([...results, rate], length))
    }
    return ret
}

const zip = (arr1, arr2) => {
    const min = Math.min(arr1.length, arr2.length);
    return Array.from({length: min}, (_, i) => [arr1[i], arr2[i]]);
}

const discount = (price, rate) => price - (price * rate / 100);
const shouldJoinEmoticonPlus = (total, max) => total >= max;
const getTotal = (rates) => (emoticons) => ([maxRate, maxPrice]) => zip(emoticons, rates)
    .reduce((acc, [emoticon, rate]) => 
            rate >= maxRate 
                ? acc + discount(emoticon, rate) 
                : acc, 
            0)

function solution(users, emoticons) {
    const ratePerm = connectDiscountRate([], emoticons.length);
    
    const maxPrices = ratePerm.map(rates => {
        const totalPrices = users.map(user => {
            const total = getTotal(rates)(emoticons)(user);
            const shouldJoined = shouldJoinEmoticonPlus(total, user[1])
            
            return {
                total: shouldJoined ? 0 : total,
                joined: shouldJoined ? 1 : 0,
            }
            
           
        }).reduce((acc, cur) => {
            const total = acc.total + cur.total;
            const joined = acc.joined + cur.joined
            return {total, joined, rates};
        }, {total: 0, joined: 0})

        return totalPrices;
    })
    const [answer] = maxPrices.sort((a, b) => b.joined - a.joined || b.total - a.total);
    
    return [answer.joined, answer.total];
}