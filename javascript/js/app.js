// alert('You are a goat')
     // variables

    
let Name='David'
console.log(Name)

var name='Charles'
console.log(name)

const girl='Evelyn'
console.log(girl)
name='Ariyo'
console.log(name)
document.querySelector('#lasop').innerHTML

// Data type
// 1 String
// 2 integer
// 3 BigInt
// 4 Boolean
// 5 object
// let x=8
// let y='8'
// console.log(x)
// console.log(y)

// let z=9.9868  
// String concatenation
let club='Chelsea'
let footballer='Timo' 
let football= 'Werner'
let player=footballer + ' ' + football + ' wears jersey N0 9 for ' + club
console.log(player)


// let foot='Mohammed Sallah'
// console.log(foot.length)
// console.log(foot[2])
// console.log(foot.toLocaleUpperCase())
// console.log(foot.includes('Q'))




//indeOf method and last indexOf method
// let email="superman@emaile.com";

// console.log(email.indexOf("e"));

// console.log(email.lastIndexOf("e"));


// slice

// let footLength=foot.slice(0,4)
// console.log(footLength)

// // substring
// let email='ashuaib1991@gmail.com'
// let shuaib=email.substring(2, 7)
// console.log(shuaib)


// // subStr method

// let bootcamp='LagoonSchoolOfProgramming'
// let camp=bootcamp.substr(5, 11)
// console.log(camp)
// The Replace method
// let bootcamp='LagoonSchoolOfProgramming'
// let camp=bootcamp.replace('oon', 'os')
// console.log(camp)


// let np=90.9776265
// let ne=np.toFixed(2)
// console.log(ne)

// Finding string in a string
// var str=('Hello dear, how are you?');
// var pos=str.indexOf('dear')
// console.log(pos)

// var stro=('Hello dear, how are you dear?');
// var pose=stro.lastIndexOf('dear')
// console.log(pose)


// var str=('Hello dear, how are you?');
// var pos=str.search('are')
// console.log(pos)

// // Number Data type//
// const x ="35";
// console.log(x);

// // Operators
// let m =3;
// let n =46.8;

// console.log(45+4);
// console.log(45-4);
// console.log(45*4);
// console.log(45/5);
// console.log(5%2);
// console.log(m*n);

// // Incremental method
// let likes = 5;
// likes++;
// likes+=2;
// console.log(likes);
// likes--;
// console.log(likes)
// likes *=4;
// console.log(likes);
// likes/=2
// //likes=likes+1

// let bodmas = 5*(10-3)**2
// console.log(bodmas);


// // parseInt

// // let num=298.658477
// // let no=parseInt(num)
// // console.log(no)


// // parseFloat

// // let num=298.658477
// // let no=parseFloat(num)
// // console.log(no)



// // to fixed

// let num=298.658477
// let no=num.toFixed(0)
// console.log(no)



// // Object method


// let cars= {
// 	color: "black",
// 	brand: "Tesla",
// 	model: "Y",
// 	year: 2021
// };

// console.log(car.color);


let athlete='Mohammed Sallah';
console.log(athlete.length);
console.log(athlete.toUpperCase());
console.log(athlete.toLowerCase())
console.log(athlete[6])
console.log(athlete.includes('w'))


let example='programming'
console.log(example.includes('h'))

// let char=prompt('Compose your tweet');
// alert('You have written ' + ' ' + char + ', you have ' + (500 - char.length) + ' words remaining')



// indexOf and lastIndexOf
let email='supermanemail@gmail.com'
console.log(email.indexOf('e'))
console.log(email.lastIndexOf('e'))

// slice

let man='Hippopotamus'
let manLength=man.slice(-5, -1)
console.log(manLength)

// subString
let mane='Hippopotamus'
let maneLength=mane.substring(2, 6)
console.log(maneLength)

// substr
let mans='Hippopotamus'
let mansLength=mans.substr(2, 6)
console.log(mansLength)

// Replace method
let bootcamp='Lagoon School Of Programming'
let camp=bootcamp.replace('oon', 'os')
console.log(camp)


// Number method
// let x =5
// console.log(x)

 let n=45
 let m=3

// Operators

console.log(45+4)
console.log(45-4)
console.log(45*4)
console.log(2**4)
console.log(45/4)
console.log(5%4)
console.log(n*m)

// Pemdas

let bodmas =(2+1)-5*(10-3)**2/5
console.log(bodmas);


// incremental method

let likes=5
likes++
likes +=1
likes = likes +1
likes +=5
likes--
likes %=2
likes +=20
likes*=3
likes/=6
console.log(likes)


// converting to integer

// let num= 234.890054
// let no=parseInt(num)
// console.log(no)

// converting to float

// let num= 234.890054
// let no=parseFloat(num)
// console.log(no)

// tOFixed

let num= 234.890054
let no=num.toFixed(0)
console.log(no)

// Object methhod
 let car={
     color:'red',
     brand:'Toyota',
     model:'camry',
     year:'2020',
     price:'15 000 000'
     

};

console.log(car)
console.log(car.color)


//comparison operator//
// let x=5;
// console.log(x==7);
// console.log(x=='5');//weak equality
// console.log(x==='5');//strong equality
// console.log(x!=5);
// console.log(x>=5);
// console.log(x<=5);



// Logical Operators: AND, OR and NOT
p=6 
q=3
console.log(p>20 && q<4)
console.log(p>5 && q>2)
console.log(p<7 || q>9)
console.log(!(p==q))


// conditional statement
w =6
y=7
if(w<y){
     console.log(' it is less than 7')
}else if(w>y){
     console.log('it is greater than 7')
}else{
     console.log('Get out')
}

// let age=prompt('How old are you? ')
// if(age==''){
//      console.log("Idiot! Don't you have an age?")
// }else if(age>=18 && age<=65){
//      console.log('You can register as well as vote')
// }else if(age>65){
//      console.log('You can vote, but you are due for retirement from public office')
// }else{
//      console.log('You are too young to register or vote')
// }



// Ternary operation

// let party=prompt('How old are you? ')
// let beverage=(party>=18)?'You can enter and have a beer' : 'You can not enter, wait till you are 18'
// console.log(beverage)

// Nested if


let password=prompt('Enter user password')
if (password.length >=12){


     if(password.includes('@')){
     console.log('Password is strong')
     }else if (password.includes('&')){
          console.log('Password is weak')

     

     }else if(password.includes('%') || password.includes('$')){
          console.log('Password is intermediate')
     }else{
          console.log('Password is not accepted')
     }
}else{
     console.log('Password is too short')
}







