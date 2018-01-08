'use strict';

 // JS ES6

function testVar(){
  var a = 30;
  if(true){
      var a = 50;
      console.log(a);
  }
  console.log(a);
}

testVar();

//Now let gives us a scope JS ES6

function testLet(){
  let a = 30;
  if(true){
    let a = 40;
    console.log(a);
  }
  console.log(a);
}

testLet();

for(let i = 0; i<10;i++){
  console.log(i);
}


const colors = [];
colors.push('red');
colors.push('blue');
console.log(colors);


//classes and inheritance


class User{
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password=password;
  }

  static countUsers(){
    console.log('There are 50 users');
  }

  register(){
    console.log(this.username + " is now registered");
  }
}

let bob = new User('bob','bob@gmail.com','pass');

bob.register();
User.countUsers();

class Member extends User{
  constructor(username,email,password,memberPackage){
    super(username,email,password);
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username + ' is subscribed to package ' + this.package);
  }
}

let Mike = new Member('mike','mike@gmail.com','123','standard');
Mike.getPackage();
Mike.register();



//Template Literals

let name = 'John';

function makeUpperCase(word){
  return word.toUpperCase();

}

let template = `<h1>${makeUpperCase('Hello')},
${name} </h1>
<p>This is a simple template in JavaScript</p>`;



document.getElementById('template').innerHTML = template;


//New String and Number Methods

let theString = 'Hello , My name is VSP and I love JS ';
//statsWith()
//endsWith()
//includes()

console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('JS '));

console.log(theString.includes('loves'));

//Number Methods

console.log(0xff);
//binary
console.log(0b101011);
//octal
console.log(0o543);

console.log(Number.isFinite(NaN));

console.log(Number.isNaN('string'));

console.log(Number.isInteger(-2));





//Defailt Parameters & Spread Operator

function greet($greeting='Hello World'){
  console.log($greeting);
}
greet();
//Spread Operator

let args = [1,2,3];
let args2 = [3,4,5];
function test(){
  console.log(args + '' + args2);

}


test.apply(null,args);
test(...args,...args2);


//Set,Map ,WeakSet and WeakMap

let myArray = [11,22,33,45,5];
let mySet = new Set(myArray);
mySet.add('100');
mySet.add({a:1,b:2});
mySet.delete(11);
console.log(mySet);
//mySet.clear();
console.log(mySet);
console.log(mySet.size);
mySet.forEach(function(val){
  console.log(val);
});

//Now Maps
let myMap = new Map([['a1','Hello'],['b2','Goodbye']]);
console.log(myMap);
myMap.set('c3','food');
console.log(myMap);
myMap.delete('a1');
console.log(myMap.size  + ' ' + myMap);

//WeakSets and WeakMaps For Objects-------------------------
let carWeakSet = new WeakSet();
let car1 ={
  make : "Honda",
  model : "Civic"
}
let car2 ={
  make : "Toyota",
  model : "Carry"
}
carWeakSet.add(car1);
carWeakSet.add(car2);
console.log(carWeakSet);
carWeakSet.delete(car1);
console.log(carWeakSet);
//WeakMap
let carWeakMap = new WeakMap();
let key1={
  id:1
}
let key2={
  id:2
}
carWeakMap.set(key1,car1);
carWeakMap.set(key2,car2);
console.log(carWeakMap);
carWeakMap.delete(key1);
console.log(carWeakMap);


//Arrow Functions ------------------

function Prefixer(prefix){
  this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function(arr){
  return arr.map((x) => {
    console.log(this.prefix + x);
  });
}
let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad','Jeff']);

/*let add = function(a,b){
  let sum  a+b;
  console.log(sum);
  return false;
}*/
let add =(a,b) =>{
  let sum  =a+b;
  console.log(sum);
  return false;
}
add(10,2);

//Immediately resolved promise ----------------------
var myPromise = Promise.resolve('Foo');
myPromise.then((res)=> console.log(res));

var myPromise1 = new Promise(function(resolve,reject){
  setTimeout(()=>resolve(4),2000);
});
myPromise1.then ((res) => {
  res += 3;
  console.log(res);
});

function getData(method,url){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else{
        reject({
          status : this.status,
          statusText : xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status:this.status,
        statusText:xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET','https://jsonplaceholder.typicode.com/todos').then(function(data){
  let todos = JSON.parse(data);
  let output = '';
  for(let todo of todos){
    output += `
      <li>
      <h3>${todo.title}</h3>
      <p>Completed : ${todo.completed}</p>
      </li>
    `;
  }
  document.getElementById('template').innerHTML = output;
}).catch(function(err){
  console.log(err);
});


//Generators ----------------------------

function* g1(){
  console.log('Hello');
  yield 'Yield 1 Run...';
  console.log('World');
  yield 'Yield 2 Run...';
  return 'Returned ... '
}
var g = g1();
console.log(g.next());
console.log(g.next());
console.log(g.next());

for(let val of g){
  console.log(val);
}
