import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
    doc,
    collection,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";

//config for firebase
const firebaseConfig = {
     
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

//creates a new food bank by creating a new document in the firebase database
const addNewPantry = async (name, location, foodList, quantity) => {

};

//creates a new user by creating a new document in the firebase database
const userRegistration = async (name, email, password) => {
    
};

//logs in a user by using their email and password
const signInWithEmailAndPassword = async (email, password) => {
    
};

//sends password reset email to user
const resetPassword = async (email) => {
    
};

//logs user out
const logout = () => {

};

export {
    auth,
    db,
    signInWithEmailAndPassword,
    userRegistration,
    resetPassword,
    logout,
    addNewPantry,
};
export default firebase;
