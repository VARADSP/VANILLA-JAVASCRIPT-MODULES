//Examine the doument object

//console.dir(document);

//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';

//console.log(document.forms);
//console.log(document.images);


  //GEt ELEMENT BY ID
  console.log(document.getElementById('header-title'));

  var headerTitle = document.getElementById('header-title');
  headerTitle.textContent = 'hellow';
  headerTitle.innerText = '<h3>GoodBye</h3>';
  headerTitle.innerHTML = '<h3>GoodBye</h3>';

  headerTitle.style.borderBottom = 'solid 3px #000';

  // GET ELEMENTS BY CLASSNAMES
  var items = document.getElementsByClassName('list-group-item');
  console.log(items[1]);
  console.log(items[2]);
  items[1].innerHTML = '<h3 style="color:red">Hi This is DOM </h3>';
  items[1].style.backgroundColor = 'yellow';

  for(var i =0;i<items.length;i++){
    items[i].style.backgroundColor = 'red';
  }


 // Get elements by tag name

 var li = document.getElementsByTagName('li');
 li[1].style.backgroundColor = 'yellow';


 // *************   Query Selector ***********//

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc' ;

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

var item = document.querySelector('.list-group-item');
item.style.color = 'green';

var lastItem = document.querySelector('.list-group-item:last-child');

lastItem.style.color = 'blue';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');

thirdItem.style.color = 'coral';


var titles = document.querySelector('.title');
console.log(titles);

var odd = document.querySelector('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){

  odd[i].style.backgroundColor = '#f3f3f3';
}


//  TRAVERSING THE DOM

  var itemList = document.querySelector('#items');

  //parentNode
  console.log(itemList.parentNode);
  itemList.parentNode.style.backgroundColor = 'blue';

  console.log(itemList.parentNode.parentNode.parentNode);


  //parentElement

  console.log(itemList.parentElement);
  itemList.parentElement.style.backgroundColor = 'blue';

  console.log(itemList.parentElement.parentElement.parentElement);

  //childNodes This also includes the line break element

  console.log(itemList.childNodes);
  // This is a good one cause it ignores the line break
  console.log(itemList.children);

  console.log(itemList.children[1]);

  itemList.children[1].style.backgroundColor = 'coral';

  //firstChild  useless cause it includes line break
  console.log(itemList.firstChild);

  console.log(itemList.firstElementChild);

itemList.firstElementChild.innerText = 'BYEEEE';

itemList.lastElementChild.innerText = 'Hi BYEEEE';


  //nextElememtSibling

  console.log(itemList.nextElementSibling);

  //previousElementSibling
  console.log(itemList.previousElementSibling.parentNode);
  itemList.previousElementSibling.style.backgroundColor = 'green';


  //createElement

    //Create a div

    var newDiv = document.createElement('div');

    newDiv.className = 'hellow';
   // add id
   newDiv.id = 'hellow1';

   //add attribure
   newDiv.setAttribute('title','Hellow Div');
   console.log(newDiv);

      //create a text node
      var newDivText = document.createTextNode('Hellow World !!');

      //Add Text to div
      newDiv.appendChild(newDivText);


      //Noew putting this in the dom

      var container = document.querySelector('header .container');
      var h1 = document.querySelector('header h1');

      newDiv.style.fontSize = '30px';

      container.insertBefore(newDiv,h1);



      // ******* EVENTS **********
      var button = document.getElementById('button').addEventListener('click',buttonClick);

      var btn = document.getElementById('button');
      btn.addEventListener('dblclick',runEvent);
      btn.addEventListener('mousedown',runDown);
      btn.addEventListener('mouseup',runUp);
      //Functiuon for mouse douwn EVENTS
      function runDown(e){

        output.innerHTML = 'DOWN DOWN SHIT!';

      }

      //Function for mouse up event

      function runUp(e){

        itemList.parentNode.style.backgroundColor='coral';
        output.innerHTML = 'Up Up AWAY SHIT!';

      }


      var box = document.getElementById('box');
      box.addEventListener('mouseenter',run1);
      box.addEventListener('mouseleave',run1);

      box.addEventListener('mouseover',run1);
      box.addEventListener('mouseout',run1);
      box.addEventListener('mousemove',run1);

      var itemInput = document.querySelector('input[type="text"]');
      var form = document.querySelector('form');
      itemInput.addEventListener('keydown',run1);
      itemInput.addEventListener('keyup',run2);


      //Focus Event on itemInput
      itemInput.addEventListener('focus',focusEvent);

      function focusEvent(e){
        console.log(e.type);
      }
      //Blur Event
      itemInput.addEventListener('blur',blurEvent);
      function blurEvent(e){
        console.log(e.type);

      }
      //Cut and Paste Event
      itemInput.addEventListener('cut',cutEvent);
      function cutEvent(e){
        console.log(e.type);
        document.body.style.display = 'none';

      }
      itemInput.addEventListener('paste',pasteEvent);
      function  pasteEvent(e){
        console.log(e.type);
      }

      //Input Event
      itemInput.addEventListener('input',inputEvent);
      function inputEvent(e){
        console.log(e.type);
      }


      //Select Events
      var select = document.querySelector('select');
      select.addEventListener('change',changeEvent);
      function changeEvent(e){
        console.log(e.type);
      }
      select.addEventListener('input',inputSelectEvent);
      function inputSelectEvent(e){
        console.log(e.type);
      }

      //Form Event Submit Event
      form.addEventListener('submit',submitEvent);
      function submitEvent(e){

        e.preventDefault(); // prevents submitting in reality to another file or something
        console.log(e.type);
      }



      //Key Down Event

      function run1(e){
        console.log('Event Type :' + e.type);
        console.log(e.target.value);
        output.innerHTML = '<h3>MouseX : '+e.offsetX +'</h3><h3>MouseY:' + e.offsetY + '</h3>';

        document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

        document.querySelector('input[type="submit"]').value = e.target.value ;

      }
      // Key Up Event

      function run2(e){

        document.querySelector('input[type="submit"]').value = "Send";
      }

      //function for double clicked
      function runEvent(e){

        output.innerHTML = 'Double Clicked Naughty';
      }

      function buttonClick(e){
      //  console.log('Button Clicked');

      //document.getElementById('header-title').textContent = "Changed";
      //document.querySelector('#main').style.backgroundColor = '#f44fff';





      //console.log(e);
      console.log(e.target);
      console.log(e.target.id);
      console.log(e.target.className);

      console.log(e.target.classList);

      var output = document.getElementById('output');
      output.innerHTML = '<h3>'+e.target.id + '</h3>';

        console.log(e.type);
        console.log(e.clientX);
        console.log(e.clientY);
        console.log(e.offsetX);
        console.log(e.offsetY);

        console.log(e.altKey);
        if(e.altKey == true)
        {
          output.innerHTML = '';

        }
        console.log(e.ctrlKey);
        console.log(e.shiftKey);


        }
