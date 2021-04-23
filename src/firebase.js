import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyo7byBlBpXZQ1NhjLhUQMoKFsVIlBgOk",
  authDomain: "disneyplus-clone-6f6cd.firebaseapp.com",
  projectId: "disneyplus-clone-6f6cd",
  storageBucket: "disneyplus-clone-6f6cd.appspot.com",
  messagingSenderId: "52166512282",
  appId: "1:52166512282:web:2636ce77b5f0dca3a69923",
  measurementId: "G-HNDSZDSP3W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
