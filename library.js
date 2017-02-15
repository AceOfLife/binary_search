Array.prototype.toTwenty = function(){
    var start = 1;
    var end = 20;

    for(var i = start; i <= end; i += 1){
        this.push(i);
    }
   return this;
}

var oneToTwenty = [].toTwenty(); */

Array.prototype.toForty = function(){
    var start = 2;
    var end = 40;

    for(var i = start; i <= end; i += 2){
        this.push(i);
    }
   return this;
}

var oneToForty = [].toForty();


console.log(oneToForty);

Array.prototype.toOneThousand = function(){
    var start = 10;
    var end = 1000;

    for(var i = start; i <= end; i += 10){
        this.push(i);
    }
   return this;
}

var oneToOneThousand = [].toOneThousand();


Array.prototype.search = function(){
  
}