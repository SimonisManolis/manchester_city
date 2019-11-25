import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYTgYBPaNDlWWPyvWE4ulzkw4xM-gaL14",
    authDomain: "m-city-b12c8.firebaseapp.com",
    databaseURL: "https://m-city-b12c8.firebaseio.com",
    projectId: "m-city-b12c8",
    storageBucket: "m-city-b12c8.appspot.com",
    messagingSenderId: "844860519698",
    appId: "1:844860519698:web:044f66c93162cacd7a6fcb",
    measurementId: "G-ZHDMK274QE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');

  export {
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebaseDB
  }