
/* *********************************************
*  Varaiables and data types


var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var jhonMark = 'Jhon and Mark';
*/


/* *********************************************
*  Variable mutation and type coercion


var firstName = 'Jhon';
var age = 28;

console.log(firstName + ' ' + age); 

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(firstName + 'is a '  + age + ' years old '+
 job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'dirver';

alert(firstName + 'is a '  + age + ' years old '+
job + '. Is he married? ' + isMarried);

var lastName = prompt('What is he last name?');
console.log(firstName + ' '+ lastName);
*/


/* ************************************************
* Basic operators


var year, yearJhon, yearMark;
now = 2018;
ageJhon = 28;
ageMark = 33;

//Math operators
var yearJhon = now - ageJhon;
var yearMark = now - ageMark;

console.log(yearJhon);
console.log(now + 2);
console.log(now * 2);

// Logical operators
var jhonOlder = ageJhon < ageMark;
console.log(jhonOlder);

//type of operator
console.log(typeof jhonOlder);
console.log(typeof ageJhon);
console.log(typeof 'Mark is older than Jhon');

var x ;
console.log(typeof x); 
*/


/* ************************************************
* Operators precedence

var now = 2018;
var yearJhon = 1989;
var fullAge = 18;


//Multiple operators
var isFullAge = now -yearJhon >= fullAge;
console.log(isFullAge);

//Grouping
var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageMark) / 2;
console.log(average);



//Multiple assignments
var x, y;
x = y = ( 3 + 5) * 4  -6;
console.log(x, y);

//More operators
x = x * 2;
console.log(x);
x+=10;
console.log(x);
x++;
console.log(x);
*/


/* ************************************************
* Coding challenge


var johnHeight, jhonMass, markHeight, markMass, jhonBMI,markBMI,
    jhonBMIHigher;

jhonMass = 85;
johnHeight= 1.70;
markMass = 80;
markHeight = 1.75;


markBMI = markMass / (markHeight * markHeight);
jhonBMI = jhonMass/ (johnHeight * johnHeight);

jhonBMIHigher = jhonBMI > markBMI;

console.log('Is Mark\'s BMI higher than Jhon\'s? :' + ' ' + jhonBMIHigher);

*/

/* ************************************************
* If /Else statements


var firstName = 'jhon';
var civilStatus = 'single';

if( civilStatus === 'married'){
    console.log(firstName + ' is married!'); 
}else{
    console.log(firstName+ ' will hopefully marry soon');
}

var isMarried = true;
if( isMarried ){
    console.log(firstName + ' is married!'); 
}else{
    console.log(firstName+ ' will hopefully marry soon');
}

var johnHeight, jhonMass, markHeight, markMass, jhonBMI,markBMI,
    jhonBMIHigher;



jhonMass = 85;
johnHeight= 1.75;
markMass = 80;
markHeight = 1.70;


markBMI = markMass / (markHeight * markHeight);
jhonBMI = jhonMass/ (johnHeight * johnHeight);

if(markBMI > jhonBMI)
{
    console.log('Mark\'s BMI is higher than Jhon\'s');
} else {
    console.log('Jhon\'s BMI is higher than Marks\'s');
}


*/
//jhonBMIHigher = jhonBMI > markBMI;
//console.log('Is Mark\'s BMI higher than Jhon\'s? :' + ' ' + jhonBMIHigher);

/* ************************************************
* boolean logic


var firstName = 'Jhon';
var age = 28;
if (age < 13){
    console.log(firstName + ' is a boy ');
} else if ( age >= 13 &&  age < 20){ //beteeen 13 and 20 age is >= 13 AND age <20
    console.log(firstName + ' is a boy ');

} else if( age >= 20  && age <30){
    console.log(firstName + ' is a young man ');
}
else{
    console.log(firstName + ' is a man ');

}
*/

/* ************************************************
 * The ternary operator and Switch statements
 */
/*
 var firstName = 'Jhon';
 var age = 16;

 ///Ternary operator
 age >= 18 ? console.log("firstName" + ' drinks beer') : console.log(firstName 
    + ' drinks juce');


    var drink  = age >= 18 ? 'beer' :'juice';
    console.log(drink); 
*/




// Switch statement
/*
var job = 'cop';
switch(job){
    case 'teacher':
        console.log(firstName + ' teachers kids how to code');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber in lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beatiful websites');
        break;
    default:
        console.log(firstName + ' does something');
}

age =30 ;
switch(true){
    case age < 13:
            console.log(firstName + ' is a boy ');
            break;
    case age >= 13 && age <28:
            console.log(firstName + ' is a young man ');
            break;     
    default :
            console.log(firstName + ' is a man ');
            break;
}
*/

/*
var firstName = 'Jhon';
var age = 28;
if (age < 13){
    console.log(firstName + ' is a boy ');
} else if ( age >= 13 &&  age < 20){ //beteeen 13 and 20 age is >= 13 AND age <20
    console.log(firstName + ' is a boy ');

} else if( age >= 20  && age <30){
    console.log(firstName + ' is a young man ');
}
else{
    console.log(firstName + ' is a man ');

}
*/

