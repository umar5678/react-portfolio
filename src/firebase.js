import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYwKgnkBuehNLq_SiDRh-CeGNCDNmd7mc",
  authDomain: "react-portfolio-52d4a.firebaseapp.com",
  projectId: "react-portfolio-52d4a",
  storageBucket: "react-portfolio-52d4a.appspot.com",
  messagingSenderId: "178083893237",
  appId: "1:178083893237:web:3bece3e05db11465075abc"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore()