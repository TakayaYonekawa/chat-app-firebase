import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBA8p_UFNRCkqFiCT0RfGU-VrUoncBJYaw",
    authDomain: "fire-to-bbf9f.firebaseapp.com",
    projectId: "fire-to-bbf9f",
    storageBucket: "fire-to-bbf9f.appspot.com",
    messagingSenderId: "811899394240",
    appId: "1:811899394240:web:b93ab0d6c5173e941bb525"
});

 const db = firebaseApp.firestore();
 const auth = firebase.auth();

export {db , auth};