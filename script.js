particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: .8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }

    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    let scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Existing contact modal functionality
    const contactModal = document.getElementById('contactModal');
    const contactBtn = document.getElementById('contactBtn');
    const contactSpan = contactModal.querySelector('.close');

    contactBtn.onclick = function () {
        contactModal.style.display = 'block';
    }

    contactSpan.onclick = function () {
        contactModal.style.display = 'none';
    }

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        emailjs.init({
            publicKey: 'bt8_omGuR2xWhU3NY',
        });

        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
                alert('Email sent successfully!');
                contactModal.style.display = 'none';
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again later.');
            });
    });

    // New project modal functionality
    const projectModal = document.getElementById("projectModal");
    const projectSpan = projectModal.querySelector(".close");
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const title = this.querySelector('h1').textContent;
            const description = this.querySelector('p').textContent;
            const imgElement = this.querySelector('img');

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;

            const modalImage = document.getElementById('modalImage');
            if (imgElement && imgElement.src) {
                modalImage.src = imgElement.src;
                modalImage.style.display = 'block';
            } else {
                modalImage.style.display = 'none';
            }

            projectModal.style.display = "block";
        });
    });

    projectSpan.onclick = function () {
        projectModal.style.display = "none";
    }

    // Combined window click event for both modals
    window.onclick = function (event) {
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
        if (event.target == projectModal) {
            projectModal.style.display = "none";
        }
    }
});