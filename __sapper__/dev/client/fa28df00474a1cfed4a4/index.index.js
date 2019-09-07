(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_p2d_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/p2d.svelte */ "./src/components/p2d.svelte");
/* src/routes/index.svelte generated by Svelte v3.9.2 */



const file = "src/routes/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1wudh6s-style';
	style.textContent = ".landing-page--hero.svelte-1wudh6s{width:50%;margin:20px auto;display:block;background-image:var(--avatar);background-size:cover;width:300px;height:300px}li.svelte-1wudh6s,ul.svelte-1wudh6s{list-style-type:none}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcblxuICAgIGxldCByZXBvcyA9IFwiXCJcblxuICAgIGZldGNoKFwiLy5uZXRsaWZ5L2Z1bmN0aW9ucy9naXRodWJcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgcmVwb3MgPSBqc29uXG4gICAgfSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPi5sYW5kaW5nLXBhZ2UtLWhlcm8ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWF2YXRhcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG5saSwgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImxhbmRpbmctcGFnZS0taGVyb1wiPjwvZGl2PjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS1zdWJ0aXRsZVwiPkkgZG8gY29tcGlsZXJzIGFuZCBsYW5ndWFnZXMuXG5JbnRlcmVzdGVkIGluIHN5c3RlbXMgZGVzaWduIGFuZCBVWC48L3A+XG5cbjxoMT5SZXBvczwvaDE+XG48dWw+XG5cdHsjZWFjaCByZXBvcyBhcyByZXBvfVxuICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIntyZXBvLm5vZGUudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+IDxoMz4ge3JlcG8ubm9kZS5uYW1lfTpcbiAgICAgICAgeyNpZiByZXBvLm5vZGUucHJpbWFyeUxhbmd1YWdlfVxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kOiB7cmVwby5ub2RlLnByaW1hcnlMYW5ndWFnZS5jb2xvcn1cIj4ge3JlcG8ubm9kZS5wcmltYXJ5TGFuZ3VhZ2UubmFtZX08L3NwYW4+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj57cmVwby5ub2RlLnN0YXJnYXplcnMudG90YWxDb3VudH08L2k+XG4gICAgICAgIHsjaWYgcmVwby5ub2RlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPHNwYW4+OiB7cmVwby5ub2RlLmRlc2NyaXB0aW9ufSA8L3NwYW4+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDwvYT5cbiAgICA8L2xpPlxuXHR7L2VhY2h9XG48L3VsPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVltQixtQkFBbUIsZUFBQyxDQUFDLEFBQ3RDLEtBQUssQ0FBRSxHQUFHLENBQ1YsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQ2pCLE9BQU8sQ0FBRSxLQUFLLENBQ2QsZ0JBQWdCLENBQUUsSUFBSSxRQUFRLENBQUMsQ0FDL0IsZUFBZSxDQUFFLEtBQUssQ0FDdEIsS0FBSyxDQUFFLEtBQUssQ0FDWixNQUFNLENBQUUsS0FBSyxBQUFFLENBQUMsQUFFbEIsaUJBQUUsQ0FBRSxFQUFFLGVBQUMsQ0FBQyxBQUNOLGVBQWUsQ0FBRSxJQUFJLEFBQUUsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.repo = list[i];
	return child_ctx;
}

// (39:8) {#if repo.node.primaryLanguage}
function create_if_block_1(ctx) {
	var span, t_value = ctx.repo.node.primaryLanguage.name + "", t;

	return {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { style: true }, false);
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, t_value);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "background", ctx.repo.node.primaryLanguage.color);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 39, 12, 947);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t_value !== (t_value = ctx.repo.node.primaryLanguage.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}

			if (changed.repos) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "background", ctx.repo.node.primaryLanguage.color);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			}
		}
	};
}

// (43:8) {#if repo.node.description}
function create_if_block(ctx) {
	var span, t0, t1_value = ctx.repo.node.description + "", t1;

	return {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(": ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			this.h()
		},

		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", {}, false);
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, ": ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, t1_value);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 43, 12, 1179);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t1);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t1_value !== (t1_value = ctx.repo.node.description + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, t1_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			}
		}
	};
}

