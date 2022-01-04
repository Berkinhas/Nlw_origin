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


const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function headerScroll() {

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
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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


const backButton = document.querySelector('.back')
function backButtonScroll() {
  if (window.scrollY >= 560) {
    backButton.classList.add('show')
  }else {
    backButton.classList.remove('show')
  }
  
}

const sections = document.querySelectorAll('main section[id]')
function activateMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop 
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    }else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}


window.addEventListener('scroll', () => {
  headerScroll()
  backButtonScroll()
  activateMenu()
})