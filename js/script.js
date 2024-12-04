// particlesJS('particles-js', {
//     particles: {
//         number: { value: 130, density: { enable: true, value_area: 1000 } },
//         color: { value: "#ffffff" },
//         shape: { type: "circle" },
//         opacity: { value: 0.4, random: true },
//         size: { value: 6, random: true, anim: { enable: true, speed: 5, size_min: 3, sync: false } }, // Pulsing effect
//         line_linked: { enable: true, distance: 120, color: "#808080", opacity: 0.5, width: 3 },
//         move: {
//             enable: true,
//             speed: 2,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: { enable: false } // Ensures gravity effect only activates on drag
//         }
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "grab" // Particles "grab" towards the cursor, appearing to attract
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push" // Particles are pushed and briefly change color on click
//             },
//             onmousemove: {
//                 enable: true,
//                 mode: "attract" // Creates a gravity-like attraction on drag
//             }
//         },
//         modes: {
//             grab: {
//                 distance: 200,
//                 line_linked: { opacity: 0.2 } // Increases link opacity when hovering to simulate attraction
//             },
//             push: {
//                 particles_nb: 5, // Adds 5 particles on each click
//                 color: "#FF6347" // Changes color of new particles briefly on click
//             },
//             attract: {
//                 distance: 300,
//                 duration: 0.5, // Strong gravity effect on drag
//                 rotateX: 3000, // Adds a spin effect around X-axis for orbit effect
//                 rotateY: 3000 // Adds a spin effect around Y-axis for orbit effect
//             }
//         }
//     },
//     retina_detect: true
// });

particlesJS('particles-js', {
    particles: {
        number: {
            value: 130, // Moderate number of particles for balance
            density: { enable: true, value_area: 1000 }
        },
        color: { value: ["#ffffff", "#1da1f2", "#0077b5", "#ff6347"] }, // Dynamic colors for better vibrancy
        shape: {
            type: "circle",
            stroke: { width: 1, color: "#ffffff" }, // Subtle stroke to enhance particle visibility
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 2, opacity_min: 0.3, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: true, speed: 3, size_min: 1, sync: false } // Pulsing effect
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#606060", // Subtle grey for line linking
            opacity: 0.4,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 1.5, // Smooth movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "push" // Adds new particles on click
            }
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: { opacity: 0.5 }
            },
            push: {
                particles_nb: 3
            },
            bubble: {
                distance: 200,
                size: 8,
                duration: 1,
                opacity: 0.8,
                speed: 1
            },
        }
    },
    retina_detect: true
});

function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle navigation visibility
    menuIcon.classList.toggle('open'); // Rotate the icon

}




function scrollToSection(event, sectionId) {
    event.preventDefault();
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Expanded list of tech-related and positive emojis
const techEmojis = [
    '💻', '🤖', '🖥️', '🔧', '⚙️', '🧑‍💻', '🚀', '🧑‍🔧', '🛰️', '⚡', '💾', '🗜️', '🖱️', '⌨️',
    '🧬', '🔌', '🌐', '📡', '🖥️',
    '😄', '😊', '😎', '🌟', '🎉', '🥳', '💥', '🎯', '🏆', '🌞', '✨', '😃', '🏅', '🤩', '💡', '🔥', '🎈', '🎶' // More happy/positive emojis
];

// Function to generate a random emoji from the techEmojis list
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * techEmojis.length);
    return techEmojis[randomIndex];
}

// Function to change the emoji in the logo
function changeEmoji(event) {
    const newEmoji = getRandomEmoji();
    document.getElementById('emoji').textContent = newEmoji;
    scrollToSection(event, "#home");
}

// function handleContactForm() {
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

document.getElementById('sendMessage').addEventListener('click', (event) => {
    event.preventDefault();

    // Clear existing errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate inputs
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (!name) {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'A valid email is required.';
        isValid = false;
    }

    if (!message) {
        messageError.textContent = 'Message cannot be empty.';
        isValid = false;
    }

    // Submit if valid
    if (isValid) {
        fetch('https://example-mail-service.com/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                } else {
                    alert('Failed to send message. Please try again later.');
                }
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                alert('An error occurred. Please try again.');
            });
    }
});
// }


var typed = new Typed(".typing", {
    strings: [
        "Mobile App Developer.",
        "Computer Engineering Grad.",
        "Tech Enthusiast."
    ],
    typeSpeed: 95,
    backSpeed: 60,
    loop: true,
});

