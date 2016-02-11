var f2c = function(fahr){
  return (fahr - 32) * (5/9);
}

var c2f = function(cel){
  return (cel * 9/5) + 32;
}

var Temperature = function(init_fahr){
  var fahr = init_fahr;
  this.__getfahr = function(){
    return fahr;
  }
  this.__setfahr = function(_fahr){
    fahr = _fahr;
  }
}

Temperature.prototype.setFahrenheit = function(fahr){
  this.__setfahr(fahr);
}

Temperature.prototype.fahrenheit = function(){
  return this.__getfahr();
}

Temperature.prototype.setCelcius = function(cel){
  this.__setfahr(c2f(cel));
}

Temperature.prototype.celcius = function(){
  return f2c(this.__getfahr());
}
