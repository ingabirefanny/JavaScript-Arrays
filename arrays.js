//Q1
let arr1 = [3,7,34,90,12]
let arr2 = [true,"green","where",12,56]

let last = arr1.pop();
console.log({last});

let last2 = arr2.pop();
console.log({last2});

//Q2
stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let joined = stringmyPets.join(); 
console.log({joined});

//Q3
itemsvaarr3 =[-5,9,5,3,2,-3,6,8,4,1];

itemsvaarr3.sort((num1,num2) => num1-num2);
console.log('ascending',itemsvaarr3);

itemsvaarr3.sort((num1,num2) => num1-num2);
console.log('descending',itemsvaarr3);

//Q4

let arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let removeDuplicates = [];
let duplicates = [];
arr.forEach(f =>{
    if (!removeDuplicates.includes(f)){
        removeDuplicates.push(f);
    }
    else(duplicates.push(f));
});
console.log({removeDuplicates});
console.log({duplicates});

//Q5
let arr5 = ["the", "way", "x", 4];

let text = "way";
let textIndex = arr5.indexOf(text);

if (text){console.log({text})}
else{console.log("The search was not found ")}

//Q6
let str= "sevink";
function newSort (word) {
	return word.split("")
			.sort()
			.join("");
}
console.log(newSort(str));


