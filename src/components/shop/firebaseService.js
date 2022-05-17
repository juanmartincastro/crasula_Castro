import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxwe2Ak13V58TZQH8uk2Vnvd6Y1ng5iMk",
    authDomain: "react31160coderhouse.firebaseapp.com",
    projectId: "react31160coderhouse",
    storageBucket: "react31160coderhouse.appspot.com",
    messagingSenderId: "564599308286",
    appId: "1:564599308286:web:16b427a5eb136121ad4aaf"
  };

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}