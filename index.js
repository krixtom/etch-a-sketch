const gridContainer = document.querySelector('.grid-container');
const generateGridBtn = document.querySelector('.generate-button');


generateGridBtn.addEventListener('click', () => {
    const gridSizeString = prompt('Please enter a grid size from 1 to 100');
    const gridSizeNumber = Number(gridSizeString);
    generateGrid(gridSizeNumber);
});


function getRandomRgb() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

}

function generateGrid(size) {
    gridContainer.innerHTML = '';

    if(typeof(size) === 'number' && size > 0 && size < 101 ) {
        for(let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');

            for(let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                row.appendChild(cell)

                cell.addEventListener('mouseover', (e) => {
                    e.target.style.backgroundColor = getRandomRgb();
                })

                cell.addEventListener('mouseout', (e) => {
                    e.target.style.backgroundColor = 'purple';
                })
            }
            gridContainer.appendChild(row);
        }
    } else {
        alert('Hey fella, please enter the value as it is specified');
    }
}

