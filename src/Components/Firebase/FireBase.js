import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCXJ1EqAKqutFOFXj94Jon8nTOFum3mHsc",
  authDomain: "hanuman-store-108f5.firebaseapp.com",
  projectId: "hanuman-store-108f5",
  storageBucket: "hanuman-store-108f5.appspot.com",
  messagingSenderId: "955762278320",
  appId: "1:955762278320:web:ae0e7470ac5cbc0fb42075",
  measurementId: "G-EPQE2T53LR"

  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };