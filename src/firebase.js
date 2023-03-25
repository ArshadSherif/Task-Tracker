import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-1igWmrzHFGl7Gwpc6b4lesK4dOI_E58",
  authDomain: "task-tracker-43d1e.firebaseapp.com",
  projectId: "task-tracker-43d1e",
  storageBucket: "task-tracker-43d1e.appspot.com",
  messagingSenderId: "805740097878",
  appId: "1:805740097878:web:23113ae79b15fd2f3da6f7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db};
