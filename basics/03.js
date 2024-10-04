// const balance=new Number(21.456);
// console.log(balance.toFixed(2));

// console.log(balance.toPrecision(3));

// const num=10000000;
// console.log(num.toLocaleString());
// console.log(num.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);


////////////////////////////////////////////////////////////////////////////////////


// console.log(Math);
// console.log(Math.round(3.72));
// console.log(Math.pow(2,3));
// console.log(Math.random());

// const min=15;
// const max=25;

// console.log( Math.floor(Math.random() * (max-min+1)) +min );  // including min and max
// console.log( Math.floor(Math.random() * (max-min)) +min );  // including min and excuding max


//////////////////////////////////////////////////////////////////////////////////////////


// const mydate=new Date();
// console.log(typeof mydate); //object

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());


let newdate = new Date(2024,0,12);        //month start from 0
console.log(newdate.toDateString());

let newdate2 = new Date(2024,0,12,17,55,23);        
console.log(newdate2.toLocaleString());

let newdate3 = new Date("07-16-2020");        
console.log(newdate3.toLocaleString());