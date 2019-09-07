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
	style.id = 'svelte-19h9682-style';
	style.textContent = ".landing-page--hero.svelte-19h9682{width:50%;margin:20px auto;display:block;background-image:var(--avatar);background-size:cover;width:300px;height:300px}li.svelte-19h9682,ul.svelte-19h9682{margin:10px;list-style-type:none}.repo--name.svelte-19h9682{font-size:1em}.repo--badges.svelte-19h9682{margin:5px;margin-right:2px;padding:5px;border-radius:5px;box-shadow:0 0 1px var(--text);font-size:0.75em}.repo--badges.svelte-19h9682 span.svelte-19h9682{margin:2px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcblxuICAgIGxldCByZXBvcyA9IFwiXCJcblxuICAgIGZldGNoKFwiLy5uZXRsaWZ5L2Z1bmN0aW9ucy9naXRodWJcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgcmVwb3MgPSBqc29uXG4gICAgfSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPi5sYW5kaW5nLXBhZ2UtLWhlcm8ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWF2YXRhcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG5saSwgdWwge1xuICBtYXJnaW46IDEwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuXG4ucmVwby0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtOyB9XG5cbi5yZXBvLS1iYWRnZXMge1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDAuNzVlbTsgfVxuICAucmVwby0tYmFkZ2VzIHNwYW4ge1xuICAgIG1hcmdpbjogMnB4OyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LnN2ZWx0ZS5jc3MubWFwICovPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJsYW5kaW5nLXBhZ2UtLWhlcm9cIj48L2Rpdj48cCBjbGFzcz1cImxhbmRpbmctcGFnZS0tdGl0bGVcIj5NYXJjdXMgTWF0aGlhc3NlbjwvcD48cCBjbGFzcz1cImxhbmRpbmctcGFnZS0tc3VidGl0bGVcIj5JIGRvIGNvbXBpbGVycyBhbmQgbGFuZ3VhZ2VzLlxuSW50ZXJlc3RlZCBpbiBzeXN0ZW1zIGRlc2lnbiBhbmQgVVguPC9wPlxuPGJyPlxuPGgyPlJlcG9zaXRvcmllczwvaDI+XG48dWw+XG5cdHsjZWFjaCByZXBvcyBhcyByZXBvfVxuICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIntyZXBvLm5vZGUudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVwby0tbmFtZVwiPntyZXBvLm5vZGUubmFtZX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVwby0tYmFkZ2VzXCI+XG4gICAgICAgICAgICAgICAgeyNpZiByZXBvLm5vZGUucHJpbWFyeUxhbmd1YWdlfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiB7cmVwby5ub2RlLnByaW1hcnlMYW5ndWFnZS5jb2xvcn1cIj4ge3JlcG8ubm9kZS5wcmltYXJ5TGFuZ3VhZ2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIHJlcG8ubm9kZS5zdGFyZ2F6ZXJzLnRvdGFsQ291bnR9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPntyZXBvLm5vZGUuc3RhcmdhemVycy50b3RhbENvdW50fTwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgeyNpZiByZXBvLm5vZGUuZm9ya0NvdW50fVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNvZGUtYnJhbmNoXCI+e3JlcG8ubm9kZS5mb3JrQ291bnR9PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgPC9saT5cblx0ey9lYWNofVxuPC91bD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXbUIsbUJBQW1CLGVBQUMsQ0FBQyxBQUN0QyxLQUFLLENBQUUsR0FBRyxDQUNWLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUNqQixPQUFPLENBQUUsS0FBSyxDQUNkLGdCQUFnQixDQUFFLElBQUksUUFBUSxDQUFDLENBQy9CLGVBQWUsQ0FBRSxLQUFLLENBQ3RCLEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEtBQUssQUFBRSxDQUFDLEFBRWxCLGlCQUFFLENBQUUsRUFBRSxlQUFDLENBQUMsQUFDTixNQUFNLENBQUUsSUFBSSxDQUNaLGVBQWUsQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUUxQixXQUFXLGVBQUMsQ0FBQyxBQUNYLFNBQVMsQ0FBRSxHQUFHLEFBQUUsQ0FBQyxBQUVuQixhQUFhLGVBQUMsQ0FBQyxBQUNiLE1BQU0sQ0FBRSxHQUFHLENBQ1gsWUFBWSxDQUFFLEdBQUcsQ0FDakIsT0FBTyxDQUFFLEdBQUcsQ0FDWixhQUFhLENBQUUsR0FBRyxDQUNsQixVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FDL0IsU0FBUyxDQUFFLE1BQU0sQUFBRSxDQUFDLEFBQ3BCLDRCQUFhLENBQUMsSUFBSSxlQUFDLENBQUMsQUFDbEIsTUFBTSxDQUFFLEdBQUcsQUFBRSxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.repo = list[i];
	return child_ctx;
}

