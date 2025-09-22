const zip = (...args) => {
    const minLens = Math.min(...args.map(arg => arg.length));
    
    return Array.from({length: minLens}, (_, i) => args.map(arg => arg[i]));
}

const getTime = (level, puzzles) => {
    let time_prev = 0;
    
    return puzzles.reduce((acc, [diff, time_cur]) => {
        if (diff <= level) {
            time_prev = time_cur;
            return acc + time_cur;
        } else {
            const count = diff - level;
            const duration = (time_prev + time_cur) * count + time_cur;
            
            time_prev = time_cur;
            
            return acc + duration;
        }
    }, 0)
}

function solution(diffs, times, limit) {
    const puzzles = zip(diffs, times)
    
    let [left, right] = [1, 1_000_000_000_000_001];
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        const total = getTime(mid, puzzles)
        if (total > limit) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left
}