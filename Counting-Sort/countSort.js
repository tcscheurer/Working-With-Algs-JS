// Implementation of the linear run time counting sort alg.

let CountingSort = (inArray) => {
    //here we search for the largest element so it doesn't 
    //have to be provided to the function
    var k = 0;
    for(var i =0;i<inArray.length;i++){
        if(inArray[i]>k){
            k = inArray[i];
        }
    }
    // Declare C, working array for placeholding of data occurances
    var workingArray = [];
    for(var i=0;i<=k;i++){
        workingArray[i] = 0;
    }
    //incrementing based on discovery of values 0..k
    for(var j=0;j<inArray.length;j++){
        workingArray[inArray[j]] = workingArray[inArray[j]] + 1;
    }
    //Forming a running sum on the working array
    for(var i=1;i<=k;i++){
        workingArray[i] = workingArray[i] + workingArray[i-1];
    }
    // declaration of outArray(B)
    var outArray = [];    
    //transfer of data from summed occurence in C, to B
    for(var j = inArray.length -1;j>=0;j--){
        outArray[workingArray[inArray[j]]] = inArray[j];
        workingArray[inArray[j]] = workingArray[inArray[j]] - 1;
    }

    return outArray;
}



