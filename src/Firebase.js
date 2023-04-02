import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLtQdz8-Gz08MPra5dlUHdlzNfkqF0chU",
  authDomain: "travelwithus-73db1.firebaseapp.com",
  projectId: "travelwithus-73db1",
  storageBucket: "travelwithus-73db1.appspot.com",
  messagingSenderId: "444389048171",
  appId: "1:444389048171:web:76704e4d54bc724f0c562e",
  measurementId: "G-PX7KRVDCBS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