// (54:16) {#if repo.node.primaryLanguage}
function create_if_block_2(ctx) {
	var span, t_value = ctx.repo.node.primaryLanguage.name + "", t;

	return {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { style: true, class: true }, false);
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, t_value);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "color", ctx.repo.node.primaryLanguage.color);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 54, 20, 1257);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "color", ctx.repo.node.primaryLanguage.color);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			}
		}
	};
}

// (57:16) {#if repo.node.stargazers.totalCount}
function create_if_block_1(ctx) {
	var span, i, t_value = ctx.repo.node.stargazers.totalCount + "", t;

	return {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { class: true }, false);
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);

			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(span_nodes, "I", { class: true }, false);
			var i_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(i_nodes, t_value);
			i_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(i, "class", "fas fa-star");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 58, 24, 1480);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 57, 20, 1449);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(i, t);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t_value !== (t_value = ctx.repo.node.stargazers.totalCount + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			}
		}
	};
}

// (62:16) {#if repo.node.forkCount}
function create_if_block(ctx) {
	var span, i, t_value = ctx.repo.node.forkCount + "", t;

	return {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { class: true }, false);
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);

			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(span_nodes, "I", { class: true }, false);
			var i_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(i_nodes, t_value);
			i_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(i, "class", "fas fa-code-branch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 63, 24, 1684);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 62, 20, 1653);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(i, t);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t_value !== (t_value = ctx.repo.node.forkCount + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			}
		}
	};
}

