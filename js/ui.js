export const elements = {
    textDisplay: document.getElementById('text-display'),
    typeInput: document.getElementById('type-input'),
    timeElem: document.getElementById('time'),
    wpmElem: document.getElementById('wpm'),
    accuracyElem: document.getElementById('accuracy'),
    progressBar: document.getElementById('progress-bar'),
    resultsPanel: document.getElementById('results-panel'),
    resultSummary: document.getElementById('result-summary'),
    keyboardLayout: document.getElementById('keyboard-layout'),
    leaderboardList: document.getElementById('leaderboard-list')
};

let performanceChart = null;

export function renderPerformanceChart(history) {
    const ctx = document.getElementById('performance-chart').getContext('2d');
    
    if (performanceChart) {
        performanceChart.destroy();
    }

    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: history.labels,
            datasets: [
                {
                    label: 'WPM',
                    data: history.wpm,
                    borderColor: '#eab308', 
                    backgroundColor: 'rgba(234, 179, 8, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    yAxisID: 'y',
                    fill: true
                },
                {
                    label: 'Errors',
                    data: history.errors,
                    borderColor: '#ff3333', 
                    backgroundColor: '#ff3333',
                    borderWidth: 0,
                    pointRadius: 4,
                    pointBackgroundColor: '#ff3333',
                    type: 'scatter',
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { labels: { color: '#f2d5d5' } },
                tooltip: { backgroundColor: '#240404', titleColor: '#f2d5d5', bodyColor: '#f2d5d5', borderColor: '#d31122', borderWidth: 1 }
            },
            scales: {
                x: { 
                    display: true, 
                    title: { display: true, text: 'Time (s)', color: '#6a4c4c' },
                    grid: { color: '#3d0a0a' },
                    ticks: { color: '#6a4c4c' }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: { display: true, text: 'WPM', color: '#6a4c4c' },
                    grid: { color: '#3d0a0a' },
                    ticks: { color: '#6a4c4c' },
                    min: 0
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: { display: true, text: 'Errors', color: '#6a4c4c' },
                    grid: { drawOnChartArea: false },
                    ticks: { color: '#ff3333', stepSize: 1 },
                    min: 0
                }
            }
        }
    });
}

export function setupVisualKeyboard() {
    const rows = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m'],
        [' ']
    ];
    
    elements.keyboardLayout.innerHTML = '';
    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'kb-row';
        row.forEach(key => {
            const keyDiv = document.createElement('div');
            keyDiv.className = key === ' ' ? 'key spacebar' : 'key';
            keyDiv.id = `key-${key === ' ' ? 'space' : key}`;
            keyDiv.innerText = key === ' ' ? 'SPACE' : key.toUpperCase();
            rowDiv.appendChild(keyDiv);
        });
        elements.keyboardLayout.appendChild(rowDiv);
    });
}

export function updateHeatmap(keyStats, maxErrors) {
    document.querySelectorAll('.key').forEach(k => {
        k.style.backgroundColor = 'transparent';
        k.style.borderColor = '#6a4c4c';
    });
    
    for (const [key, errors] of Object.entries(keyStats)) {
        const keyId = `key-${key === ' ' ? 'space' : key.toLowerCase()}`;
        const keyElement = document.getElementById(keyId);
        
        if (keyElement && errors > 0) {
            const intensity = Math.min(1, 0.3 + (errors / maxErrors) * 0.7);
            keyElement.style.backgroundColor = `rgba(255, 51, 51, ${intensity})`;
            keyElement.style.borderColor = 'rgba(255, 51, 51, 1)';
        }
    }
}

export function updateCursorAndTarget(spanArray, newLength, prevLength, typedChar, expectedChar) {
    if (newLength > prevLength && spanArray[newLength - 1]) {
        const targetSpan = spanArray[newLength - 1];
        if (typedChar === expectedChar) {
            targetSpan.classList.add('correct');
        } else {
            targetSpan.classList.add('incorrect');
        }
        targetSpan.classList.remove('active');
    } else if (newLength < prevLength && spanArray[prevLength - 1]) {
        const deletedSpan = spanArray[prevLength - 1];
        deletedSpan.className = '';
    }

    if (spanArray[prevLength]) spanArray[prevLength].classList.remove('active');
    if (spanArray[newLength]) spanArray[newLength].classList.add('active');
}
