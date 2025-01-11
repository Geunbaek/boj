function exec(arr) {
    return arr.map(num => {
        if (num >= 50 && num % 2 === 0) {
            return num / 2;
        }
        
        if ( num < 50 && num % 2 !== 0) {
            return num * 2 + 1
        }
        return num
    });
}

function compare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    const n = arr1.length;
    
    for (let i = 0; i < n; i ++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function solution(arr) {
    let x = 0;
    let temp = [...arr]
    
    if (compare(temp, exec(temp))) {
        return 0;
    }    

    while (true) {
        const arr1 = exec(temp);
        const arr2 = exec(arr1);
        
        x += 1;
        if (compare(arr1, arr2)) {
            return x;
        }
        
        temp = arr1;
    }
}