/* ************************************************
 * The ternary operator and Switch statements
 */
/*
//Falsy values : undefinde, null, 0 , '', NaN
//Truthy values :  Not Falsy values;

var height = 23;

if(height ||  height === 0){
    console.log("The varaible is defined");
}
else{
    console.log("Variable has Not been defined");
}

// Equality operators

if(height === '23'){
    console.log('The == operator does type coercion!');
    //cohercion = convert STRING to a NUMBER 
 }*/

 /* ************************************************
 * Coding challenge
 */

/*
 var jhonAverageScore;
 var mikesAverageScore;
 var games = 3;
 var jhonAverageScore = ( 90 + 100 + 80)/ games;
 var mikesAverageScore = ( 100 + 100 + 100 )/ games;
 var maryAverageScore = ( 100 + 100 + 100 )/ games;

 console.log(jhonAverageScore, mikesAverageScore, maryAverageScore);

 if( jhonAverageScore > mikesAverageScore && jhonAverageScore > maryAverageScore){
     console.log("Jhon\'s team is the winner \n"+ 'Score '+ jhonAverageScore);
 }
 else if(mikesAverageScore > jhonAverageScore && mikesAverageScore > maryAverageScore){
     console.log("Mike\'s team is the winner \n"+ 'Score: '+ mikesAverageScore  );
 }
 else if(maryAverageScore > jhonAverageScore && maryAverageScore > mikesAverageScore){
     console.log("Mary\'s team is the winner \n"+ 'Score: '+ maryAverageScore);
 }
 else{
     console.log('There is a draw');
 }

 */



 
 /* ************************************************
 * Functions
 */

 /*
function calculateAge(birthYear){
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1995)
var ageJane = calculateAge(1994);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if( retirement > 0 ){
        console.log(firstName + ' retires '+ retirement + ' years.');    
    }else{
        console.log(firstName + ' is already retired.');
    }
}



yearsUntilRetirement(1999, 'John');
yearsUntilRetirement(1949, 'Mike');
yearsUntilRetirement(1991, 'Kristen');


*/




 /* ************************************************
 * Functions Statements and Expresions
 */

/* function declaration
    function wathDoYouDo(job, firstname){   }

*/


 // function expresion

 /*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
                return firstName + 'teaches kids how to code';
        case 'driver':
                return firstName + ' drives a cab in Lisbon';
        case 'designer':
                return firstName + ' designs beautiful websites';
        default:
                return firstName + ' does something else';
    }
 
}
console.log(whatDoYouDo('graffiti writer', 'jhon')); 
console.log(whatDoYouDo('designer', 'mikes')); 
console.log(whatDoYouDo('teacher', 'Jane')); 
*/



 /* ************************************************
 *  Arrays
  */

/*
  // Initialize new array
  var names = ['John', 'Mark','Jane'];
  var years = new Array(1999, 1998, 1948);

  console.log(names);
  console.log(names.length);

  // Mutate array data
  names[1] = 'Ben';
  names[names.length]= 'Mary'
  console.log(names);

// Different data types
    var jhon = [ 'John', 'Smith', 1990, 'Designer', false];
    jhon.push('blue');
    jhon.unshift('Mr.');
    jhon.pop();
    jhon.shift();

    var isDesigner = jhon.indexOf('Designer') == -1 ? 'John is Not a designer': 'John is a designer';
    console.log(isDesigner);

    */


 /* ************************************************
  *  Coding challenge
  * function to calculate a tip
  */

/*
  var bills = [124 , 48, 268];
  var billsAndTips = new Array();

  var totalTips = function( bilsArray){
          if( bilsArray < 50){
           return (bilsArray) + (bilsArray*(20/100));
        
          }
          else if(bilsArray >= 50 && bilsArray <= 200 ){
            return (bilsArray) + (bilsArray*(16/100));
          }
          else{
            return (bilsArray) + (bilsArray*(10/100));
          }
  }


  billsAndTips.push(totalTips(bills[0]));
  billsAndTips.push(totalTips(bills[1]));
  billsAndTips.push(totalTips(bills[2]));

  console.log(billsAndTips);
*/
  /*Clear solution  Tip calculator */
  /*
function tipCalculator(bill){
    var percetaje;
    if(bill < 50){
        percetaje = .20;
    }else if( bill >= 50 && bill < 200){
        percetaje = .15;
    }else{
        percetaje =.1;
    }
    return percetaje * bill;
}

var tips=[ tipCalculator(bills[0]),
           tipCalculator(bills[1]), 
           tipCalculator(bills[2])];

console.log(tips);

var finalValues = [tips[0]+bills[0],
                   tips[1]+bills[1],
                   tips[2]+bills[2]];
console.log(finalValues);

*/

/****************************************
 *  Objects and properties
 * 
 */
