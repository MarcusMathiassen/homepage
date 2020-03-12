import * as sapper from '@sapper/app'

// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/storage'

// // Initialize Firebase
// firebase.initializeApp({
//     apiKey: 'AIzaSyC1F5CtvWS7rNpR3_icLUmsR6WcInU1bcE',
//     authDomain: 'homepage-109b6.firebaseapp.com',
//     databaseURL: 'https://homepage-109b6.firebaseio.com',
//     projectId: 'homepage-109b6',
//     storageBucket: 'homepage-109b6.appspot.com',
//     messagingSenderId: '543017541768',
//     appId: '1:543017541768:web:5941e25cab34252ea97f3d',
//     measurementId: 'G-ZGWFFK2LXK',
// })

// ;(async () => {
// 	var storage = firebase.storage()
// 	var storageRef = storage.ref('assets')
	
// 	const res = await storageRef.listAll()
	
// 	let assetsUrl = res.items.map(ref => ref.getDownloadURL())
// 	let assetsMetaData = res.items.map(ref => ref.getMetadata())
	
// 	assetsUrl = await Promise.all(assetsUrl)
// 	assetsMetaData = await Promise.all(assetsMetaData)

// 	let assets = Array(assetsUrl.length)
// 	for (let i = 0; i < assetsUrl.length; ++i)
// 		assets[i] = {
// 			url: assetsUrl[i],
// 			name: assetsMetaData[i].name,
// 			contentType: assetsMetaData[i].contentType,
// 			timeCreated: assetsMetaData[i].timeCreated
// 		}

// 	// Update firestore
// 	const db = firebase.firestore()
// 	const dbAssets = db.collection("assets")
// 	assets.forEach(a => {
// 		dbAssets.doc(a.name).set(a).then(() => {
// 			console.log("Document successfully written!:", a.name)
// 		})
// 	})

// 	console.log(assets)
// })()

// set the theme to whatever the system theme is
document.documentElement.setAttribute(
	'theme',
	window.matchMedia('(prefers-color-scheme: light)').matches
		? 'light'
		: 'dark'
)

// listen to changes to the system theme
window
	.matchMedia('(prefers-color-scheme: light)')
	.addListener(() =>
		document.documentElement.setAttribute(
			'theme',
			window.matchMedia('(prefers-color-scheme: light)').matches
				? 'light'
				: 'dark'
		)
	)

sapper.start({
	target: document.querySelector('#sapper'),
})
