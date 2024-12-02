import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
    apiKey: "AIzaSyDrxMSY5yXpEZpyeUk-FDBLznaXuJP_aps",
    authDomain: "messenger-98566.firebaseapp.com",
    databaseURL: "https://messenger-98566-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "messenger-98566",
    storageBucket: "messenger-98566.firebasestorage.app",
    messagingSenderId: "735406146858",
    appId: "1:735406146858:web:7a610b478e7f9413260a53",
    measurementId: "G-P3CPLG0ZHS"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);// reference to the Firestore database
export default db;// Export the Firestore instance