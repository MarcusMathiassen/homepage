import firebase from '../_firebaseconfig.js'
import marked from 'marked'

export const get = async (req, res, next) => {
    const { slug } = req.params

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
    const snapshot = await db
        .collection('blogposts')
        .where('slug', '==', slug)
        .get()
    const post = snapshot.docs.map(doc => doc.data()).pop()

    // Download the markdown
    let markdown = await fetch(post.url)
    markdown = await markdown.text()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
        JSON.stringify({
            title: post.title,
            html: marked(markdown),
        })
    )
}
