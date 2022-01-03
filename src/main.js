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

const navCategory = document.querySelector('.nav__wrapper__category')
const hamburger = document.querySelector('.nav__hamburger')

document.querySelector('.nav__logo--img').src = imgCollections.logo
document.querySelector('.nav__hamburger--img').src = imgCollections.hamburger
document.querySelector('.search').src = imgCollections.searchIcon
document.querySelector('.cart').src = imgCollections.cartIcon
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

function hamburgerOnClick(event) {
  console.log('click')
}

renderNavCategory()

hamburger.addEventListener('click', hamburgerOnClick)
