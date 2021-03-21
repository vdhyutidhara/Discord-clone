import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ8HITFjzbtpgeTbxQLmWtoFuqucD-NW0",
  authDomain: "dicord-clone-yt.firebaseapp.com",
  projectId: "dicord-clone-yt",
  storageBucket: "dicord-clone-yt.appspot.com",
  messagingSenderId: "244291597727",
  appId: "1:244291597727:web:d32428c1103f520d2ef9aa",
  measurementId: "G-03CK4PXMRD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
