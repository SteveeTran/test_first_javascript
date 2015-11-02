function Calculator(){
    var total = 0;
    var stackCounter = 0;
    var stack = [];
    this.value = function(){
        return total;
    }
    this.push = function(number){
        stack.push(number);
        stackCounter++;
    }
    this.plus = function(){
        if(stackCounter == 0){
            throw "calculator is empty";
        }
        if(stackCounter == 1){
            total += stack.pop();
        }
        else if((stackCounter - 1) != 0){
            total += stack.pop();
            total += stack.pop();
            stackCounter--;
            stackCounter--;
        }
    }
    this.minus = function(){
        if(stackCounter == 0){
            throw "calculator is empty";
        }
        if(stackCounter == 1){
            total -= stack.pop();
        }
        else if((stackCounter - 1) != 0){
            total -= stack.pop();
            total += stack.pop();
            stackCounter--;
            stackCounter--;
        }
    }
    this.divide = function(){
        if(stackCounter == 0){
            throw "calculator is empty";
        }
        var divisor = stack.pop();
        total += (stack.pop() / divisor);
    }
    this.times = function(){
        if(stackCounter == 0){
            throw "calculator is empty";
        }
        var multiplicand = total;
        total = (stack.pop() * multiplicand);
    }
}