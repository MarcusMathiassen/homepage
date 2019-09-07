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
	style.id = 'svelte-1jn40vy-style';
	style.textContent = ".landing-page--hero.svelte-1jn40vy{width:50%;margin:20px auto;display:block;background-image:var(--avatar);background-size:cover;width:300px;height:300px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcblxuICAgIGxldCByZXBvcyA9IFwiXCJcblxuICAgIGZldGNoKFwiLy5uZXRsaWZ5L2Z1bmN0aW9ucy9naXRodWJcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgcmVwb3MgPSBqc29uXG4gICAgfSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPi5sYW5kaW5nLXBhZ2UtLWhlcm8ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWF2YXRhcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwibGFuZGluZy1wYWdlLS1oZXJvXCI+PC9kaXY+PHAgY2xhc3M9XCJsYW5kaW5nLXBhZ2UtLXRpdGxlXCI+TWFyY3VzIE1hdGhpYXNzZW48L3A+PHAgY2xhc3M9XCJsYW5kaW5nLXBhZ2UtLXN1YnRpdGxlXCI+SSBkbyBjb21waWxlcnMgYW5kIGxhbmd1YWdlcy5cbkludGVyZXN0ZWQgaW4gc3lzdGVtcyBkZXNpZ24gYW5kIFVYLjwvcD5cblxuPGgxPlJlcG9zPC9oMT5cbjx1bD5cblx0eyNlYWNoIHJlcG9zIGFzIHJlcG99XG4gICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwie3JlcG8ubm9kZS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj4gPGgzPiBuYW1lIHtyZXBvLm5vZGUubmFtZX0gPC9oMz4gPC9hPlxuICAgICAgICB7I2lmIHJlcG8ubm9kZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDxoND4gZGVzY3JpcHRpb246IHtyZXBvLm5vZGUuZGVzY3JpcHRpb259IDwvaDQ+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIHsjaWYgcmVwby5ub2RlLnByaW1hcnlMYW5ndWFnZX1cbiAgICAgICAgICAgIHsjaWYgcmVwby5ub2RlLnByaW1hcnlMYW5ndWFnZS5uYW1lID09PSAnamF2YXNjcmlwdCd9XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtanNcIj48L2k+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPHA+IHtyZXBvLm5vZGUucHJpbWFyeUxhbmd1YWdlLm5hbWV9PC9wPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgey9pZn1cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPntyZXBvLm5vZGUuc3RhcmdhemVycy50b3RhbENvdW50fTwvaT5cbiAgICA8L2xpPlxuXHR7L2VhY2h9XG48L3VsPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVltQixtQkFBbUIsZUFBQyxDQUFDLEFBQ3RDLEtBQUssQ0FBRSxHQUFHLENBQ1YsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQ2pCLE9BQU8sQ0FBRSxLQUFLLENBQ2QsZ0JBQWdCLENBQUUsSUFBSSxRQUFRLENBQUMsQ0FDL0IsZUFBZSxDQUFFLEtBQUssQ0FDdEIsS0FBSyxDQUFFLEtBQUssQ0FDWixNQUFNLENBQUUsS0FBSyxBQUFFLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.repo = list[i];
	return child_ctx;
}

// (36:8) {#if repo.node.description}
function create_if_block_2(ctx) {
	var h4, t0, t1_value = ctx.repo.node.description + "", t1;

	return {
		c: function create() {
			h4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h4");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("description: ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			this.h()
		},

		l: function claim(nodes) {
			h4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H4", {}, false);
			var h4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h4);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h4_nodes, "description: ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h4_nodes, t1_value);
			h4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h4, file, 36, 12, 921);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h4, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h4, t1);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t1_value !== (t1_value = ctx.repo.node.description + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, t1_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h4);
			}
		}
	};
}

// (39:8) {#if repo.node.primaryLanguage}
function create_if_block(ctx) {
	var if_block_anchor;

	function select_block_type(changed, ctx) {
		if (ctx.repo.node.primaryLanguage.name === 'javascript') return create_if_block_1;
		return create_else_block;
	}

	var current_block_type = select_block_type(null, ctx);
	var if_block = current_block_type(ctx);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if (current_block_type === (current_block_type = select_block_type(changed, ctx)) && if_block) {
				if_block.p(changed, ctx);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);
				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},

		d: function destroy(detaching) {
			if_block.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			}
		}
	};
}

// (42:12) {:else}
function create_else_block(ctx) {
	var p, t_value = ctx.repo.node.primaryLanguage.name + "", t;

	return {
		c: function create() {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {}, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 42, 16, 1167);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t_value !== (t_value = ctx.repo.node.primaryLanguage.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
			}
		}
	};
}

// (40:12) {#if repo.node.primaryLanguage.name === 'javascript'}
function create_if_block_1(ctx) {
	var i;

	return {
		c: function create() {
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			this.h()
		},

		l: function claim(nodes) {
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "I", { class: true }, false);
			var i_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i);

			i_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(i, "class", "fab fa-js");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 40, 16, 1105);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, i, anchor);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(i);
			}
		}
	};
}

