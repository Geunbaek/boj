class ListNode {
    constructor(value, prev = null, next = null){
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    head = null;
    tail = null;
    size = 0;
    
    getSize = () => {
        return this.size;
    }
    
    isEmpty = () => {
        return this.head === null || this.tail === null;
    }
    
    peek = () => {
        if (this.head === null) return null;
        return this.head.value;
    }
    
    push = (value) => {
        this.size += 1;
        
        if (this.head === null || this.tail === null) {
            this.head = new ListNode(value, null);
            this.tail = this.head;
            return;
        }

        this.tail.next = new ListNode(value, this.tail);
        this.tail = this.tail.next;
    }

    pushFront = (value) => {
        if (this.head === null || this.tail === null) {
            this.head = new ListNode(value, null);
            this.tail = this.head;
            return;
        }

        this.head.prev = new ListNode(value, null, this.head);
        this.head = this.head.prev;
    }

    pop = () => {
        // node 가 하나도 존재하지 않는 경우
        if (this.head === null || this.tail === null) return null

        const currentNode = this.tail;
        this.size -= 1;

        // node 가 하나인 경우        
        if (this.tail.prev === null) {
            this.head = null;
            this.tail = null;
            return currentNode.value;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        currentNode.prev = null;

        return currentNode.value
    }
    
    shift = () => {
        // node 가 하나도 존재하지 않는 경우
        if (this.head === null || this.tail === null) return null

        const currentNode = this.head;
        this.size -= 1;
        // node 가 하나인 경우        
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return currentNode.value;
        }

        this.head = this.head.next;
        this.head.prev = null;
        currentNode.next = null;

        return currentNode.value;
    }
}

const solveByArray = (bridgeLength, weight, truckWeights) => {
    const bridge = new Array(bridgeLength).fill(0);    
    
    let totalWeight = 0;
    let time = 0;
    while (truckWeights.length !== 0) {
        totalWeight -= bridge.shift();
        time += 1;
        
        if (truckWeights[0] + totalWeight <= weight) {
            const truck_weight = truckWeights.shift();
            totalWeight += truck_weight;
            bridge.push(truck_weight)
        }
        
        if (bridge.length !== bridgeLength) {
            bridge.push(0);
        }
    }
    
    while (totalWeight) {
        totalWeight -= bridge.shift()
        time += 1
    }
    return time;
}

const solveByQueue = (bridgeLength, weight, truckWeights) => {
    const bridge = new DoublyLinkedList();
    const truckWeightsQueue = new DoublyLinkedList();
    
    Array.from({length: bridgeLength}, () => 0).forEach(el => bridge.push(el));
    truckWeights.forEach(el => truckWeightsQueue.push(el));
    
    let totalWeight = 0;
    let time = 0;
    while (!truckWeightsQueue.isEmpty()) {
        totalWeight -= bridge.shift();
        time += 1;
        
        if (truckWeightsQueue.peek() + totalWeight <= weight) {
            const truck_weight = truckWeightsQueue.shift();
            totalWeight += truck_weight;
            bridge.push(truck_weight)
        }
        
        if (bridge.getSize() !== bridgeLength) {
            bridge.push(0);
        }
    }
    
    while (totalWeight) {
        totalWeight -= bridge.shift()
        time += 1
    }
    return time;
}


const solve = (bridgeLength, weight, truckWeights) => {
    const bridge = new DoublyLinkedList(); 
    const truckWeightsQueue = new DoublyLinkedList();
    truckWeights.forEach(el => truckWeightsQueue.push(el));
    
    let time = 0;
    let currentWeight = 0
    
    while (!truckWeightsQueue.isEmpty() || !bridge.isEmpty()) {
        time += 1; 

        if (!bridge.isEmpty() && time - bridge.peek().startTime >= bridgeLength) {
            const {truck} = bridge.shift();
            currentWeight -= truck;
        }

        if (
            !truckWeightsQueue.isEmpty()
            && currentWeight + truckWeightsQueue.peek() <= weight 
            && bridge.getSize() < bridgeLength
        ) {
            const nextTruck = truckWeightsQueue.shift();
            currentWeight += nextTruck;
            bridge.push({ truck: nextTruck, startTime: time });
        }
    }
    return time;
};



const solution = (bridgeLength, weight, truckWeights) => {
    // return solveByArray(bridgeLength, weight, truckWeights);
    // return solveByQueue(bridgeLength, weight, truckWeights);
    return solve(bridgeLength, weight, truckWeights)
}



// bridgeLength 최대 10,000
// weight 최대 10,000
// truckWeights 최대 10,000
// -> 최대 시간 == 10,000 * 10,000 = 1,000,000,000
const arr = new Array(10_000).fill(10_000)
const t0 = performance.now();
console.log(solution(10_000, 10_000, arr))
const t1 = performance.now();
console.log(`${t1 - t0} ms`);
