import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBtgi27nMnm8smnj3yerlLM_MDy4CfOfEA",
    authDomain: "movie-review-5ddbb.firebaseapp.com",
    projectId: "movie-review-5ddbb",
    storageBucket: "movie-review-5ddbb.appspot.com",
    messagingSenderId: "113438288136",
    appId: "1:113438288136:web:626a9b8a73b9fd84a624bd",
    measurementId: "G-NGGF0G8PB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