// (33:1) {#each repos as repo}
function create_each_block(ctx) {
	var li, a, h3, t0, t1_value = ctx.repo.node.name + "", t1, a_href_value, t2, t3, t4, i, t5_value = ctx.repo.node.stargazers.totalCount + "", t5, t6;

	var if_block0 = (ctx.repo.node.description) && create_if_block_2(ctx);

	var if_block1 = (ctx.repo.node.primaryLanguage) && create_if_block(ctx);

	return {
		c: function create() {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("name ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block0) if_block0.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t5_value);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "LI", {}, false);
			var li_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "A", { href: true, target: true, rel: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a_nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, "name ");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, t1_value);
			h3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li_nodes, "\n        ");
			if (if_block0) if_block0.l(li_nodes);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li_nodes, "\n        ");
			if (if_block1) if_block1.l(li_nodes);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li_nodes, "\n        ");

			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "I", { class: true }, false);
			var i_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(i_nodes, t5_value);
			i_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li_nodes, "\n    ");
			li_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 34, 66, 835);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value = ctx.repo.node.url);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 34, 8, 777);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(i, "class", "fas fa-star");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 45, 8, 1248);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 33, 4, 764);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, li, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, h3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t2);
			if (if_block0) if_block0.m(li, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t3);
			if (if_block1) if_block1.m(li, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(i, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t6);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t1_value !== (t1_value = ctx.repo.node.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, t1_value);
			}

			if ((changed.repos) && a_href_value !== (a_href_value = ctx.repo.node.url)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value);
			}

			if (ctx.repo.node.description) {
				if (if_block0) {
					if_block0.p(changed, ctx);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(li, t3);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (ctx.repo.node.primaryLanguage) {
				if (if_block1) {
					if_block1.p(changed, ctx);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(li, t4);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if ((changed.repos) && t5_value !== (t5_value = ctx.repo.node.stargazers.totalCount + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t5, t5_value);
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

			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "UL", {}, false);
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "landing-page--hero svelte-1jn40vy");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 27, 0, 521);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 27, 38, 559);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 27, 90, 611);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 30, 0, 717);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 31, 0, 732);
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
		if (!document.getElementById("svelte-1jn40vy-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQW9DK0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQUFyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUduQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUczQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUE5QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQVIwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksdURBVzNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7O3NCQVZsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7O3NCQUdyQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEZBSnBCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBQThDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OzsrREFBekUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1dBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7OztXQUdyQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7dURBT04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFidkQsS0FBSzs7OztnQ0FBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBQUE7Ozs7Ozs7cUJBQUssS0FBSzs7bUNBQVY7Ozs7Ozs7Ozs7OzsyQkFBQTs7O2dCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBN0JDLElBQUksS0FBSyxHQUFHLEVBQUU7O0lBRWQsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJO1FBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDOzhCQUNqQixLQUFLLEdBQUcsS0FBSTtLQUNmLENBQUMiLCJmaWxlIjoiYjhlMGFlNjVlODljMGU3ODEyODEvaW5kZXguaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBQMkQgZnJvbSAnLi4vY29tcG9uZW50cy9wMmQuc3ZlbHRlJ1xuXG4gICAgbGV0IHJlcG9zID0gXCJcIlxuXG4gICAgZmV0Y2goXCIvLm5ldGxpZnkvZnVuY3Rpb25zL2dpdGh1YlwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICByZXBvcyA9IGpzb25cbiAgICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+LmxhbmRpbmctcGFnZS0taGVybyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYXZhdGFyKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4OyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJsYW5kaW5nLXBhZ2UtLWhlcm9cIj48L2Rpdj48cCBjbGFzcz1cImxhbmRpbmctcGFnZS0tdGl0bGVcIj5NYXJjdXMgTWF0aGlhc3NlbjwvcD48cCBjbGFzcz1cImxhbmRpbmctcGFnZS0tc3VidGl0bGVcIj5JIGRvIGNvbXBpbGVycyBhbmQgbGFuZ3VhZ2VzLlxuSW50ZXJlc3RlZCBpbiBzeXN0ZW1zIGRlc2lnbiBhbmQgVVguPC9wPlxuXG48aDE+UmVwb3M8L2gxPlxuPHVsPlxuXHR7I2VhY2ggcmVwb3MgYXMgcmVwb31cbiAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCJ7cmVwby5ub2RlLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPiA8aDM+IG5hbWUge3JlcG8ubm9kZS5uYW1lfSA8L2gzPiA8L2E+XG4gICAgICAgIHsjaWYgcmVwby5ub2RlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPGg0PiBkZXNjcmlwdGlvbjoge3JlcG8ubm9kZS5kZXNjcmlwdGlvbn0gPC9oND5cbiAgICAgICAgey9pZn1cbiAgICAgICAgeyNpZiByZXBvLm5vZGUucHJpbWFyeUxhbmd1YWdlfVxuICAgICAgICAgICAgeyNpZiByZXBvLm5vZGUucHJpbWFyeUxhbmd1YWdlLm5hbWUgPT09ICdqYXZhc2NyaXB0J31cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhYiBmYS1qc1wiPjwvaT5cbiAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8cD4ge3JlcG8ubm9kZS5wcmltYXJ5TGFuZ3VhZ2UubmFtZX08L3A+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICB7L2lmfVxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+e3JlcG8ubm9kZS5zdGFyZ2F6ZXJzLnRvdGFsQ291bnR9PC9pPlxuICAgIDwvbGk+XG5cdHsvZWFjaH1cbjwvdWw+XG4iXSwic291cmNlUm9vdCI6IiJ9