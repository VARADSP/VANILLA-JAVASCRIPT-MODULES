var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');



//Form Submit Event
form.addEventListener('submit',addItem);


  //Delete Event
  itemList.addEventListener('click',removeItem);

  //Filter event
  filter.addEventListener('keyup',filterItems);

//Add Item Function
function addItem(e){
  e.preventDefault();




  //Get Input Value
  var newItem = document.getElementById('item').value;

  //create new li element
  var li = document.createElement('li');

  //Add CLASS
  li.className = 'list-group-item';


  //Add Text Node With Input Value
  li.appendChild(document.createTextNode(newItem));

  //create delete button
  var deletebtn = document.createElement('button');

  //Add Classes to del button
  deletebtn.className = 'btn btn-danger btn-sm float-right delete';
  deletebtn.style.float = 'right';

  //Append text node
  deletebtn.appendChild(document.createTextNode('X'));
  //Append button to li
  li.appendChild(deletebtn);

  //Append li to list
  itemList.appendChild(li);
  }

  //Remove item from list

  function removeItem(e){
    if(e.target.classList.contains('delete')){

    if(confirm("Are You Sure ?")){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
    }
  }

function filterItems(e){

  //convert text to lowercase

  var text = e.target.value.toLowerCase();

  //Get List items
  var items = itemList.getElementsByTagName('li');

  Array.prototype.slice.call(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
  });
}
