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
provider.addScope('user_birthday');

firebase.auth().signInWithPopup(provider).then(function(authData) {
	console.log(authData);
}).catch(function(error) {
	console.log(error);
});
provider.setCustomParameters({
  'display': 'popup'
});

// var provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('user_birthday');

// provider.setCustomParameters({
//   'display': 'popup'
// });

// firebase.auth().signInWithPopup(provider).then(function(authData) {
// 	 			console.log(authData);
// 	 		}).catch(function(error){
// 	 			console.log(error);
// 	 		});

// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

// firebase.auth().signInWithRedirect(provider);

// firebase.auth().getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     var token = result.credential.accessToken;
//     // ...
//   }
//   // The signed-in user info.
//   var user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });


// console.log(authData);

	

	// var Auth = {
	// 	login: function(){
	// 		return firebase.signInWithPopup(provider).then(function(authData) {
	// 			console.log(authData);
	// 		}).catch(function(error){
	// 			console.log(error);
	// 		});
	// 	},

	// 	logout: function(){
	// 		return auth.$unauth();
	// 	}
	// };

	

	

	// auth.$onAuth(function(authData){
	// 	if(authData){
	// 		console.log('Logged in!');
	// 	} else{
	// 		$state.go('login');
	// 		console.log('You need to login.');
	// 	}
	// })

	// return Auth;
	
		// var user = Auth.login();
		// console.log(user.facebook);
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