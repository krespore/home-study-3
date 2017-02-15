Array.prototype.toTwenty = function(){
  var twenty = [];
  for ( var i = 1; i <= 20; i++){
    twenty.push(i)
      }
      return twenty
  }
Array.prototype.toForty = function() {
  var forty = [];
  for (var i = 2; i <= 40; i+=2){
    forty.push(i)
  }
  return forty
}
Array.prototype.toOneThousand = function(){
  var oneThousand = [];
  for (var i = 10; i <=1000; i+=10) {
  oneThousand.push (i)
  }
  return oneThousand
}
Array.prototype.search = function(num){
  var min = 0,
    index = -1,
    iterationCount = 0,
    max = this.length - 1;
  
  while (max >= min){
    var average = Math.floor((min + max) / 2);

    if (this[min] == num){
      index = min;
      break;
    }

    if (this[max] == num){
      index = max;
      break;
    }

    if (this[average] == num){
      index = average;
      break;
    }

    iterationCount += 1
    if (this[average] < num){
      min = average + 1;
    }else if (this[average] > num){
       max = average - 1;
    }
  }
  
  return {
    count: iterationCount,
    length: this.length,
    index: index
  }
}