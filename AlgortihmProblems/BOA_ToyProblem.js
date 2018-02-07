/* 
This is a Bank of America Interview Coding Challenge. The goal is to take an array and get rid of duplicates into a sub-array. However the sub-array can not have any duplicates in it. Return the array of arrays
*/

let resolveDuplicates = arr => {
    let output = new Array(arr.length);
    for(let i=0;i<output.length;i++){
      output[i] = new Array(arr.length)
    }
    let index = 0;
    while(index < arr.length){
      for(let i=0; i<output.length; i++){
      if(output[i].includes(arr[index])===false){
        output[i].push(arr[index])
        break;
      }
    }
    index++;
    }
    
    // Trims out the empty indices of all sub-arrays
    for(let i=0;i<output.length;i++){
      output[i] = trimWhiteSpace(output[i]);
    }
    
    // Trims out sub-arrays that are empty 
    for(let i=0;i<output.length;i++){
      if(output[i].length === 0){
        output.splice(i,1)
        i--;
      }
    }
    
    return output;
  }
  
  let trimWhiteSpace = (arr) => {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  
  console.log(resolveDuplicates([1, 7, 1, 2, 4, 5, 12, 3, 2, 3, 5, 12,3,3,3,3,3,3,8,12,15,19,42,47,58, 62, 62, 62, 62, 62, 62, -1]));