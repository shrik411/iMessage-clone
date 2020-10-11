import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "your-apiKey",
    authDomain: "your-api-authDomain",
    databaseURL: "your-api-databaseURL",
    projectId: "your-api-projectId",
    storageBucket: "your-api-storageBucket",
    messagingSenderId: "your-api-messagingSenderId",
    appId: "your-api-messagingSenderId"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


