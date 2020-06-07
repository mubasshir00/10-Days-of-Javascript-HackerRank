function vowelsAndConsonants(s) {
    var array = Array.from(s)
   // var vowelList = 'aeiouAEIOU'
    //array.sort()
    var res_Vowel = [];
    var res_Constant = [];
    var final_res = [];
    for(var i=0;i<array.length;i++)
    {
        if(array[i]=='a' || array[i]=='i' ||array[i]=='e' || array[i]=='o' || array[i]=='u'){
            res_Vowel.push(array[i])
        }
        else
        {
            res_Constant.push(array[i])
        }  
    }
    //final_res = res_Vowel +res_Constant;
    for(var i=0;i<res_Vowel.length;i++)
    {
       console.log(res_Vowel[i]);
    }
    for(var i=0;i<res_Constant.length;i++)
    {
       console.log(res_Constant[i]);
    }

   
}
