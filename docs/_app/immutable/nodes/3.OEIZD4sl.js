import{s as E,x as L,n as S,y as j}from"../chunks/scheduler.C4vpeWWc.js";import{S as M,i as T,e as _,s as w,p as z,a as d,d as k,h as p,b as I,q as B,j as m,k as H,l as u,r as N,t as b,x as F,v as J,n as y,z as K,c as P,f as V,m as q,o as G,g as $}from"../chunks/index.vZdHP_y_.js";import{e as A,g as O,a as Q}from"../chunks/spread.CK8js_jb.js";function R(o){let e,r,l,n,s,t,i;return{c(){e=_("div"),r=_("a"),l=_("img"),s=w(),t=_("p"),i=z(o[0]),this.h()},l(a){e=d(a,"DIV",{class:!0});var c=k(e);r=d(c,"A",{href:!0});var v=k(r);l=d(v,"IMG",{src:!0,width:!0,alt:!0}),v.forEach(p),s=I(c),t=d(c,"P",{});var h=k(t);i=B(h,o[0]),h.forEach(p),c.forEach(p),this.h()},h(){L(l.src,n=o[1])||m(l,"src",n),m(l,"width","50"),m(l,"alt",o[0]),m(r,"href",o[2]),m(e,"class","mr-5 ml-5 flex flex-col items-center anta-regular")},m(a,c){H(a,e,c),u(e,r),u(r,l),u(e,s),u(e,t),u(t,i)},p(a,[c]){c&2&&!L(l.src,n=a[1])&&m(l,"src",n),c&1&&m(l,"alt",a[0]),c&4&&m(r,"href",a[2]),c&1&&N(i,a[0])},i:S,o:S,d(a){a&&p(e)}}}function U(o,e,r){let{name:l}=e,{img:n}=e,{link:s}=e;return o.$$set=t=>{"name"in t&&r(0,l=t.name),"img"in t&&r(1,n=t.img),"link"in t&&r(2,s=t.link)},[l,n,s]}class W extends M{constructor(e){super(),T(this,e,U,R,E,{name:0,img:1,link:2})}}function C(o,e,r){const l=o.slice();return l[1]=e[r],l}function D(o){let e,r;const l=[o[1]];let n={};for(let s=0;s<l.length;s+=1)n=j(n,l[s]);return e=new W({props:n}),{c(){P(e.$$.fragment)},l(s){V(e.$$.fragment,s)},m(s,t){q(e,s,t),r=!0},p(s,t){const i=t&1?O(l,[Q(s[1])]):{};e.$set(i)},i(s){r||(b(e.$$.fragment,s),r=!0)},o(s){y(e.$$.fragment,s),r=!1},d(s){G(e,s)}}}function X(o){let e,r,l=A(o[0]),n=[];for(let t=0;t<l.length;t+=1)n[t]=D(C(o,l,t));const s=t=>y(n[t],1,1,()=>{n[t]=null});return{c(){e=_("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=d(t,"DIV",{class:!0});var i=k(e);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach(p),this.h()},h(){m(e,"class","flex flex-row mb-60")},m(t,i){H(t,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);r=!0},p(t,[i]){if(i&1){l=A(t[0]);let a;for(a=0;a<l.length;a+=1){const c=C(t,l,a);n[a]?(n[a].p(c,i),b(n[a],1)):(n[a]=D(c),n[a].c(),b(n[a],1),n[a].m(e,null))}for(F(),a=l.length;a<n.length;a+=1)s(a);J()}},i(t){if(!r){for(let i=0;i<l.length;i+=1)b(n[i]);r=!0}},o(t){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)y(n[i]);r=!1},d(t){t&&p(e),K(n,t)}}}function Y(o){return[[{name:"GitHub",img:"/images/github.png",link:"https://github.com/ItsArnavSh"},{name:"Instagram",img:"/images/instagram.png",link:"https://www.instagram.com/its.arnav.sh"},{name:"LinkedIn",img:"/images/linkedin.png",link:"https://www.linkedin.com/in/itsarnavsh/"}]]}class Z extends M{constructor(e){super(),T(this,e,Y,X,E,{})}}function ee(o){let e,r,l='<p class="text-5xl anta-regular mb-10">About Me</p>',n,s,t,i,a,c=`Hello There👋<br/>  
    I am Arnav, a first year student pursuing my B.Tech in Computer Science and Engineering💻.<br/>
    I love building things that make the change, and work at getting better at that every single day🌏.<br/>
    Also passionate about The Cosmos, Self Improvement and Entrepreneurship.<br/>
    If you resonate with me, Say hi!`,v,h,x;return h=new Z({}),{c(){e=_("div"),r=_("div"),r.innerHTML=l,n=w(),s=_("img"),i=w(),a=_("p"),a.innerHTML=c,v=w(),P(h.$$.fragment),this.h()},l(g){e=d(g,"DIV",{class:!0});var f=k(e);r=d(f,"DIV",{class:!0,"data-svelte-h":!0}),$(r)!=="svelte-1pz60xf"&&(r.innerHTML=l),n=I(f),s=d(f,"IMG",{src:!0,width:!0,height:!0,class:!0,alt:!0}),i=I(f),a=d(f,"P",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-erk992"&&(a.innerHTML=c),v=I(f),V(h.$$.fragment,f),f.forEach(p),this.h()},h(){m(r,"class",""),L(s.src,t="/images/me2.png")||m(s,"src",t),m(s,"width","150px"),m(s,"height","100px"),m(s,"class","rounded-md mb-10"),m(s,"alt","Not Loaded!"),m(a,"class","prompt-regular text-2xl text-center mb-10"),m(e,"class","flex flex-col items-center")},m(g,f){H(g,e,f),u(e,r),u(e,n),u(e,s),u(e,i),u(e,a),u(e,v),q(h,e,null),x=!0},p:S,i(g){x||(b(h.$$.fragment,g),x=!0)},o(g){y(h.$$.fragment,g),x=!1},d(g){g&&p(e),G(h)}}}class se extends M{constructor(e){super(),T(this,e,null,ee,E,{})}}export{se as component};