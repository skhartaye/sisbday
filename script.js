document.addEventListener('DOMContentLoaded', () => {
    // Create more stars dynamically
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
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
        });
        cookie.addEventListener('mouseout', () => {
            cookie.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

function createConfetti() {
    const colors = ['#ffd700', '#ff69b4', '#87ceeb', '#98fb98', '#dda0dd'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
    }
}

// Add confetti styles dynamically
const style = document.createElement('style');
style.textContent = `
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
document.head.appendChild(style); 