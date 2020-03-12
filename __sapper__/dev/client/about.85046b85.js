import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, D as query_selector_all, f as detach_dev, c as claim_element, a as children, b as claim_text, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, n as noop } from './client.d5757845.js';

/* src/routes/about.svelte generated by Svelte v3.19.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let div;
	let p0;
	let t0;
	let p1;
	let t1;
	let p2;
	let t2;
	let br;
	let p3;
	let t3;
	let a;
	let t4;

	const block = {
		c: function create() {
			div = element("div");
			p0 = element("p");
			t0 = text("Hi, I'm Marcus.");
			p1 = element("p");
			t1 = text("I am a software developer from Northern Norway.");
			p2 = element("p");
			t2 = text("I do both fullstack and native with a focus on graphics, performance and rendering.");
			br = element("br");
			p3 = element("p");
			t3 = text("If you have any questions feel free to ");
			a = element("a");
			t4 = text("contact me.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1o7m2u0\"]", document.head);
			head_nodes.forEach(detach_dev);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Hi, I'm Marcus.");
			p0_nodes.forEach(detach_dev);
			p1 = claim_element(div_nodes, "P", {});
			var p1_nodes = children(p1);
			t1 = claim_text(p1_nodes, "I am a software developer from Northern Norway.");
			p1_nodes.forEach(detach_dev);
			p2 = claim_element(div_nodes, "P", {});
			var p2_nodes = children(p2);
			t2 = claim_text(p2_nodes, "I do both fullstack and native with a focus on graphics, performance and rendering.");
			p2_nodes.forEach(detach_dev);
			br = claim_element(div_nodes, "BR", {});
			p3 = claim_element(div_nodes, "P", {});
			var p3_nodes = children(p3);
			t3 = claim_text(p3_nodes, "If you have any questions feel free to ");
			a = claim_element(p3_nodes, "A", { href: true });
			var a_nodes = children(a);
			t4 = claim_text(a_nodes, "contact me.");
			a_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			attr_dev(p0, "class", "subtitle");
			add_location(p0, file, 0, 68, 68);
			add_location(p1, file, 0, 107, 107);
			add_location(p2, file, 0, 161, 161);
			add_location(br, file, 0, 251, 251);
			attr_dev(a, "href", "mailto:hello@mathiassen.dev");
			add_location(a, file, 0, 297, 297);
			add_location(p3, file, 0, 255, 255);
			attr_dev(div, "class", "content");
			add_location(div, file, 0, 47, 47);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, p0);
			append_dev(p0, t0);
			append_dev(div, p1);
			append_dev(p1, t1);
			append_dev(div, p2);
			append_dev(p2, t2);
			append_dev(div, br);
			append_dev(div, p3);
			append_dev(p3, t3);
			append_dev(p3, a);
			append_dev(a, t4);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuODUwNDZiODUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
