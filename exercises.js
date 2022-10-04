
/*A function is a series of instructions that instructs the computer to perform a certain task. Functions allow you to reuse your code.
Invoke your functions and console.log your results*/


/*1. Create a function named 'makeRamen' which takes one string parameter: protein. This function will return the following statement:
'____ tonkotsu ramen.' Where the blank space will be populated be populated based on the parameter.*/

function makeRamen(protein){

return protein + ' tonkotsu ramen';

};
console.log(makeRamen("pork"));

//2. Create a function named 'fullName' which takes two string parameters: firstName, lastName. This function will concatenate the first and last name.

function fullName(firstName, lastName){

return firstName + ' ' + lastName;

};
console.log(fullName('Zack', 'Pilien'));


//3. Create a function named 'add' which takes two number parameters: num1, num2. This function will sum up two numbers.

function add(num1, num2,){

    return num1 + num2;
};
console.log(add(10, 34));


//4. Create a function named 'findAge' which takes two number parameters: current, birth. This function will subtract the birth year from the current year.

function findAge(current, birth){

    return current - birth;
}
console.log(findAge(2022, 1994));

/*5. Create a function named 'selfIntro' which takes two string and two number parameters : first, last, current, birth). 
This function will return the following statement:
'Hello, my name is _____ and I am ____ years old.' Where the blank spaces will be populated based on the parameters. 
Please make use of the fullName and findAge functions for this question.*/

function selfIntro(first, last, current, birth){

    return 'Hello, my name is ' + fullName(first, last) + ' and I am ' + findAge(current, birth) + ' years old';
};
console.log(selfIntro('Zack', 'Pilien', 2022, 1994));

//6. Create a function named 'ozToCup' which takes one number parameter oz. This function will convert fluid ounce to cup.

function ozToCup(oz){
return oz/16;
}
console.log(ozToCup(32));


/*7. Create a function named 'yenConverter which takes one number parameter dollar. This function will convert dollar to yen. 
Please use today's dollar to yen exchange rate.*/

function yenConverter(dollar){
return dollar*143.67;
}
console.log(yenConverter(44));

//8. Create a function named 'tempConverter' which takes one number parameter c. This function will convert celsius to fahrenheit.

function tempConverter(c){
    return c*(9/5) + 32;
}
console.log(tempConverter(25));

//9. Create a functin named 'throwBack' which takes one array parameter arr. This function will reverse the order of the elements in an array.

function throwBack(arr){
    return arr.reverse();
}
const array1 = ['frog','turtle', 'toad'];
console.log(throwBack(array1));

/*10. Create a function named 'unite' which takes one array parameter arr. 
This function will reverse the order of the elements in an array and then join all the elements into a string. 
Please make use of the throwBack function for this question*/

function unite(arr){
    let arrUnite = throwBack(arr);
    return toString(arrUnite);
}
const cherreh = ['toast', 44, 'piranha', 808];
unite(cherreh);
console.log(cherreh);