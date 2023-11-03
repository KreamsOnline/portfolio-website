particlesJS("particles-js", {
    particles: {
        number: {
            value: 80, // Adjust the number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#3498db" // Set the particle color
        },
        shape: {
            type: "circle" // Change the particle shape if desired
        },
        opacity: {
            value: 0.6
        },
        size: {
            value: 2 // Adjust the particle size
        },
        move: {
            enable: true,
            speed: 2 // Adjust particle speed
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});
