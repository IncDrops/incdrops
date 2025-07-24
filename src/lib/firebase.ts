import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD18Y-n7TtxKOzlrC3CEr6JQ21iNEO6gM0",
  authDomain: "incdrops-ai-content.firebaseapp.com",
  projectId: "incdrops-ai-content",
  storageBucket: "incdrops-ai-content.firebasestorage.app",
  messagingSenderId: "795247073155",
  appId: "1:795247073155:web:150e79e97dfeafe62008b6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
