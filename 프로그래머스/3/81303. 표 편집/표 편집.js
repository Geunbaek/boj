const up = (state, now, x) => {   
    for (let count = 0; count < x; count ++) {
        now = state[now].prev;
    }
    return now;
}

const down = (state, now, x) => {
    for (let count = 0; count < x; count ++) {
        now = state[now].next;
    }
    return now;
}

const del = (state, now) => {
    if (state[now].prev !== null) {
        state[state[now].prev].next = state[now].next;
    }
    if (state[now].next !== null) {
        state[state[now].next].prev = state[now].prev;    
    }
    
    const next = state[now].next === null ? state[now].prev : state[now].next
    
    state[now].isDelete = true;
    state[now].prev = null;
    state[now].next = null;
    return next;
}

const undo = (n, state, last) => {
    const {prev, next, index} = last
    
    state[index].prev = prev;
    state[index].next = next;
    
    if (state[prev]){
        state[prev].next = index;
    }
    if (state[next]) {
        state[next].prev = index;
    }
    state[index].isDelete = false;
}

function solution(n, k, cmd) {
    const state = Array
        .from(
            { length : n }, 
            (_, i) => ({
                prev: i === 0 ? null : i - 1, 
                isDelete: false,
                next: i === n - 1 ? null : i + 1,
            }))
    const deleteStack = [];
    let now = k;
    for (const c of cmd) {
        const [command, x] = c.split(" ");
        switch (command) {
            case "U": {
                now = up(state, now, parseInt(x));
                break;
            }
            case "D": {
                now = down(state, now, parseInt(x));
                break;
            }
            case "C": {
                deleteStack.push({...state[now], index: now});
                now = del(state, now)
                break;
            }
            case "Z": {
                const last = deleteStack.pop()
                undo(n, state, last)
                break;
            }
        }
    }
    
    return state.map(s => s.isDelete ? "X" : "O").join("");
}