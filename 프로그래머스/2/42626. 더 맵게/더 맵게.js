const createHeap = () => {
    const h = [];
    
    const push = (el) => {
        h.push(el);
        
        let current = h.length - 1;
        
        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            
            if (h[current] >= h[parent]) {
                break;
            } else {
                [h[current], h[parent]] = [h[parent], h[current]];
                current = parent;
            }
        } 
    }
    
    const pop = () => {
        if (h.length === 0) return null
        if (h.length === 1) return h.pop()
        
        const ret = h[0];
        h[0] = h.pop();
        
        let current = 0;
        
        while (current < h.length - 1) {
            const left = current * 2 + 1;
            const right = current * 2 + 2;
            
            if (!h[left]) break;
            
            let smallest = left;
            if (h[right] && h[right] < h[left]) {
                smallest = right;
            }
            if (h[current] <= h[smallest]) {
                break;
            }
            [h[current], h[smallest]] = [h[smallest], h[current]];
            current = smallest;
        }
        return ret;
    }
    
    const size = () => {
        return h.length;
    }
    
    return {
        push,
        pop,
        size,
    }
}

function solution(scoville, K) {
    const heap = createHeap()
    
    for (const s of scoville) {
        heap.push(s)
    }
    
    let answer = 0;
    while (heap.size() >= 2) {
        const first = heap.pop();
        const second = heap.pop();
        
        if (first >= K) {
            return answer;
        }
        
        heap.push(first + second * 2);
        answer += 1;
    }

    if (heap.pop() >= K) {
        return answer;
    }
    
    return -1;
}