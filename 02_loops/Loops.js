var repeat = function(string, number){
    
    if(number == 0){
        return "";
    }
    else{
        var longstring = '';
        for(i = 1; i <= number; i++){
            longstring += string;
        }
        return longstring;
        }
}

var join = function(array, delimiter){
    
    var afterstring = '';
    if(delimiter == undefined){
        if(array.length == 0){
            return afterstring;
        }
        else{
            for(i = 0; i < array.length; i++){
                afterstring += array[i];
            }
            return afterstring;
        }
    }
    else{
        if(array.length == 0){
            return afterstring;
        }
        else{
            for(i = 0; i < array.length; i++){
                if(i != 0){
                    afterstring += delimiter;
                }
                afterstring += array[i];
            }
            return afterstring;
        }
    }
}

var sum = function(array){
    
    var aftersum = 0;
    if(array.length == 0){
        return aftersum;
    }
    else{
        for(i = 0; i < array.length; i++){
            aftersum += array[i];
        }
        return aftersum;
    }
}

var paramify = function(hash){
    var hashbrowns = '';    //the big end string
    var hasheesh = 0;   //counter to loop through hash
    var hashed = [];    //empty array to put hash elements into in order to be able to sort
    var hashman = '';   //string that will hold hash elements
    for(var key in hash){
        hashman += key; 
        hashman += '=';
        hashman += hash[key];
        hasheesh++;     //increment counter here to determine if there needs to be a '&' at the end of the string
        if(Object.keys(hash).length != hasheesh){
            hashman += '&';
        }
        hashed[hasheesh - 1] = hashman;     //subtract one from the counter to get the true count for the loop
        hashman = '';   //reset hash element string
    }
    hashed.sort();  //supposed to alphabetize the string but doesn't seem to work
    for(i = 0; i < Object.keys(hash).length; i++){
        hashbrowns += hashed[i];    //append "sorted" array elements onto the big end string
    }
    return hashbrowns;
}

var factorial = function(number){
    if(number == 0){
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }
}

var concat_string = function(strings){
    var s = '';
    for(i = 0; i < arguments.length; i++){
        s += arguments[i];
    }
    return s;
}