import { GRID_SIZE, CELL_SIZE, PIECE_SIZE, TOTAL_PIECES } from './constants.js';
import { shuffleArray, showWin } from './utils.js';

let piecesData = [];
let placedCount = 0;

export function initDragPuzzle(imgUrl) {
    const grid = document.getElementById('target-grid');
    grid.innerHTML = `<img id="ghost-image" src="${imgUrl}"><div id="grid-overlay"></div>`;
    grid.ondragover = (e) => e.preventDefault();
    grid.ondrop = handleDrop;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = GRID_SIZE * CELL_SIZE;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const container = document.getElementById('pieces-container');
        container.innerHTML = '';
        piecesData = [];

        for (let y = 0; y < GRID_SIZE; y++) {
            for (let x = 0; x < GRID_SIZE; x++) {
                const index = y * GRID_SIZE + x;
                const pCanvas = document.createElement('canvas');
                pCanvas.width = pCanvas.height = CELL_SIZE; // ကွက်တိလေးထောင့်ယူမယ်
                pCanvas.getContext('2d').drawImage(canvas, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE, 0, 0, CELL_SIZE, CELL_SIZE);
                
                const piece = document.createElement('div');
                piece.className = 'piece';
                piece.draggable = true;
                piece.style.backgroundImage = `url(${pCanvas.toDataURL()})`;
                piece.dataset.index = index;
                piece.ondragstart = (e) => e.dataTransfer.setData('text', index);
                
                piecesData.push({ id: index, element: piece, placed: false });
            }
        }
        shuffleArray(piecesData);
        piecesData.forEach(p => container.appendChild(p.element));
    };
    img.src = imgUrl;
}

function handleDrop(e) {
    e.preventDefault();
    const index = parseInt(e.dataTransfer.getData('text'));
    const piece = piecesData.find(p => p.id === index);
    const grid = document.getElementById('target-grid');
    const rect = grid.getBoundingClientRect();
    const cellSize = grid.clientWidth / GRID_SIZE;

    const col = Math.floor((e.clientX - rect.left) / cellSize);
    const row = Math.floor((e.clientY - rect.top) / cellSize);
    const targetIndex = row * GRID_SIZE + col;
    
    if (targetIndex === index && !piece.placed) {
        piece.placed = true;
        placedCount++;
        document.getElementById('pieces-placed').innerText = placedCount;
        
        grid.appendChild(piece.element);
        
        // ကွက်တိ Rectangle ပုံစံ နေရာချခြင်း
        Object.assign(piece.element.style, {
            position: 'absolute',
            left: (col * cellSize) + 'px',
            top: (row * cellSize) + 'px',
            width: (cellSize + 0.5) + 'px', // gap မရှိစေရန် 0.5px ပိုပေါင်းပေးသည်
            height: (cellSize + 0.5) + 'px',
            margin: '0',
            borderRadius: '0', // ဝိုင်းနေလျှင် လေးထောင့်ပြန်လုပ်သည်
            border: 'none',
            transform: 'none'
        });
        
        piece.element.classList.add('placed');
        piece.element.draggable = false;

        if (placedCount === TOTAL_PIECES) {
            setTimeout(showWin, 800);
        }
    }
}