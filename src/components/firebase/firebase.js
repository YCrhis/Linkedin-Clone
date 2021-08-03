import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBq8bTaSiBgBv0QP0gXyAG_l7ILKUEnKV0",
    authDomain: "linkedin-clone-b5a2e.firebaseapp.com",
    projectId: "linkedin-clone-b5a2e",
    storageBucket: "linkedin-clone-b5a2e.appspot.com",
    messagingSenderId: "241173744704",
    appId: "1:241173744704:web:89cf17397e2b85716a23a5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
