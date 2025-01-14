const timeToNumber = (time) => {
    const [m, s] = time.split(":").map(Number);
    return m * 60 + s;
}

const timeToString = (time) => {
    const m = parseInt(time / 60, 10).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

const execPrev = (time) => {
    return time < 10 ? 0 : time - 10;
}

const execNext = (time, endTime) => {
    return endTime - time < 10 ? endTime : time + 10;
}

const execSkip = (time, opStart, opEnd) => {
    if (opStart <= time && time <= opEnd) {
        return opEnd
    }
    return time
}

function solution(video_len, pos, op_start, op_end, commands) {
    let now = timeToNumber(pos);

    const endTime = timeToNumber(video_len);
    const opStart = timeToNumber(op_start);
    const opEnd = timeToNumber(op_end);
    now = execSkip(now, opStart, opEnd);
    
    for (const command of commands) {
        if (command === "next") {
            now = execNext(now, endTime);
        } else if (command === "prev") {
            now = execPrev(now);
        }
        now = execSkip(now, opStart, opEnd);
    }
    return timeToString(now);
}