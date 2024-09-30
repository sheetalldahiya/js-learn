// var has issue in block and functional scope
//use let in general

// let a=2 , b=6;
// console.log(a);
// console.log(`a:${a},b:${b}`);

/////////////////////////////////////////////////////////////////////////////////////////////

"use strict"; //treats all js as new version

// alert("hello") //we are using nodejs , not browser


/////////////////////////////////////////////////////////////////////////////////////////////


//no need to tell datatype
// number , bigint , boolean , string , null
// 4.5 -> also a number
// null-> stand alone value  // typeof null -> object
// undefined ->means value has not assigned
//symbol -> for unique
//object

// console.log(typeof("dhhd"));
// console.log(typeof 18);
// let name;
// console.log(typeof name);  //undefined
// console.log(typeof null);  // object
// console.log(typeof undefined); //undefined

/////////////////////////////////////////////////////////////////////////////////////////////


// let score="45f";
// let scoreNum=Number(score);
// console.log(scoreNum); //Nan is printed.  if score=null then scoreNum would be 0
//                         // if score=undefined then scoreNum=NaN

// console.log(typeof score); //string . if score=null then object
// console.log(typeof scoreNum); //number

// console.log(scoreNum+5); //Nan . if score=null then 5
// console.log(typeof (scoreNum+5)); //number
// console.log (typeof NaN); //number

// console.log(score+5); //45f5  . if score=null then 5
// console.log(typeof (score+5));  //string  . if score=null it is number

// //NaN -> not a number

/////////////////////////////////////////////////////////////////////////////////////////////


// let isLogged=undefined;

// let boolLogged=Boolean(isLogged);
// console.log(boolLogged);
// console.log(typeof boolLogged);

// // 0->false . any positive or negative number except 0 ->true
// // ""->false . any non empty string->true
// // null,undefined ->false

/////////////////////////////////////////////////////////////////////////////////////////////


// let x=null;
// let xstr=String(x);

// console.log(xstr); // if x=null -> null
// console.log(typeof strx);   // if x=null ->  undefined

/////////////////////////////////////////////////////////////////////////////////////////////



// let value=3;
// let neg=-value;
// console.log(neg);
// console.log(2**3); //for power




// console.log("2"+1);  
// console.log(2+"1");
// //both output 12  //both string
// console.log("1"+2+2);  //122
// console.log(1+2+"2");  //32
// console.log(typeof(1+2+"2"))
// // are string

// console.log("6"-2); 
// console.log(6-"2");  
// console.log(typeof("6"-2));
// //both output 4  //both number


//don't rely on these type of conversions . they may give wrong results .



// let x=4,y=4;
// console.log(x++); //4
// console.log(++y); //5

// console.log(`x:${x},y:${y}`)

/////////////////////////////////////////////////////////////////////////////////////////////
