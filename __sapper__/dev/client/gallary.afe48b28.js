import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, l as validate_each_argument, v as validate_slots, u as empty, j as insert_dev, f as detach_dev, e as element, t as text, E as query_selector_all, c as claim_element, a as children, b as claim_text, g as attr_dev, h as add_location, k as append_dev, n as noop, r as destroy_each } from './client.a79d310d.js';

/* src/routes/gallary.svelte generated by Svelte v3.19.2 */

const file = "src/routes/gallary.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (59:295) {:else}
function create_else_block(ctx) {
	let video;
	let video_src_value;

	const block = {
		c: function create() {
			video = element("video");
			this.h();
		},
		l: function claim(nodes) {
			video = claim_element(nodes, "VIDEO", {
				class: true,
				src: true,
				autoplay: true,
				loop: true,
				muted: true,
				playsinline: true
			});

			children(video).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(video, "class", "item svelte-1f9em6n");
			if (video.src !== (video_src_value = /*asset*/ ctx[1].url)) attr_dev(video, "src", video_src_value);
			video.autoplay = true;
			video.loop = true;
			video.muted = true;
			video.playsInline = true;
			add_location(video, file, 58, 302, 1333);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*assets*/ 1 && video.src !== (video_src_value = /*asset*/ ctx[1].url)) {
				attr_dev(video, "src", video_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(video);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(59:295) {:else}",
		ctx
	});

	return block;
}

// (59:216) {#if asset.contentType.startsWith('image')}
function create_if_block(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { class: true, src: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "item svelte-1f9em6n");
			if (img.src !== (img_src_value = /*asset*/ ctx[1].url)) attr_dev(img, "src", img_src_value);
			add_location(img, file, 58, 259, 1290);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*assets*/ 1 && img.src !== (img_src_value = /*asset*/ ctx[1].url)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(59:216) {#if asset.contentType.startsWith('image')}",
		ctx
	});

	return block;
}

// (59:193) {#each assets as asset}
function create_each_block(ctx) {
	let show_if;
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (show_if == null || dirty & /*assets*/ 1) show_if = !!/*asset*/ ctx[1].contentType.startsWith("image");
		if (show_if) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
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
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(59:193) {#each assets as asset}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div0;
	let h1;
	let t;
	let div2;
	let div1;
	let each_value = /*assets*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div0 = element("div");
			h1 = element("h1");
			t = text("Snippets of my work in (mostly) chronological order");
			div2 = element("div");
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1iatj35\"]", document.head);
			head_nodes.forEach(detach_dev);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Snippets of my work in (mostly) chronological order");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Gallery";
			attr_dev(h1, "class", "title");
			add_location(h1, file, 58, 70, 1101);
			attr_dev(div0, "class", "content");
			add_location(div0, file, 58, 49, 1080);
			attr_dev(div1, "class", "assets svelte-1f9em6n");
			add_location(div1, file, 58, 173, 1204);
			attr_dev(div2, "class", "container");
			add_location(div2, file, 58, 150, 1181);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, h1);
			append_dev(h1, t);
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*assets*/ 1) {
				each_value = /*assets*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
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
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(div2);
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
	const res = await this.fetch(`gallary.json`);
	const assets = await res.json();
	return { assets };
}

function instance($$self, $$props, $$invalidate) {
	let { assets } = $$props;
	const writable_props = ["assets"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Gallary> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Gallary", $$slots, []);

	$$self.$set = $$props => {
		if ("assets" in $$props) $$invalidate(0, assets = $$props.assets);
	};

	$$self.$capture_state = () => ({ preload, assets });

	$$self.$inject_state = $$props => {
		if ("assets" in $$props) $$invalidate(0, assets = $$props.assets);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [assets];
}

class Gallary extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { assets: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Gallary",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*assets*/ ctx[0] === undefined && !("assets" in props)) {
			console.warn("<Gallary> was created without expected prop 'assets'");
		}
	}

	get assets() {
		throw new Error("<Gallary>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set assets(value) {
		throw new Error("<Gallary>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Gallary;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGFyeS5hZmU0OGIyOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9nYWxsYXJ5LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9J21vZHVsZSc+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgZ2FsbGFyeS5qc29uYClcbiAgICAgICAgY29uc3QgYXNzZXRzID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiB7IGFzc2V0cyB9XG5cdH1cbjwvc2NyaXB0PlxuPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGFzc2V0c1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuaW1nLCB2aWRlbyB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogYXV0bztcbn1cblxuLmFzc2V0cyB7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDU7XG4gICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAgIDBweDtcbiAgICAtbW96LWNvbHVtbi1jb3VudDogICAgNTtcbiAgICAtbW96LWNvbHVtbi1nYXA6ICAgICAgMHB4O1xuICAgIGNvbHVtbi1jb3VudDogICAgICAgICA1O1xuICAgIGNvbHVtbi1nYXA6ICAgICAgICAgICAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5hc3NldHMge1xuICAtbW96LWNvbHVtbi1jb3VudDogICAgNDtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XG4gIGNvbHVtbi1jb3VudDogICAgICAgICA0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5hc3NldHMge1xuICAtbW96LWNvbHVtbi1jb3VudDogICAgMztcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDM7XG4gIGNvbHVtbi1jb3VudDogICAgICAgICAzO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmFzc2V0cyB7XG4gIC1tb3otY29sdW1uLWNvdW50OiAgICAyO1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcbiAgY29sdW1uLWNvdW50OiAgICAgICAgIDI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYXNzZXRzIHtcbiAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDE7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAxO1xuICBjb2x1bW4tY291bnQ6ICAgICAgICAgMTtcbiAgfVxufVxuPC9zdHlsZT5cblxuXG48dGVtcGxhdGUgbGFuZz0ncHVnJz5cblxuc3ZlbHRlOmhlYWRcbiAgICB0aXRsZSBHYWxsZXJ5XG5cbi5jb250ZW50XG4gICAgaDEudGl0bGUgU25pcHBldHMgb2YgbXkgd29yayBpbiAobW9zdGx5KSBjaHJvbm9sb2dpY2FsIG9yZGVyXG5cbi5jb250YWluZXJcbiAgICAuYXNzZXRzXG4gICAgICAgICtlYWNoKCdhc3NldHMgYXMgYXNzZXQnKVxuICAgICAgICAgICAgK2lmIChcImFzc2V0LmNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoJ2ltYWdlJylcIilcbiAgICAgICAgICAgICAgICBpbWcuaXRlbShzcmM9J3thc3NldC51cmx9JylcbiAgICAgICAgICAgICAgICArZWxzZSgpXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLml0ZW0oc3JjPSd7YXNzZXQudXJsfScgYXV0b3BsYXkgbG9vcCBtdXRlZCBwbGF5c2lubGluZSlcbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREEwRHdVLEdBQUssSUFBQyxHQUFHOzs7Ozs7Ozs7OzswRUFBVCxHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUF0RCxHQUFLLElBQUMsR0FBRzs7Ozs7OztzRUFBVCxHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBQXZFLEdBQUssSUFBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBekQsR0FBTTs7OztnQ0FBWCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFBQyxHQUFNOzs7OytCQUFYLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF6RGhMLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztPQUN0QyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUs7T0FDaEIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJO1VBQzFCLE1BQU07Ozs7T0FIRixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
