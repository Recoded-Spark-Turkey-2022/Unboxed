// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD65vj7kxdsfcaw0hLcA6cepojkFOB0RxA',
  authDomain: 'unboxed-d7469.firebaseapp.com',
  databaseURL:
    'https://unboxed-d7469-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'unboxed-d7469',
  storageBucket: 'unboxed-d7469.appspot.com',
  messagingSenderId: '760283594137',
  appId: '1:760283594137:web:f9e61bc41304011ac2e708',
  measurementId: 'G-N3SCDS383Q',
};

// Initialize Fire
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
