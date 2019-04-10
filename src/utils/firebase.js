import * as firebase from 'firebase';

/* const fbase = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
}); */

/* const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
}; */

/* Using environment variables to store firbase configuration details is the much preferred secure option.
   But had to use them raw here due to an error occured when writing to the database. Will be working on to get the
   env variables working. 
*/
const config = {
  apiKey: "AIzaSyBPI0M3zmkpBsBtkh5QZF2_F-KOGQOGf0A",
  authDomain: "mpgs-5df92.firebaseapp.com",
  databaseURL: "https://mpgs-5df92.firebaseio.com",
  projectId: "mpgs-5df92",
  storageBucket: "mpgs-5df92.appspot.com",
  messagingSenderId: "335564040234"
};

//export default fbase;

firebase.initializeApp(config);

export default firebase;