document.querySelectorAll("nav a").forEach((element) => {
    element.addEventListener('click', () => {
        hideNav()
    })
    element.addEventListener('keydown', (e) => {
        if (e.key != "Enter") {
            return
        }
        hideNav()
    })
})

const body = document.querySelector('body')
var backToTop = document.querySelector(".nav-link.hide")

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll < 560) {
        backToTop.classList.remove("appear")
        backToTop.classList.add("hide")
        return
    }
    backToTop.classList.remove("hide")
    backToTop.classList.add("appear")
    point = document.querySelector('[type="submit"]').getBoundingClientRect().bottom + window.scrollY
    if (scroll > point) {
        hideNav()
    }
})

function hideNav() {
    document.querySelector(".navbar-collapse").classList.remove('show')
    document.querySelector(".navbar-toggler").classList.add('collapsed')
    document.querySelector(".navbar-toggler").setAttribute('aria-expanded', 'false')
}