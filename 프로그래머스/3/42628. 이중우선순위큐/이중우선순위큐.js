const createHeap = () => {
    const h = [];
    
    const compareArrays = (arr1, arr2) => {
        const minLen = Math.min(arr1.length, arr2.length);
        for (let i = 0; i < minLen; i++) {
            if (arr1[i] !== arr2[i]) {
                return arr1[i] - arr2[i];
            }
        }
        return arr1.length - arr2.length;
    };
    
    const push = (el) => {
        h.push(el);
        let current = h.length - 1;
        
        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (compareArrays(h[current].priority, h[parent].priority) >= 0) {
                break;
            } else {
                [h[current], h[parent]] = [h[parent], h[current]];
                current = parent;
            }
        } 
    };
    
    const pop = () => {
        if (h.length === 0) return null;
        if (h.length === 1) return h.pop();
        
        const ret = h[0];
        h[0] = h.pop();
        let current = 0;
        
        while (current < h.length - 1) {
            const left = current * 2 + 1;
            const right = current * 2 + 2;
            
            if (!h[left]) break;
            
            let smallest = left;
            if (h[right] && compareArrays(h[right].priority, h[left].priority) < 0) {
                smallest = right;
            }
            if (compareArrays(h[current].priority, h[smallest].priority) <= 0) {
                break;
            }
            [h[current], h[smallest]] = [h[smallest], h[current]];
            current = smallest;
        }
        return ret;
    };
    
    const size = () => h.length;
    
    const peek = () => (size() === 0 ? null : h[0]);
    
    return {
        push,
        pop,
        size,
        peek
    };
};

function solution(operations) {
    const minHeap = createHeap();
    const maxHeap = createHeap();
    const state = new Map();
    
    for (const operation of operations) {
        const [oper, num] = operation.split(" ");
        if (oper === "I") {
            const elem = Number(num);
            minHeap.push({priority: [elem]});
            maxHeap.push({priority: [-elem]});
            state.set(elem, (state.get(elem) || 0) + 1);
        } else if (oper == 'D') {
            if (num === "1") {
                while (maxHeap.size() !== 0) {
                    const {priority: [deletedNum]} = maxHeap.pop();
                    if (state.has(-deletedNum)) {
                        if (state.get(-deletedNum) <= 1) {
                            state.delete(-deletedNum);
                        } else {
                            state.set(-deletedNum, state.get(-deletedNum) - 1);
                        }
                        break;
                    }
                }
            } else {
                while (minHeap.size() !== 0) {
                    const {priority: [deletedNum]} = minHeap.pop();
                    if (state.has(deletedNum)) {
                        if (state.get(deletedNum) <= 1) {
                            state.delete(deletedNum);
                        } else {
                            state.set(deletedNum, state.get(deletedNum) - 1);
                        }
                        break;
                    }
                }
            }
        }
    }

    if (state.size === 0) {
        return [0, 0];
    }
    
    let max = 0
    let min = 10**8
    
    state.forEach((value, key) => {
        max = Math.max(max, key);
        min = Math.min(min, key);
    })

    return [max, min];
}