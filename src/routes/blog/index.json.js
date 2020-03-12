import firebase from '../_firebaseconfig.js'
const db = firebase.firestore()

export const get = async(req, res) => {
	const snapshot = await db.collection('blogposts').get()
	const posts = snapshot.docs.map(doc => doc.data())
    const contents = JSON.stringify(posts)
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(contents);
}
