// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYjNMgnddeR6H5ZQ__yq0jd4R2KdwoT-8",
  authDomain: "prime-clone-62e8d.firebaseapp.com",
  projectId: "prime-clone-62e8d",
  storageBucket: "prime-clone-62e8d.appspot.com",
  messagingSenderId: "578389141667",
  appId: "1:578389141667:web:5ac1239d754e169bd13716",
  measurementId: "G-FC1MV1WTPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
