export function saveScore(wpm, accuracy, difficulty) {
    let scores = JSON.parse(localStorage.getItem('typeMasterScores')) || [];
    scores.push({ wpm, accuracy, difficulty, date: new Date().toLocaleDateString() });
    
    scores.sort((a, b) => b.wpm - a.wpm);
    scores = scores.slice(0, 5);
    localStorage.setItem('typeMasterScores', JSON.stringify(scores));
    
    return scores;
}
