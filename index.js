// code your solution here

//This is a function that sets a default value
function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`
}


//This is a function expression
const mondayWork = function (doSomething = 'go to the office'){
    return `This Monday, I will ${doSomething}.`
}
mondayWork;npm

// IIFE (imediately invoked function expression)
function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Call example:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); // Output: "You are !!!amazing!!!"
  console.log(encouragingPromptFunction()); // Output: "You are ***special***"