let menu = document.getElementById('icon-menu')

menu.addEventListener('click', () => {

    // alert('ok')

    let element = document.querySelectorAll('li')

    let img = document.getElementById('img')

    let iconPlus = document.getElementById('icon-plus')

    let sidebar = document.getElementById('sidebar')

    if (sidebar.style.width == '36px') {

        sidebar.style.width = '200px'
        sidebar.classList.add('animation')
        img.classList.remove('none')
        element.forEach((e) => {
            e.classList.add('animation')
            e.classList.remove('none')
            iconPlus.classList.remove('none')
        })

    } else {

        sidebar.style.width = '36px'
        sidebar.classList.add('animation')
        img.classList.add('none')
        element.forEach((e) => {
            e.classList.add('none')
            e.classList.add('animation')
            iconPlus.classList.add('none')
        })

    }

})