!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8)},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header_button.burger1"),t=document.querySelector(".header_button_burger"),n=document.querySelector(".main_burger");e.addEventListener("click",(function(){n.classList.add("active")})),t.addEventListener("click",(function(){n.classList.remove("active")}))})),document.addEventListener("click",(function(e){e.target.classList.contains("menu_item")&&(document.querySelectorAll(".border-left").forEach((function(e){e.classList.remove("border-left")})),e.target.classList.add("border-left"))}));var n=void 0;function r(){n=new Swiper(".swiper-container",{slidesPerView:"auto",freeMode:!0,mousewheel:!0,observer:!0,observeParents:!0,keyboard:!0,pagination:{el:".swiper-pagination",clickable:!0}})}addEventListener("resize",(function(){window.innerWidth<769&&!n&&r(),window.innerWidth>768&&n&&(n.destroy(),n=void 0)})),window.innerWidth<769&&!n&&r()},function(e,t){var n=void 0;function r(){n=new Swiper(".swiper-container-2",{slidesPerView:"auto",freeMode:!0,mousewheel:!0,observer:!0,observeParents:!0,keyboard:!0,pagination:{el:".swiper-pagination",clickable:!0}})}addEventListener("resize",(function(){window.innerWidth<769&&!n&&r(),window.innerWidth>768&&n&&(n.destroy(),n=void 0)})),window.innerWidth<769&&!n&&r()},function(e,t){var n=void 0;function r(){n=new Swiper(".swiper-container-3",{slidesPerView:"auto",freeMode:!0,mousewheel:!0,observer:!0,observeParents:!0,keyboard:!0,pagination:{el:".swiper-pagination",clickable:!0}})}addEventListener("resize",(function(){window.innerWidth<769&&!n&&r(),window.innerWidth>768&&n&&(n.destroy(),n=void 0)})),window.innerWidth<769&&!n&&r()},function(e,t){var n=document.querySelector(".container2");function r(){n.classList.remove("hidden"),n.style.display="flex"}function o(){n.classList.add("hidden"),n.style.display="none"}document.querySelector(".end_footer_button").addEventListener("click",r),document.querySelector(".end_footer_button img").addEventListener("click",r),document.querySelector(".call").addEventListener("click",r),document.querySelector(".call img").addEventListener("click",r),document.querySelector(".burger4").addEventListener("click",o),document.querySelector(".burger4 img").addEventListener("click",o)},function(e,t){var n=document.querySelector(".container");function r(){n.classList.remove("hidden"),n.style.display="flex"}function o(){n.classList.add("hidden"),n.style.display="none"}document.querySelector(".end_footer_button1").addEventListener("click",r),document.querySelector(".end_footer_button1 img").addEventListener("click",r),document.querySelector(".sms").addEventListener("click",r),document.querySelector(".sms img").addEventListener("click",r),document.querySelector(".burger3").addEventListener("click",o),document.querySelector(".burger3 img").addEventListener("click",o)},function(e,t){document.addEventListener("click",(function(e){document.querySelector(".show-more");var t=document.querySelector(".show-more_text"),n=document.querySelector(".show-more_img"),r=document.querySelectorAll(".hidden-desktop"),o=document.querySelectorAll(".hidden-tablet"),i=document.querySelector(".swiper-slide");(e.target.classList.contains("show-more")||e.target.classList.contains("show-more_img")||e.target.classList.contains("show-more_text"))&&(window.innerWidth>1119?i.style.width="240px":window.innerWidth>767&&(i.style.width="224px"),"Показать все"===t.innerText?(r.forEach((function(e){e.style.display="block"})),o.forEach((function(e){e.style.display="block"})),t.innerText="Скрыть",n.style.transform="rotate(180deg)"):"Скрыть"===t.innerText&&(r.forEach((function(e){e.style.display="none"})),window.innerWidth<1121&&o.forEach((function(e){e.style.display="none"})),t.innerText="Показать все",n.style.transform="rotate(0deg)"))}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map