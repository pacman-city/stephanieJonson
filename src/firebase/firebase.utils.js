import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCxMtIXNhTh6XPWtwqnMZgN77et-Av_pQY",
    authDomain: "stephaniejonson.firebaseapp.com",
    projectId: "stephaniejonson",
    storageBucket: "stephaniejonson.appspot.com",
    messagingSenderId: "146241772780",
    appId: "1:146241772780:web:073012d9d8b600ea2b19c9",
    measurementId: "G-BHCE483MRP"
  };

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);



// --------------------------------------------------------------------------
// import {collection, writeBatch} from 'firebase/firestore';

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     objectsToAdd.forEach(obj => {
//         const newDocRef = doc(collectionRef);
//         batch.set(newDocRef, obj);
//     });

//     return await batch.commit();
// }

// addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title,items})));

// const collectionRef = collection(db, 'users');
// const snapshot = getDocs(collectionRef)
// .then(res => console.log(res));
// --------------------------------------------------------------------------


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, 'users', userAuth.uid);

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const convertCollectionsShapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe =  onAuthStateChanged(auth, userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
};