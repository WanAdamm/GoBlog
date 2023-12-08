import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCt7s7jdJSlhV-YJPHwcpQsYrhjEcUXoRU",
  authDomain: "blog-authentication-8befe.firebaseapp.com",
  projectId: "blog-authentication-8befe",
  storageBucket: "blog-authentication-8befe.appspot.com",
  messagingSenderId: "59217532245",
  appId: "1:59217532245:web:835f05a847cd9862214bdc",
  measurementId: "G-LLXT0KFPZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)