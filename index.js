let numRows = 5


  function generate (numRows) {

    if (numRows === 0) return []
    let result = [[1]]
    for (let i = 1; i < numRows; i++) {
        let prev = result[i - 1]
        let current = [1]
        for (let j = 1; j < i; j++) {
            current[j]= prev[j - 1] + (prev[j] || 0)
            
        }
        current.push(1)
        result[i]=current
    }
    return result
};


let result=generate(numRows)
console.log("result",result);
