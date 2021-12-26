import { collection,doc, getDoc, getDocs, query, setDoc,where } from 'firebase/firestore';
import db from './firebase';

export const addUser= async (userId,password)=>{
    const docRef = doc(db,"user",userId);
    const payload = {
        userId,
        password
    }   
    await setDoc(docRef,payload);
}

export const validateUser = async(userId,password,setValidUserID)=>{
    const collectionRef = collection(db,"user");
    const q = query(collectionRef,where("userId","==",userId));
    const snapshot = await getDocs(q);
    const userData = snapshot.docs.map(doc=>({...doc.data(), id:doc.id}));
    if(userData[0].password===password){
        setValidUserID(userData[0].userId);
    }
}

export const updateHospital= async (userId,payload)=>{
    const docRef = doc(db,"hospitalData",userId);
    await setDoc(docRef,payload);
}
