/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a,b) {
  return a + b;
}
console.log(`Add two numbers (Input:10,20)-> ${add(10,20)}`);

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)

function isEven(value) {
//check if the number is even
if (value%2 == 0)
  return true;
else
  return false;
  }
 console.log(`Check if the number given is even or not(Input: 10) -> ${isEven(10)}`);


// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name) {
    return `Hello  ${name} !!!`;
  }
  console.log(`Greet the user by name (Input: Ed) -> ${greet('Ed')}`);


// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age) {

  if(age >= 18)
    return true;
  else 
    return false;
 }
 console.log(`Check if the age is 18 or over(Input:10) -> ${isAnAdult(12)}`);


// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age) {

  if(!isAnAdult(age))
  {
     return 18-age;
  }
  return 0;
  }
  console.log(`Years to adulthood for a 12 years old are -> ${yearsToAdulthood(12)}`);

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(age,name) {

    if(isAnAdult(age)){
        return greet(name);
    }else{
        if(yearsToAdulthood(age)===1){
            return `Please grow up first and then you can come back in -> ${yearsToAdulthood(age)} years when you're 18`;
        } else {
          return `Please grow up first and then you can come back in -> ${yearsToAdulthood(age)} years when you're 18`;
        }
      }
  }
  console.log(admit(12,'Ed'));
