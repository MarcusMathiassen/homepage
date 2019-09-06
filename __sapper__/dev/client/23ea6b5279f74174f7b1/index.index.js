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
	style.id = 'svelte-uab798-style';
	style.textContent = "@font-face{font-family:'pxplus_ibm_vga8regular';src:url('pxplus_ibm_vga8-webfont.woff2') format('woff2'), url('pxplus_ibm_vga8-webfont.woff') format('woff');font-weight:normal;font-style:normal}button:focus{outline:0}:root{--apple_retro_green:#61bb46;--apple_retro_yellow:#fdb827;--apple_retro_orange:#f5821f;--apple_retro_red:#e03a3e;--apple_retro_purple:#963d97;--apple_blue:rgb(64, 156, 255);--apple_gray:rgb(152, 152, 157);--apple_green:rgb(48, 219, 91);--apple_indigo:rgb(125, 122, 255);--apple_orange:rgb(255, 179, 64);--apple_pink:rgb(255, 100, 130);--apple_purple:rgb(218, 143, 255);--apple_red:rgb(255, 105, 97);--apple_teal:rgb(112, 215, 255);--apple_yellow:rgb(255, 212, 38);--c_blue:#247BA0;--c_white:#FAF1D8;--c_pink:#DD7373;--c_black:#3E4E50;--c_warm_black:#02394A;--c_black_olive:#393D3F;--c_orange:#F79D65;--c_turq:#69D1C5;--c_almond:#EED7C5;--c_cadedblue:#5C9EAD;--c_carib_green:#02C39A;--storage:#5C9EAD;--literal:#02C39A;--comment:#F79D65;--keyword:rgb(255, 100, 130);--compile_time_resolved:rgb(125, 122, 255);--font:'pxplus_ibm_vga8regular';--text:#3E4E50;--background:#F8F0DA;--text-color--normal:var(--text);--text-color--light:#3E4E50;--text-color--richer:#3E4E50;--text-color--highlight:rgb(255, 100, 130)}@media(prefers-color-scheme: light){:root{--text-color--normal:var(--text);--text-color--light:var(--c_black);--text-color--richer:var(--c_black);--text-color--highlight:var(--keyword);--text-color--comment:var(--comment);--background--content:rgb(255,255,255);--background:#F8F0DA;--background-color--selection:yellow}}@media(prefers-color-scheme: dark){:root{--text-color--normal:var(--c_white);--text-color--light:var(--c_white);--text-color--richer:var(--c_white);--text-color--highlight:var(--apple_pink);--text-color--comment:var(--comment);--background--content:rgb(30,30,30);--background:#000;--background-color--selection:var(--apple_pink)}}*{color:var(--text);background:var(--background);font-family:var(--font);text-align:center;line-height:1.5;font-size:1em}img.svelte-uab798{max-width:200px;border-radius:50px}.landing-page--hero.svelte-uab798{display:inline}.swapOnHover.svelte-uab798 img.svelte-uab798:last-child{display:none}.swapOnHover.svelte-uab798:hover img.svelte-uab798:first-child{display:none}.swapOnHover.svelte-uab798:hover img.svelte-uab798:last-child{display:inline}.landing-page--subtitle.svelte-uab798{display:block;text-align:center}.landing-page--title.svelte-uab798{display:block;font-size:30px;font-weight:900;text-align:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+SG9tZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cbjxzdHlsZT5cbiAgOmdsb2JhbChAZm9udC1mYWNlKSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncHhwbHVzX2libV92Z2E4cmVndWxhcic7XG4gICAgICAgIHNyYzogdXJsKCdweHBsdXNfaWJtX3ZnYTgtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdweHBsdXNfaWJtX3ZnYTgtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICA6Z2xvYmFsKGJ1dHRvbjpmb2N1cykge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICA6Z2xvYmFsKDpyb290KSB7XG4gICAgLS1hcHBsZV9yZXRyb19ncmVlbjogIzYxYmI0NjtcbiAgICAtLWFwcGxlX3JldHJvX3llbGxvdzogI2ZkYjgyNztcbiAgICAtLWFwcGxlX3JldHJvX29yYW5nZTogI2Y1ODIxZjtcbiAgICAtLWFwcGxlX3JldHJvX3JlZDogI2UwM2EzZTtcbiAgICAtLWFwcGxlX3JldHJvX3B1cnBsZTogIzk2M2Q5NztcbiAgICAtLWFwcGxlX2JsdWU6IHJnYig2NCwgMTU2LCAyNTUpO1xuICAgIC0tYXBwbGVfZ3JheTogcmdiKDE1MiwgMTUyLCAxNTcpO1xuICAgIC0tYXBwbGVfZ3JlZW46IHJnYig0OCwgMjE5LCA5MSk7XG4gICAgLS1hcHBsZV9pbmRpZ286IHJnYigxMjUsIDEyMiwgMjU1KTtcbiAgICAtLWFwcGxlX29yYW5nZTogcmdiKDI1NSwgMTc5LCA2NCk7XG4gICAgLS1hcHBsZV9waW5rOiByZ2IoMjU1LCAxMDAsIDEzMCk7XG4gICAgLS1hcHBsZV9wdXJwbGU6IHJnYigyMTgsIDE0MywgMjU1KTtcbiAgICAtLWFwcGxlX3JlZDogcmdiKDI1NSwgMTA1LCA5Nyk7XG4gICAgLS1hcHBsZV90ZWFsOiByZ2IoMTEyLCAyMTUsIDI1NSk7XG4gICAgLS1hcHBsZV95ZWxsb3c6IHJnYigyNTUsIDIxMiwgMzgpO1xuICAgIC0tY19ibHVlOiAjMjQ3QkEwO1xuICAgIC0tY193aGl0ZTogI0ZBRjFEODtcbiAgICAtLWNfcGluazogI0RENzM3MztcbiAgICAtLWNfYmxhY2s6ICMzRTRFNTA7XG4gICAgLS1jX3dhcm1fYmxhY2s6ICMwMjM5NEE7XG4gICAgLS1jX2JsYWNrX29saXZlOiAjMzkzRDNGO1xuICAgIC0tY19vcmFuZ2U6ICNGNzlENjU7XG4gICAgLS1jX3R1cnE6ICM2OUQxQzU7XG4gICAgLS1jX2FsbW9uZDogI0VFRDdDNTtcbiAgICAtLWNfY2FkZWRibHVlOiAjNUM5RUFEO1xuICAgIC0tY19jYXJpYl9ncmVlbjogIzAyQzM5QTtcblxuICAgIC0tc3RvcmFnZTogIzVDOUVBRDtcbiAgICAtLWxpdGVyYWw6ICMwMkMzOUE7XG4gICAgLS1jb21tZW50OiAjRjc5RDY1O1xuICAgIC0ta2V5d29yZDogcmdiKDI1NSwgMTAwLCAxMzApO1xuICAgIC0tY29tcGlsZV90aW1lX3Jlc29sdmVkOiByZ2IoMTI1LCAxMjIsIDI1NSk7XG5cbiAgICAtLWZvbnQ6ICdweHBsdXNfaWJtX3ZnYThyZWd1bGFyJztcbiAgICAtLXRleHQ6ICMzRTRFNTA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjhGMERBO1xuXG4gICAgLS10ZXh0LWNvbG9yLS1ub3JtYWw6IHZhcigtLXRleHQpO1xuICAgIC0tdGV4dC1jb2xvci0tbGlnaHQ6ICMzRTRFNTA7XG4gICAgLS10ZXh0LWNvbG9yLS1yaWNoZXI6ICMzRTRFNTA7XG4gICAgLS10ZXh0LWNvbG9yLS1oaWdobGlnaHQ6IHJnYigyNTUsIDEwMCwgMTMwKTtcbiAgfVxuXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XG4gICAgICA6cm9vdCB7XG4gICAgICAgICAgLS10ZXh0LWNvbG9yLS1ub3JtYWw6IHZhcigtLXRleHQpO1xuICAgICAgICAgIC0tdGV4dC1jb2xvci0tbGlnaHQ6IHZhcigtLWNfYmxhY2spO1xuICAgICAgICAgIC0tdGV4dC1jb2xvci0tcmljaGVyOiB2YXIoLS1jX2JsYWNrKTtcbiAgICAgICAgICAtLXRleHQtY29sb3ItLWhpZ2hsaWdodDogdmFyKC0ta2V5d29yZCk7XG4gICAgICAgICAgLS10ZXh0LWNvbG9yLS1jb21tZW50OiB2YXIoLS1jb21tZW50KTtcbiAgICAgICAgICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRjhGMERBO1xuICAgICAgICAgIC0tYmFja2dyb3VuZC1jb2xvci0tc2VsZWN0aW9uOiB5ZWxsb3c7XG4gICAgICB9XG4gIH1cblxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICA6cm9vdCB7XG4gICAgICAgICAgLS10ZXh0LWNvbG9yLS1ub3JtYWw6IHZhcigtLWNfd2hpdGUpO1xuICAgICAgICAgIC0tdGV4dC1jb2xvci0tbGlnaHQ6IHZhcigtLWNfd2hpdGUpO1xuICAgICAgICAgIC0tdGV4dC1jb2xvci0tcmljaGVyOiB2YXIoLS1jX3doaXRlKTtcbiAgICAgICAgICAtLXRleHQtY29sb3ItLWhpZ2hsaWdodDogdmFyKC0tYXBwbGVfcGluayk7XG4gICAgICAgICAgLS10ZXh0LWNvbG9yLS1jb21tZW50OiB2YXIoLS1jb21tZW50KTtcbiAgICAgICAgICAtLWJhY2tncm91bmQtLWNvbnRlbnQ6IHJnYigzMCwzMCwzMCk7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIC0tYmFja2dyb3VuZC1jb2xvci0tc2VsZWN0aW9uOiB2YXIoLS1hcHBsZV9waW5rKTtcbiAgICAgIH1cbiAgfVxuXG4gIDpnbG9iYWwoKikge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAuZW50aXR5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGNvbG9yOiAjRjc5RDY1O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoI0Y3OUQ2NSwgMC4xKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cblxuICAua2V5d29yZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBjb2xvcjogI2ZmNjQ4MjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCNmZjY0ODIsIDAuMSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgLmZhaW50IHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBjb2xvcjogcmdiYSh2YXIoLS10ZXh0KSwgMC41KTtcbiAgfVxuICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cbiAgLmxhbmRpbmctcGFnZS0taGVybyB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG5cbiAgLnN3YXBPbkhvdmVyIGltZzpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnN3YXBPbkhvdmVyOmhvdmVyIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc3dhcE9uSG92ZXI6aG92ZXIgaW1nOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5sYW5kaW5nLXBhZ2UtLXN1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxhbmRpbmctcGFnZS0tdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUDJEIGZyb20gXCIuLi9jb21wb25lbnRzL3AyZC5zdmVsdGVcIlxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCIubGFuZGluZy1wYWdlLS1oZXJvIHN3YXBPbkhvdmVyXCI+XG4gIDxpbWcgc3JjPVwiYXZhdGFyX3BpeGVsYXRlZC5qcGdcIiBhbHQ9XCJwaWN0dXJlIG9mIG1lXCIgLz5cbiAgPGltZyBzcmM9XCJhdmF0YXIucG5nXCIgYWx0PVwicGljdHVyZSBvZiBtZVwiIC8+XG48L2Rpdj5cbjxwIGNsYXNzPVwibGFuZGluZy1wYWdlLS10aXRsZVwiPk1hcmN1cyBNYXRoaWFzc2VuPC9wPlxuPHAgY2xhc3M9XCJsYW5kaW5nLXBhZ2UtLXN1YnRpdGxlXCI+SSBkbyBjb21waWxlcnMgYW5kIGxhbmd1YWdlcy4gPGJyLz4gSW50ZXJlc3RlZCBpbiBzeXN0ZW1zIGRlc2lnbiBhbmQgVVguPC9wPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1VLFVBQVUsQUFBRSxDQUFDLEFBQ2YsV0FBVyxDQUFFLHdCQUF3QixDQUNyQyxHQUFHLENBQUUsSUFBSSwrQkFBK0IsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FDN0csV0FBVyxDQUFFLE1BQU0sQ0FDbkIsVUFBVSxDQUFFLE1BQU0sQUFDeEIsQ0FBQyxBQUNPLFlBQVksQUFBRSxDQUFDLEFBQ3JCLE9BQU8sQ0FBRSxDQUFD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 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var t0, div, img0, t1, img1, t2, p0, t3, t4, p1, t5, br, t6;

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Marcus Mathiassen");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("I do compilers and languages. ");
			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("br");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(" Interested in systems design and UX.");
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n\n\n\n\n\n");

			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img0);

			img0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div_nodes, "\n  ");

			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img1);

			img1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "Marcus Mathiassen");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n");

			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "I do compilers and languages. ");

			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p1_nodes, "BR", { class: true }, false);
			var br_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(br);

			br_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, " Interested in systems design and UX.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Home";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "src", "avatar_pixelated.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "alt", "picture of me");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "class", "svelte-uab798");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img0, file, 156, 2, 3708);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "src", "avatar.png");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "alt", "picture of me");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "class", "svelte-uab798");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img1, file, 157, 2, 3765);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", ".landing-page--hero swapOnHover svelte-uab798");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 155, 0, 3660);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p0, "class", "landing-page--title svelte-uab798");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 159, 0, 3817);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(br, "class", "svelte-uab798");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(br, file, 160, 64, 3934);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "landing-page--subtitle svelte-uab798");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 160, 0, 3870);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, img0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, img1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, br);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t6);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			}
		}
	};
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-uab798-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyM2VhNmI1Mjc5Zjc0MTc0ZjdiMS9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9