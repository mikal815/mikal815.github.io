console.log('welcome');

// By default (on page load)

// if a 'firstName' cookie is set
if(Cookies.get('firstName')){
  alert('found a cookie named firstName')
// update the DOM to display the value of the firstName cookie  
} else {
  alert('no cookie is found')
}



// set a cookie with their name in it
// Cookies.set('firstName', 'Mike');

// on click of #button,
document.getElementById('button').addEventListener('click', function(){
  // get the .value of #fname
  var fName = document.getElementById('fname').value;

  console.log(fName);
  // store that value in a cookie
  Cookies.set('firstName', fName);
});
