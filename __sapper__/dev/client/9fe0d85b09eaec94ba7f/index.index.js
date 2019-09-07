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
	style.id = 'svelte-1gqh8n2-style';
	style.textContent = ".landing-page--hero.svelte-1gqh8n2{width:50%;margin:20px auto;display:block;background-image:var(--avatar);background-size:cover;width:300px;height:300px}li.svelte-1gqh8n2,ul.svelte-1gqh8n2{margin:5px;margin-top:10px;list-style-type:none}.repo--name.svelte-1gqh8n2{font-size:1em;padding:0;margin:0}.repo--badges.svelte-1gqh8n2{margin:5px;padding:5px;border-radius:5px;border:1px solid var(--text);font-size:0.75em}.repo--badges.svelte-1gqh8n2 span.svelte-1gqh8n2{margin:2px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gJy4uL2NvbXBvbmVudHMvcDJkLnN2ZWx0ZSdcbiAgICBsZXQgcmVwb3NcblxuICAgIC8vIGZldGNoKFwiLy5uZXRsaWZ5L2Z1bmN0aW9ucy9naXRodWJcIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAvLyAgICAgcmVwb3MgPSBqc29uXG4gICAgLy8gfSlcbiAgICBjb25zdCBkYXRhR2VuZXJhdG9yID0gKGNvdW50LCB0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBuZXcgQXJyYXkoY291bnQpXG4gICAgICAgIGNvbnN0IHdvcmRzID0gW1wiVGhpXCIsIFwicmFuZG9tLXdvcmRzXCIsIFwibWljaGVhbFwiLCBcIlN0YWNrXCIsIFwiTGlzdFwiLCBcIlZlY3RvclwiXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wLCB0eXBlb2YgcHJvcClcbiAgICAgICAgICAgICAgICBhcnJheVtpXVtwcm9wXSA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0eXBlb2YgcHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzogcmV0dXJuIHdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCldXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcInVuaGFuZGxlZCBjYXNlIGZvclwiLCB0eXBlb2YgcHJvcClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhR2VuZXJhdG9yKDEwLCB7XG4gICAgICAgIG5hbWU6IFwiaG9tZXBhZ2VcIixcbiAgICAgICAgdXJsOiBcInRlc3QuaHRtbFwiLFxuICAgICAgICBwcmltYXJ5TGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2YwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJnYXplcnM6IHtcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZm9ya0NvdW50OiAwXG4gICAgfSkpXG5cbiAgICByZXBvcyA9IFt7XG4gICAgICAgIG5hbWU6IFwiaG9tZXBhZ2VcIixcbiAgICAgICAgdXJsOiBcInRlc3QuaHRtbFwiLFxuICAgICAgICBwcmltYXJ5TGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2YwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJnYXplcnM6IHtcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZm9ya0NvdW50OiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwidGhpXCIsXG4gICAgICAgIHVybDogXCJ0ZXN0Lmh0bWxcIixcbiAgICAgICAgcHJpbWFyeUxhbmd1YWdlOiB7XG4gICAgICAgICAgICBuYW1lOiBcIlN3aWZ0XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZjBmXCJcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcmdhemVyczoge1xuICAgICAgICAgICAgdG90YWxDb3VudDogMlxuICAgICAgICB9LFxuICAgICAgICBmb3JrQ291bnQ6IDEwXG4gICAgfV1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiPi5sYW5kaW5nLXBhZ2UtLWhlcm8ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWF2YXRhcik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG5saSwgdWwge1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbi5yZXBvLS1uYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgfVxuXG4ucmVwby0tYmFkZ2VzIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cbiAgLnJlcG8tLWJhZGdlcyBzcGFuIHtcbiAgICBtYXJnaW46IDJweDsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5zdmVsdGUuY3NzLm1hcCAqLzwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwibGFuZGluZy1wYWdlLS1oZXJvXCI+PC9kaXY+PHAgY2xhc3M9XCJsYW5kaW5nLXBhZ2UtLXRpdGxlXCI+TWFyY3VzIE1hdGhpYXNzZW48L3A+PHAgY2xhc3M9XCJsYW5kaW5nLXBhZ2UtLXN1YnRpdGxlXCI+SSBkbyBjb21waWxlcnMgYW5kIGxhbmd1YWdlcy5cbkludGVyZXN0ZWQgaW4gc3lzdGVtcyBkZXNpZ24gYW5kIFVYLjwvcD5cbjxicj5cbjxoMj5SZXBvc2l0b3JpZXM8L2gyPlxuPHVsPlxuXHR7I2VhY2ggcmVwb3MgYXMgcmVwb31cbiAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCJ7cmVwby51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXBvLS1uYW1lXCI+e3JlcG8ubmFtZX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVwby0tYmFkZ2VzXCI+XG4gICAgICAgICAgICAgICAgeyNpZiByZXBvLnByaW1hcnlMYW5ndWFnZX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjoge3JlcG8ucHJpbWFyeUxhbmd1YWdlLmNvbG9yfVwiPiB7cmVwby5wcmltYXJ5TGFuZ3VhZ2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIHJlcG8uc3RhcmdhemVycy50b3RhbENvdW50fVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj57cmVwby5zdGFyZ2F6ZXJzLnRvdGFsQ291bnR9PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIHJlcG8uZm9ya0NvdW50fVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNvZGUtYnJhbmNoXCI+IHtyZXBvLmZvcmtDb3VudH08L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICA8L2xpPlxuXHR7L2VhY2h9XG48L3VsPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFbUIsbUJBQW1CLGVBQUMsQ0FBQyxBQUN0QyxLQUFLLENBQUUsR0FBRyxDQUNWLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUNqQixPQUFPLENBQUUsS0FBSyxDQUNkLGdCQUFnQixDQUFFLElBQUksUUFBUSxDQUFDLENBQy9CLGVBQWUsQ0FBRSxLQUFLLENBQ3RCLEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEtBQUssQUFBRSxDQUFDLEFBRWxCLGlCQUFFLENBQUUsRUFBRSxlQUFDLENBQUMsQUFDTixNQUFNLENBQUUsR0FBRyxDQUNYLFVBQVUsQ0FBRSxJQUFJLENBQ2hCLGVBQWUsQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUUxQixXQUFXLGVBQUMsQ0FBQyxBQUNYLFNBQVMsQ0FBRSxHQUFHLENBQ2QsT0FBTyxDQUFFLENBQUMsQ0FDVixNQUFNLENBQUUsQ0FBQyxBQUFFLENBQUMsQUFFZCxhQUFhLGVBQUMsQ0FBQyxBQUNiLE1BQU0sQ0FBRSxHQUFHLENBQ1gsT0FBTyxDQUFFLEdBQUcsQ0FDWixhQUFhLENBQUUsR0FBRyxDQUNsQixNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUM3QixTQUFTLENBQUUsTUFBTSxBQUFFLENBQUMsQUFDcEIsNEJBQWEsQ0FBQyxJQUFJLGVBQUMsQ0FBQyxBQUNsQixNQUFNLENBQUUsR0FBRyxBQUFFLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.repo = list[i];
	return child_ctx;
}

