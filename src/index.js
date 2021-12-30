const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const el of toggle) {
  el.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}


function headerScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
  
}

const swiper = new Swiper('.swiper',{
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  mousewheel: true,
  keyboard: true
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services card,
#testmonials header, #testmonials testmonials,
#contacts .text, #contacts .links,
footer .brand, footer .social

`, {interval: 100})


function backButtonScroll() {
  const backButton = document.querySelector('.back')
  if (window.scrollY >= 560) {
    backButton.classList.add('show')
  }else {
    backButton.classList.remove('show')
  }
  
}

window.addEventListener('scroll', () => {
  headerScroll()
  backButtonScroll()
})