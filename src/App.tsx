import './App.css'

import {NFCComponent} from './Components/nfc'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4F_oc8iX6wKBXchueyhV12H7Ux3smU4",
  authDomain: "magitekt.firebaseapp.com",
  projectId: "magitekt",
  storageBucket: "magitekt.firebasestorage.app",
  messagingSenderId: "619766633965",
  appId: "1:619766633965:web:99b5112bbf4ddedf8e03e4"
};

// Initialize Firebase
// @ts-ignore
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <NFCComponent />
    </>
  )
}

export default App
