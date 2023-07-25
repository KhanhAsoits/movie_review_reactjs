import {getDocs, where, query, collection, getDoc, doc} from 'firebase/firestore';
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
