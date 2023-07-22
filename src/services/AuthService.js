import {signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from "../firebase.config";
import {getDoc, doc, setDoc} from 'firebase/firestore'

export const login = async ({email, password}) => {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    if (resp?.user != null) {
        //return user
        const repsUser = await getDoc(doc(db, "users", resp.user.uid))
        if (repsUser.exists()) {
            return {...repsUser.data(), id: repsUser.id}
        }
    }
    return null;
}
export const register = async ({email, password, username}) => {
    //reg in auth
    const regResp = await createUserWithEmailAndPassword(auth, email, password);
    if (regResp.user != null) {
        const user = {email, password, username}
        await setDoc(doc(db, "users", regResp.user.uid), user)
        return {...user, id: regResp.user.uid};
    }
    return null;
}
export const sendEmailResetPassword = async ({email}) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}