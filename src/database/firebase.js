import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGgC23XzjjvJnu3x_dR8sqBBhhPWPAers",
  authDomain: "hospital-monitoring-syst-625c4.firebaseapp.com",
  databaseURL: "https://hospital-monitoring-syst-625c4-default-rtdb.firebaseio.com",
  projectId: "hospital-monitoring-syst-625c4",
  storageBucket: "hospital-monitoring-syst-625c4.appspot.com",
  messagingSenderId: "1004464256036",
  appId: "1:1004464256036:web:fe987f3e34f9df63f054b1",
  measurementId: "G-8S2Q9CZM0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app=firebaseApp.firestore();
// const analytics = getAnalytics(app);

export default getFirestore(app);