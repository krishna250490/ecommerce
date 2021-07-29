// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAQOIl2QiW4GX4tRWUhrBH6EMVP5kZnRYo",
    authDomain: "ecommerce-5ecf9.firebaseapp.com",
    projectId: "ecommerce-5ecf9",
    storageBucket: "ecommerce-5ecf9.appspot.com",
    messagingSenderId: "448815098484",
    appId: "1:448815098484:web:8c0c81bf79493021cfbf21",
    measurementId: "G-9RSHY48F93"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};