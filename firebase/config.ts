import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABERgafPnInwt42Xfz5joMexhjSv9HTps",
  authDomain: "instanimals-ae1e8.firebaseapp.com",
  projectId: "instanimals-ae1e8",
  storageBucket: "instanimals-ae1e8.appspot.com",
  messagingSenderId: "663453059191",
  appId: "1:663453059191:web:ff0e2efba26155f40a9e72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }
