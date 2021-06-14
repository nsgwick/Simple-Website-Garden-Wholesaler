//Function to check userid & password
function check(login)
{
  var user = new user("username@test.com","pass")
  var users = [user]
  var valid = false
  var loggedInUser = null

  users.forEach((usr, i) => {
    if(usr.getEmail() == login.userid.value && usr.getPassword() == login.pswrd.value) {
      loggedInUser = usr
      valid = true
    }
  });
  if(valid) {
    window.open('products.html');
  }
  else {
      alert("Error: Please enter a valid password and/or username");
  }
}
