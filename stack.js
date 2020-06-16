// var word = "axa";

// var rword = '';

// var letters = [];

// for(let i = 0; i < word.length; i++){
//   letters.push(word[i]);
// }

// // console.log(letters);

// for(let i = 0; i < word.length; i++){
//   rword = rword + letters.pop();
// }

// // console.log(letters);
// // console.log(rword);

// if(word === rword){
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }


// Create a Stack Constructor --------------------------------------
var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++
  }

  // Removes and returns the value at the end of the stack
  this.pop = function(){
    if(this.count === 0){
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function(){
    return this.count;
  }

  // Returns the value at the end of the stack
  this.peek = function(){
    return this.storage[this.count - 1];
  }
}

// create a stack
var myStack = new Stack(); 

// push 
myStack.push("Akshaya");
myStack.push("Kumar");
myStack.push("Biswal");
myStack.push("Sanu");

console.log(myStack.storage);

// // pop
myStack.pop();
console.log(myStack.storage);

// // size 
console.log(myStack.size());

// // peek
console.log(myStack.peek());
console.log(myStack.storage);