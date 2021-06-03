import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC1S98UOTkeoxIeQkay2os0NTvKr4PgsS0",
  authDomain: "mqnn-shop.firebaseapp.com",
  projectId: "mqnn-shop",
  storageBucket: "mqnn-shop.appspot.com",
  messagingSenderId: "1010046430317",
  appId: "1:1010046430317:web:60f26383e26e0681ece364",
  measurementId: "G-48WC5TNEC4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
