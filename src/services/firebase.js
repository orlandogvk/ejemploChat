import firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyBHM59D4Jm04I8V2VAPQs850mgJc-Oq7Hg",
    authDomain: "prueba-chat-ee6f5.firebaseapp.com",
    databaseURL: "https://prueba-chat-ee6f5.firebaseio.com",
    projectId: "prueba-chat-ee6f5",
    storageBucket: "prueba-chat-ee6f5.appspot.com",
    messagingSenderId: "173344440692",
    appId: "1:173344440692:web:b446351c6a70b699a2ec21",
    measurementId: "G-VN254QDZSM"

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//Export bd & auth modules
export const auth = firebase.auth;
export const db = firebase.database();

