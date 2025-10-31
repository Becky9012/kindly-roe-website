/* eslint-env node */

// Debug Firebase connection
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB_073uTboZI0hwAAgSR8BZ533wwfkekg',
  authDomain: 'kindlyroe-website.firebaseapp.com',
  projectId: 'kindlyroe-website',
  storageBucket: 'kindlyroe-website.appspot.com',
  messagingSenderId: '108074550869',
  appId: '1:108074550869:web:7f042cabfb1a50b22fb6dc',
  measurementId: 'G-Q7WBZKNRR',
}

console.log('🔧 Testing Firebase connection...')
console.log('Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  apiKey: firebaseConfig.apiKey.substring(0, 10) + '...'
})

try {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  console.log('✅ Firebase app initialized')
  
  // Get Firestore
  const db = getFirestore(app)
  console.log('✅ Firestore instance created')
  
  // Test collection reference
  const testCollection = collection(db, 'interest')
  console.log('✅ Collection reference created:', testCollection.path)
  
  // Test adding a document
  console.log('🧪 Testing document write...')
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test submission',
    timestamp: serverTimestamp(),
  }
  
  addDoc(testCollection, testData)
    .then((docRef) => {
      console.log('✅ Document written successfully with ID:', docRef.id)
      console.log('🎉 Firebase is working correctly!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Document write failed:')
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error code:', error.code)
      console.error('Full error:', error)
      process.exit(1)
    })
    
} catch (error) {
  console.error('❌ Firebase initialization failed:')
  console.error('Error name:', error.name)
  console.error('Error message:', error.message)
  console.error('Full error:', error)
  process.exit(1)
}
