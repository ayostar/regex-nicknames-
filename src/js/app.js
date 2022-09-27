import Validator from './validator';

const incomingUserString = new Validator('aRTeM123');
console.log(`${incomingUserString} - ${incomingUserString.validateUsername()}`);
