function reverseString(s){
    try{
        var newArray = s.split("");
        newArray.reverse();
        var finalArray = newArray.join("");
        console.log(finalArray)
    }
    catch(errror)
    {
        console.log(errror.message) 
        console.log(s)
    }

 }  
