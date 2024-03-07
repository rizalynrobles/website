document.addEventListener("DOMContentLoaded", function() {
    const promotion1 = document.querySelector(".Promotion1");
    const images = promotion1.querySelectorAll("img");
    const imageCount = images.length;
    const imageWidth = promotion1.offsetWidth;
    let currentIndex = 0;
    const intervalTime = 3000;

    
    for (let i = 1; i < imageCount; i++) {
        images[i].style.display = "none";
        images[i].style.transition = "opacity 0.5s ease"
    }

    
    function switchToNextImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % imageCount;
        images[currentIndex].style.display = "block";
    }

    
    const interval = setInterval(switchToNextImage, intervalTime);

    
    promotion1.addEventListener('mouseenter', function() {
        clearInterval(interval);
    });

   
    promotion1.addEventListener('mouseleave', function() {
        interval = setInterval(switchToNextImage, intervalTime);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const now = new Date().getTime();
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
    const targetDate = now + twoDaysInMillis;

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const countdownElement = document.querySelector(".Product-count p");
        countdownElement.textContent = `NEW PRODUCT IN: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "NEW PRODUCT ARRIVED!";
        }
    }, 1000);
});

