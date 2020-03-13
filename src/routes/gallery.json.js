import firebase from './_firebaseconfig.js'
const db = firebase.firestore()

export const get = async(req, res) => {

    const snapshot = await db.collection("assets").orderBy("timeCreated", "desc").get()
    let contents = snapshot.docs.map(doc => doc.data())

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(contents));
}
