//Creates a variable for user input and attacthes/connects itself to text-input element
const userInput = document.getElementById("text-input");
//Creates a variable for the check button and attatches/connects itself to the check button element
const checkBtn = document.getElementById("check-btn");
//Creates a variable for the result and attaches/connects itself to the result element
const resultant = document.getElementById("result");

//Starts the checkPalindrome function taking in input as a parameter using arrow function syntax
const checkPalindrome = input => {
//OriginalInput will store the entered value for later use
const originalInput = input;  

//If the input is empty, an alert will pop on the screen stating the user to input a value
if(input === ''){
    //alert creates the pop up that states the following message
    alert('Please input a value.');
    //Return out of the if statement
    return;
}

//Remove previous result
resultant.replaceChildren();

//Takes the input and converts it to a lower case string and then uses regex to remove any characters that are not letters (both uppercase and lowercase) or numbers and stores it into a variable called lowerCaseStr
const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
//Using template literal to show the original input in bold and then also uses a ternary operator to check if the lowerCaseStr is a plaindrome. It spreads lowerCaseStr into an array of characters, then it reverses the array and the joins the array back into a string to use for comparison.
let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

//Create a new 'p' element and a new variable called pTag that are connected
const pTag = document.createElement('p');
//Attaches the pTag('p' element) to the user-input class in css
pTag.className = 'user-input';
//Sets the innerHTML property of the pTag element to the value of resultMsg
pTag.innerHTML = resultMsg;
//Resultant is attatched to the results div and the appendChild method adds the pTag element to the result div
resultant.appendChild(pTag);

//Removes the hidden attribute to the results div and displays the results
resultant.classList.remove('hidden');
};

//Adding an event listener so when the button is clicked, it will run the following block of code
checkBtn.addEventListener('click', () => {
    //The checkPalindrome function is called and is using the userInput value as it's parameter
    checkPalindrome(userInput.value);
    //Clears the userInput readying it up for a new value
    userInput.value = '';
});

//Adding an event listener that will execute the following block of code after a key is pressed
userInput.addEventListener('keydown', e =>{
    //if the key that is hit is 'Enter'
    if (e.key === 'Enter'){
        //Runs the checkPalindrome if the enter key is hit
        checkPalindrome(userInput.value);
        //Clears the userInput readying it up for a new value
        userInput.value = '';
    }
});

//Test commit