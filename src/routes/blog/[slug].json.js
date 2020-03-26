import firebase from '../_firebaseconfig.js'
const db = firebase.firestore()
import marked from 'marked'

export const get = async(req, res, next) => {

	const { slug } = req.params;

	const snapshot = await db.collection("blogposts").where("slug", "==", slug).get()
	const post = snapshot.docs.map(doc => doc.data()).pop()

	// Download the markdown
	let markdown = await fetch(post.url)
	markdown = await markdown.text()

	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({
		title: post.title,
		html: marked(markdown)
	}))
}
