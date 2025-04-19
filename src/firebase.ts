import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDbi1y4jWjAyA_M5clGXWjc_5aGCZ6dHLU",
  authDomain: "ariel-romano.firebaseapp.com",
  projectId: "ariel-romano",
  storageBucket: "ariel-romano.firebasestorage.app",
  messagingSenderId: "780721614682",
  appId: "1:780721614682:web:86c97d7bc2fb946d40cd63",
  measurementId: "G-042GYMFEKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics }; 