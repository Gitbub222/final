const dino = document.getElementById('dino');
const game = document.getElementById('game');

let isJumping = false;


function jump() {
    if (!isJumping) {
        isJumping = true;
        let position = 0;
        const jumpInterval = setInterval(() => {
            if (position === 200) {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (position === 0) {
                        clearInterval(fallInterval);
                        isJumping = false;
                    } else {
                        position -= 5;
                        dino.style.bottom = position + 'px';
                    }
                }, 20);
            } else {
                position += 5;
                dino.style.bottom = position + 'px';
            }
        }, 10);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

function createCactus() {
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left =  window.innerWidth+"px";
    game.appendChild(cactus);

    let cactusPosition = window.innerWidth;

    const moveCactus = setInterval(() => {
        if (cactusPosition < -30) {
            clearInterval(moveCactus);
            game.removeChild(cactus);
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';

            if (cactusPosition > 0 && cactusPosition < 50 && !isJumping) {
                clearInterval(moveCactus);
                window.location.reload();
            }
        }
    }, 20);

    setTimeout(createCactus, 3000);
}

createCactus();
