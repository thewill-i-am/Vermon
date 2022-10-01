
// Import the functions you need from the SDKs you need
import  {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT13edgZH3dI3SiSNa3N4Rked6jAs5-l0",
  authDomain: "ecotrade-9c511.firebaseapp.com",
  projectId: "ecotrade-9c511",
  storageBucket: "ecotrade-9c511.appspot.com",
  messagingSenderId: "66551785407",
  appId: "1:66551785407:web:e6f046e17cd2ac2eafa30a",
  measurementId: "G-FT91XWPRSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)


console.log("callo aqui")
