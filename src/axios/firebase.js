import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxcBp4tBOR-AyZFWb4UIyw-X8O8z7C3CE",
  authDomain: "novena--consult.firebaseapp.com",
  projectId: "novena--consult",
  storageBucket: "novena--consult.appspot.com",
  messagingSenderId: "672710719018",
  appId: "1:672710719018:web:3da27851580c055444b553",
  measurementId: "G-41SYT8B7DX"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

export default firebaseApp;