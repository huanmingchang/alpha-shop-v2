(()=>{"use strict";const e=["男款","女款","最新消息","聯絡我們","客製商品"],s=document.querySelector(".nav__wrapper__category");document.querySelector(".nav__logo--img").src="./../src/assets/logo-daymode.svg",document.querySelector(".nav__hamburger--img").src="./../src/assets/hamburger-daymode.svg",document.querySelector(".search").src="./../src/assets/search-icon-daymode.svg",document.querySelector(".cart").src="./../src/assets/shoppingcart-icon-daymode.svg",document.querySelector(".switch").src="./../src/assets/moon-icon-daymode.svg",function(){let r="";for(let c=0;c<e.length;c++)r+=`\n          <a href="javascript:void(0)">\n            <span class="nav__wrapper__category--content">${e[c]}</span>\n          </a>\n    `,s.innerHTML=r}()})();