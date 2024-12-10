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

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;

    if (form.checkValidity()) {
        // If the form is valid, proceed with email sending
        sendEmail();
    }
});

function validateName() {
    const name = document.getElementById("name").value;

    if (name.trim() === "") {
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;

    if (email.trim() === "") {
        return false;
    }
    else if (!validateEmailFormat(email)) {
        return false;
    }
    else {
        return true;
    }
}

function validateEmailFormat(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validateMessage() {
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
        return false;
    } else {
        return true;
    }
}
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-center",  // Position the toast at the top-center
    "preventDuplicates": true,
    "showDuration": "300",  // Toast show duration in milliseconds
    "hideDuration": "1000",  // Toast hide duration in milliseconds
    "timeOut": "5000",  // How long the toast stays visible (in milliseconds)
    "extendedTimeOut": "1000"  // How long after the user hovers before the toast disappears
};
function sendEmail() {

    emailjs.init("FreNCnKw2jdF8hImx");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };
    emailjs.send('service_cjp6w3d', 'template_k5cuubd', templateParams)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log('Success:', response);
        }, function (error) {
            alert("There was an error sending your message. Please try again.");
            console.log('Error:', error);
        });
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
}


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

