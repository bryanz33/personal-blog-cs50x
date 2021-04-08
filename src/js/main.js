
const ShowMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('show')
        })
    }
} 
showMenu('nav-toggle', 'nav-menu') 

const NavLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    
    const NavMenu = document/getElementsById('nav-menu')
    NavMenu.classList.remove('remove')
}

navlink.forEach(n => n.addEventListener('click', linkAction))
