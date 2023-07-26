import {getDocs, where, query, collection, getDoc, doc, addDoc, updateDoc} from 'firebase/firestore';
import {db} from "../firebase.config";

export const getAllMovies = async () => {
    const movies = []
    const resp = await getDocs(query(collection(db, "movies"), where('category', '!=', 'special')));
    for (let doc of resp.docs) {
        if (doc.exists()) {
            movies.push({...doc.data(), id: doc.id})
        }
    }
    return movies;
}
export const orderTicket = async (data, seats) => {
    try {
        for (let i = 0; i < seats.length; i++) {
            if (seats[i].hours === data.hours && seats[i].minute === data.minute) {
                seats[i].seats.current += 1;
            }
        }
        await addDoc(collection(db, "tickets"), data);
        await updateDoc(doc(db, "movies", data.movieId), {seats: seats})
    } catch (e) {
        console.log(e)
    }
}
export const getMovieById = async (id) => {
    const resp = await getDoc(doc(db, "movies", id))
    if (resp.exists()) {
        return {...resp.data(), id: resp.id}
    }
    return null;
}
export const getBestMovies = async () => {
    const movies = []
    const resp = await getDocs(query(collection(db, "movies"), where("category", "==", "best")));
    for (let doc of resp.docs) {
        if (doc.exists()) {
            movies.push({...doc.data(), id: doc.id})
        }
    }
    return movies;
}

export const getNewMovies = async () => {
    const movies = []
    const resp = await getDocs(query(collection(db, "movies"), where("category", "==", "new")));
    for (let doc of resp.docs) {
        if (doc.exists()) {
            movies.push({...doc.data(), id: doc.id})
        }
    }
    return movies;
}
export const getShowingMovie = async () => {
    const movies = []
    const resp = await getDocs(query(collection(db, "movies"), where("category", "==", "showing")));
    for (let doc of resp.docs) {
        if (doc.exists()) {
            movies.push({...doc.data(), id: doc.id})
        }
    }
    return movies;
}

export const getRecentlyMovie = async () => {
    const movies = []
    const resp = await getDocs(query(collection(db, "movies"), where("category", "==", "recently")));
    for (let doc of resp.docs) {
        if (doc.exists()) {
            movies.push({...doc.data(), id: doc.id})
        }
    }
    return movies;
}
export const getSpecialMovies = async () => {
    const movies = []
    const resp = await getDocs(query(collection(db, "movies"), where("category", "==", "special")));
    for (let doc of resp.docs) {
        if (doc.exists()) {
            movies.push({...doc.data(), id: doc.id})
        }
    }
    return movies;
}
