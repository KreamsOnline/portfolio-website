window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Trigger animations when the page loads
    const nameElement = document.querySelector('.name');
        const skillsElement = document.querySelector('.skills');
        const aboutMeElement = document.querySelector('.about-me');

        // Delay the animation for 2 seconds
        setTimeout(() => {
            nameElement.classList.remove('active');
            skillsElement.classList.remove('active');
            aboutMeElement.classList.add('active');
            nameElement.style.animation = "none";
            skillsElement.style.animation = "none";
        }, 10000);
});

const backToTopBtn = document.getElementById('backToTopBtn');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const cards = document.querySelectorAll('.cardz');

// Create a GSAP timeline
const tl = gsap.timeline({ defaults: { duration: 1 }, });

// Set the initial state (off-screen to the right)
tl.set(cards, { x: '100%' });

// Animate the cards to slide in from right to left
tl.to(cards, { x: '0%', stagger: 0.3, ease: 'power4.out' });

// Optionally, add animation for auto-sliding
tl.to(cards, { x: '-100%', stagger: 0.3, ease: 'power4.in', delay: 2 }, '+=2');
tl.to(cards, { x: '0%', stagger: 0.3, ease: 'power4.out' });

// Trigger the animation when the page loads
window.addEventListener('load', () => {
    tl.play();
  });
  
  // Optionally, trigger the animation on button click
  const startButton = document.getElementById('startButton'); // Add a button with id="startButton"
  startButton.addEventListener('click', () => {
    tl.restart();
  });
  

  const button = document.querySelector('.button');


const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}




gsap.to('.project-overview', { rotation: 360, x: 100, duration: 1 })

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

window.addEventListener('scroll', () => {
    const container = document.querySelector('.hero');
    const content = document.querySelector('.hero-container');
    const scrollValue = window.scrollY;

    // Adjust the animation speed and other properties as needed
    container.style.animation = `scrollAnimation 10s infinite`;
    content.style.opacity = 1 - scrollValue * 0.002;
});