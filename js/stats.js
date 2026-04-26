export function calculateAccuracy(totalKeystrokes, totalErrors) {
    if (totalKeystrokes === 0) return 100;
    let acc = ((totalKeystrokes - totalErrors) / totalKeystrokes) * 100;
    return Math.max(0, Math.round(acc));
}

export function calculateWPM(correctChars, startTime) {
    if (!startTime) return 0;
    const timeElapsedMinutes = (Date.now() - startTime) / 60000;
    if (timeElapsedMinutes <= 0) return 0;
    return Math.max(0, Math.round((correctChars / 5) / timeElapsedMinutes));
}

export function getPerformanceMessage(wpm, accuracy) {
    if (wpm > 80 && accuracy >= 95) return "S-Rank: Elite Operative 🔥";
    if (wpm > 60) return "A-Rank: Excellent Speed 🚀";
    if (wpm > 40) return "B-Rank: Solid Execution ⚡";
    return "C-Rank: Needs Training 💪";
}
