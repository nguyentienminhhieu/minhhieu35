import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCtsQrNEa_BdnYDAO1szJaP3jBrbmRrIW8",
    authDomain: "chat-app-7a15e.firebaseapp.com",
    projectId: "chat-app-7a15e",
    storageBucket: "chat-app-7a15e.appspot.com",
    messagingSenderId: "956949029449",
    appId: "1:956949029449:web:d2406fc8949167e3e05598",
    measurementId: "G-5EHK49KF7N"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

export { db, auth};
export default firebase;
// export {app, analytics};
