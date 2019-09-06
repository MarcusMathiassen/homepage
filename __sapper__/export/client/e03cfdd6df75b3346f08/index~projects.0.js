(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,i){"use strict";var s=i(0),n=i(1);var a=e=>"#"===e[0]?document.getElementById(e.slice(1,e.length)):"."===e[0]?[...document.getElementsByClassName(e.slice(1,e.length))]:"<"===e[0]?document.createElement(e.slice(1,e.length-1)):[...document.querySelectorAll(e)];class o{constructor(e=0,t=0){this.x=e,this.y=t}neg(){return this.x=-this.x,this.y=-this.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}sub(e){return this.x-=e.x,this.y-=e.y,this}scale(e){return this.x*=e,this.y*=e,this}div(e){return 0!=e&&(this.x/=e,this.y/=e),this}dot(e){return this.x*e.x+this.y*e.y}length(){return Math.sqrt(this.dot(this))}normalize(){return this.div(this.length())}static distance(e,t){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}static neg(e){return new o(-e.x,-e.y)}static add(e,t){return new o(e.x+t.x,e.y+t.y)}static adds(e,t){return new o(e.x+t,e.y+t)}static sub(e,t){return new o(e.x-t.x,e.y-t.y)}static subs(e,t){return new o(e.x-t,e.y-t)}static scale(e,t){return new o(e.x*t,e.y*t)}static div(e,t){return new o(e.x/t,e.y/t)}static dot(e,t){return e.x*t.x+e.y*t.y}}class r{static fromValues(e,t,i,s,n,a,o,r,c,u,l,d,h,b,m,p){let g=[];return g[0]=e,g[1]=t,g[2]=i,g[3]=s,g[4]=n,g[5]=a,g[6]=o,g[7]=r,g[8]=c,g[9]=u,g[10]=l,g[11]=d,g[12]=h,g[13]=b,g[14]=m,g[15]=p,g}}const c=e=>{let t=new o(1e4,1e4),i=new o(-1e4,-1e4);for(const s of e){const e=s.position;e.x>i.x?i.x=e.x:e.x<t.x&&(t.x=e.x),e.y>i.y?i.y=e.y:e.y<t.y&&(t.y=e.y)}return{min:t,max:i}};class u{constructor(e=new o(0,0),t=new o(0,0)){this.min=e,this.max=t,this.color={r:1,g:1,b:1,a:1}}containsPoint(e,t){return e.x-t<this.max.x&&e.x+t>this.min.x&&e.y-t<this.max.y&&e.y+t>this.min.y}}const l=()=>((new Date).getTime()-0)/1e3,d=(e,t)=>Math.random()*(t-e)+e,h=e=>{const t=a("<button>");t.textContent=e.label,t.id=e.id||e.label,t.className=e.className||"btn",t.addEventListener("click",e.callback),a(`#${e.parent}`).appendChild(t)};class b{constructor(e,t,i){this.position=new o(e,t),this.velocity=new o(d(-1,1),d(-1,1)).scale(2),this.radius=i,this.mass=i}update(e,t){this.position.x<=this.radius&&this.velocity.x<0&&(this.position.x=this.radius,this.velocity.x=-this.velocity.x),this.position.x>=e.width-this.radius&&this.velocity.x>0&&(this.position.x=e.width-this.radius,this.velocity.x=-this.velocity.x),this.position.y<=this.radius&&this.velocity.y<0&&(this.position.y=this.radius,this.velocity.y=-this.velocity.y),this.position.y>=e.height-this.radius&&this.velocity.y>0&&(this.position.y=e.height-this.radius,this.velocity.y=-this.velocity.y),this.velocity.add(t),this.position.add(this.velocity)}collidesWith(e){const t=e.position.x-this.position.x,i=e.position.y-this.position.y,s=this.radius+e.radius;return t*t+i*i<=s*s}resolveCollision(e){const t=this.mass,i=e.mass,s=e.position.x-this.position.x,n=e.position.y-this.position.y;if(s*(e.velocity.x-this.velocity.x)+n*(e.velocity.y-this.velocity.y)<0){const a=new o(s,n).normalize(),r=new o(-1*a.y,a.x),c=o.dot(a,this.velocity),u=o.dot(a,e.velocity),l=o.dot(r,this.velocity),d=o.dot(r,e.velocity),h=(c*(t-i)+2*i*u)/(t+i),b=(u*(i-t)+2*t*c)/(t+i),m=o.scale(a,h),p=o.scale(a,b),g=o.scale(r,l),y=o.scale(r,d);this.velocity=g.add(m),e.velocity=y.add(p)}}}let m=[];const p=10,g=5;class y{constructor(e,t){this.maxCapacityPerNode=p,this.maxDepth=g,this.depth=e,this.bounds=t,this.subnodes=[4],this.indices=[],this.hasSplit=!1}visit(e){return this.hasSplit?(this.subnodes[0].visit(e),this.subnodes[1].visit(e),this.subnodes[2].visit(e),void this.subnodes[3].visit(e)):e(this)}split(){const e=this.bounds.min,t=this.bounds.max,i=e.x,s=e.y,n=t.x-e.x,a=t.y-e.y,r=.5*n,c=.5*a,l=new u(new o(i,s),new o(i+r,s+c)),d=new u(new o(i+r,s),new o(i+n,s+c)),h=new u(new o(i,s+c),new o(i+r,s+a)),b=new u(new o(i+r,s+c),new o(i+n,s+a));this.subnodes[0]=new y(this.depth+1,l),this.subnodes[1]=new y(this.depth+1,d),this.subnodes[2]=new y(this.depth+1,h),this.subnodes[3]=new y(this.depth+1,b),this.hasSplit=!0}input(e){const t=(m=e).length;for(let e=0;e<t;e++)this.insert(e)}contains(e){return this.bounds.containsPoint(m[e].position,m[e].radius)}insert(e){if(this.hasSplit)return this.subnodes[0].contains(e)&&this.subnodes[0].insert(e),this.subnodes[1].contains(e)&&this.subnodes[1].insert(e),this.subnodes[2].contains(e)&&this.subnodes[2].insert(e),void(this.subnodes[3].contains(e)&&this.subnodes[3].insert(e));if(this.indices.push(e),this.indices.length>this.maxCapacityPerNode&&this.depth<this.maxDepth){this.split();for(const e of this.indices)this.subnodes[0].contains(e)&&this.subnodes[0].insert(e),this.subnodes[1].contains(e)&&this.subnodes[1].insert(e),this.subnodes[2].contains(e)&&this.subnodes[2].insert(e),this.subnodes[3].contains(e)&&this.subnodes[3].insert(e);this.indices=[]}}getIndices(e){if(this.hasSplit)return this.subnodes[0].getIndices(e),this.subnodes[1].getIndices(e),this.subnodes[2].getIndices(e),void this.subnodes[3].getIndices(e);0!=this.indices.length&&e.push(this.indices)}getNeighbours(e,t){if(this.hasSplit)return this.subnodes[0].bounds.containsPoint(t.position,t.radius)&&this.subnodes[0].getNeighbours(e,t),this.subnodes[1].bounds.containsPoint(t.position,t.radius)&&this.subnodes[1].getNeighbours(e,t),this.subnodes[2].bounds.containsPoint(t.position,t.radius)&&this.subnodes[2].getNeighbours(e,t),this.subnodes[3].bounds.containsPoint(t.position,t.radius)&&this.subnodes[3].getNeighbours(e,t),!1;0!=this.indices.length&&e.push(this.indices)}getNeighbourNodes(e,t){if(this.hasSplit)return this.subnodes[0].bounds.containsPoint(t.position,t.radius)&&this.subnodes[0].getNeighbourNodes(e,t),this.subnodes[1].bounds.containsPoint(t.position,t.radius)&&this.subnodes[1].getNeighbourNodes(e,t),this.subnodes[2].bounds.containsPoint(t.position,t.radius)&&this.subnodes[2].getNeighbourNodes(e,t),void(this.subnodes[3].bounds.containsPoint(t.position,t.radius)&&this.subnodes[3].getNeighbourNodes(e,t));e.push(this)}getNodesBounds(e){if(this.hasSplit)return this.subnodes[0].getNodesBounds(e),this.subnodes[1].getNodesBounds(e),this.subnodes[2].getNodesBounds(e),void this.subnodes[3].getNodesBounds(e);e.push(this.bounds)}colorNeighbours(e,t,i){if(this.hasSplit)return this.subnodes[0].bounds.containsPoint(e,t)&&this.subnodes[0].colorNeighbours(e,t,i),this.subnodes[1].bounds.containsPoint(e,t)&&this.subnodes[1].colorNeighbours(e,t,i),this.subnodes[2].bounds.containsPoint(e,t)&&this.subnodes[2].colorNeighbours(e,t,i),this.subnodes[3].bounds.containsPoint(e,t)&&this.subnodes[3].colorNeighbours(e,t,i),!1;this.bounds.color=i}}function v(e){var t,i,n,a,o,r,c,u,l,d,h,b,m,p,g,y,v,f,x,O,j,w,E,N,A,P,S,q,L,T;return{c(){t=Object(s.m)("h1"),i=Object(s.G)("2D Collisions"),n=Object(s.m)("div"),a=Object(s.m)("div"),o=Object(s.m)("p"),r=Object(s.G)("Any performance issue at this point is actually from the drawing of the particles.\nIt doesnt cache the vertices, so it calculates them each frame via an immidiate mode api."),c=Object(s.m)("p"),u=Object(s.G)("This is a test paragraf."),l=Object(s.m)("b"),d=Object(s.G)("I am bold"),h=Object(s.m)("div"),b=Object(s.m)("p"),m=Object(s.G)("This is a info note.\nThey can be recognized by their\ngray label."),p=Object(s.m)("p"),g=Object(s.G)("Not really sure what i will use them for, but\ni needed something else that just advice."),y=Object(s.m)("div"),v=Object(s.m)("p"),f=Object(s.G)("This is an advice note.\nThey can be recognized by their\ngreen label."),x=Object(s.m)("p"),O=Object(s.G)("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\naliqua. Porttitor eget dolor morbi non arcu risus. Egestas integer eget aliquet nibh praesent tristique magna sit.\nSollicitudin nibh sit amet commodo nulla. Lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque pulvinar\npellentesque habitant morbi tristique senectus et netus. Nunc sed id semper risus in hendrerit gravida. Pellentesque\nmassa placerat duis ultricies. Massa tincidunt nunc pulvinar sapien et. Mauris cursus mattis molestie a iaculis at erat"),j=Object(s.m)("div"),w=Object(s.m)("p"),E=Object(s.G)("This is a warning note.\nThese will be used to put emphasis on dangerous or unsafe things.\nThey can be recognized by their\norange label.\n"),N=Object(s.m)("p"),A=Object(s.G)("pellentesque. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quis commodo odio aenean sed\nadipiscing diam donec. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Bibendum at varius vel\npharetra vel turpis. Cras sed felis eget velit aliquet. Quis hendrerit dolor magna eget est. Elit ut aliquam purus sit\namet luctus venenatis. Sem viverra aliquet eget sit amet tellus cras adipiscing. Metus aliquam eleifend mi in nulla\nposuere sollicitudin. Egestas sed sed risus pretium quam."),P=Object(s.m)("div"),S=Object(s.m)("p"),q=Object(s.G)("Any performance issue at this point is actually from the drawing of the particles.\nIt doesnt cache the vertices, so it calculates them each frame via an immidiate mode api.\nIt doesnt cache the vertices, so it calculates them each frame via an immidiate mode api."),L=Object(s.m)("p"),T=Object(s.G)("Vel risus commodo viverra maecenas accumsan. Quam pellentesque nec nam aliquam. Porttitor rhoncus dolor purus non enim\npraesent. Ac odio tempor orci dapibus ultrices in iaculis. Sit amet cursus sit amet dictum sit amet. Felis imperdiet\nproin fermentum leo. Adipiscing at in tellus integer. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\nSed libero enim sed faucibus turpis in eu mi bibendum. Rhoncus urna neque viverra justo. Ultrices vitae auctor eu augue.\nTristique nulla aliquet enim tortor. Nunc non blandit massa enim nec dui nunc. Laoreet sit amet cursus sit amet dictum.\nElit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."),this.h()},l(e){t=Object(s.g)(e,"H1",{},!1);var R=Object(s.f)(t);i=Object(s.h)(R,"2D Collisions"),R.forEach(s.l),n=Object(s.g)(e,"DIV",{id:!0},!1);var I=Object(s.f)(n);a=Object(s.g)(I,"DIV",{class:!0},!1);var M=Object(s.f)(a);o=Object(s.g)(M,"P",{},!1);var C=Object(s.f)(o);r=Object(s.h)(C,"Any performance issue at this point is actually from the drawing of the particles.\nIt doesnt cache the vertices, so it calculates them each frame via an immidiate mode api."),C.forEach(s.l),M.forEach(s.l),I.forEach(s.l),c=Object(s.g)(e,"P",{},!1);var B=Object(s.f)(c);u=Object(s.h)(B,"This is a test paragraf."),l=Object(s.g)(B,"B",{},!1);var F=Object(s.f)(l);d=Object(s.h)(F,"I am bold"),F.forEach(s.l),B.forEach(s.l),h=Object(s.g)(e,"DIV",{class:!0},!1);var _=Object(s.f)(h);b=Object(s.g)(_,"P",{},!1);var k=Object(s.f)(b);m=Object(s.h)(k,"This is a info note.\nThey can be recognized by their\ngray label."),k.forEach(s.l),p=Object(s.g)(_,"P",{},!1);var D=Object(s.f)(p);g=Object(s.h)(D,"Not really sure what i will use them for, but\ni needed something else that just advice."),D.forEach(s.l),_.forEach(s.l),y=Object(s.g)(e,"DIV",{class:!0},!1);var V=Object(s.f)(y);v=Object(s.g)(V,"P",{},!1);var G=Object(s.f)(v);f=Object(s.h)(G,"This is an advice note.\nThey can be recognized by their\ngreen label."),G.forEach(s.l),V.forEach(s.l),x=Object(s.g)(e,"P",{},!1);var U=Object(s.f)(x);O=Object(s.h)(U,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\naliqua. Porttitor eget dolor morbi non arcu risus. Egestas integer eget aliquet nibh praesent tristique magna sit.\nSollicitudin nibh sit amet commodo nulla. Lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque pulvinar\npellentesque habitant morbi tristique senectus et netus. Nunc sed id semper risus in hendrerit gravida. Pellentesque\nmassa placerat duis ultricies. Massa tincidunt nunc pulvinar sapien et. Mauris cursus mattis molestie a iaculis at erat"),U.forEach(s.l),j=Object(s.g)(e,"DIV",{class:!0},!1);var z=Object(s.f)(j);w=Object(s.g)(z,"P",{},!1);var Y=Object(s.f)(w);E=Object(s.h)(Y,"This is a warning note.\nThese will be used to put emphasis on dangerous or unsafe things.\nThey can be recognized by their\norange label.\n"),Y.forEach(s.l),z.forEach(s.l),N=Object(s.g)(e,"P",{},!1);var H=Object(s.f)(N);A=Object(s.h)(H,"pellentesque. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quis commodo odio aenean sed\nadipiscing diam donec. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Bibendum at varius vel\npharetra vel turpis. Cras sed felis eget velit aliquet. Quis hendrerit dolor magna eget est. Elit ut aliquam purus sit\namet luctus venenatis. Sem viverra aliquet eget sit amet tellus cras adipiscing. Metus aliquam eleifend mi in nulla\nposuere sollicitudin. Egestas sed sed risus pretium quam."),H.forEach(s.l),P=Object(s.g)(e,"DIV",{class:!0},!1);var Q=Object(s.f)(P);S=Object(s.g)(Q,"P",{},!1);var W=Object(s.f)(S);q=Object(s.h)(W,"Any performance issue at this point is actually from the drawing of the particles.\nIt doesnt cache the vertices, so it calculates them each frame via an immidiate mode api.\nIt doesnt cache the vertices, so it calculates them each frame via an immidiate mode api."),W.forEach(s.l),Q.forEach(s.l),L=Object(s.g)(e,"P",{},!1);var J=Object(s.f)(L);T=Object(s.h)(J,"Vel risus commodo viverra maecenas accumsan. Quam pellentesque nec nam aliquam. Porttitor rhoncus dolor purus non enim\npraesent. Ac odio tempor orci dapibus ultrices in iaculis. Sit amet cursus sit amet dictum sit amet. Felis imperdiet\nproin fermentum leo. Adipiscing at in tellus integer. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\nSed libero enim sed faucibus turpis in eu mi bibendum. Rhoncus urna neque viverra justo. Ultrices vitae auctor eu augue.\nTristique nulla aliquet enim tortor. Nunc non blandit massa enim nec dui nunc. Laoreet sit amet cursus sit amet dictum.\nElit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."),J.forEach(s.l),this.h()},h(){Object(s.d)(a,"class","comment info"),Object(s.d)(n,"id","p2d"),Object(s.d)(h,"class","comment info"),Object(s.d)(y,"class","comment advice"),Object(s.d)(j,"class","comment warning"),Object(s.d)(P,"class","comment advice")},m(e,R){Object(s.v)(e,t,R),Object(s.b)(t,i),Object(s.v)(e,n,R),Object(s.b)(n,a),Object(s.b)(a,o),Object(s.b)(o,r),Object(s.v)(e,c,R),Object(s.b)(c,u),Object(s.b)(c,l),Object(s.b)(l,d),Object(s.v)(e,h,R),Object(s.b)(h,b),Object(s.b)(b,m),Object(s.b)(h,p),Object(s.b)(p,g),Object(s.v)(e,y,R),Object(s.b)(y,v),Object(s.b)(v,f),Object(s.v)(e,x,R),Object(s.b)(x,O),Object(s.v)(e,j,R),Object(s.b)(j,w),Object(s.b)(w,E),Object(s.v)(e,N,R),Object(s.b)(N,A),Object(s.v)(e,P,R),Object(s.b)(P,S),Object(s.b)(S,q),Object(s.v)(e,L,R),Object(s.b)(L,T)},p:s.y,i:s.y,o:s.y,d(e){e&&(Object(s.l)(t),Object(s.l)(n),Object(s.l)(c),Object(s.l)(h),Object(s.l)(y),Object(s.l)(x),Object(s.l)(j),Object(s.l)(N),Object(s.l)(P),Object(s.l)(L))}}}function f(e){return Object(n.b)(()=>{let e,t,i,s,n,d,m,p,g,v=[],f=!1,x=0,O=0,j=[],w={r:255,g:255,b:255},E={r:255,g:0,b:255},N=300,A=300,P=!0,S=!1,q=!0,L=!0,T=!0,R=!1,I=!1,M=!1,C=[],B=60,F=0,_={x:0,y:0},k=[],D=[],V=8,G={r:0,g:0,b:0,a:1},U={r:0,g:1,b:0,a:1},z=!1;const Y=a("<canvas>");p=Y,Y.id="p2d-canvas",Y.textContent="webgl canvas placeholder",(t=a("#p2d")).appendChild(Y),p.addEventListener("mouseenter",()=>f=!f),p.addEventListener("mouseleave",()=>f=!f),p.addEventListener("mousemove",e=>{!function(e,t){t=t||e.target;let i=function(e,t){const i=(t=t||e.target).getBoundingClientRect();return{x:e.clientX-i.left,y:e.clientY-i.top}}(e,t);i.x*=m,i.y*=m,_=i}(e),z&&function(){const e=ne();let t=new b(_.x,_.y,e);k.push(t),D.push(G)}()}),p.addEventListener("mousedown",()=>z=!0),p.addEventListener("mouseup",()=>z=!1);const H=a("<div>");if(H.id=`${t.id}-settings`,t.append(H),h({label:"clear",className:"btn small",callback:function(){k.length=0,D.length=0},parent:H.id}),h({label:"show neighbours",className:"btn small",callback:()=>{T=!T},parent:H.id}),h({label:"quadtree",className:"btn small",callback:()=>{q^=1},parent:H.id}),h({label:"optimized quadtree bounds",className:"btn small",callback:()=>{L^=1},parent:H.id}),h({label:"show quadtree nodes",className:"btn small",callback:()=>{S^=1},parent:H.id}),h({label:"collisions",className:"btn small",callback:()=>{P^=1},parent:H.id}),h({label:"gravity",className:"btn small",callback:()=>{M^=1},parent:H.id}),h({label:"info",className:"btn small",callback:()=>{I^=1},parent:H.id}),h({label:"pause",className:"btn small",callback:()=>{R^=1},parent:H.id}),!(i=p.getContext("webgl2")))return void alert("Unable to initialize WebGL. Your browser may not support it.");i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),d=i.createProgram();let Q=i.createShader(i.VERTEX_SHADER),W=i.createShader(i.FRAGMENT_SHADER);if(i.shaderSource(Q,"\n        precision mediump float;\n\n        uniform mat4 projectionMatrix;\n        attribute vec2 position;\n        attribute vec4 color;\n\n        varying vec4 color0;\n\n        void main() {\n            gl_Position = projectionMatrix * vec4(position, 0.0, 1.0);\n            color0 = color;\n        }\n        "),i.shaderSource(W,"\n        precision mediump float;\n        varying vec4 color0;\n        void main() {\n          gl_FragColor = color0;\n        }"),i.compileShader(Q),!i.getShaderParameter(Q,i.COMPILE_STATUS))return void console.error("ERROR compiling vertex shader!",i.getShaderInfoLog(Q));if(i.compileShader(W),!i.getShaderParameter(W,i.COMPILE_STATUS))return void console.error("ERROR compiling fragment shader!",i.getShaderInfoLog(W));i.attachShader(d,Q),i.attachShader(d,W),i.bindAttribLocation(d,0,"position"),i.bindAttribLocation(d,1,"color"),i.linkProgram(d),i.validateProgram(d),e=i.getUniformLocation(d,"projectionMatrix"),i.deleteShader(Q),i.deleteShader(W),s=i.createVertexArray(),i.bindVertexArray(s),n=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,n),i.vertexAttribPointer(0,2,i.FLOAT,i.FALSE,6*Float32Array.BYTES_PER_ELEMENT,0),i.vertexAttribPointer(1,4,i.FLOAT,i.FALSE,6*Float32Array.BYTES_PER_ELEMENT,2*Float32Array.BYTES_PER_ELEMENT),i.enableVertexAttribArray(0),i.enableVertexAttribArray(1);const J=e=>{let t=0,i=0;const s=e.length;for(let n=0;n<s;n++)for(let a=n+1;a<s;a++)e[n].collidesWith(e[a])&&(e[n].resolveCollision(e[a]),i++),t++;return{comparisons:t,hits:i}},X=(e,t)=>{let i=0,s=0;for(const n of t){const t=n.length;for(let a=0;a<t;a++)for(let o=a+1;o<t;o++)e[n[a]].collidesWith(e[n[o]])&&(e[n[a]].resolveCollision(e[n[o]]),s++),i++}return{comparisons:i,hits:s}},$=e=>({r:e.r/255,g:e.g/255,b:e.b/255,a:e.a||e.a/255}),K=(e,t,i)=>{se([e.x,t.y,i.r,i.g,i.b,i.a,t.x,t.y,i.r,i.g,i.b,i.a,t.x,e.y,i.r,i.g,i.b,i.a,e.x,t.y,i.r,i.g,i.b,i.a,t.x,e.y,i.r,i.g,i.b,i.a,e.x,e.y,i.r,i.g,i.b,i.a])},Z=(e,t,i,s)=>{const n=.5*s,a=new o(e.x,t.y),r=t,c=new o(t.x,e.y),u=e;K(o.subs(a,n),o.adds(r,n),i),K(o.adds(r,n),o.subs(c,n),i),K(o.adds(c,n),o.subs(u,n),i),K(o.adds(u,n),o.subs(a,n),i)},ee=(e,t,i,s,n)=>{let a,r=new o(e.x+i,e.y);const c=2*Math.PI;for(let u=1;u<=n+3;u+=2){const l=u*c/n;a=new o(e.x+i*Math.cos(l),e.y+i*Math.sin(l)),te(r,a,t,s),r=a}},te=(e,t,i,s)=>{s<0&&(s=.001);let n=.5*o.distance(e,t),a=t.x-e.x,r=t.y-e.y,c=Math.atan2(r,a),u=s,l=o.add(e,t).scale(.5),d={x:l.x-n+u,y:l.y},h={x:l.x+n-u,y:l.y};const b=o.subs(d,u),m=o.adds(h,u),p=[new o(b.x,m.y),new o(m.x,m.y),new o(m.x,b.y),new o(b.x,m.y),new o(m.x,b.y),new o(b.x,b.y)],g=Math.cos(c),y=Math.sin(c);for(let e of p){const t=e.x-l.x,i=e.y-l.y,s=t*g-i*y,n=t*y+i*g;e.x=s+l.x,e.y=n+l.y}se([p[0].x,p[0].y,i.r,i.g,i.b,i.a,p[1].x,p[1].y,i.r,i.g,i.b,i.a,p[2].x,p[2].y,i.r,i.g,i.b,i.a,p[3].x,p[3].y,i.r,i.g,i.b,i.a,p[4].x,p[4].y,i.r,i.g,i.b,i.a,p[5].x,p[5].y,i.r,i.g,i.b,i.a])},ie=(e,t,i,s)=>{let n=[],a=e,o=0;for(let r=0;r<s+3;++r){switch(o++){case 0:n.push(a.x),n.push(a.y);break;case 1:const t=r*Math.PI*2/s;a={x:e.x+i*Math.cos(t),y:e.y+i*Math.sin(t)},n.push(a.x),n.push(a.y);break;case 2:o=0,n.push(e.x),n.push(e.y)}n.push(t.r),n.push(t.g),n.push(t.b),n.push(t.a)}se(n)};function se(e){v.push(...e)}function ne(){return V*m}!function a(){var h,b;h=N=t.offsetWidth-1*m,b=A=500-1*m,m=window.devicePixelRatio||1,p.width=h*m,p.height=b*m,p.style.width=h+"px",p.style.height=b+"px",N*=m,A*=m,(E=$(window.color.textNormal)).a=1,(w=$(window.color.background)).a=1,(U=$(window.color.textHighlight)).a=1,i.clearColor(w.r,w.g,w.b,1),i.clear(i.COLOR_BUFFER_BIT);l();if(q){let e=new o(0,0),t=new o(N,A);if(L){const i=c(k);e=i.min,t=i.max}g=new u(e,t);const i=new y(0,g);if(i.input(k),C=[],i.getNodesBounds(C),j=[],i.getIndices(j),S)for(const e of C){const t=e.min.x,i=e.min.y,s=e.max.x-e.min.x-1,n=e.max.y-e.min.y-1;Z(new o(t,i),new o(t+s,i+n),E,2*m)}if(f&&T){let e=[];i.getNeighbourNodes(e,{position:_,radius:ne()}),e.forEach(e=>{const t=e.bounds,i=t.min.x,s=t.min.y,n=t.max.x-t.min.x-1,a=t.max.y-t.min.y-1;Z(new o(i,s),new o(i+n,s+a),U,2*m),e.indices.forEach(e=>{D[e]=U})})}}if(P){let e;e=q?X(k,j):J(k),x=e.comparisons,O=e.hits}if(!R){const e=M?.0981:0;for(let t of k)t.update({width:N,height:A},{x:0,y:e})}!function(){const e=k.length;for(let t=0;t<e;++t){const e=k[t],i=e.position,s=e.radius,n=D[t];ie(i,n,s,36),ee(i,w,s,.3*m,36),D[t]={r:E.r,g:E.g,b:E.b,a:1}}}(),function(){if(0===v.length)return;const t=new o(N,A);i.viewport(0,0,N,A);const a=r.fromValues(2/t.x,0,0,0,0,2/-t.y,0,0,0,0,-1,0,-1,1,0,1);i.useProgram(d),i.uniformMatrix4fv(e,i.FALSE,a),i.bindVertexArray(s),i.bindBuffer(i.ARRAY_BUFFER,n),i.bufferData(i.ARRAY_BUFFER,new Float32Array(v),i.DYNAMIC_DRAW),i.drawArrays(i.TRIANGLES,0,v.length/6),v=[],B=1/(l()-F),F=l(),B=B.toFixed(0)}(),f&&ee(_,E,ne(),.5*m,36),window.requestAnimationFrame(a)}()}),{}}t.a=class extends s.a{constructor(e){super(),Object(s.u)(this,e,f,v,s.C,[])}}}}]);