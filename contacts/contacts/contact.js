const NUM_contact = 25;
const firstNames = ['ram', 'rahul', 'rohan', 'rakesh', 'ramesh','Ashraf'];

const lastNames = ['Reddy', 'Sharma', 'Singh', 'Khan', 'Rao','Sheikh'];
//generate a random number between min and max
const rand = (max, min = 0) =>Math.floor(Math.random() * (max - min + 1)) + min;

//generate a name
const generateName = () =>`${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)] }`;

//generate a phone number
const generatePhoneNumber = () =>
  `${rand(999, 100)} -${rand(999, 100)} -${rand(9999, 1000)}`;

//create a person
const createContact = () => ({name: generateName(),phone: generatePhoneNumber(),
});

//compare two contact for alphabetizing
export const compareNames = (contact1, contact2) =>contact1.name > contact2.name;

//add keys to based on index
const addKeysToContact = (contact, key) => ({
  key: key,
  ...contact,
});

const addKeys = (val, key) => ({ key: key, ...val });

//create an array of length NUM_contact and alphabetize by name
export default Array.from({ length: NUM_contact }, createContact).map(addKeys);
