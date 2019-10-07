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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
