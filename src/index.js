const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#header')


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

const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

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
#contacts .text, #contacts .links

`, {interval: 100})

