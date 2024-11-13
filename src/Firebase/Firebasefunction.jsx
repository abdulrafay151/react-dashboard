import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "./Firebaseconfig"
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"


const auth = getAuth(app)
const db = getFirestore(app)

export {db};

export const signUpUser = (obj) => {
    return createUserWithEmailAndPassword(auth, obj.email, obj.password);
};

export const loginUser = (obj) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password);
};

// export const dataGet = async (collectionRef) => {
//     try {
//         const docRef = await getDocs(collectionRef);
//         return docRef.docs.map((doc.data()))
//     }
//     catch (err) {
//         console.log(err);
// };
// }


export const dataGet = async (nodeName, id) => {

        const docRef = doc(db, nodeName, id)
}


export const dataSet = async (nodeName, obj, id) => {
    const docRef = doc(db, nodeName, id);
    return await setDoc(docRef, obj)
};


export const dataEdit = (nodeName, id, obj) => { };


// export const dataDelete = (nodeName, id) => {
//     const deleteDoc(doc(db, ProductsData, docRed.id ))
//  };
