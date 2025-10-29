// src/firebaseConfig.ts

import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB_073uTboZI0hwAAgSR8BZ533wwfkekg',
  authDomain: 'kindlyroe-website.firebaseapp.com',
  projectId: 'kindlyroe-website',
  storageBucket: 'kindlyroe-website.appspot.com',
  messagingSenderId: '108074550869',
  appId: '1:108074550869:web:7f042cabfb1a50b22fb6dc',
  measurementId: 'G-Q7WBZKNRR',
}

// Init Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Debug: Log Firebase connection
console.log('Firebase initialized:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  apiKey: firebaseConfig.apiKey.substring(0, 10) + '...',
})
