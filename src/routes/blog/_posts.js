// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: '2D Collisions',
		slug: '2d-collisions',
		html: `
			<div id="p2d"> </div>
		`
	},
	{
		title: 'Thi Programming Language',
		slug: 'thi-programming-langauge',
		html: `
			<div class=".faint">
				Github: 
				<b> 
					<a href="https://github.com/MarcusMathiassen/thi" target="__blank" rel="noopener">
						https://github.com/MarcusMathiassen/thi
					</a>
				</b>
			</div>
			<p>
			    This is a test paragraph about the Thi language.
			   <br/>
			    You may find

		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
