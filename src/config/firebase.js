import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAvOtL5joH-MfMjrOyzyJ1nXJp0pUzfpmg",
    authDomain: "elfisio-13d6b.firebaseapp.com",
    projectId: "elfisio-13d6b",
    storageBucket: "elfisio-13d6b.appspot.com",
    messagingSenderId: "600771677446",
    appId: "1:600771677446:web:5e265b6cf704f1d7aa6287",
    measurementId: "G-68YM8M6HP2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getFireStore(app)
const auth = getAuth(app);



export default auth;