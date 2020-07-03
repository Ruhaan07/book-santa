import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAkJ7fiB8HFbw4c--Jk02Z9PpIw7BwWEOY",
    authDomain: "booksanta-248df.firebaseapp.com",
    databaseURL: "https://booksanta-248df.firebaseio.com",
    projectId: "booksanta-248df",
    storageBucket: "booksanta-248df.appspot.com",
    messagingSenderId: "1066323696141",
    appId: "1:1066323696141:web:321e2a9a4100f2075f5344"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()