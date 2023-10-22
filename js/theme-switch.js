var switchTheme = document.querySelector('nav .theme-switch')

// event listener to the "switch" itself
switchTheme.addEventListener('click', () => {
    selectTheme()
})

switchTheme.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (e.key != "Enter") {
        return
    }
    selectTheme()
})

// bit for loading save or prefered theme, preference is given to saved
document.onload = FirstCheck()
function FirstCheck() {
    if(!window.matchMedia && !(localStorage.getItem("theme"))) {
        return;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.setAttribute("data-darkMode", "1")
    }
    if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") == 'light' ) {
                toLight()
                return
            }
            toDark()
        }
    }


// it will: switch to the theme, save selected theme locally, and set body attribute for theme-specific styling
function selectTheme() {
    if (body.getAttribute("data-darkMode") == "1") {
        toLight()
    } else{
        toDark()
    }
}

function toDark() {
    body.setAttribute("data-darkMode", "1")
    localStorage.setItem('theme', 'dark')
}

function toLight() {
    body.setAttribute("data-darkMode", "0")
    localStorage.setItem('theme', 'light')
}