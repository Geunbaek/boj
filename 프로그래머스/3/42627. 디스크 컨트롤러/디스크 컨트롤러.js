const createHeap = () => {
    const h = [];
    
    // 배열 우선순위를 요소별로 비교하는 함수 (lexicographical order)
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
            
            if (h[left] === undefined) break;
            
            let smallest = left;
            if (h[right] !== undefined && compareArrays(h[right].priority, h[left].priority) < 0) {
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

function solution(jobs) {
    let answer = 0;
    const jobsCount = jobs.length;
    
    // 작업 번호를 추가하고 요청 시각 기준으로 정렬
    jobs = jobs
        .map((job, idx) => [job[0], job[1], idx])
        .sort((a, b) => a[0] - b[0]);
    
    const h = createHeap();
    let time = jobs[0][0]; // 첫 작업 요청 시각부터 시작
    
    while (jobs.length > 0 || h.size() > 0) {
        // 현재 시간까지 요청된 모든 작업을 힙에 넣는다.
        while (jobs.length > 0 && jobs[0][0] <= time) {
            const job = jobs.shift();
            // 우선순위: [소요시간, 요청 시각, 작업 번호]
            h.push({ priority: [job[1], job[0], job[2]], data: job });
        }
        
        if (h.size() > 0) {
            const { data } = h.pop();
            // data: [요청 시각, 작업 소요시간, 작업 번호]
            // 작업의 반환시간 = (작업 완료 시각 - 요청 시각)
            answer += (time - data[0] + data[1]);
            time += data[1];
        } else {
            // 대기 큐에 작업이 없다면 다음 작업의 요청 시각으로 점프
            time = jobs[0][0];
        }
    }
    
    return Math.floor(answer / jobsCount);
}
