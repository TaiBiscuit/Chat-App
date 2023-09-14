/* import { initializeApp} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-SERVICE.js'  */
import {initializeApp} from "firebase/app"; 
import {getAuth} from 'firebase/auth';  
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyDM2NOokKPHDPyIdWVdYsrxah8FyNhjT6g",
  
    authDomain: "chat-app-38ec0.firebaseapp.com",
  
    projectId: "chat-app-38ec0",
  
    storageBucket: "chat-app-38ec0.appspot.com",
  
    messagingSenderId: "433798791460",
  
    appId: "1:433798791460:web:178f17e7aa8faec17cb3b1"
  
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
