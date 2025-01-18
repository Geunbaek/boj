function max(array){
    var ret = 0;
    for(var elem of array){
        if(ret < elem[1]){
            ret = elem[1];
        }
    }
    return ret;
}

function solution(priorities, location) {
    var answer = 0;
    var priorityIndex = []
    
    for(var i = 0; i < priorities.length ; i ++){
        priorityIndex.push([i, priorities[i]]);
    }
    
    var maxValue = max(priorityIndex)

    while (priorityIndex.length > 0){
        var elem = priorityIndex.shift();
        if(elem[1] === maxValue){
            maxValue = max(priorityIndex)
            answer += 1
            if (elem[0]===location){
                return answer
            }
        }
        else{
            priorityIndex.push(elem)
        } 
    }    
}