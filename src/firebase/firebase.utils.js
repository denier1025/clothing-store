import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhjbyj1EW7A6Y1cMYZw9HiIkDha8UPwaQ",
  authDomain: "crown-clothing-store-db.firebaseapp.com",
  databaseURL: "https://crown-clothing-store-db.firebaseio.com",
  projectId: "crown-clothing-store-db",
  storageBucket: "",
  messagingSenderId: "753504379853",
  appId: "1:753504379853:web:c355121959e9ecd8289a84",
  measurementId: "G-TH83ZQ12E1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
