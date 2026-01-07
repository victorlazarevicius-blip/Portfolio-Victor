/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    if (navMenu) {
        navMenu.classList.remove('show')
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector(
            '.nav__menu a[href*=' + sectionId + ']'
        )
        
        if(sectionsClass){
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
})

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{})
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400})
sr.reveal('.home__social-icon',{ interval: 200})
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200})
sr.reveal('.img-revista img', { delay: 300, interval: 200 })
sr.reveal('.about-revista', { delay: 300, interval: 200 })

/*==================== LOAD MORE ====================*/
let loadMoreBtn = document.querySelector('.button_load_more')
let currentItem = 3

if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
        let boxes = [...document.querySelectorAll('.work__container .work__img')]
        for (let i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
            boxes[i].style.display = 'inline-block'
        }
        currentItem += 3

        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = 'none'
        }
    }

    // Esconde os itens extras inicialmente
    document.addEventListener('DOMContentLoaded', () => {
        let boxes = [...document.querySelectorAll('.work__container .work__img')]
        boxes.forEach((box, index) => {
            if (index >= 3) box.style.display = 'none'
        })
    })
}
