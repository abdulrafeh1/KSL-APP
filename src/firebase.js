import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAuog7a6KUqhXZetcff9ybse17f1lnVxA0",
  authDomain: "final-hackathon2021-1602b.firebaseapp.com",
  projectId: "final-hackathon2021-1602b",
  storageBucket: "final-hackathon2021-1602b.appspot.com",
  messagingSenderId: "930773845092",
  appId: "1:930773845092:web:ac8f1598d4e14bdfb04b71",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
