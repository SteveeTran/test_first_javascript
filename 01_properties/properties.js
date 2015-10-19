var object = {};

var setSomePropertiesOn = function(object){
    
    object.x = 7;
    object['y'] = 8;
    
    var onePlus = function(number){
        return number + 1;
    }
    
    object['onePlus'] = onePlus;

}