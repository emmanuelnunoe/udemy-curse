// function constructor
/*
var john={
    name: 'John',
    yeardOfBirth: 1990,
        job: 'teacher'
};


var Person = function( name, yearOfBirth,
                       job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person.prototype.calculateAge = function(){
        console.log(2016-this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';

var john = new Person('John',1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.creates
/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
}


var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
                        {
    name:{value: 'Jane'},
    yearOfBirth:{ value: 1969},
    job: { value: 'designer'}
});
*/


// Primitives vs objects


// primitives
/*
var a = 12;
var b = a;

a = 46;
console.log( a, b);


// objects
var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


// functions
var age =27;
var obj ={
    name :'jonas',
    city :'lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'san francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/



///////////////////////////////////////////////
////// Lecture: Passing functions as arguments
/*

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    
    var arrRes = [];
    for( var i = 0; i< arr.length; i++) {
           arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
    
}

function calculateAge(el) {
    return 2016  - el;
    
}

function isFullAge (el) {
    return el >= 18;
}


function maxHeartRate( el ){
    if(el >= 18 && el <= 81 ){
            return Math.round(206.9 - (0.7 * el));
    }else{
        return -1;
    }
}

*/
////////////////////////////////////////////
///////// Functions returning functions

/*

function interviewQuestion( job ) {
        if( job == ' designer'){
            return function(name){
                //anonymous function
                console.log( name + ' can you please explain what is UX design is?');
            }
        } else if ( job === 'teacher') {
            return function(name){
             console.log( ' what subject do you teach?'+ name + '?');
            }
        } else {
            return function( name) { 
              console.log( ' Hello ' + name + 'what do you do?');
            }
        }
    }



var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');


var designerQuestion =interviewQuestion(' designer');
designerQuestion('john');

designerQuestion('jane');
designerQuestion('mike');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark');
*/




/*
var ages= arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/

//////////////////////////////////////////////////////
////////// lecture: life

/*
function game() {
    var score = Math.random() * 10 ;
    console.log( score >= 5 );
}

game();
*/
/*
(function () {
    var score = Math.random() * 10 ;
    console.log( score >= 5 );
})();



(function (goodLuck) {
    var score = Math.random() * 10 ;
    console.log( score >= 5 - goodLuck );
})(5);


*/






///////////////////////////////////////////
/////// Closures
/*
function retirement( retirementAge ) {
    var a = ' years left until retirment';
    return function(yearOfBirth) {
        var age = 2016 -yearOfBirth;
        console.log(retirementAge - age + a);
    }
}


var retirementUS = retirement(66);

retirementUS(1990);
//retirement(66)(1990);
var retiementGermany = retirement(65);

var retirementIceland = retirement(67);

retiementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


*/


/////////////////////////////////////////
////// Cllalenge closure


/*
function interviewQuestion(job) { 
    return function(name) {
    if (job == 'designer') { 
    console.log(name + ' , can you please exmplain what UX design is?');
        
     }else if ( job === 'teacher') {
        console.log( 'What subject do yo teach?, ' + name + '?');
      }else {
          console.log('Hello  ' + name + ' , what do you do?');
      }
}
}

interviewQuestion('teacher')('john');

*/



/////////////////////////////////////////////////
//// lecture: bind, call  and apply
/*
var john = {
    name: 'John',
    age: 26,  
    job: 'techer',
    presentation: function( style, 
                              timeOfDay) {
        if( style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name +', I\'m a '+ this.job + ' and I\'m '+ this.age + ' years old.' );
        } else if ( style === 'friendly') {
            console.log('hey! what\'s up?  I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay+ '.' ); 
        }
    }
}


var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal','morning');

john.presentation.call(emily, 'friendly', 'afternoon');


var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    
    var arrRes = [];
    for( var i = 0; i< arr.length; i++) {
           arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
    
}

function calculateAge(el) {
    return 2016  - el;
    
}

function isFullAge (limit, el) {
    return el >= limit;
}


var ages = arrayCalc(years,  calculateAge); 

var fulljapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fulljapan);

*/


/////////////////////////////////////////////////
//// challenge
/*
(function(){
    function Question(question, answers, correct)
{
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion =
function(){
    console.log(this.question);

    for( var i=0;  i < this.answers.length; i++) {
        console.log(i + ': '+ this.answers[i]);

    }
}

Question.prototype.checkAnswer = 
function(ans){
    if( ans  === this.correct){
        console.log('correct answer!');
    }else{
        console.log('wrong answer. Try again');
    }
}


var q1 =  new Question('Is Javascrip the coolest programing language in the world?',
                                                                        ['yes','no'], 
                                                                        0);

var q2 = new Question('What is the name of this course\'s teacher?',
                                        ['Jhon','Michale','Jhonas'],
                                                                  2);
var q3 = new Question('What does describe best coding?',
                        ['borring','hard','fun','tedious'],
                        2);

var questions = [ q1, q2, q3 ];


var n = Math.floor(Math.random()* 3);


questions[n].displayQuestion();

var answer = parseInt(prompt('please select the correct answer'));

questions[n].checkAnswer(answer);

})();

*/



(function(){
    function Question(question, answers, correct)
{
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion =
function(){
    console.log(this.question);

    for( var i=0;  i < this.answers.length; i++) {
        console.log(i + ': '+ this.answers[i]);

    }
}

Question.prototype.checkAnswer = 
function(ans, callback){
    var sc;
    if( ans  === this.correct){
        console.log('correct answer!');
        sc = callback(true);
    }else{
        console.log('wrong answer. Try again');
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = 
function(scrore){

    console.log('Your current score is:  ' + score);
    console.log('--------------------------------');


}


var q1 =  new Question('Is Javascrip the coolest programing language in the world?',
                                                                        ['yes','no'], 
                                                                        0);

var q2 = new Question('What is the name of this course\'s teacher?',
                                        ['Jhon','Michale','Jhonas'],
                                                                  2);
var q3 = new Question('What does describe best coding?',
                        ['borring','hard','fun','tedious'],
                        2);


var questions = [ q1, q2, q3 ];


function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}


   var keepScore = score(); 

function nextQuestion(){

        var n = Math.floor(Math.random()* questions.length);


        questions[n].displayQuestion();

        var answer = prompt('please select the correct answer');

        if( answer != 'exit')
        {

            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }


}

nextQuestion();
})();




















































































































































































