import './scss/main.scss'

const imgCollections = {
  logo: './src/assets/logo-daymode.svg',
  logoNightMode: './src/assets/logo-nightmode.svg',
  hamburger: './src/assets/hamburger-daymode.svg',
  hamburgerNightMode: './src/assets/hamburger-nightmode.png',
  searchIcon: './src/assets/search-icon-daymode.svg',
  searchIconNightMode: './src/assets/search-icon-nightmode.svg',
  cartIcon: './src/assets/shoppingcart-icon-daymode.svg',
  cartIconNightMode: './src/assets/shoppingcart-icon-nightmode.svg',
  switchIconMoon: './src/assets/moon-icon-daymode.svg',
  switchIconSun: './src/assets/sun-icon-nightmode.svg',
  fbIcon: './src/assets/fb-icon-daymode.svg',
  fbIconNightMode: './src/assets/fb-icon-nightmode.svg',
  igIcon: './src/assets/instagram-icon-daymode.svg',
  igIconNightMode: './src/assets/instagram-icon-nightmode.svg',
  whatsappIcon: './src/assets/whatsapp-icon-daymode.svg',
  whatsappIconNightMode: './src/assets/whatsapp-icon-nightmode.svg',
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
const cartContainer = document.querySelector('.cart__container')
const btnPanel = document.querySelector('.button')
const steps = document.querySelectorAll('.stepper__container__step')
const formParts = document.querySelectorAll(
  '.form-panel__container__form__form-part'
)
const deliveryContainer = document.querySelector('.step-2')
const switchButton = document.querySelector('.switch')
const app = document.querySelector('.app')

let total = 0
let step = 0
let freight = 0
let freightDisplay = ''

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
                  class="cart__container__wrapper__product__info--product-name"
                >${carts[i].productName}</div>
                <div class="cart__container__wrapper__product__info__modifier">
                  <div
                    class="
                      cart__container__wrapper__product__info__modifier--minus minus
                    " data-id="${carts[i].productId}"
                  ></div>
                  <div
                    class="
                      cart__container__wrapper__product__info__modifier--qty qty
                    " data-id="${carts[i].productId}"
                  >${carts[i].qty}</div>
                  <div
                    class="
                      cart__container__wrapper__product__info__modifier--plus plus" data-id="${
                        carts[i].productId
                      }"
                  ></div>
                </div>
              </div>
              <div class="cart__container__wrapper__product__info--price" data-id="${
                carts[i].productId
              }">$${carts[i].price
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</div>
            </div>
          </div>
    `
  }

  htmlContent += `
        <div class="cart__container__wrapper">
          <div class="cart__container__wrapper__freight">
            <div class="cart__container__wrapper__freight--item">運費</div>
            <div class="cart__container__wrapper__freight--amount freight">${freightDisplay}</div>
          </div>
        </div>
        <div class="cart__container__wrapper">
          <div class="cart__container__wrapper__total">
            <div class="cart__container__wrapper__total--item">小計</div>
            <div class="cart__container__wrapper__total--amount total-amount">$${total
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</div>
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

function hamburgerOnClick(e) {
  const navContainer = document.querySelector('.nav-container')
  if (!e.target.classList.contains('nav__hamburger--img')) return

  if (navContainer.classList.contains('d-none')) {
    navContainer.classList.remove('d-none')
  } else {
    navContainer.classList.add('d-none')
  }
}

function adjustQty(e) {
  const target = e.target
  if (target.classList.contains('minus')) {
    carts.forEach((item) => {
      if (item.productId === Number(target.dataset.id)) {
        item.qty -= 1
      }

      if (item.qty < 0) {
        item.qty = 0
      }
    })
  }

  if (target.classList.contains('plus')) {
    carts.forEach((item) => {
      if (item.productId === Number(target.dataset.id)) {
        item.qty += 1
      }
    })
  }
  calculateTotalAmount()
  renderCart()

  return
}

function calculateTotalAmount() {
  total = 0
  carts.forEach((item) => {
    total += item.qty * item.price
  })
  return (total += freight)
}

function changeStep(e) {
  e.preventDefault()
  const currentStep = steps[step]

  if (
    e.target.classList.contains('btn-next') &&
    e.target.innerHTML === '下一步'
  ) {
    const nextStep = steps[step + 1]
    currentStep.classList.remove('initial')
    currentStep.classList.remove('active')
    currentStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  }

  if (e.target.classList.contains('btn-prev')) {
    const prevStep = steps[step - 1]
    if (prevStep === steps[0]) {
      currentStep.classList.remove('active')
      prevStep.classList.remove('checked')
      prevStep.classList.add('initial')
    } else {
      currentStep.classList.remove('active')
      prevStep.classList.remove('checked')
      prevStep.classList.add('active')
    }
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }

  controlButton()
}

function controlButton() {
  const nextBtn = document.querySelector('.btn-next')
  const prevBtn = document.querySelector('.btn-prev')

  if (step === 2) {
    nextBtn.innerHTML = '確認下單'
    nextBtn.classList.add('last-step')
  } else {
    nextBtn.innerHTML = '下一步'
    nextBtn.classList.remove('last-step')
  }

  if (step === 0) {
    nextBtn.classList.add('first-step')
    prevBtn.classList.add('first-step')
  } else {
    prevBtn.classList.remove('first-step')
    nextBtn.classList.remove('first-step')
  }
}

function changeDelivery(e) {
  const target = e.target
  const standardDelivery = document.querySelector('#standard-delivery')
  const dhlDelivery = document.querySelector('#dhl-delivery')
  const standardRadioBtn = document.querySelector('#standard')
  const dhlRadioBtn = document.querySelector('#dhl')
  freight = 0

  if (standardRadioBtn.checked) {
    standardDelivery.classList.add('checked')
    dhlDelivery.classList.remove('checked')
    freight = 0
  }

  if (dhlRadioBtn.checked) {
    standardDelivery.classList.remove('checked')
    dhlDelivery.classList.add('checked')
    freight = 500
  }
  calculateTotalAmount()
  handleFreightDisplay()
  renderCart()
}

function handleFreightDisplay() {
  if (freight === 0) {
    freightDisplay = '免費'
  }

  if (freight !== 0) {
    freightDisplay =
      '$' + freight.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  }
}

function switchMode(e) {
  if (e.target.classList.contains('switch')) {
    app.classList.toggle('theme-dark')

    if (app.classList.contains('theme-dark')) {
      document.querySelector('.nav__logo--img').src =
        imgCollections.logoNightMode
      document.querySelector('.nav__hamburger--img').src =
        imgCollections.hamburgerNightMode
      document.querySelector('.search').src = imgCollections.searchIconNightMode
      document.querySelector('.shopping-cart').src =
        imgCollections.cartIconNightMode
      document.querySelector('.switch').src = imgCollections.switchIconSun
      document.querySelector('.footer__container__logo--img').src =
        imgCollections.logoNightMode
      document.querySelector('.fb').src = imgCollections.fbIconNightMode
      document.querySelector('.ig').src = imgCollections.igIconNightMode
      document.querySelector('.whatsapp').src =
        imgCollections.whatsappIconNightMode
    } else {
      document.querySelector('.nav__logo--img').src = imgCollections.logo
      document.querySelector('.nav__hamburger--img').src =
        imgCollections.hamburger
      document.querySelector('.search').src = imgCollections.searchIcon
      document.querySelector('.shopping-cart').src = imgCollections.cartIcon
      document.querySelector('.switch').src = imgCollections.switchIconMoon
      document.querySelector('.footer__container__logo--img').src =
        imgCollections.logo
      document.querySelector('.fb').src = imgCollections.fbIcon
      document.querySelector('.ig').src = imgCollections.igIcon
      document.querySelector('.whatsapp').src = imgCollections.whatsappIcon
    }
  }
}

renderNavCategory()
renderCitySelector()
calculateTotalAmount()
handleFreightDisplay()
renderCart()

hamburger.addEventListener('click', hamburgerOnClick)
cartContainer.addEventListener('click', adjustQty)
btnPanel.addEventListener('click', changeStep)
deliveryContainer.addEventListener('click', changeDelivery)
switchButton.addEventListener('click', switchMode)