/*
 var john ={
     firstName: 'John',
     lastName:'Smith',
     birthYear: 1990,
     family: ['Jane','Mark','Bob', 'Emily'],
     job:'Teacher',
     isMarried:false
 };

 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

john.job = 'designer';
john['isMarried']= true;
console.log(john);



// new objects syntax

var jane = new Object();

jane.name= 'Jane';
jane.birthYear=1969;
jane['lastName']='Smith';
console.log(jane);

*/



/****************************************
 *  Objects and methods
 * 
 */


/*
 var john ={
     firstName: 'John',
     lastName:'Smith',
     birthYear: 1992,
     family: ['Jane','Mark','Bob', 'Emily'],
     job:'Teacher',
     isMarried:false,
     calcAge: function(){
         this.age=  2019 - this.birthYear;
     }
 };


john.calcAge();
console.log(john);*/




/****************************************
 *  Coding challenge 4 
 * 
 */

/*
var john={
    name:'john',
    height:1.78,
    wheight:72,
    calcBMI:function(){
        this.bmi = this.wheight/(this.height * this.height)
    }
}

var mark={
    name:'Mark',
    height:1.95,
    wheight:92,
    calcBMI:function(){
        this.bmi = this.wheight/(this.height * this.height)
    }
}



if( john.calcBMI() > mark.calcBMI()){
    console.log(john.name + ' has higher BMI OF '
                 + john.bmi);
}else if( mark.bmi > john.bmi){
    console.log(mark.name + ' has higher BMI OF '
    + mark.bmi);
}else{
    console.log('They have the same BMI');
}
*/


/****************************************
 *  Loops and iteration
 * 
 */

 // For loop
 /*
for( var i= 1 ; i<=20; i+=2){
    console.log(i);
}



var jhon = [ 'John', 'Smith', 1990, 'Designer', false];

for( var i= 0; i< jhon.length; i++){
    console.log(jhon[i]);
}


// while loop
var i =0;
while( i< jhon.length){
    console.log(jhon[i]);
    i++;
}
*/


// Continue and break statement

/*
var jhon = [ 'John', 'Smith', 1990, 'Designer', false];

for( var i= 0; i< jhon.length; i++){
    if(typeof jhon[i] !== 'string' )continue;
    console.log(jhon[i]);
}

for( var i= 0; i< jhon.length; i++){
    if(typeof jhon[i] !== 'string' )break;
    console.log(jhon[i]);
}


// looping backwards
for( var i= jhon.length -1 ; i >= 0; i--){
    if(typeof jhon[i] !== 'string' );
    console.log(jhon[i]);
}

*/ 



/****************************************
 *  Coding challenge 5
 * 
 */

 /*
var john={
    name:'John',
    height:1.95,
    wheight:92,
    bill:[],
    tips:[],
    calcBMI:function(){
        this.bmi = this.wheight/(this.height * this.height);
    },
    
    tipCalculator:function(){
        var percetaje;
        for(var i=0 ; i<this.bill.length;i++)
        {
            if(this.bill[i] < 50){
                percetaje = .20;
            }else if( this.bill[i] >= 50 && this.bill[i] < 200){
                percetaje = .15;
            }else{
                percetaje =.1;
            }
            this.tips[i]=percetaje * this.bill[i];
        }
       
    },

    averageTips:function(){
        var average=0;
        for( var i=0; i< this.tips.length; i++){
            average +=this.tips[i];
        }
        this.average = average/(this.tips.length);

    },
    
    print_r:function(){
        for( var i= 0; i< this.tips.length; i++){
            console.log(this.tips[i]);
        }
    }
}


var mark={
    name:'Mark',
    height:1.95,
    wheight:92,
    bill:[],
    tips:[],
    calcBMI:function(){
        this.bmi = this.wheight/(this.height * this.height);
    },
    
    tipCalculator:function(){
        var percetaje;
        for(var i=0 ; i<this.bill.length;i++)
        {
            if(this.bill[i] < 100){
                percetaje = .20;
            }else if( this.bill[i] >= 100 && this.bill[i] < 300){
                percetaje = .10;
            }else{
                percetaje =.25;
            }
            this.tips[i]=percetaje * this.bill[i];
        }
       
    },

    averageTips:function(){
        var average=0;
        for( var i=0; i< this.tips.length; i++){
            average +=this.tips[i];
        }
        this.average = average/(this.tips.length);

    },

    print_r:function(){
        for( var i= 0; i< this.tips.length; i++){
            console.log(this.tips[i]);
        }
    }


}


john.bill=[124, 48, 268, 180, 42];
john.tipCalculator();
john.averageTips();
console.log('John family average '+ john.average);
//john.print_r();

mark.bill=[77, 375, 110, 45];
mark.tipCalculator();
mark.averageTips();
console.log('Mark´s fmily average '+ mark.average);
//mark.print_r();

 if(john.average > mark.average){

    console.log('John Family tips is higher ' + john.average);

 }else if( mark.average > john.average ){

    console.log('Mark\'s family tips average is higher ' +  mark.average);

 }else if( john.average == mark.average){

    console.log('They are the same average ' + john.average);
 }



*/









