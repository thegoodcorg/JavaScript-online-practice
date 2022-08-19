// my age, to be converted to dog years later.
const myAge = 32;

// dogs early years, the first 2 years are roughly 10.5 human years
var earlyYears = 2;

earlyYears *= 10.5;

// The first 2 years are accounted for above, so they are removed for the laterYears variable
var laterYears = myAge - 2;

// after the first 2 years of life a dog ages at about 4 times the speed of humans, instead of 10/5
laterYears *= 4;

// using myAge this converts the human years to equivilant dog years
var myAgeInDogYears = earlyYears + laterYears;

var myName = 'Jeremy'.toLowerCase();

// finally, using all variables, after inputting an age and name it will display both human and dog years in the console.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);
