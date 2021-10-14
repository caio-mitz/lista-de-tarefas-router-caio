// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBudnonXaQXBCRkbzJMiwZ1XN7GNIGJWK0",
    authDomain: "todo-list-vue-654d9.firebaseapp.com",
    projectId: "todo-list-vue-654d9",
    storageBucket: "todo-list-vue-654d9.appspot.com",
    messagingSenderId: "1022965387906",
    appId: "1:1022965387906:web:3ff889aabcb98afa9f1a9b"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}