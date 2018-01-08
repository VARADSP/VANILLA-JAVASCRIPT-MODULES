//ECMAScript 5 / ES5 Javascript contents

function add(a,b){
  var sum = a+b;
  return sum;
}
console.log(add(2,3));


var add1 = function(a,b){
  return console.log(a+b);

}

add1(2,3);

var plus = function(a,b){
  return (console.log(this),console.log(arguments),console.log(arguments[0]));
}(2,4);


var Calculator = { // this is a object
  name:'my calc',
  plus: function(a,b){
    return a+b;
  }
}
Calculator.plus(2,3);

console.dir(Calculator);
console.log(Calculator);
console.log(Calculator.plus(3,3));


var Calculators = function(){
  var a,b;
}
var calc = new Calculators(); // using constructor for object creation




calc.a=2;
calc.b=2;
console.log(calc);


var name = {};//basic object created

//prototype
var calc1 = function(a,b){
  console.log(a+b);
}
console.dir(calc1);
var calc2 = function(a,b){
  console.log(a+b);
}



calculator1 = new calc1(2,2);
calculator2 = new calc2(3,3);
console.log(calculator1);
console.log(calculator2);


var multiplication = function(a,b){
  console.log(a*b);
}


//Now Extending functionality of calc1

calc1.prototype.multiplication = multiplication;

console.log(calc1);

calculator1.multiplication(2,4);



//function call and Apply

var person1 = {name:'Marvin',age:42,size:'2xM'};
var person2 = {name:'Zaphod',age:42000000000000,size :'1x5'};

var sayHello = function(){
  alert('Hello ,'+ this.name);

}

var sayGoodBye = function(){
  alert('GoodBye ,' + this.name);
}

sayHello.call(person1);
sayGoodBye.call(person2);

sayHello.apply(person1);
sayGoodBye.apply(person2);



//----------------------------//
var myObject;
function myFunction(a,b){
  return a*b;

}

myArray = [10,2];

myObject = myFunction.apply(myObject,myArray);



//-----------------------------/

var add = function(){
  var sum=0;
  for(var i = arguments.length-1;i>=0;i--){
    sum += arguments[i];
  }
  return sum;
}

console.log(add(2,322,2,444));

var Add = function(){
    var sum=0;
    var addition = function(){
      for(var i=arguments.length-1;i>=0;i--){
        sum += arguments[i];
      };
      return sum;
    };
}

add1 = new Add();
console.log(add1);

//object creation factory pattern

//traditional way
var studentFactory = function(state,name,age){

  this.state = state;
  this.name=name;
  this.age=age;

  this.printStudent = function(){
    console.log(this.state + " " + this.name);
  };

};

var student1 = new studentFactory('NY','Tarun',25);
student1.printStudent();


//Another Way
var studentFactory1 = function(state,name,age){

  var temp = {};

  temp.state = state;
  temp.name=name;
  temp.age=age;

temp.printStudent = function(){
    console.log(temp.state + " " + temp.name);
  };

  return temp;

};

var student2 = studentFactory1('NC','VSP',20);
student2.printStudent();


//creating object using prototype
var studentProto = function(state,name,age){

}

studentProto.prototype.state = 'NY';

studentProto.prototype.name = 'Damned';
studentProto.prototype.age = 22;

studentProto.prototype.printStudent = function(){
  console.log(this.state + " " + this.name + " " + this.age);
}

var student3 = new studentProto();
student3.state= 'NY';
student3.name='Yonny';
student3.age = 2223;

student3.printStudent();
console.log(student3);


//call and apply bind function
var Obj = {a:10};

var addition12 = function(arg1,arg2){
  console.log(this.a + arg2 + arg1 + this.localStorage);
  console.log(this);


}
addition12(2,3);
addition12.call(Obj,3,4);
addition12.apply(Obj,[2,3]);

var add22 = addition12.bind(Obj);
add22(2,22);


//Understanding CLosure
var a11=10;
var addx = function(a){
  var b=10;
  return a11+b; // closure is a11 cause its global and is being used by this function
};

console.log(addx());
console.dir(addx);

var addy = function(passed){
  var sub = function(inner){
      return passed - inner;
  }
  return sub;
}


console.dir(addy(2));





var additiony = new addy(2);
console.dir(additiony(4));


//JS Public and private  variable inside function

var Student = function(){
  var rollno=5;
  this.name = 'Tarun';
  this.age = 24;
  this.state = 'NY';
  this.getdata = function(){
    return this.name  + "  " + this.state;
    this.getRollno = function(){ // access private variabkle
  }
    return rollno;
  }
}


var student = new Student();
console.dir(student);
console.log(student.getdata());
console.log(student.getRollno());



var Student22 = function(){
  var rollno = 33;
  var getRollno = function(){
    return rollno;
  }

  var temp = {};
  temp.getRollno = getRollno;
  temp.x = 22;
  return temp;
}

var student22 = new Student22();
console.log(student22.getRollno());
console.log(student22.x);
console.dir(student22);



//Function Chaining

var obj = function(){

  this.i = 0;

  this.add = function(i){
    this.i += i;
    return this;
  }

  this.sub = function(i){
    this.i -= i;
    return this;
  }
  this.print = function(){
    console.log(this.i);
  }
}
var x = new obj();
x.add(2);
x.sub(3);
x.print();
console.log(x.add(2));

x.add(4).sub(2).print();

//x.add(4).sub(2).print();
