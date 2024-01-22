// promise
//example1
// Bob's Promise Function
function bringPizza() {
    return new Promise((resolve, reject) => {
      const willBringPizza = Math.random() < 0.8; // Bob is 80% reliable
  
      setTimeout(() => {
        if (willBringPizza) {
          resolve("Yay! Bob brought pizza!");
        } else {
          reject("Oh no! Bob forgot the pizza!");
        }
      }, 2000); // Bob needs some time to decide and deliver
    });
  }
  
  // Bob's Promise Execution
  bringPizza()
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    });
  
  console.log("Waiting for Bob's pizza...");
/*Promise Creation:

function bringPizza() { Declares a function named bringPizza that returns a new Promise.
Pizza Delivery Simulation:

const willBringPizza = Math.random() < 0.8; Simulates Bob's reliability (80% chance of bringing pizza).
Timeout Function:

setTimeout(() => { Simulates the time it takes for Bob to decide and deliver the pizza (2 seconds).
Delivery Success:

resolve("Yay! Bob brought pizza!"); If Bob brings pizza, resolves the promise with a success message.
Delivery Failure:

reject("Oh no! Bob forgot the pizza!"); If Bob forgets the pizza, rejects the promise with an error message.
Promise Execution:

bringPizza() Calls the bringPizza function, which returns a promise.
Handling Success:

.then((successMessage) => { console.log(successMessage); }) If the promise is resolved, logs the success message to the console.
Handling Failure:

.catch((errorMessage) => { console.log(errorMessage); }) If the promise is rejected, logs the error message to the console.
Waiting Message:

console.log("Waiting for Bob's pizza..."); Logs a message indicating that we're waiting for Bob's pizza. */  
//Example2
function castEmojiSpell(text) {
    return new Promise((resolve, reject) => {
      const hasMagicWand = Math.random() < 0.9;
  
      setTimeout(() => {
        if (hasMagicWand) {
          const emojiText = text
            .split('')
            .map((char) => (char === ' ' ? ' ' : char + ' 🌟')) 
            .join('');
  
          resolve(emojiText);
        } else {
          reject('Oh no! Bob lost his magic wand!');
        }
      }, 2000); 
    });
  }
  
  const regularText = 'Hello, Bob! Make this text magical, please!';
  
  castEmojiSpell(regularText)
    .then((magicalText) => {
      console.log('Bob says:', magicalText);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    });
  
  console.log("Waiting for Bob's magic spell...");
  /*Promise Creation:

function bringPizza() { Declares a function named bringPizza that returns a new Promise.
Pizza Delivery Simulation:

const willBringPizza = Math.random() < 0.8; Simulates Bob's reliability (80% chance of bringing pizza).
Timeout Function:

setTimeout(() => { Simulates the time it takes for Bob to decide and deliver the pizza (2 seconds).
Delivery Success:

resolve("Yay! Bob brought pizza!"); If Bob brings pizza, resolves the promise with a success message.
Delivery Failure:

reject("Oh no! Bob forgot the pizza!"); If Bob forgets the pizza, rejects the promise with an error message.
Promise Execution:

bringPizza() Calls the bringPizza function, which returns a promise.
Handling Success:

.then((successMessage) => { console.log(successMessage); }) If the promise is resolved, logs the success message to the console.
Handling Failure:

.catch((errorMessage) => { console.log(errorMessage); }) If the promise is rejected, logs the error message to the console.
Waiting Message:

console.log("Waiting for Bob's pizza..."); Logs a message indicating that we're waiting for Bob's pizza.*/
  