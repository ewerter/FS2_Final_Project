
/*function checkuser(){
  const firebase = require('firebase/database')
  var email = document.getElementById('txtemail').innerText;
  var databaseref = firebase.database().ref(`users/${email}`);
      databaseref.once("value", function (snapshot) {
        if (snapshot.exists()){
       
          const existemail = snapshot.val();
          console.log(`${existemail}`);
        }
      });
}

*/
