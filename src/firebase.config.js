import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPf2ZO4rfIyzQE2y04LcLI558PBiWLv_A",
  authDomain: "bakery-client-2384d.firebaseapp.com",
  projectId: "bakery-client-2384d",
  storageBucket: "bakery-client-2384d.appspot.com",
  messagingSenderId: "392575856489",
  appId: "1:392575856489:web:800fb3abbd67de5899d7f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;