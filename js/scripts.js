window.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video');
    const container = document.querySelector('.bouncing-video');
    
    let posX = Math.random() * (container.clientWidth - video.clientWidth);
    let posY = Math.random() * (container.clientHeight - video.clientHeight);
    let speedX = 2 + Math.random() * 3;
    let speedY = 2 + Math.random() * 3;

    function moveVideo() {
        posX += speedX;
        posY += speedY;

        if (posX <= 0 || posX + video.clientWidth >= container.clientWidth) {
            speedX = -speedX;
        }

        if (posY <= 0 || posY + video.clientHeight >= container.clientHeight) {
            speedY = -speedY;
        }

        video.style.left = `${posX}px`;
        video.style.top = `${posY}px`;

        requestAnimationFrame(moveVideo);
    }

    moveVideo();
});
