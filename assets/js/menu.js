// JS menu 
    
const menuBtn = document.querySelector('.js-menu-btn')
const menuWrapClose = document.querySelector('.main')
const menuContainer = document.querySelector('.js-menu-container')
const menuClose = document.querySelector('.js-menu-close')

// Hàm hiển thị menu (thêm class open vào menu)
function showMenu() {
    menuContainer.classList.add('open')
}

// Hàm ẩn menu (xóa class open)
function hideMenu() {
    menuContainer.classList.remove('open')

}

menuBtn.addEventListener('click', showMenu)
menuClose.addEventListener('click', hideMenu)
menuWrapClose.addEventListener('click', hideMenu)
menuContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
menuBtn.addEventListener('click', function (event) {
    event.stopPropagation()
})


const mobileMenuBtn = document.querySelector('.js-mobile-menu-btn')
const mobileMenuWrapClose = document.querySelector('.main')
const mobileMenuContainer = document.querySelector('.js-mobile-menu-container')
const mobileMenuClose = document.querySelector('.js-mobile-menu-close')

// Hàm hiển thị menu (thêm class open vào menu)
function showMobileMenu() {
    mobileMenuContainer.classList.add('open')
}

// Hàm ẩn menu (xóa class open)
function hideMobileMenu() {
    mobileMenuContainer.classList.remove('open')

}

mobileMenuBtn.addEventListener('click', showMobileMenu)
mobileMenuClose.addEventListener('click', hideMobileMenu)
mobileMenuWrapClose.addEventListener('click', hideMobileMenu)
mobileMenuContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
mobileMenuBtn.addEventListener('click', function (event) {
    event.stopPropagation()
})
