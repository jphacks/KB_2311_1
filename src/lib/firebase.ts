import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMYaJnLyRTBvntnsr6RvA9eU_bBYBZGK8",
  authDomain: "fill-home-fe.firebaseapp.com",
  projectId: "fill-home-fe",
  storageBucket: "fill-home-fe.appspot.com",
  messagingSenderId: "937189625391",
  appId: "1:937189625391:web:f42c913ae7536fe89bc0da",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
