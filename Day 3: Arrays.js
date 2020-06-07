function getSecondLargest(array){
    var newArray = Array.from(new Set(array))
    newArray.sort(function(a,b){return(a-b)}); 
    return newArray[newArray.length-2];
 } 
//https://www.geeksforgeeks.org/how-to-sort-numeric-array-using-javascript/?ref=rp
