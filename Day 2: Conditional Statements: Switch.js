function getLetter(s) {
    var letter;
    // Write your code here
    switch(s.charAt(0))
    {
       case ('a' || 'e' || 'i' || 'o' || 'u'):
           letter = "A";
           break;
        case ('b' || 'c' || 'd' || 'e' || 'f'):
            letter = "B";
            break ;
        case ('h' || 'i' || 'k' || 'l' || 'm'):
            letter = "C";
            break ;
        default:
            letter = "D";           
    } 
    return letter ;
}
