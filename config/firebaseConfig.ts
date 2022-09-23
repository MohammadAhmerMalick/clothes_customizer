import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8z4AIhWe3_vYoVRd2T2LOX9P5sb-J0Vk',
  authDomain: 'clothes-customizer.firebaseapp.com',
  projectId: 'clothes-customizer',
  storageBucket: 'clothes-customizer.appspot.com',
  messagingSenderId: '888294712353',
  appId: '1:888294712353:web:15841382afd1579bd12f60',
  measurementId: 'G-MT92R87QG3',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const firestoreDB = getFirestore(app)
