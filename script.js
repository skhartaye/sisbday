document.addEventListener('DOMContentLoaded', () => {
    // Create more stars dynamically
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }

    // Add confetti effect when the page loads
    createConfetti();

    // Add hover effects to cookie characters
    const cookies = document.querySelectorAll('.cookie');
    cookies.forEach(cookie => {
        cookie.addEventListener('mouseover', () => {
            cookie.style.transform = 'scale(1.2) rotate(5deg)';
            createSparkles(cookie);
        });
        cookie.addEventListener('mouseout', () => {
            cookie.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add click effect to main cookie character
    const mainCookie = document.querySelector('.cookie-character img');
    mainCookie.addEventListener('click', () => {
        createSpecialEffect(mainCookie);
    });

    // Add floating animation to birthday card
    const card = document.querySelector('.birthday-card');
    card.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        card.style.transform = `
            perspective(1000px)
            rotateY(${x * 10}deg)
            rotateX(${y * -10}deg)
            translateZ(10px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

function createConfetti() {
    const colors = ['#ffd700', '#ff69b4', '#87ceeb', '#98fb98', '#dda0dd'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
    }
}

function createSparkles(element) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

function createSpecialEffect(element) {
    const colors = ['#ffd700', '#ff69b4', '#87ceeb'];
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Add sparkle styles
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    .sparkle {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: #ffd700;
        border-radius: 50%;
        animation: sparkle 1s ease-out forwards;
    }

    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1) rotate(180deg);
            opacity: 0;
        }
    }

    .particle {
        position: fixed;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        animation: particle 1s ease-out forwards;
    }

    @keyframes particle {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1) translate(100px, 100px);
            opacity: 0;
        }
    }

    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: #ffd700;
        opacity: 0.7;
        animation: fall 5s linear infinite;
        z-index: 1000;
    }

    @keyframes fall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle); 