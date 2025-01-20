function solution(order) {
    return order.reduce((totalCost, cur) => {
        if (cur.includes("americano")) {
            return totalCost + 4500;
        }
        
        if (cur.includes("cafelatte")) {
            return totalCost + 5000;
        }
        // anything
        return totalCost + 4500;
    }, 0);
}