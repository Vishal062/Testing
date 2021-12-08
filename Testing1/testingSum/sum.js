function sumArguments(data) {
    var total = 0;
    for(let i=0; i<data.length; i++){
        total += data[i]
    }
    return total;
}

module.exports = sumArguments;