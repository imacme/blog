import{e,u as t,f as a,g as s,h as l,o,c as i,b as n,i as r,t as c,_ as v,w as u,p as f,j as d,F as m,r as p,k as h,l as k}from"./app.38c9e000.js";const x=u();f("data-v-024e1674");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},$={key:1,id:"main-title",class:"title"},_={key:2,class:"description"};d();var b=e({expose:[],setup(e){const u=t(),f=a(),d=s((()=>f.value.heroImage||m.value||h.value||b.value)),m=s((()=>null!==f.value.heroText)),p=s((()=>f.value.heroText||u.value.title)),h=s((()=>null!==f.value.tagline)),k=s((()=>f.value.tagline||u.value.description)),b=s((()=>f.value.actionLink&&f.value.actionText)),I=s((()=>f.value.altActionLink&&f.value.altActionText));return x(((e,t)=>l(d)?(o(),i("header",y,[e.$frontmatter.heroImage?(o(),i("figure",g,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):r("v-if",!0),l(m)?(o(),i("h1",$,c(l(p)),1)):r("v-if",!0),l(h)?(o(),i("p",_,c(l(k)),1)):r("v-if",!0),l(b)?(o(),i(v,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):r("v-if",!0),l(I)?(o(),i(v,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)))}});b.__scopeId="data-v-024e1674";const I=u();f("data-v-e5f225ce");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},w={class:"features"},j={key:0,class:"title"},B={key:1,class:"details"};d();var C=e({expose:[],setup(e){const t=a(),v=s((()=>t.value.features&&t.value.features.length>0)),u=s((()=>t.value.features?t.value.features:[]));return I(((e,t)=>l(v)?(o(),i("div",T,[n("div",A,[n("div",L,[n("div",w,[(o(!0),i(m,null,p(l(u),((e,t)=>(o(),i("section",{key:t,class:"feature"},[e.title?(o(),i("h2",j,c(e.title),1)):r("v-if",!0),e.details?(o(),i("p",B,c(e.details),1)):r("v-if",!0)])))),128))])])])])):r("v-if",!0)))}});C.__scopeId="data-v-e5f225ce";const F={},q=u();f("data-v-df8b2502");const z={key:0,class:"footer"},D={class:"container"},E={class:"text"};d();const G=q(((e,t)=>e.$frontmatter.footer?(o(),i("footer",z,[n("div",D,[n("p",E,c(e.$frontmatter.footer),1)])])):r("v-if",!0)));F.render=G,F.__scopeId="data-v-df8b2502";const H=u();f("data-v-6e1bdf43");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};d();var M=e({expose:[],setup:e=>H(((e,t)=>{const a=h("Content");return o(),i("main",J,[n(b),k(e.$slots,"hero",{},void 0,!0),n(C),n("div",K,[n(a)]),k(e.$slots,"features",{},void 0,!0),n(F),k(e.$slots,"footer",{},void 0,!0)])}))});M.__scopeId="data-v-6e1bdf43";export default M;
