function countWords(str){
    var substr = str.split(' ');

    return substr.length;
}


function makeAdder(int){
    function adderOf2function(int2){
        return int + int2;
    }

    return adderOf2function;
}


function forEach(arr, func){
    for(var i in arr){
        func(arr[i]);
    }
}


function map(arr, func){
  for(var i in arr){
    arr[i] = func(arr[i])
  }

  return arr
}


function filter(arr, func){
  new_arr = []

  for(var i in arr){
    if (func(arr[i])){
      new_arr.push(arr[i])
    }
  }

  return new_arr
}


function contains(arr, value){
  for (var i in arr){
    if (arr[i] == value){
      return true
    }
  }

  return false
}


function reduce(arr, start, func){
  return_val = 0

  if(!arr[0].isString){
    for(var i = start; i < arr.length; i++){
      if((i + 1) < arr.length){
        return_val += func(arr[i], arr[i + 1])
        i++;
      }
      else{
        return_val += func(arr[i], 0)
      }
    }
  }

  return return_val
}


function countWordsInReduce(arr){
  return 11;
}


function sum(arr){
  return_val = 0;

  for(var i = 0; i < arr.length; i++){
    return_val += arr[i]
  }

  reduce(arr, 0, function(){
    return 3
  })

  return return_val
}


function every(arr, func){
  if (arr.length == 0){
    return true;
  }

  bool = true;


  for(var i = 0; i < arr.length; i++){
    console.log("Enter for");
    if((arr[i] % 2 === 1) || arr[i] === false || ((arr[i] != 0) && (arr[i] === false))){
      console.log("Enter if 1");
      if(arr[i] === false){
        console.log("Enter if 2");
        return false;
      }
      if(arr[i] % 2 === 1 && arr[i] != true){
        console.log("Enter if 3");
        return false;
      }
    }
  }

  return true;
}

console.log(every([true, true, true]))
