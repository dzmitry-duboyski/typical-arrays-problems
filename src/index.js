exports.min = function min(array) {
    if (!arguments[0]) { return 0; }
    if (array.length < 1) { return 0; }
    
    let min;
    for(i=0;i<array.length;i++){
      if(i===0){
        min = Math.min(array[i],array[i+1]);
        continue;
      }
      min = Math.min(min,array[i]);
    }
    return min;
}

exports.max = function max(array) {
    if (!arguments[0]) { return 0; }
    if (array.length < 1) { return 0; }

    let max;
    for(i=0;i<array.length;i++){
      if(i===0){
        max = Math.max(array[i],array[i+1]);
        continue;
      }
      max = Math.max(max,array[i]);
    }
    return max;
}

exports.avg = function avg(array) {
    if (!arguments[0]) { return 0; }
    if (array.length < 1) { return 0; }

    let result = 0;
    array.map(elem => result = result + elem)
    result = result / array.length;
    return result;
}
