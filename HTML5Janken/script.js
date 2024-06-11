const playerOptions = document.querySelectorAll('.player-options button');
const playerChoiceDiv = document.getElementById('player-choice');
const cpuChoiceDiv = document.getElementById('cpu-choice');
const resultText = document.getElementById('result-text');

const choices = ['グー', 'パー', 'チョキ'];

let cpuImages = ['1', '2', '3'];
let currentCpuImageIndex = 0;

playerOptions.forEach(option => {
    option.addEventListener('click', () => {
        const playerChoice = option.textContent;
        const cpuChoice = getCpuChoice();

        playerChoiceDiv.textContent = playerChoice;
        cpuChoiceDiv.textContent = cpuChoice;

        const result = getResult(playerChoice, cpuChoice);
        resultText.textContent = result;

        if (result === '勝ちました！') {
            updateCpuImage();
        }
    });
});

function getCpuChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(player, cpu) {
    if (player === cpu) {
        return '引き分け！';
    }

    if (
        (player === 'グー' && cpu === 'チョキ') ||
        (player === 'パー' && cpu === 'グー') ||
        (player === 'チョキ' && cpu === 'パー')
    ) {
        return '勝ちました！';
    } else {
        return '負けました。';
    }
}

function updateCpuImage() {
    currentCpuImageIndex = (currentCpuImageIndex + 1) % cpuImages.length;
    cpuChoiceDiv.textContent = `CPU ${cpuImages[currentCpuImageIndex]}`;
}
