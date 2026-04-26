import { initAudio, playSound } from './sound.js';
import { saveScore } from './storage.js';
import { calculateAccuracy, calculateWPM, getPerformanceMessage } from './stats.js';
import { elements, setupVisualKeyboard, updateHeatmap, updateCursorAndTarget } from './ui.js';

const texts = {
    easy: ["the quick brown fox jumps over the lazy dog", "frontend development requires practice and logic"],
    medium: ["Performance optimization is crucial when manipulating the DOM.", "Separation of concerns leads to scalable application architecture."],
    hard: ["document.getElementById('app').insertAdjacentHTML('beforeend', template);", "const calculateWPM = (correct, time) => Math.round((correct/5)/time);"]
};

let gameState = {
    isPlaying: false,
    startTime: null,
    timerInterval: null,
    currentText: "",
    previousLength: 0,
    totalKeystrokes: 0, 
    totalErrors: 0,
    correctCharsCount: 0,
    keyStats: {} 
};

document.addEventListener('keydown', (e) => {
    initAudio(); 
    if (gameState.isPlaying && !e.repeat && e.key.length === 1) {
        gameState.totalKeystrokes++;
    }
}, { capture: true });

function initGame() {
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);

    const diff = document.getElementById('difficulty-select').value;
    gameState.currentText = texts[diff][Math.floor(Math.random() * texts[diff].length)];
    
    elements.textDisplay.innerHTML = '';
    gameState.currentText.split('').forEach(char => {
        let span = document.createElement('span');
        span.innerText = char;
        elements.textDisplay.appendChild(span);
    });
    
    elements.typeInput.value = '';
    elements.typeInput.disabled = false;
    gameState = { ...gameState, isPlaying: false, startTime: null, previousLength: 0, totalKeystrokes: 0, totalErrors: 0, correctCharsCount: 0, keyStats: {}, timerInterval: null };
    
    if (elements.textDisplay.children[0]) elements.textDisplay.children[0].classList.add('active');
    
    elements.timeElem.innerText = document.getElementById('time-select').value;
    elements.wpmElem.innerText = 0;
    elements.accuracyElem.innerText = 100;
    elements.progressBar.style.width = '0%';
    elements.resultsPanel.classList.add('hidden');
    setupVisualKeyboard();
    
    elements.typeInput.focus();
}

elements.typeInput.addEventListener('input', () => {
    if (!gameState.isPlaying) {
        startTimer();
        gameState.isPlaying = true;
    }

    playSound('keypress');
    
    const typedVal = elements.typeInput.value;
    const newLength = typedVal.length;
    const spanArray = elements.textDisplay.children;
    const expectedChar = gameState.currentText[newLength - 1];
    const typedChar = typedVal[newLength - 1];

    if (newLength > gameState.previousLength) {
        if (typedChar !== expectedChar && expectedChar) {
            gameState.totalErrors++;
            gameState.keyStats[expectedChar] = (gameState.keyStats[expectedChar] || 0) + 1;
            playSound('error');
        } else if (typedChar === expectedChar) {
            gameState.correctCharsCount++;
        }
    } else if (newLength < gameState.previousLength && gameState.previousLength > 0) {
        const deletedSpan = spanArray[gameState.previousLength - 1];
        if (deletedSpan && deletedSpan.classList.contains('correct')) {
            gameState.correctCharsCount = Math.max(0, gameState.correctCharsCount - 1);
        }
    }

    updateCursorAndTarget(spanArray, newLength, gameState.previousLength, typedChar, expectedChar);
    
    gameState.previousLength = newLength;
    updateLiveStats(gameState.currentText.length);

    if (newLength >= spanArray.length) endGame();
});

function startTimer() {
    gameState.startTime = Date.now();
    const totalTime = parseInt(document.getElementById('time-select').value);
    
    gameState.timerInterval = setInterval(() => {
        const timeElapsed = (Date.now() - gameState.startTime) / 1000;
        const timeLeft = Math.max(0, totalTime - timeElapsed);
        
        elements.timeElem.innerText = Math.round(timeLeft);
        updateLiveStats(gameState.currentText.length);

        if (timeLeft <= 0) endGame();
    }, 100);
}

function updateLiveStats(totalLength) {
    elements.accuracyElem.innerText = calculateAccuracy(gameState.totalKeystrokes, gameState.totalErrors);
    elements.wpmElem.innerText = calculateWPM(gameState.correctCharsCount, gameState.startTime);
    const progressPercent = totalLength > 0 ? (gameState.correctCharsCount / totalLength) * 100 : 0;
    elements.progressBar.style.width = `${Math.min(100, progressPercent)}%`;
}

function endGame() {
    clearInterval(gameState.timerInterval);
    elements.typeInput.disabled = true;
    gameState.isPlaying = false;
    playSound('success');
    
    const finalWPM = parseInt(elements.wpmElem.innerText) || 0;
    const finalAccuracy = parseInt(elements.accuracyElem.innerText) || 0;
    
    elements.resultSummary.innerText = getPerformanceMessage(finalWPM, finalAccuracy);
    
    const scores = saveScore(finalWPM, finalAccuracy, document.getElementById('difficulty-select').value);
    elements.leaderboardList.innerHTML = scores.map((s, i) => 
        `<li><span>#${i + 1} - ${s.difficulty.toUpperCase()}</span> <span>${s.wpm} WPM (${s.accuracy}%)</span></li>`
    ).join('');

    const errorValues = Object.values(gameState.keyStats);
    const maxErrors = errorValues.length > 0 ? Math.max(...errorValues) : 1;
    updateHeatmap(gameState.keyStats, maxErrors);
    
    elements.resultsPanel.classList.remove('hidden');
}

document.getElementById('restart-btn').addEventListener('click', initGame);
document.getElementById('difficulty-select').addEventListener('change', initGame);
document.getElementById('time-select').addEventListener('change', initGame);

initGame();
