import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, l as validate_each_argument, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, I as set_data_dev, E as query_selector_all, q as set_style, n as noop, r as destroy_each } from './client.d22bbf39.js';

/* src/routes/blog/index.svelte generated by Svelte v3.19.2 */

const file = "src/routes/blog/index.svelte";

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (13:400) {#if post.keys}
function create_if_block(ctx) {
	let span;
	let each_value_1 = /*post*/ ctx[1].keys;
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			span = element("span");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(span_nodes);
			}

			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "badge");
			add_location(span, file, 12, 415, 641);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(span, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1) {
				each_value_1 = /*post*/ ctx[1].keys;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(span, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(13:400) {#if post.keys}",
		ctx
	});

	return block;
}

// (13:435) {#each post.keys as key}
function create_each_block_1(ctx) {
	let span;
	let t_value = /*key*/ ctx[4] + "";
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "tag");
			add_location(span, file, 12, 459, 685);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t_value !== (t_value = /*key*/ ctx[4] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(13:435) {#each post.keys as key}",
		ctx
	});

	return block;
}

// (13:249) {#each posts as post}
function create_each_block(ctx) {
	let li;
	let a;
	let span;
	let t_value = /*post*/ ctx[1].title + "";
	let t;
	let a_href_value;
	let if_block = /*post*/ ctx[1].keys && create_if_block(ctx);

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			span = element("span");
			t = text(t_value);
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { class: true, rel: true, href: true });
			var a_nodes = children(a);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach_dev);
			if (if_block) if_block.l(a_nodes);
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "name");
			add_location(span, file, 12, 362, 588);
			attr_dev(a, "class", "button is-text is-block has-text-left");
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "blog/" + /*post*/ ctx[1].slug);
			add_location(a, file, 12, 274, 500);
			add_location(li, file, 12, 270, 496);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, span);
			append_dev(span, t);
			if (if_block) if_block.m(a, null);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t_value !== (t_value = /*post*/ ctx[1].title + "")) set_data_dev(t, t_value);

			if (/*post*/ ctx[1].keys) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(a, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[1].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(13:249) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let h3;
	let a;
	let span0;
	let i;
	let span1;
	let t;
	let ul;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			h3 = element("h3");
			a = element("a");
			span0 = element("span");
			i = element("i");
			span1 = element("span");
			t = text("Posts");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-8igfff\"]", document.head);
			head_nodes.forEach(detach_dev);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);

			a = claim_element(h3_nodes, "A", {
				class: true,
				href: true,
				"aria-label": true
			});

			var a_nodes = children(a);
			span0 = claim_element(a_nodes, "SPAN", { class: true, style: true });
			var span0_nodes = children(span0);
			i = claim_element(span0_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			span0_nodes.forEach(detach_dev);
			span1 = claim_element(a_nodes, "SPAN", {});
			var span1_nodes = children(span1);
			t = claim_text(span1_nodes, "Posts");
			span1_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			h3_nodes.forEach(detach_dev);
			ul = claim_element(div_nodes, "UL", {});
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
			attr_dev(i, "class", "fas fa-book-open");
			add_location(i, file, 12, 179, 405);
			attr_dev(span0, "class", "icon");
			set_style(span0, "margin-right", "0.5rem");
			add_location(span0, file, 12, 131, 357);
			add_location(span1, file, 12, 218, 444);
			attr_dev(a, "class", "is-size-4");
			attr_dev(a, "href", "blog");
			attr_dev(a, "aria-label", "checkout blog");
			add_location(a, file, 12, 71, 297);
			add_location(h3, file, 12, 67, 293);
			add_location(ul, file, 12, 245, 471);
			attr_dev(div, "class", "content");
			add_location(div, file, 12, 46, 272);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h3);
			append_dev(h3, a);
			append_dev(a, span0);
			append_dev(span0, i);
			append_dev(a, span1);
			append_dev(span1, t);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params, query }) {
	const res = await this.fetch(`blog.json`);
	const posts = await res.json();
	return { posts };
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blog", $$slots, []);

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({ preload, posts });

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Blog> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blog;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWRmMGYyZGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgYmxvZy5qc29uYClcblx0XHRjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRyZXR1cm4geyBwb3N0cyB9XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IHBvc3RzXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlIGxhbmc9J3B1Zyc+XG5cbnN2ZWx0ZTpoZWFkXG5cdHRpdGxlIEJsb2dcblxuLmNvbnRlbnRcblx0aDNcblx0XHRhLmlzLXNpemUtNChocmVmPVwiYmxvZ1wiIGFyaWEtbGFiZWw9XCJjaGVja291dCBibG9nXCIpXG5cdFx0XHRzcGFuLmljb24oc3R5bGU9J21hcmdpbi1yaWdodDogMC41cmVtJyk6IGkuZmFzLmZhLWJvb2stb3BlblxuXHRcdFx0c3BhbiBQb3N0c1xuXG5cdHVsOiArZWFjaCgncG9zdHMgYXMgcG9zdCcpXG5cdFx0bGk6IGEuYnV0dG9uLmlzLXRleHQuaXMtYmxvY2suaGFzLXRleHQtbGVmdChyZWw9J3ByZWZldGNoJyBocmVmPSdibG9nL3twb3N0LnNsdWd9Jylcblx0XHRcdHNwYW4ubmFtZSB7cG9zdC50aXRsZX1cblx0XHRcdCtpZigncG9zdC5rZXlzJylcblx0XHRcdFx0c3Bhbi5iYWRnZVxuXHRcdFx0XHRcdCtlYWNoKCdwb3N0LmtleXMgYXMga2V5Jylcblx0XHRcdFx0XHRcdHNwYW4udGFnIHtrZXl9XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFZMGIsR0FBSSxJQUFDLElBQUk7Ozs7a0NBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQUMsR0FBSSxJQUFDLElBQUk7Ozs7aUNBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBcUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBSCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBbkcsR0FBSSxJQUFDLEtBQUs7Ozt5QkFBYSxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQUFoRSxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7OzhEQUF1QixHQUFJLElBQUMsS0FBSzs7Z0JBQWEsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7a0ZBQWhFLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQXZHLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQVh4TyxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7T0FDdEMsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLO09BQ3RCLEtBQUssU0FBUyxHQUFHLENBQUMsSUFBSTtVQUNuQixLQUFLOzs7O09BSEosS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
