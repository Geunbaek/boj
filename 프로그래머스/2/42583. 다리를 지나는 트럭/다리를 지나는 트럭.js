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

// const solve = (bridgeLength, weight, truckWeights) => {
//     const bridge = new DoublyLinkedList();
    
//     let totalWeight = 0;
//     let time = 0;

//     for (const truckWeight of truckWeights) {
//         while (!bridge.isEmpty()) {
//             if (bridge.peek().outTime <= time) {
//                 const { truck } = bridge.shift();
//                 totalWeight -= truck;
//             } else if (totalWeight + truckWeight > weight || bridge.length >= bridgeLength) {
//                 // 진입이 불가능한 경우, 다리 맨 앞의 트럭이 빠져나가는 시간까지 기다립니다.
//                 const { truck, outTime } = bridge.shift();
//                 time = outTime;
//                 totalWeight -= truck;
//             } else {
//                 time += 1;
//             }
//         }
//         time = bridge.getSize() === 0 ? time + 1 : Math.max(time + 1, time);
//         bridge.push({ truck: truckWeight, outTime: time + bridgeLength });
//         totalWeight += truckWeight;
//     }
    
//     while (!bridge.isEmpty()) {
//         const { outTime, truck } = bridge.shift();
//         time = outTime;
//     }
//     return time;
// }

const solve = (bridgeLength, weight, truckWeights) => {
  let time = 0;
  let currentWeight = 0;
  let bridge = []; // 다리 위에 있는 트럭들을 { truck, startTime } 형태로 저장

  // 대기 트럭이나 다리 위 트럭이 있을 동안 반복
  while (truckWeights.length > 0 || bridge.length > 0) {
    time++; // 1초 증가

    // 다리 맨 앞 트럭이 다리를 건넜다면 제거 (startTime 기준으로)
    if (bridge.length > 0 && time - bridge[0].startTime >= bridgeLength) {
      const finishedTruck = bridge.shift();
      currentWeight -= finishedTruck.truck;
    }

    // 대기 중인 트럭이 진입 가능한지 확인
    if (truckWeights.length > 0 &&
        currentWeight + truckWeights[0] <= weight &&
        bridge.length < bridgeLength) {
      const nextTruck = truckWeights.shift();
      currentWeight += nextTruck;
      // 트럭이 다리에 들어간 시간을 기록합니다.
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
// const t0 = performance.now();
// console.log(solution(10_000, 10_000, new Array(10_000).fill(10_000)))
// const t1 = performance.now();
// console.log(`${t1 - t0} ms`);
