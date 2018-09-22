// Notes: 
// How to Initiate: https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md#4-setup-ngmodule
// My Keys: https://console.firebase.google.com/project/meetup-55963/authentication/users


//Import the library's into the app
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

//Firebase Configurations

const firebaseConfig = {
    apiKey: "XXXXX",
    authDomain: "XXXX.firebaseio.com", 
    databaseURL: "https://XXXX.firebaseio.com"
};

//Firebase Auth configureation

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

//Initiate the app
AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)

