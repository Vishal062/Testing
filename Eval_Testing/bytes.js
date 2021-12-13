const units = ['bytes','KB','MB','GB','TB'];

function convertDigitalStorages(x){
    let value =0;
    let n = parseInt(x, 10) || 0;
    
    while( n >=1024 && ++value){
        n = n/1024;
    }
    return (n.toFixed(n<10 && value > 0 ? 1 : 0) + units[value]);
}

module.exports = convertDigitalStorages;