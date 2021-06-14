function theme() {
    const toggleTheme = document.querySelector('.sct-theme__toggle')
    let el = document.documentElement

    toggleTheme.addEventListener('click', () => {
        if(el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme')
            localStorage.removeItem('theme')
        } else {
            el.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    })

    if(localStorage.getItem('theme') !== null) {
        el.setAttribute('data-theme', 'dark')
    }
}

theme()

//2 stroke '.toggle-theme' is html class of button (u can rename this class in html, but u must rename this class in js)