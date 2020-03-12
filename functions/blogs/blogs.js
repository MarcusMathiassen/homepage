const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp({
    apiKey: process.env.FIREBASE_TOKEN,
    authDomain: 'homepage-109b6.firebaseapp.com',
    databaseURL: 'https://homepage-109b6.firebaseio.com',
    projectId: 'homepage-109b6',
    storageBucket: 'homepage-109b6.appspot.com',
    messagingSenderId: '543017541768',
    appId: '1:543017541768:web:5941e25cab34252ea97f3d',
    measurementId: 'G-ZGWFFK2LXK',
})

// Add the Firebase products that you want to use
const db = firebase.firestore()

exports.handler = async (event, context) => {
    const snapshot = await db.collection('blogposts').get()
    return {
        statusCode: 200,
        body: JSON.stringify(snapshot.docs.map(doc => doc.data())),
    }
}
