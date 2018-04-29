'use strict';

app.controller('AuthCtrl', function(){
	var auth = this;

	auth.login = function(){
		console.log('Login cliked');
		

	var config = {
  apiKey: "AIzaSyAsR8ZxAT2mADdl9g7CEeMCz3IDrzuEKfo",
  authDomain: "testapp-31fe1.firebaseapp.com",
  databaseURL: "https://testapp-31fe1.firebaseio.com"
};


firebase.initializeApp(config);


var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_location');

firebase.auth().signInWithPopup(provider).then(function(result) {
	console.log("Name: ", result.additionalUserInfo.profile.name);
  	console.log("City: ", result.additionalUserInfo.profile.location.name);
	console.log("Age: ", result.additionalUserInfo.profile.age_range.min);
	console.log("Genger: ", result.additionalUserInfo.profile.gender);
	console.log("email: ", result.additionalUserInfo.profile.email);



  console.log(result);
}).catch(function(error) {
  console.error("Authentication failed:", error);
});


};

	auth.logout = function(){
		// Auth.logout()
		firebase.auth().signOut().then(function() {
  // Sign-out successful.
		}, function(error) {
  		console.log(error);
		});
	};
})