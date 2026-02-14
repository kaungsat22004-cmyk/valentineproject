export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function showWin() {
    const msg = document.getElementById('message');
    if (msg) msg.style.display = 'flex';
    setTimeout(() => {
        window.location.href = 'next.html';
    }, 2500);
}