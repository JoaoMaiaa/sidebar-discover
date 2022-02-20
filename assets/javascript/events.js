let menu = document.getElementById('icon-menu')

menu.addEventListener('click', ()=>{

    let element = document.querySelectorAll('li')

    // let iconPlus = document.getElementById('icon-plus')

    let sidebar = document.getElementById('sidebar')

    if(sidebar.style.width == '36px'){
        sidebar.style.width = '200px'
        sidebar.classList.add('animation')
        iconPlus.classList.remove('none')
        element.forEach((e)=>{
            e.classList.add('block')
        })
    }else{
        sidebar.style.width = '36px'
        iconPlus.classList.add('none')
        sidebar.classList.add('animation')
        element.forEach((e)=>{
            e.classList.remove('block')
        })
    }
    console.log(element)
    
})