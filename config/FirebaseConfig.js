// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'file-manager-app-a1a8a.firebaseapp.com',
  projectId: 'file-manager-app-a1a8a',
  storageBucket: 'file-manager-app-a1a8a.appspot.com',
  messagingSenderId: '355126507620',
  appId: process.env.FIREBASE_APPID,
  measurementId: 'G-YHT8GM7KLX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default { app };
