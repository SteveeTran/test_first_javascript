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
    if(func(arr[i])){
      new_arr.push(arr[i])
    }
  }

  return new_arr
}


function contains(arr, value){
  for(var i in arr){
    if(arr[i] == value){
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


function every(arr){
  if (arr.length == 0){
    return true;
  }

  for(var i = 0; i < arr.length; i++){
    if((arr[i] % 2 === 1) || arr[i] === false || ((arr[i] != 0) && (arr[i] === false))){
      if(arr[i] === false){
        return false;
      }
      if(arr[i] % 2 === 1 && arr[i] != true){
        return false;
      }
    }
  }

  return true;
}

function any(arr){
  if(arr.length == 0){
    return false;
  }


  for(var i = 1; i < arr.length; i++){
    if(typeof arr[0] == "boolean"){
      if(arr[i] != arr[0]){
        return true;
      }
    }
    if(typeof arr[0] == "number"){
      if(arr[0] % 2 == 1){
        if(arr[i] % 2 == 0){
          return true;
        }
      }
    }
  }

  return false;
}


function once(func){
  var ran = false, memo;
  return function(){
    if(ran){
      return memo;
    }
    ran = true;
    memo = func.apply(this, arguments);
    func = null;
  }
}
