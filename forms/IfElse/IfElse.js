let firstName = prompt('Enter your first name')
let state = prompt('Enter your state(2 letter abbreviation ie NE or FL)')
let temperature = Number(prompt('Enter the temperature (number only) in Fahrenheit'))
//Create variables for name, state, and temperature that prompt the user for their input and stores the info.

let output1 = 'wear a warm coat, hat, scarf, and gloves.'
let output2 = "wear a warm coat but you won't need a hat, scarf or gloves."
let output3 = 'wear your warmest coat, a warm hat, a scarf, and warm gloves.'
let output4 = 'wear a warm coat, hat and gloves. Maybe a scarf too.'
//creates four variables that will be used to display messages to the console.

let messages = [output1, output2, output3, output4]
//creates an array that contains the four previous variables

if (temperature < 32 && state == 'NE')
    console.log(`${firstName}, ${messages[0]}`)
else if ((temperature > 32 && temperature < 50) && state == 'NE')
    console.log(`${firstName}, ${messages[1]}`)
else if ((temperature > 32 && temperature < 50) && state == 'FL')
    console.log(`${firstName}, ${messages[2]}`)
else if ((temperature > 50 && temperature < 70) && state == 'FL')
    console.log(`${firstName}, ${messages[3]}`)
    
//creates an If Else statement that takes the user's input to check temperature and state and outputs the appropriate statement to the console.