import './scss/main.scss'

const imgCollections = {
  logo: './../src/assets/logo-daymode.svg',
  hamburger: './../src/assets/hamburger-daymode.svg',
  searchIcon: './../src/assets/search-icon-daymode.svg',
  cartIcon: './../src/assets/shoppingcart-icon-daymode.svg',
  switchIconMoon: './../src/assets/moon-icon-daymode.svg',
  switchIconSun: './../src/assets/sun-icon-nightmode.svg',
}

const navCategoriesContent = [
  '男款',
  '女款',
  '最新消息',
  '聯絡我們',
  '客製商品',
]

const navCategory = document.querySelector('.nav__category')

document.querySelector('.nav__logo--img').src = imgCollections.logo
document.querySelector('.nav__hamburger--img').src = imgCollections.hamburger
document.querySelector('.search').src = imgCollections.searchIcon
document.querySelector('.cart').src = imgCollections.cartIcon
document.querySelector('.switch').src = imgCollections.switchIconMoon

function renderNavCategory() {
  let htmlContent = ''
  for (let i = 0; i < navCategoriesContent.length; i++) {
    htmlContent += `
        <a href="javascript:void(0)">
          <span class="nav__category--content">${navCategoriesContent[i]}</span>
        </a>
    `
    navCategory.innerHTML = htmlContent
  }
}

renderNavCategory()
