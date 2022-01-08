import './scss/main.scss'

const imgCollections = {
  logo: './../src/assets/logo-daymode.svg',
  hamburger: './../src/assets/hamburger-daymode.svg',
  searchIcon: './../src/assets/search-icon-daymode.svg',
  cartIcon: './../src/assets/shoppingcart-icon-daymode.svg',
  switchIconMoon: './../src/assets/moon-icon-daymode.svg',
  switchIconSun: './../src/assets/sun-icon-nightmode.svg',
  fbIcon: './../src/assets/fb-icon-daymode.svg',
  igIcon: './../src/assets/instagram-icon-daymode.svg',
  whatsappIcon: './../src/assets/whatsapp-icon-daymode.svg',
}

const navCategoriesContent = [
  '男款',
  '女款',
  '最新消息',
  '聯絡我們',
  '客製商品',
]

const carts = [
  {
    productId: 1,
    img: './../src/assets/product1.svg',
    productName: '破壞補丁修身牛仔褲',
    price: 3299,
    qty: 1,
  },
  {
    productId: 2,
    img: './../src/assets/product2.svg',
    productName: '刷色直筒牛仔褲',
    price: 1299,
    qty: 1,
  },
]

const city = [
  '台北市',
  '新北市',
  '桃園市',
  '新竹市',
  '台中市',
  '彰化縣',
  '嘉義縣',
  '台南市',
  '高雄市',
]

const navCategory = document.querySelector('.nav__wrapper__category')
const hamburger = document.querySelector('.nav__hamburger')
const shoppingCart = document.querySelector('.cart__container')
const citySelector = document.querySelector('#city')

document.querySelector('.nav__logo--img').src = imgCollections.logo
document.querySelector('.nav__hamburger--img').src = imgCollections.hamburger
document.querySelector('.search').src = imgCollections.searchIcon
document.querySelector('.shopping-cart').src = imgCollections.cartIcon
document.querySelector('.switch').src = imgCollections.switchIconMoon
document.querySelector('.footer__container__logo--img').src =
  imgCollections.logo
document.querySelector('.fb').src = imgCollections.fbIcon
document.querySelector('.ig').src = imgCollections.igIcon
document.querySelector('.whatsapp').src = imgCollections.whatsappIcon

function renderNavCategory() {
  let htmlContent = ''
  for (let i = 0; i < navCategoriesContent.length; i++) {
    htmlContent += `
          <a href="javascript:void(0)">
            <span class="nav__wrapper__category--content">${navCategoriesContent[i]}</span>
          </a>
    `
  }
  navCategory.innerHTML = htmlContent
}

function renderCart() {
  let htmlContent = `
  <div class="cart__container__title">購物籃</div>
`
  for (let i = 0; i < carts.length; i++) {
    htmlContent += `
          <div class="cart__container__wrapper">
            <div class="cart__container__wrapper__product-photo">
              <img
                src="${carts[i].img}"
                alt="product-${carts[i].productId}"
                class="cart__container__wrapper__product-photo--img"
              />
            </div>
            <div class="cart__container__wrapper__product">
              <div class="cart__container__wrapper__product__info">
                <div
                  class="cart__container__wrapper__product__info__product-name"
                >${carts[i].productName}</div>
                <div class="cart__container__wrapper__product__info__modifier">
                  <div
                    class="
                      cart__container__wrapper__product__info__modifier--minus
                    "
                  ></div>
                  <div
                    class="
                      cart__container__wrapper__product__info__modifier--qty
                    "
                  >${carts[i].qty}</div>
                  <div
                    class="
                      cart__container__wrapper__product__info__modifier--plus"
                  ></div>
                </div>
              </div>
              <div class="cart__container__wrapper__product__info--price">$${carts[i].price}</div>
            </div>
          </div>
    `
  }

  htmlContent += `
        <div class="cart__container__wrapper">
          <div class="cart__container__wrapper__freight">
            <div class="cart__container__wrapper__freight--item">運費</div>
            <div class="cart__container__wrapper__freight--amount">免費</div>
          </div>
        </div>
        <div class="cart__container__wrapper">
          <div class="cart__container__wrapper__total">
            <div class="cart__container__wrapper__total--item">小計</div>
            <div class="cart__container__wrapper__total--amount">$5,298</div>
          </div>
        </div>
  `
  shoppingCart.innerHTML = htmlContent
}

function renderCitySelector() {
  let htmlContent = `
    <option value="" selected disabled>請選擇縣市</option>
  `

  for (let i = 0; i < city.length; i++) {
    htmlContent += `
     <option value="${city[i]}">${city[i]}</option>
    `
  }
  citySelector.innerHTML = htmlContent
}

function hamburgerOnClick(event) {
  const navContainer = document.querySelector('.nav-container')
  if (!event.target.classList.contains('nav__hamburger--img')) return

  if (navContainer.classList.contains('d-none')) {
    navContainer.classList.remove('d-none')
  } else {
    navContainer.classList.add('d-none')
  }
}

renderNavCategory()
renderCart()
renderCitySelector()

hamburger.addEventListener('click', hamburgerOnClick)
