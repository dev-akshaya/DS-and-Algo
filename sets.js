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

  this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e){
      unionSet.add(e);
    })
    secondSet.forEach(function(e){
      unionSet.add(e);
    })
    return unionSet;
  }

  this.intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function(e){
      if(otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function(e){
      if(!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    })
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
setA.remove("d");
setB.remove("d");
console.log(setA.values());
console.log(setB.values());

console.log(setA.size());
console.log(setB.size());

// Add Value and do union of two sets -------
setA.add("z");
console.log(setA.union(setB).values());

// Find intersection of two sets
console.log(setA.intersection(setB).values());

// Find differenceSet of two sets
console.log(setA.difference(setB).values());

// Check the subset
console.log(setA.subset(setB));

// comment the line 110 and see the magic 