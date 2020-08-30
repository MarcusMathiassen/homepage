// Config file
import * as firebase from 'firebase'
require('dotenv').config()
const config = {
    apiKey: process.env.FIREBASE_TOKEN,
    authDomain: 'homepage-109b6.firebaseapp.com',
    databaseURL: 'https://homepage-109b6.firebaseio.com',
    projectId: 'homepage-109b6',
    storageBucket: 'homepage-109b6.appspot.com',
    messagingSenderId: '543017541768',
    appId: '1:543017541768:web:5941e25cab34252ea97f3d',
    measurementId: 'G-ZGWFFK2LXK',
}

export default !firebase.apps.length
    ? firebase.initializeApp(config)
    : firebase.app()
