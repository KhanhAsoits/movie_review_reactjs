import {getDocs, where, query, collection} from 'firebase/firestore';
import {db} from "../firebase.config";

export const getAllMovies = async () => {
    const movies = []
    const resp = await getDocs(query(collection(db, "movies")));
    for (let doc of resp.docs) {
        if (doc.exists()) {
            movies.push({...doc.data(), id: doc.id})
        }
    }
    return movies;
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