// (110:16) {#if repo.primaryLanguage}
function create_if_block_2(ctx) {
	var span, t_value = ctx.repo.primaryLanguage.name + "", t;

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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "color", ctx.repo.primaryLanguage.color);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 110, 20, 2744);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, t);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t_value !== (t_value = ctx.repo.primaryLanguage.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}

			if (changed.repos) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(span, "color", ctx.repo.primaryLanguage.color);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			}
		}
	};
}

// (113:16) {#if repo.stargazers.totalCount}
function create_if_block_1(ctx) {
	var span, i, t_value = ctx.repo.stargazers.totalCount + "", t;

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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 114, 24, 2952);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 113, 20, 2921);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(i, t);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t_value !== (t_value = ctx.repo.stargazers.totalCount + "")) {
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

// (118:16) {#if repo.forkCount}
function create_if_block(ctx) {
	var span, i, t_value = ctx.repo.forkCount + "", t;

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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 119, 24, 3146);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 118, 20, 3115);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(i, t);
		},

		p: function update(changed, ctx) {
			if ((changed.repos) && t_value !== (t_value = ctx.repo.forkCount + "")) {
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

// (105:1) {#each repos as repo}
function create_each_block(ctx) {
	var li, a, span1, t0_value = ctx.repo.name + "", t0, t1, span0, t2, t3, a_href_value, t4;

	var if_block0 = (ctx.repo.primaryLanguage) && create_if_block_2(ctx);

	var if_block1 = (ctx.repo.stargazers.totalCount) && create_if_block_1(ctx);

	var if_block2 = (ctx.repo.forkCount) && create_if_block(ctx);

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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "class", "repo--badges svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 108, 12, 2653);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "repo--name svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 107, 8, 2604);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value = ctx.repo.url);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "rel", "noopener");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 106, 8, 2543);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li, "class", "svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 105, 4, 2530);
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
			if ((changed.repos) && t0_value !== (t0_value = ctx.repo.name + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			}

			if (ctx.repo.primaryLanguage) {
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

			if (ctx.repo.stargazers.totalCount) {
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

			if (ctx.repo.forkCount) {
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

			if ((changed.repos) && a_href_value !== (a_href_value = ctx.repo.url)) {
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "landing-page--hero svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 99, 0, 2276);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 99, 38, 2314);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 99, 90, 2366);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(br, file, 101, 0, 2471);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 102, 0, 2476);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ul, "class", "svelte-1gqh8n2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 103, 0, 2498);
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
	let repos

    // fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
    //     repos = json
    // })
    const dataGenerator = (count, template) => {
        let array = new Array(count)
        const words = ["Thi", "random-words", "micheal", "Stack", "List", "Vector"]
        for (let i = 0; i < count; i += 1) {
            for (let prop in template) {
                console.log(prop, typeof prop)
                array[i][prop] = (() => {
                    switch(typeof prop) {
                        case 'string': return words[Math.floor(Math.random() * words.length)]
                    case 'number': return Math.floor(Math.random());
                    default: console.log("unhandled case for", typeof prop)
                    }
                })()
            }
        }
        return array
    }

    console.log(dataGenerator(10, {
        name: "homepage",
        url: "test.html",
        primaryLanguage: {
            name: "JavaScript",
            color: "#f00"
        },
        stargazers: {
            totalCount: 1
        },
        forkCount: 0
    }))

    $$invalidate('repos', repos = [{
        name: "homepage",
        url: "test.html",
        primaryLanguage: {
            name: "JavaScript",
            color: "#f00"
        },
        stargazers: {
            totalCount: 1
        },
        forkCount: 0
    },
    {
        name: "thi",
        url: "test.html",
        primaryLanguage: {
            name: "Swift",
            color: "#f0f"
        },
        stargazers: {
            totalCount: 2
        },
        forkCount: 10
    }])

	return { repos };
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1gqh8n2-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQThHd0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUF4RCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7O3FEQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSTs7Ozs7eUZBQXhELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7NEJBSW5CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFBMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7NEJBS2xCLElBQUksQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUFkLElBQUksQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7a0NBWnBDLElBQUksQ0FBQyxJQUFJOztzQkFFdEIsSUFBSSxDQUFDLGVBQWU7O3NCQUdwQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7O3NCQUsxQixJQUFJLENBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEZBWGpCLElBQUksQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBQ1EsSUFBSSxDQUFDLElBQUk7Ozs7V0FFdEIsSUFBSSxDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7V0FHcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7O1dBSzFCLElBQUksQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7OytEQVhqQixJQUFJLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBRmxCLEtBQUs7Ozs7Z0NBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7O3FCQUFLLEtBQUs7O21DQUFWOzs7Ozs7Ozs7Ozs7MkJBQUE7OztnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdEdDLElBQUksS0FBSzs7Ozs7SUFLVCxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEtBQUs7UUFDdkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVCLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7UUFDM0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLElBQUksQ0FBQztnQkFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtvQkFDcEIsT0FBTyxPQUFPLElBQUk7d0JBQ2QsS0FBSyxRQUFRLEVBQUUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6RSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ2hELFNBQVMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLElBQUksQ0FBQztxQkFDdEQ7aUJBQ0osQ0FBQyxFQUFFO2FBQ1A7U0FDSjtRQUNELE9BQU8sS0FBSztLQUNmOztJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRTtRQUMxQixJQUFJLEVBQUUsVUFBVTtRQUNoQixHQUFHLEVBQUUsV0FBVztRQUNoQixlQUFlLEVBQUU7WUFDYixJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsTUFBTTtTQUNoQjtRQUNELFVBQVUsRUFBRTtZQUNSLFVBQVUsRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFLENBQUM7S0FDZixDQUFDLENBQUM7OzBCQUVILEtBQUssR0FBRyxDQUFDO1FBQ0wsSUFBSSxFQUFFLFVBQVU7UUFDaEIsR0FBRyxFQUFFLFdBQVc7UUFDaEIsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLE1BQU07U0FDaEI7UUFDRCxVQUFVLEVBQUU7WUFDUixVQUFVLEVBQUUsQ0FBQztTQUNoQjtRQUNELFNBQVMsRUFBRSxDQUFDO0tBQ2Y7SUFDRDtRQUNJLElBQUksRUFBRSxLQUFLO1FBQ1gsR0FBRyxFQUFFLFdBQVc7UUFDaEIsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsTUFBTTtTQUNoQjtRQUNELFVBQVUsRUFBRTtZQUNSLFVBQVUsRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQyIsImZpbGUiOiI5ZmUwZDg1YjA5ZWFlYzk0YmE3Zi9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IFAyRCBmcm9tICcuLi9jb21wb25lbnRzL3AyZC5zdmVsdGUnXG4gICAgbGV0IHJlcG9zXG5cbiAgICAvLyBmZXRjaChcIi8ubmV0bGlmeS9mdW5jdGlvbnMvZ2l0aHViXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgLy8gICAgIHJlcG9zID0ganNvblxuICAgIC8vIH0pXG4gICAgY29uc3QgZGF0YUdlbmVyYXRvciA9IChjb3VudCwgdGVtcGxhdGUpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gbmV3IEFycmF5KGNvdW50KVxuICAgICAgICBjb25zdCB3b3JkcyA9IFtcIlRoaVwiLCBcInJhbmRvbS13b3Jkc1wiLCBcIm1pY2hlYWxcIiwgXCJTdGFja1wiLCBcIkxpc3RcIiwgXCJWZWN0b3JcIl1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcCwgdHlwZW9mIHByb3ApXG4gICAgICAgICAgICAgICAgYXJyYXlbaV1bcHJvcF0gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godHlwZW9mIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6IHJldHVybiB3b3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3b3Jkcy5sZW5ndGgpXVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOiByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJ1bmhhbmRsZWQgY2FzZSBmb3JcIiwgdHlwZW9mIHByb3ApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZGF0YUdlbmVyYXRvcigxMCwge1xuICAgICAgICBuYW1lOiBcImhvbWVwYWdlXCIsXG4gICAgICAgIHVybDogXCJ0ZXN0Lmh0bWxcIixcbiAgICAgICAgcHJpbWFyeUxhbmd1YWdlOiB7XG4gICAgICAgICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmMDBcIlxuICAgICAgICB9LFxuICAgICAgICBzdGFyZ2F6ZXJzOiB7XG4gICAgICAgICAgICB0b3RhbENvdW50OiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZvcmtDb3VudDogMFxuICAgIH0pKVxuXG4gICAgcmVwb3MgPSBbe1xuICAgICAgICBuYW1lOiBcImhvbWVwYWdlXCIsXG4gICAgICAgIHVybDogXCJ0ZXN0Lmh0bWxcIixcbiAgICAgICAgcHJpbWFyeUxhbmd1YWdlOiB7XG4gICAgICAgICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmMDBcIlxuICAgICAgICB9LFxuICAgICAgICBzdGFyZ2F6ZXJzOiB7XG4gICAgICAgICAgICB0b3RhbENvdW50OiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZvcmtDb3VudDogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInRoaVwiLFxuICAgICAgICB1cmw6IFwidGVzdC5odG1sXCIsXG4gICAgICAgIHByaW1hcnlMYW5ndWFnZToge1xuICAgICAgICAgICAgbmFtZTogXCJTd2lmdFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2YwZlwiXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJnYXplcnM6IHtcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IDJcbiAgICAgICAgfSxcbiAgICAgICAgZm9ya0NvdW50OiAxMFxuICAgIH1dXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNhc3NcIj4ubGFuZGluZy1wYWdlLS1oZXJvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1hdmF0YXIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7IH1cblxubGksIHVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuXG4ucmVwby0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7IH1cblxuLnJlcG8tLWJhZGdlcyB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XG4gIC5yZXBvLS1iYWRnZXMgc3BhbiB7XG4gICAgbWFyZ2luOiAycHg7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguc3ZlbHRlLmNzcy5tYXAgKi88L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImxhbmRpbmctcGFnZS0taGVyb1wiPjwvZGl2PjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS1zdWJ0aXRsZVwiPkkgZG8gY29tcGlsZXJzIGFuZCBsYW5ndWFnZXMuXG5JbnRlcmVzdGVkIGluIHN5c3RlbXMgZGVzaWduIGFuZCBVWC48L3A+XG48YnI+XG48aDI+UmVwb3NpdG9yaWVzPC9oMj5cbjx1bD5cblx0eyNlYWNoIHJlcG9zIGFzIHJlcG99XG4gICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwie3JlcG8udXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVwby0tbmFtZVwiPntyZXBvLm5hbWV9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlcG8tLWJhZGdlc1wiPlxuICAgICAgICAgICAgICAgIHsjaWYgcmVwby5wcmltYXJ5TGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHtyZXBvLnByaW1hcnlMYW5ndWFnZS5jb2xvcn1cIj4ge3JlcG8ucHJpbWFyeUxhbmd1YWdlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgeyNpZiByZXBvLnN0YXJnYXplcnMudG90YWxDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+e3JlcG8uc3RhcmdhemVycy50b3RhbENvdW50fTwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgeyNpZiByZXBvLmZvcmtDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jb2RlLWJyYW5jaFwiPiB7cmVwby5mb3JrQ291bnR9PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgPC9saT5cblx0ey9lYWNofVxuPC91bD5cbiJdLCJzb3VyY2VSb290IjoiIn0=