function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({length: bridge_length}, () => 0);
    let totalWeight = 0;
    let time = 0;
    
    // bridge_length 최대 10,000
    // weight 최대 10,000
    // truck_weights 최대 10,000
    // -> 최대 시간 == 10,000 * 10,000 = 1,000,000,000
    while (truck_weights.length !== 0) {
        totalWeight -= bridge.shift();
        time += 1;
        
        if (truck_weights[0] + totalWeight <= weight) {
            const truck_weight = truck_weights.shift();
            totalWeight += truck_weight;
            bridge.push(truck_weight)
        }
        
        if (bridge.length !== bridge_length) {
            bridge.push(0);
        }
    }
    
    while (totalWeight) {
        totalWeight -= bridge.shift()
        time += 1
    }
    return time;
}