// (36:1) {#each repos as repo}
function create_each_block(ctx) {
	var li, a, h3, t0_value = ctx.repo.node.name + "", t0, t1, t2, i, t3_value = ctx.repo.node.stargazers.totalCount + "", t3, t4, a_href_value, t5;

	var if_block0 = (ctx.repo.node.primaryLanguage) && create_if_block_1(ctx);

	var if_block1 = (ctx.repo.node.description) && create_if_block(ctx);

	return {
		c: function create() {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(":\n        ");
			if (if_block0) if_block0.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "LI", { class: true }, false);
			var li_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "A", { href: true, target: true, rel: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a_nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, ":\n        ");
			if (if_block0) if_block0.l(h3_nodes);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, "\n        ");

			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h3_nodes, "I", { class: true }, false);
			var i_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(i_nodes, t3_value);
			i_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, "\n        ");
			if (if_block1) if_block1.l(h3_nodes);
			h3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li_nodes, "\n    ");
			li_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(i, "class", "fas fa-star");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 41, 8, 1070);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 37, 66, 872);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value = ctx.repo.node.url);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 37, 8, 814);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li, "class", "svelte-1wudh6s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 36, 4, 801);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, li, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, h3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t1);
			if (if_block0) if_block0.m(h3, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(i, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t4);
			if (if_block1) if_block1.m(h3, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t5);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t0_value !== (t0_value = ctx.repo.node.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			}

			if (ctx.repo.node.primaryLanguage) {
				if (if_block0) {
					if_block0.p(changed, ctx);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(h3, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if ((changed.repos) && t3_value !== (t3_value = ctx.repo.node.stargazers.totalCount + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, t3_value);
			}

			if (ctx.repo.node.description) {
				if (if_block1) {
					if_block1.p(changed, ctx);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(h3, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if ((changed.repos) && a_href_value !== (a_href_value = ctx.repo.node.url)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(li);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

function create_fragment(ctx) {
	var t0, div, p0, t1, p1, t2, t3, h1, t4, t5, ul;

	var each_value = ctx.repos;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Marcus Mathiassen");
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("I do compilers and languages.\nInterested in systems design and UX.");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Repos");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "Marcus Mathiassen");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);

			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "I do compilers and languages.\nInterested in systems design and UX.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {}, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Repos");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "UL", { class: true }, false);
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "landing-page--hero svelte-1wudh6s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 30, 0, 558);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 30, 38, 596);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 30, 90, 648);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 33, 0, 754);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "svelte-1wudh6s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 34, 0, 769);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, ul, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.repos) {
				each_value = ctx.repos;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t5);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(ul);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let repos = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
        console.log(json)
        $$invalidate('repos', repos = json)
    })

	return { repos };
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1wudh6s-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQXVDMEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RkFBbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSzs7Ozs7Ozs7OztxREFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7Ozs4RkFBbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OEJBSWhELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFBckIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7K0JBTjhCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FJdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTs7c0JBSGxELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTs7c0JBSXpCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4RkFMaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBQXlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztXQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7dURBR04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTs7OztXQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7K0RBTGhCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFGdkIsS0FBSzs7OztnQ0FBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7O3FCQUFLLEtBQUs7O21DQUFWOzs7Ozs7Ozs7Ozs7MkJBQUE7OztnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWhDQyxJQUFJLEtBQUssR0FBRyxFQUFFOztJQUVkLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSTtRQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzs4QkFDakIsS0FBSyxHQUFHLEtBQUk7S0FDZixDQUFDIiwiZmlsZSI6ImZhMjhkZjAwNDc0YTFjZmVkNGE0L2luZGV4LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcblxuICAgIGxldCByZXBvcyA9IFwiXCJcblxuICAgIGZldGNoKFwiLy5uZXRsaWZ5L2Z1bmN0aW9ucy9naXRodWJcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgcmVwb3MgPSBqc29uXG4gICAgfSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPi5sYW5kaW5nLXBhZ2UtLWhlcm8ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWF2YXRhcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG5saSwgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImxhbmRpbmctcGFnZS0taGVyb1wiPjwvZGl2PjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS1zdWJ0aXRsZVwiPkkgZG8gY29tcGlsZXJzIGFuZCBsYW5ndWFnZXMuXG5JbnRlcmVzdGVkIGluIHN5c3RlbXMgZGVzaWduIGFuZCBVWC48L3A+XG5cbjxoMT5SZXBvczwvaDE+XG48dWw+XG5cdHsjZWFjaCByZXBvcyBhcyByZXBvfVxuICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIntyZXBvLm5vZGUudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+IDxoMz4ge3JlcG8ubm9kZS5uYW1lfTpcbiAgICAgICAgeyNpZiByZXBvLm5vZGUucHJpbWFyeUxhbmd1YWdlfVxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kOiB7cmVwby5ub2RlLnByaW1hcnlMYW5ndWFnZS5jb2xvcn1cIj4ge3JlcG8ubm9kZS5wcmltYXJ5TGFuZ3VhZ2UubmFtZX08L3NwYW4+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj57cmVwby5ub2RlLnN0YXJnYXplcnMudG90YWxDb3VudH08L2k+XG4gICAgICAgIHsjaWYgcmVwby5ub2RlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPHNwYW4+OiB7cmVwby5ub2RlLmRlc2NyaXB0aW9ufSA8L3NwYW4+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDwvYT5cbiAgICA8L2xpPlxuXHR7L2VhY2h9XG48L3VsPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==