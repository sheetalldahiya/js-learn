// console.log("3">77);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// equality check ==  and comparison > < >= <= work differently
// in comparison null is converted to 0 . so null>0 is false but null>=0 is true



// //strict check
// console.log("2"==2);   //true
// console.log("2"===2);  //false check datatype


/////////////////////////////////////////////////////////////////////////////////////////////

// // js ->dynamically typed
// //datatypes -> primitive and 
// // non-primitive(reference type) ->array,objects,functions

// //symbol is used for uniqueness

// let id=Symbol("xyz");
// let id2=Symbol("xyz");
// console.log(id);
// console.log(typeof id);  //symbol
// console.log(id==id2); //false

// let arr = [3,5,6];
// let obj ={
//     item1:5,
//     item2:"name"
// }

// let func = function(){
    // console.log("hi");
// }

// console.log(typeof arr); //object
// console.log(typeof obj); //object
// console.log(typeof func); //function

//// stack->primitive  , heap->non-primitive

/////////////////////////////////////////////////////////////////////////////////////////////

// let name="sheetal";
// let age=20;

// //string interpolation
// console.log(`name is ${name} and age is ${age}`);
// console.log(name[1]);

/////////////////////////////////////////

// let str =new String("dahiya");

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.charAt(0));
// console.log(str.indexOf('h'));  //-1 if not present
// console.log(str.substring(1,3));
// console.log(str.slice(-4,5));

// let name="  sheetal  ";
// console.log(name.trim());  // trimEnd() and trimStart()

/////////////////////////////////////////


// let url="www.xyz%20abc/sh%20dh";

// console.log(url.replace('%20','-')); //replace only 1st occurance
// console.log(url.replaceAll('%20','-')); //replace all occurances
// console.log(url.replace(/%20/g,'-'));  //use g flag to indicate a global replacement   /pattern/flags

// console.log(url.includes('xyz'));

/////////////////////////////////////////


let str="The quick brown fox jumps over the lazy dog";
// console.log(str.split(" "));  
// console.log(str.split(" ",3));            //separator,limit

// console.log(str.charCodeAt(2));    //ascii value
// console.log(str.endsWith('f'));
// console.log(str.includes("fox")); 
// console.log(str.lastIndexOf("a"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
