// Choose List Js

const chooseBtn = document.querySelector('.js-choose-btn')
const chooseList = document.querySelector('.js-choose-list')

const chooseClose = document.querySelector('.main')

function showChoosList() {
    chooseList.classList.add('open')
}

function hideChoosList() {
    chooseList.classList.remove('open')
}

chooseBtn.addEventListener('click',showChoosList)
chooseClose.addEventListener('click',hideChoosList)
chooseList.addEventListener('click',function (event) {
    event.stopPropagation()
})
chooseBtn.addEventListener('click',function (event) {
    event.stopPropagation()
})
