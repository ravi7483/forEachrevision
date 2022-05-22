let cl = console.log;
//cl(ages);
// for(var i=0; i<ages.length; i++){
//     cl(ages[i])
// }
// ages.forEach(function(age){
//     cl(age)
// })
// ages.forEach(age =>  cl(age))
//map
// let ages = [23,24,56,78,56,78,90,12,64,144];
// cl(ages);

// var db =[];
// ages.forEach(age =>{
//     db.push(age*2)
// });
// cl(db)


// var SQRT1 =[];
// ages.forEach(val =>{
//     SQRT1.push(Math.sqrt(val))
// })
// cl(SQRT1);


let companies = [
  {name:"company one", category :"Finance", satart: 1981,end:2003},
  {name:"company two", category :"Retail", satart: 1992,end: 2008},
  {name:"company three", category :"Auto", satart: 1999,end: 2007},
  {name:"company four", category :"Retail", satart: 1989,end: 2010},
  {name:"company five", category :"Technology", satart: 2009,end: 2014},
  {name:"company six", category :" Finance ", satart: 1987,end: 2010},
  {name:"company seven", category :"Auto", satart: 1986,end: 1996},
  {name:"company eight", category :"Technology", satart: 2011,end: 2016},
  {name:"company nine", category :"Retail", satart: 1981,end: 1989},
];



let companyName =[];
// companies.forEach((comp)=>{
//   companyName.push(comp.name)
// })
// cl(companyName);

companies.forEach(comp=>companyName.push(comp.name))
cl(companyName);



// [1981-2003]



let companyStartEnd = [];

companies.forEach((comp)=>{
  //cl(`${comp.satart} - ${comp.end}`)
  companyStartEnd.push(`${comp.satart} - ${comp.end}`)
})
cl(companyStartEnd)



// [{name:'company one', 22}]




let companyNameDuration =[];
// companies.forEach((comp)=>{
//   let obj ={
//     companyName : comp.name,
//     duration :comp.end -comp.satart,     
//   }
//   companyNameDuration.push(obj)
// })

companies.forEach(comp=>companyNameDuration.push({
  companyName : comp.name,
  duration :comp.end -comp.satart,
}))
cl(companyNameDuration);

// [compnay :'Finance'];



let companyFinancename =[];

companies.forEach((comp)=>{
  if( comp.category.toLowerCase().trim() === 'finance'){
    companyFinancename.push(comp)
  }
})
cl(companyFinancename)


// company run atleast for 10 years

let companyatleast10 = [];
// companies.forEach((comp)=>{
//   if(comp.end - comp.satart >= 10){
//     companyatleast10.push(comp)
//   }
// })
companies.forEach((comp)=>{
  if(comp.end - comp.satart >= 10){
    companyatleast10.push(comp)
  }
})
cl(companyatleast10);

// Retailcompany run at least 15

let retailcompany =[];

companies.forEach((comp)=>{
  if(comp.category.toLowerCase().trim() === 'retail' && comp.end - comp.satart >= 15){
    retailcompany.push(comp);
  }
})
cl(retailcompany);

let Allduration = 0;

// companies.forEach((comp)=>{
//   let age = comp.end - comp.satart
//   //cl(age);
// //  Allduration = Allduration + age
//   Allduration += age
// })

companies.forEach((comp)=>Allduration += (comp.end - comp.satart)) 
cl(Allduration);


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  // 1. Filter the list of inventors for those who were born in the 15th century
// 2. Give us an array of the inventors first and last names // "Albert Einstein"
//4. How many years did all the inventors live all together?

let inventorcentury =[];

inventors.forEach((inventor)=>{
  if(inventor.year >= 1500 && inventor.year <= 1600){
  //  cl(inventor);
  inventorcentury.push(inventor)
  }
})
cl(inventorcentury);


let inventorsFirstlast =[];
// inventors.forEach((inventor)=>{
//   // let first1 = inventor.first +" " + inventor.last
//   let fnamelname = `${inventor.first} ${inventor.last} `
//   inventorsFirstlast = inventorsFirstlast + fnamelname 

// })
inventors.forEach((inventor)=> inventorsFirstlast += (`${inventor.first} ${inventor.last} `))
cl(inventorsFirstlast);

let inventoryears = 0;

// inventors.forEach((inventor)=>{
//   let age = inventor.passed - inventor.year
//   inventoryears += age
// })
// cl(inventoryears);

inventors.forEach((inventor)=>inventoryears += inventor.passed - inventor.year);
cl(inventoryears);
