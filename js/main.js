console.log('welcome');

// set a cookie with their name in it
Cookies.set('firstName', 'Mike');

// on click of #button,
document.getElementById('button').addEventListener('click', function(){
  // get the .value of #fname
  var fName = document.getElementById('fname').value;
  console.log(fName);
  // store that value in a cookie
  Cookies.set('firstName', fName);
});
