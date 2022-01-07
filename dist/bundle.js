(()=>{"use strict";const r="./../src/assets/logo-daymode.svg",n=["男款","女款","最新消息","聯絡我們","客製商品"],e=[{productId:1,img:"./../src/assets/product1.svg",productName:"破壞補丁修身牛仔褲",price:3299,qty:1},{productId:2,img:"./../src/assets/product2.svg",productName:"刷色直筒牛仔褲",price:1299,qty:1}],c=["台北市","新北市","桃園市","新竹市","台中市","彰化縣","嘉義縣","台南市","高雄市"],t=document.querySelector(".nav__wrapper__category"),_=document.querySelector(".nav__hamburger"),a=document.querySelector(".cart__container"),o=document.querySelector("#city");document.querySelector(".nav__logo--img").src=r,document.querySelector(".nav__hamburger--img").src="./../src/assets/hamburger-daymode.svg",document.querySelector(".search").src="./../src/assets/search-icon-daymode.svg",document.querySelector(".shopping-cart").src="./../src/assets/shoppingcart-icon-daymode.svg",document.querySelector(".switch").src="./../src/assets/moon-icon-daymode.svg",document.querySelector(".footer__container__logo--img").src=r,document.querySelector(".fb").src="./../src/assets/fb-icon-daymode.svg",document.querySelector(".ig").src="./../src/assets/instagram-icon-daymode.svg",document.querySelector(".whatsapp").src="./../src/assets/whatsapp-icon-daymode.svg",function(){let r="";for(let e=0;e<n.length;e++)r+=`\n          <a href="javascript:void(0)">\n            <span class="nav__wrapper__category--content">${n[e]}</span>\n          </a>\n    `;t.innerHTML=r}(),function(){let r='\n  <div class="cart__container__title">購物籃</div>\n';for(let n=0;n<e.length;n++)r+=`\n          <div class="cart__container__wrapper">\n            <div class="cart__container__wrapper__product-photo">\n              <img\n                src="${e[n].img}"\n                alt="product-${e[n].productId}"\n                class="cart__container__wrapper__product-photo--img"\n              />\n            </div>\n            <div class="cart__container__wrapper__product">\n              <div class="cart__container__wrapper__product__info">\n                <div\n                  class="cart__container__wrapper__product__info__product-name"\n                >${e[n].productName}</div>\n                <div class="cart__container__wrapper__product__info__modifier">\n                  <div\n                    class="\n                      cart__container__wrapper__product__info__modifier--minus\n                    "\n                  ></div>\n                  <div\n                    class="\n                      cart__container__wrapper__product__info__modifier--qty\n                    "\n                  >${e[n].qty}</div>\n                  <div\n                    class="\n                      cart__container__wrapper__product__info__modifier--plus"\n                  ></div>\n                </div>\n              </div>\n              <div class="cart__container__wrapper__product__info--price">$${e[n].price}</div>\n            </div>\n          </div>\n    `;r+='\n        <div class="cart__container__wrapper">\n          <div class="cart__container__wrapper__freight">\n            <div class="cart__container__wrapper__freight--item">運費</div>\n            <div class="cart__container__wrapper__freight--amount">免費</div>\n          </div>\n        </div>\n        <div class="cart__container__wrapper">\n          <div class="cart__container__wrapper__total">\n            <div class="cart__container__wrapper__total--item">小計</div>\n            <div class="cart__container__wrapper__total--amount">$5,298</div>\n          </div>\n        </div>\n  ',a.innerHTML=r}(),function(){let r='\n    <option value="disable" selected disabled>請選擇縣市</option>\n  ';for(let n=0;n<c.length;n++)r+=`\n     <option value="${c[n]}">${c[n]}</option>\n    `;o.innerHTML=r}(),_.addEventListener("click",(function(r){const n=document.querySelector(".nav-container");r.target.classList.contains("nav__hamburger--img")&&(n.classList.contains("d-none")?n.classList.remove("d-none"):n.classList.add("d-none"))}))})();