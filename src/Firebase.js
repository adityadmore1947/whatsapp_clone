import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBJmaAP_Eo_fIErNAjqqL6IUJt_ROpPJlg",
    authDomain: "whatsapp-clone-469ce.firebaseapp.com",
    projectId: "whatsapp-clone-469ce",
    storageBucket: "whatsapp-clone-469ce.appspot.com",
    messagingSenderId: "821275496514",
    appId: "1:821275496514:web:787173dc6e0ee45c7c9ddb"
  };

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// const provider = new auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebaseApp.auth.GoogleAuthProvider();

// Difference between implicit and explicit export 

// initialize(db, auth, provider)
export {auth,provider};
export default db;