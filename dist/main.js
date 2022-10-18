(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),d=t.n(c),s=new URL(t(194),t.b),l=new URL(t(509),t.b),p=a()(r()),u=d()(s),m=d()(l);p.push([n.id,"@font-face {\n  font-family: 'RobotoSlab';\n  src: url("+u+") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody{\n  font-family:'RobotoSlab';\n  overflow-x: hidden;\n}\n\n/* nav section */\n\n.nav_section{\n  width: 100vw;\n  height: 75vh;\n  background-image: url("+m+');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n\n  position: relative;\n}\n\nh1{\n  font-size: 50px;\n  font-weight: bold;\n  color: #3882F6;\n\n  position: absolute;\n  bottom: 2vh;\n  right: 2vw;\n}\n\nnav{\n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n  position: absolute;\n  bottom: -70px;\n}\n\nnav>ul{\n  width: 60%;\n  display: flex;\n  border: 5px solid #3882F6;\n  transform: skew(10deg);\n}\n\nul>a{\n  flex:1;\n}\n\nul>a:hover{\n  flex:2;\n}\n\na>li{\n  margin:5px;\n  padding:15px 0;\n  background: #3882F6;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#current_div{\n  margin-top:80px;\n  width: 100vw;\n}\n/* home section */\ndiv[class="intro_item"], div[class="intro_item reverse_order"]{\n  \n  padding: 60px 100px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\ndiv[class="intro_item"]{\n\n  color:white;\n  background-color: #1F2937;\n}\n\ndiv[class="intro_item"]>span, div[class="intro_item reverse_order"]>span{\n  padding: 50px;\n  flex:1;\n  font-size: 20px;\n  line-height: 25px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\ndiv[class="intro_item"]>img, div[class="intro_item reverse_order"]>img{\n  \n  width:  350px;\n  height: 250px;\n}\n\ndiv[class="intro_item"] h2,div[class="intro_item reverse_order"] h2{\n  font-size:30px;\n  font-weight: bold;\n}\n\n.reverse_order{\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n/* menu section */\n.menu_section>table{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  padding: 30px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\nth,td{\n  padding:10px 30px;\n  border: 3px solid #dddddd;\n}\n\n/* contact name */\n.contact_section{\n  \n  display: grid;\n  \n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n\n  line-height: 30px;\n  height: 60vh;\n  padding:50px 20px 250px 20px;\n  font-size: 20px;\n\n  color: white;\n  background-color: #1F2937;\n  \n}\n\n.contact_item{\n  padding:0 50px;\n}\n\n.contact_item>h2{\n  font-weight: bold;\n}\n',""]);const h=p},950:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=o(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},194:(n,e,t)=>{n.exports=t.p+"24c71ebd53c3ed50accb.ttf"},509:(n,e,t)=>{n.exports=t.p+"708c1861c84414b0cfc6.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(950),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(426),v={};v.styleTagTransform=u(),v.setAttributes=d(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const b=t.p+"adc876040411b4d807bb.jpg",g=t.p+"fb6e3ee23adc6ade7e5a.jpeg",y=t.p+"840b3a028be65c074b12.jpeg",x=()=>{const n=document.createElement("div");n.setAttribute("id","current_div"),n.classList.add("home_section");const e=document.createElement("div");e.classList.add("intro_item");const t=new Image;t.src=b,e.appendChild(t);const o=document.createElement("span"),r=document.createElement("h2");r.textContent="CUSTOMER FIRST",o.appendChild(r);const i=document.createElement("p");i.textContent="Select the fresh, high-quality ingredients from local partners.  Be transparent by labeling our products like “potential allergens”, “vegan certificated”.",o.appendChild(i),e.appendChild(o),n.appendChild(e);const a=document.createElement("div");a.classList.add("intro_item"),a.classList.add("reverse_order");const c=new Image;c.src=g,a.appendChild(c);const d=document.createElement("span"),s=document.createElement("h2");s.textContent="ICE CREAM DAY",d.appendChild(s);const l=document.createElement("p");l.textContent="Offer a 20% OFF discount on Sundays",d.appendChild(l),a.appendChild(d),n.appendChild(a);const p=document.createElement("div");p.classList.add("intro_item");const u=new Image;u.src=y,p.appendChild(u);const m=document.createElement("span"),h=document.createElement("h2");h.textContent="AWARD",m.appendChild(h);const f=document.createElement("p");f.textContent="The most trustworthy ice cream in Northern China.",m.appendChild(f);const v=document.createElement("p");v.classList.add("reverse_order"),v.textContent="- from the poll by Foodie Detective in 30XX",f.appendChild(v),p.appendChild(m),n.appendChild(p),document.querySelector("#content").appendChild(n)},C=(()=>{const n=document.querySelector("#content"),e=()=>{const n=document.querySelector(".plus_icon"),e=document.createElement("span");e.innerHTML='<svg style="width:15px;height:15px" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 6.05C17.25 3.22 14.89 1 12 1S6.75 3.22 6.5 6.05C5.09 6.28 4 7.5 4 9C4 10.66 5.34 12 7 12L12 22L17 12C18.66 12 20 10.66 20 9C20 7.5 18.91 6.28 17.5 6.05M12 17.53L8.89 11.31C8.95 11.26 9 11.21 9.08 11.16C9.93 11.69 10.93 12 12 12S14.07 11.69 14.92 11.16C15 11.21 15.05 11.26 15.11 11.31L12 17.53Z" />\n  </svg>',n.appendChild(e)},t=()=>{const n=document.getElementById("current_div");document.getElementById("content").removeChild(n)};function o(){const n=document.querySelector(".plus_icon");n!==this&&("Home"===this.textContent?(t(),x()):"Menu"===this.textContent?(t(),(()=>{const n=document.createElement("div");n.setAttribute("id","current_div"),n.classList.add("menu_section"),n.innerHTML="\n            <table>\n        <tr>\n          <th>Product name</th>\n          <th>Price</th>\n        </tr>\n        <tr>\n          <td>strawberry ice cream</td>\n          <td>$8.0</td>\n        </tr>\n        <tr>\n          <td>chocolate & salted caramel ice cream</td>\n          <td>$8.0</td>\n        </tr>\n        <tr>\n          <td>classic sundae</td>\n          <td>$8.0</td>\n        </tr>\n        <tr>\n          <td>mango sorbet</td>\n          <td>$6.0</td>\n        </tr>\n        <tr>\n          <td>strawberry sorbet</td>\n          <td>$6.0</td>\n        </tr>\n        <tr>\n          <td>lemon & lime sorbet</td>\n          <td>$6.0</td>\n        </tr>\n        <tr>\n          <td>root beer float</td>\n          <td>$2.0</td>\n        </tr>\n        <tr>\n          <td>coffee</td>\n          <td>$2.0</td>\n        </tr>\n        <tr>\n          <td>hot milk</td>\n          <td>$2.0</td>\n        </tr>\n        <tr>\n          <td>lemonade</td>\n          <td>$2.0</td>\n        </tr>\n      </table>",document.querySelector("#content").appendChild(n)})()):"Contact"===this.textContent&&(t(),(()=>{const n=document.createElement("div");n.setAttribute("id","current_div"),n.classList.add("contact_section"),n.innerHTML='\n        <div class="contact_item">\n          <h2>Opening Hours:</h2>\n          <p>Mon - Sun</p>\n          <p>9:30 - 6pm</p>\n        </div>\n  \n        <div class="contact_item">\n          <h2>Address:</h2>\n          <p>221b Baker St, Marylebone,</p>\n          <p>London, NW1 6XE</p>\n        </div>\n  \n        <div class="contact_item">\n          <h2>Follow us:</h2>\n          <p>If you have any suggestions, you can contact us via email: iloveicecream@gmail.com</p>    \n          <label for="email">Enter your email here:</label>\n          <input type="email" name="email" id="email"> \n          <button>Sign up for newsletter</button>\n        </div>\n        ',document.querySelector("#content").appendChild(n)})()),(()=>{const n=document.querySelector(".plus_icon");n.removeChild(n.lastChild)})(),n.classList.remove("plus_icon"),this.classList.add("plus_icon"),e())}return{create_nav:()=>{const t=document.createElement("div");t.classList.add("nav_section");const o=document.createElement("h1");o.textContent="I LOVE ICE CREAM",t.appendChild(o);const r=document.createElement("nav"),i=document.createElement("ul"),a=document.createElement("a"),c=document.createElement("li");c.textContent="Home",c.classList.add("plus_icon"),a.appendChild(c),i.appendChild(a);const d=document.createElement("a"),s=document.createElement("li");s.textContent="Menu",d.appendChild(s),i.appendChild(d);const l=document.createElement("a"),p=document.createElement("li");p.textContent="Contact",l.appendChild(p),i.appendChild(l),r.appendChild(i),t.appendChild(r),n.appendChild(t),e(),x()},start_control:()=>{document.querySelectorAll("a>li").forEach((n=>n.addEventListener("click",o)))}}})();C.create_nav(),C.start_control()})()})();