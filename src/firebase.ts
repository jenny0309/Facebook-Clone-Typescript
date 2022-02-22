import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyA1GhIfb9YMYgtynfGMxdM3jse__u1Pi9w',
  authDomain: 'facebook-clone-bdc83.firebaseapp.com',
  projectId: 'facebook-clone-bdc83',
  storageBucket: 'facebook-clone-bdc83.appspot.com',
  messagingSenderId: '698319641573',
  appId: '1:698319641573:web:dff4de9e46d67b90acad0c',
  measurementId: 'G-YGD8DCKJV5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
