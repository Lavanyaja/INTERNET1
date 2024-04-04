//if(condition) {} else if (condition1) else{}
//==, ===, >, <, >=, <=,||, &&,!

let pill = 'red';
console.log(pill)

if(pill == 'red') {
 console.log('Reality')
}else if(pill == 'blue') {
    console.log('stay in matrix')
} else {
    console.log('kill yourself.')
}

//switch(variable) {case value1: {break;}}

switch(pill) {
    case 'red': {
        console.log('Reality');
        break;
    }
    case 'blue': {
        console.log('')
        break;
    }    
    default:{    
        console.log('kill yourself.')
        break;
    }
}
//.....questions
//check if number is even or odd

let number = 'one';
if(number % 2 == 0) {
    console.log('Number is even ',number);
} else if(number % 2 ==1) {
    console.log('Number is odd ',number);
} else{
    console.log('invalid input');
}

//check if year is leap year

let year = 2024;

if(year % 100 == 0) {
    if( year % 400 == 0) {
        console.log('Leap year', year)
    } else {
        console.log('Not a leap year')
    }
} else if(year % 4 == 0) {
    console.log('Leap year', year)
} else {
    console.log('Not a leap year')
}

//check grade: A >= 80 > 80 > B >= 60,

let marks = 79;
let grade;
if(marks >= 80) {
    grade = 'A';
} else if(marks < 80 && marks >= 60) {
    grade = 'B';
}else if(marks < 60 && marks >= 40) {
    grade = 'C';
} else if(marks < 40 && marks >= 0) {
    grade = 'D';
} else {
    grade = 'undefined'
}
console.log('Grade', grade);

//type of triangle
let a = 3,b = 4,c= 3;
if(a == b && b == c) {
    console.log('triangle is equalateral')
}else if(a==b || b==c || c==a){
    console.log('traingle is isosceles')
}else{
    console.log('triangle is scaleme' )
}

//numerical grad





