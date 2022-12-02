const navMenu = document.getElementById('nav-menu'),
      navToggle  = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show Menu 
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// Hide Menu 
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// Close Menu Mobile 
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')

  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))

// Swiper Project 
let swiperProjects = new Swiper(".projects_container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidePreview: 2,
      spaceBetween: -56,
    },
  },
});

// Testimonials Swiper 
let swiperTestimonials = new Swiper(".testimonials_container", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

// Email js
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
  
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent =  'Please fill out all the input fields ❌'
  } else {
    emailjs.sendForm('service_u58i1xy', 'template_uw40q58', '#contact-form', 'rw8QFgNk9EGWUWiM9')
      .then(() => {
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ✅'

        setTimeout(() => {
          contactMessage.textContent = ''
      }, 5000)
      
    }, (error) => {
      alert('O, OWH! Something Went Wrong...', error)
    })

    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Show Scroll Up 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Change Background Header 
const scrollHeader  = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Scroll Reveal 
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home_data, .projects_container, .testimonials_container, .footer_container')
sr.reveal('.home_info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills_content:nth-child(1), .contact_content:nth-child(1)', { origin: 'left'})
sr.reveal('.skills_content:nth-child(2), .contact_content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification_content, .services_card', {interval: 100})