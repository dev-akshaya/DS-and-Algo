function mySet() {
  var collection = [];

  this.has = function(element){
    return(collection.indexOf(element) !== -1);
  };

  this.values = function(){
    return collection;
  };
  
  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    } return false;
  };

  this.remove = function(element) {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    } return false;
  };

  this.size = function() {
    return collection.length
  }
}

let setA = new mySet();
let setB = new mySet();

// Add Value and Print Remaining Values -------
setA.add("a");
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");
console.log(setA.values());
console.log(setB.values());

// Check Values -------
console.log(setA.has("a"));
console.log(setB.has("a"));

// Remove Value and Print Remaining Values -------
setA.remove("c");
setB.remove("c");
console.log(setA.values());
console.log(setB.values());

console.log(setA.size());
console.log(setB.size());

