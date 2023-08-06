const themeType = document.querySelector('#theme-type');
const themeOption = document.querySelector('#theme-choose');
const checkbox = document.querySelector('#checkbox')
const navBar = document.querySelector('#nav-bar')
const navbarItems = document.querySelectorAll('li[data-nav-item]') ?? []
const burgerNavButton = document.querySelector('#burger')
// const navbarOverlay = document.querySelector('#navbar-overlay')


window.addEventListener('resize',()=>{
    if(document.body.offsetWidth > 976 && burgerNavButton.checked){
        burgerNavButton.checked = false
        navBar.classList.add('hide-nav')
        navBar.classList.remove('show-nav')
    }
})
checkTheme()
prepareThemeTitle()
navbarItems?.forEach((li)=>{
    li.addEventListener('click',()=>{
        if(document.body.offsetWidth < 976)
            toggleNavbar(true);
    })
})
function checkTheme() {
    const themeColor = localStorage.getItem('theme-color') ?? ""
    if (themeColor === 'dark' || themeColor === "") {
        document.documentElement.classList.add('dark')
    } 
    else {
        document.documentElement.classList.remove('dark')
    }
}
function toggleTheme() {
    const themeColor = localStorage.getItem('theme-color') ?? ""
    if (themeColor === 'dark' || themeColor == "") {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme-color', 'light')
    }
    else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme-color', 'dark')
    }
    prepareThemeTitle()
}
function prepareThemeTitle() {
    const themeColor = localStorage.getItem('theme-color') ?? ""
    if (themeColor === "dark") {
        themeType.textContent = "DARK"
        themeOption.textContent = "LIGHT"
        checkbox.checked = true
    }
    else {
        themeOption.textContent = "DARK"
        themeType.textContent = "LIGHT"
        checkbox.checked = false
    }

}
function toggleNavbar(fromNavbar=false) {
    navBar.classList.toggle('hide-nav')
    navBar.classList.toggle('show-nav')
    if(fromNavbar)
    burgerNavButton.checked = false
}