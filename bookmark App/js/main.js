//Listen for Form subit
document.getElementById('myForm').addEventListener('submit',saveBookmark);


//save bookmark
function saveBookmark(e){

	//Get form values

	var siteName = document.getElementById('siteName').value;

	var siteURL = document.getElementById('siteURL').value;

	if(!validateForm(siteName,siteURL)){
		return false;
	}

	var bookmark = {
			name:siteName,
			URL:siteURL
	}

	/*
	//Local Storage Test

	localStorage.setItem('test','Hello World');

	console.log(localStorage.getItem('test'));

	localStorage.removeItem('test');

	console.log(localStorage.getItem('test'));
*/
	//test if bookmarks is null
	if(localStorage.getItem('bookmarks') === null){
		//Init Array
		var bookmarks  = [];
		//Add to array
		bookmarks.push(bookmark);
		//Set to LocalStorage

		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
	} else {
		//LocalStorage Get bookmarks
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//Add bookmark to array

		bookmarks.push(bookmark);
		//Reset to LocalStorage
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
	}

	//clear form
	document.getElementById('myForm').reset();
	//Re-fetch bookmarks
	fetchBookmarks();

	//prevent form from submiting
	e.preventDefault();


}

//Delete bookmarks
function deleteBookmark(URL){
	//GET bookmarks
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	//Loop Through bookmarks
	for(var i=0;i<bookmarks.length;i++){
		if(bookmarks[i].URL == URL){
			//Remove from array
			bookmarks.splice(i,1);
		}
	}
	//Re-set back to localStorage
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

	//Re-fetch bookmarks
	fetchBookmarks();

}


//fetch bookmarks
function fetchBookmarks(){
	//Get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	//Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');

	//Build output
	bookmarksResults.innerHTML = '';

	for(var i=0;i<bookmarks.length;i++){
		var name = bookmarks[i].name;

		var URL = bookmarks[i].URL;

		bookmarksResults.innerHTML += '<div class="well">' +
		                                '<h3>'+name+
																			'<a class="btn btn-default" target="_blank" href="'+URL+'">Visit</a> ' +
																			'<a onclick="deleteBookmark(\''+URL+'\')" class="btn btn-danger" href="#">Delete</a> ' +
																		  '</h3>'+
																			   '</div>'  ;



	}



}

//Validate Form
function validateForm(siteName,siteURL){
	if(!siteName || !siteURL ){
		alert('Please fill in the form');
		return false;

	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if(!siteURL.match(regex)){
		alert('Please Use a Valid URL');
		return false;

	}
	return true;
}
