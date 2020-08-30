import firebase from '../_firebaseconfig.js'

export const get = async (req, res) => {
    await firebase
        .auth()
        .signInWithEmailAndPassword(
            process.env.FIREBASE_USER_EMAIL,
            process.env.FIREBASE_USER_PASSWORD
        )
        .catch(function (err) {
            console.log(err)
            // Handle errors
        })

    const db = firebase.firestore()
    const snapshot = await db.collection('blogposts').get()
    const posts = snapshot.docs.map(doc => doc.data())
    const contents = JSON.stringify(posts)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(contents)
}
