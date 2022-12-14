import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCYekoXVj3Y2ZEuS6oG_fVPF2x_h3eWHs",
    authDomain: "ari-twitterclone.firebaseapp.com",
    projectId: "ari-twitterclone",
    storageBucket: "ari-twitterclone.appspot.com",
    messagingSenderId: "465415075547",
    appId: "1:465415075547:web:5c2490d9cb6e20e1aebefe",
    measurementId: "G-DRX459EMXD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;