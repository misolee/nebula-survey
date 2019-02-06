import firebase from 'firebase';
import 'firebase/firestore';

// import firebase Configuration
import firebaseConfig from './firebaseConfig';

// initialize the firebase app with configuration
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export the firestore
export default firebaseApp.firestore();