// (49:1) {#each repos as repo}
function create_each_block(ctx) {
	var li, a, span1, t0_value = ctx.repo.node.name + "", t0, t1, span0, t2, t3, a_href_value, t4;

	var if_block0 = (ctx.repo.node.primaryLanguage) && create_if_block_2(ctx);

	var if_block1 = (ctx.repo.node.stargazers.totalCount) && create_if_block_1(ctx);

	var if_block2 = (ctx.repo.node.forkCount) && create_if_block(ctx);

	return {
		c: function create() {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			if (if_block0) if_block0.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block2) if_block2.c();
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "LI", { class: true }, false);
			var li_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "A", { href: true, target: true, rel: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a_nodes, "SPAN", { class: true }, false);
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, "\n            ");

			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(span1_nodes, "SPAN", { class: true }, false);
			var span0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0);

			if (if_block0) if_block0.l(span0_nodes);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span0_nodes, "\n                ");
			if (if_block1) if_block1.l(span0_nodes);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span0_nodes, "\n                ");
			if (if_block2) if_block2.l(span0_nodes);
			span0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(li_nodes, "\n    ");
			li_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "class", "repo--badges svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 52, 12, 1161);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "repo--name svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 51, 8, 1107);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value = ctx.repo.node.url);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 50, 8, 1041);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li, "class", "svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 49, 4, 1028);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, li, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span1, span0);
			if (if_block0) if_block0.m(span0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span0, t2);
			if (if_block1) if_block1.m(span0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span0, t3);
			if (if_block2) if_block2.m(span0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(li, t4);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t0_value !== (t0_value = ctx.repo.node.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			}

			if (ctx.repo.node.primaryLanguage) {
				if (if_block0) {
					if_block0.p(changed, ctx);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(span0, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (ctx.repo.node.stargazers.totalCount) {
				if (if_block1) {
					if_block1.p(changed, ctx);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(span0, t3);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (ctx.repo.node.forkCount) {
				if (if_block2) {
					if_block2.p(changed, ctx);
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(span0, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
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
			if (if_block2) if_block2.d();
		}
	};
}

function create_fragment(ctx) {
	var t0, div, p0, t1, p1, t2, t3, br, t4, h2, t5, t6, ul;

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
			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("br");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Repositories");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
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
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BR", {}, false);
			var br_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(br);

			br_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H2", {}, false);
			var h2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h2_nodes, "Repositories");
			h2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "landing-page--hero svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 43, 0, 774);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 43, 38, 812);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 43, 90, 864);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(br, file, 45, 0, 969);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 46, 0, 974);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "svelte-19h9682");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 47, 0, 996);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, br, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t6, anchor);
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
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(br);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t6);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(ul);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let repos = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
        $$invalidate('repos', repos = json)
    })

	return { repos };
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-19h9682-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBc0Q2RSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUFsRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLOzs7Ozs7Ozs7OztxREFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7Ozt5RkFBbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7NEJBSXhCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBQS9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs0QkFLeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUFuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztrQ0FaeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOztzQkFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlOztzQkFHekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTs7c0JBSy9CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEZBWHRCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztXQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7V0FHekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7OztXQUsvQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7K0RBWHRCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBRnZCLEtBQUs7Ozs7Z0NBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7O3FCQUFLLEtBQUs7O21DQUFWOzs7Ozs7Ozs7Ozs7MkJBQUE7OztnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBN0NDLElBQUksS0FBSyxHQUFHLEVBQUU7O0lBRWQsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJOzhCQUNyRSxLQUFLLEdBQUcsS0FBSTtLQUNmLENBQUMiLCJmaWxlIjoiNDhmYzQ5MzlkMmJhMWVhODIwM2MvaW5kZXguaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBQMkQgZnJvbSAnLi4vY29tcG9uZW50cy9wMmQuc3ZlbHRlJ1xuXG4gICAgbGV0IHJlcG9zID0gXCJcIlxuXG4gICAgZmV0Y2goXCIvLm5ldGxpZnkvZnVuY3Rpb25zL2dpdGh1YlwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICByZXBvcyA9IGpzb25cbiAgICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+LmxhbmRpbmctcGFnZS0taGVybyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYXZhdGFyKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4OyB9XG5cbmxpLCB1bCB7XG4gIG1hcmdpbjogMTBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbi5yZXBvLS1uYW1lIHtcbiAgZm9udC1zaXplOiAxZW07IH1cblxuLnJlcG8tLWJhZGdlcyB7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XG4gIC5yZXBvLS1iYWRnZXMgc3BhbiB7XG4gICAgbWFyZ2luOiAycHg7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImxhbmRpbmctcGFnZS0taGVyb1wiPjwvZGl2PjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS1zdWJ0aXRsZVwiPkkgZG8gY29tcGlsZXJzIGFuZCBsYW5ndWFnZXMuXG5JbnRlcmVzdGVkIGluIHN5c3RlbXMgZGVzaWduIGFuZCBVWC48L3A+XG48YnI+XG48aDI+UmVwb3NpdG9yaWVzPC9oMj5cbjx1bD5cblx0eyNlYWNoIHJlcG9zIGFzIHJlcG99XG4gICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwie3JlcG8ubm9kZS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXBvLS1uYW1lXCI+e3JlcG8ubm9kZS5uYW1lfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXBvLS1iYWRnZXNcIj5cbiAgICAgICAgICAgICAgICB7I2lmIHJlcG8ubm9kZS5wcmltYXJ5TGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHtyZXBvLm5vZGUucHJpbWFyeUxhbmd1YWdlLmNvbG9yfVwiPiB7cmVwby5ub2RlLnByaW1hcnlMYW5ndWFnZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIHsjaWYgcmVwby5ub2RlLnN0YXJnYXplcnMudG90YWxDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+e3JlcG8ubm9kZS5zdGFyZ2F6ZXJzLnRvdGFsQ291bnR9PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIHJlcG8ubm9kZS5mb3JrQ291bnR9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY29kZS1icmFuY2hcIj57cmVwby5ub2RlLmZvcmtDb3VudH08L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICA8L2xpPlxuXHR7L2VhY2h9XG48L3VsPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==