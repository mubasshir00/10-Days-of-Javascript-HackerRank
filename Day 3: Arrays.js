function getSecondLargest(array){
    var newArray = Array.from(new Set(array))
    newArray.sort(function(a,b){return(a-b)}); 
    return newArray[newArray.length-2];
 } 
