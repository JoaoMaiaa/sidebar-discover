let menu = document.getElementById('icon-menu')



menu.addEventListener('click', ()=>{
    let element = document.querySelectorAll('li')

    let iconPlus = document.getElementById('icon-plus')

    let sidebar = document.getElementById('sidebar')

    if(sidebar.style.width == '200px'){
        sidebar.style.width = '36px'
        element.forEach((e)=>{
            e.classList.add('none')
        })
    }else{
        element.forEach((e)=>{
            e.classList.remove('none')
        })
        sidebar.style.width = '200px'
    }
    console.log(element)
    
})