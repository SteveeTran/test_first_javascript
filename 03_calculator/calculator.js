function Calculator(){
    start = 0;
    this.value = function(){
            return start;
        }
    this.add = function(number){
        start += number;
    }
    this.subtract = function(number){
        start -= number;
    }
}