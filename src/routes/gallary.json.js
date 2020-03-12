const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

// Initialize Firebase
if (!firebase.apps.length)
    firebase.initializeApp({
        apiKey: 'AIzaSyC1F5CtvWS7rNpR3_icLUmsR6WcInU1bcE',
        authDomain: 'homepage-109b6.firebaseapp.com',
        databaseURL: 'https://homepage-109b6.firebaseio.com',
        projectId: 'homepage-109b6',
        storageBucket: 'homepage-109b6.appspot.com',
        messagingSenderId: '543017541768',
        appId: '1:543017541768:web:5941e25cab34252ea97f3d',
        measurementId: 'G-ZGWFFK2LXK',
    })

export const get = async(req, res) => {

    // Add the Firebase products that you want to use
    const db = firebase.firestore()

    const snapshot = await db.collection("assets").orderBy("timeCreated", "desc").get()
    let contents = snapshot.docs.map(doc => doc.data())

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(contents));
}
