function solution(priorities, location) {
    priorities = priorities.map((priority, index) => ({
        priority, index
    }))
    
    let count = 0;
    while (priorities.length !== 0) {
        const max = Math.max(...priorities.map(priority => priority.priority));
        
        while (priorities[0].priority !== max) {
            priorities.push(priorities.shift())
        }
        
        const {priority, index} = priorities.shift();
        count += 1;
        
        if (index === location) {
            return count;
        }
    }
    return -1;
}