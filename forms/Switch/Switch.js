let switchName = prompt('Enter your first name')
let switchState = prompt('Enter your state(2 letter abbreviation ie NE or FL)')
let switchTemperature = Number(prompt('Enter the temperature (number only) in Fahrenheit'))
//Create variables for name, state, and temperature that prompt the user for their input and stores the info.

let switchOutput1 = 'wear a warm coat, hat, scarf, and gloves.'
let switchOutput2 = "wear a warm coat but you won't need a hat, scarf or gloves."
let switchOutput3 = 'wear your warmest coat, a warm hat, a scarf, and warm gloves.'
let switchOutput4 = 'wear a warm coat, hat and gloves. Maybe a scarf too.'
//creates four variables that will be used to display messages to the console.

let switchMessages = [switchOutput1, switchOutput2, switchOutput3, switchOutput4]
//creates an array that contains the four previous variables
//all variables were given unique names so the strings stored in the If Else statements were not changed.

switch(true){
    case switchTemperature < 32 && switchState == 'NE':
        console.log(`${switchName}, ${switchMessages[0]}`);
        break;
    case (switchTemperature > 32 && switchTemperature  < 50) && switchState == 'NE':
        console.log(`${switchName}, ${switchMessages[1]}`);
        break;
    case (switchTemperature  > 32 && switchTemperature < 50) && switchState == 'FL':
        console.log(`${switchName}, ${switchMessages[2]}`);
        break;
    case (switchTemperature  > 50 && switchTemperature < 70) && switchState == 'FL':
        console.log(`${switchName}, ${switchMessages[3]}`);
        break;
    default:
        console.log(`${switchName}, we have no advice for you!`)
}
//created a switch that takes the user's input for temperature and state. If their info matches the requirement for the first case the console displays the message.
//If the first case is not true, then the next case runs. If none of the cases are true the default message is displayed. 