import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB0iQk4aCPhOYW0Op4-o_u4WVQ0ZvIT7fM",
    authDomain: "twine-9ccae.firebaseapp.com",
    databaseURL: "https://twine-9ccae.firebaseio.com",
    projectId: "twine-9ccae",
    storageBucket: "twine-9ccae.appspot.com",
    messagingSenderId: "555311675622",
    appId: "1:555311675622:web:ee75a796622641a119e327",
    measurementId: "G-N5Z6JY5JVL"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };