import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDQB44kqb5yS97zlkjGTvusu1ERN_oDNGM",
    authDomain: "my-ecormerce.firebaseapp.com",
    projectId: "my-ecormerce",
    storageBucket: "my-ecormerce.appspot.com",
    messagingSenderId: "455964799277",
    appId: "1:455964799277:web:aa22dc6f5c4951bfa063a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)