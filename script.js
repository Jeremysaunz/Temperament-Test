const questions = [
    { q: 1, options: ["새로운 사람이나 상황에 쉽게 에너지가 살아난다", "새로운 도전에 비교적 거리낌이 없다", "상황을 분석하고 이해하려는 경향이 있다", "상황에 맞게 유연하게 조율하는 편이다"] },
    { q: 2, options: ["분위기를 밝게 만드는 편이다", "자신의 의견을 설득력 있게 전달하려 한다", "한 번 시작한 일은 끝까지 해내려 한다", "감정 기복이 크지 않은 편이다"] },
    { q: 3, options: ["사람들과 어울리는 데서 힘을 얻는다", "목표가 생기면 강하게 밀어붙이는 편이다", "타인을 위해 자신의 것을 내어주는 경우가 많다", "주어진 환경에 비교적 잘 적응한다"] },
    { q: 4, options: ["첫인상에서 호감을 주는 편이다", "경쟁 상황에서 동기부여를 느낀다", "사람의 마음이나 입장을 잘 헤아린다", "감정을 겉으로 드러내기보다는 안에 두는 편이다"] },
    { q: 5, options: ["새로운 아이디어를 떠올리는 것을 좋아한다", "문제 해결 능력이 뛰어나다는 평가를 받는다", "타인을 존중하려는 태도를 중요하게 여긴다", "처음 만나는 상황에서는 조심스러운 편이다"] },
    { q: 6, options: ["활동적인 상황에서 기분이 좋아진다", "혼자 결정하고 실행하는 것을 선호한다", "감정 변화에 민감한 편이다", "타인의 의견을 잘 받아들이는 편이다"] },
    { q: 7, options: ["자연스럽게 주도권을 잡는 경우가 많다", "상황을 긍정적으로 해석하려 한다", "계획을 세우고 따르는 것을 중요하게 여긴다", "인내심이 비교적 강하다"] },
    { q: 8, options: ["즉각적으로 반응하고 행동하는 편이다", "자신의 선택에 확신을 갖는 편이다", "정해진 절차나 계획을 따르는 것이 편하다", "말수는 많지 않은 편이다"] },
    { q: 9, options: ["전반적으로 낙관적인 시각을 갖고 있다", "생각과 감정을 비교적 솔직하게 표현한다", "정리정돈과 체계를 중요하게 여긴다", "다양한 사람을 포용하려는 편이다"] },
    { q: 10, options: ["이야기를 재미있게 풀어내는 편이다", "자신의 기준과 관점이 분명하다", "주변에서 신뢰할 만한 사람으로 여겨진다", "친절하고 배려하려는 태도가 있다"] },
    { q: 11, options: ["삶에서 즐거움을 찾는 편이다", "위험 상황에서도 과감해질 때가 있다", "세부적인 부분까지 신경 쓰는 편이다", "대인관계에서 부드럽게 조율한다"] },
    { q: 12, options: ["표정과 말투가 밝은 편이다", "자신에 대한 믿음이 비교적 강하다", "품위와 예의를 중요하게 여긴다", "안정적인 상태를 선호한다"] },
    { q: 13, options: ["외부 자극에 쉽게 동기부여를 받는다", "독립적으로 판단하고 움직이는 편이다", "이상적인 가치와 의미를 중요하게 여긴다", "온화하고 순한 인상을 주는 편이다"] },
    { q: 14, options: ["자신의 생각을 표현하는 데 익숙하다", "결정을 내릴 때 빠른 편이다", "한 가지에 깊이 몰입하는 편이다", "진지함과 유머를 함께 사용하는 편이다"] },
    { q: 15, options: ["새로운 모임에도 비교적 쉽게 적응한다", "아이디어나 의견 제안을 자주 한다", "예술·음악·감성적 활동을 즐긴다", "갈등 상황에서 중재 역할을 한다"] },
    { q: 16, options: ["말로 소통하는 것을 좋아한다", "성과와 결과를 중요하게 여긴다", "결정 전에 충분히 고민하는 편이다", "타인의 실수에 관대한 편이다"] },
    { q: 17, options: ["감정과 열정이 비교적 분명하다", "맡은 일에 책임감을 느낀다", "관계에서 신뢰와 충성을 중요하게 여긴다", "상대의 이야기를 잘 들어준다"] },
    { q: 18, options: ["사람들 앞에 나서는 것이 부담되지 않는다", "리더 역할을 맡는 경우가 많다", "조직과 구조를 중요하게 여긴다", "현재 상태에 만족하는 편이다"] },
    { q: 19, options: ["사람들에게 잘 알려지는 편이다", "효율과 생산성을 중시한다", "완성도를 높이려는 경향이 있다", "편안함과 안정감을 추구한다"] },
    { q: 20, options: ["에너지가 겉으로 잘 드러난다", "어려운 상황에서도 담담하게 대응한다", "예의와 규칙을 중요하게 여긴다", "극단보다는 중간을 선호한다"] },
    { q: 21, options: ["주목받고 싶은 마음이 생길 때가 있다", "지시하거나 통제하려는 성향이 나타난다", "낯선 상황에서 위축될 수 있다", "의욕이 떨어질 때 멍해지는 편이다"] },
    { q: 22, options: ["감정 조절이 어려울 때가 있다", "감정에 휘둘리지 않으려 한다", "상처를 오래 기억하는 편이다", "열정이 낮아 보일 수 있다"] },
    { q: 23, options: ["설명이 길어지는 경우가 있다", "권위에 도전하고 싶어질 때가 있다", "마음속에 감정을 쌓아두는 편이다", "해야 할 일을 미루는 경우가 있다"] },
    { q: 24, options: ["잊어버리는 일이 종종 있다", "솔직함 때문에 오해를 받기도 한다", "기준이 높아 까다롭게 느껴질 수 있다", "걱정이 앞설 때가 있다"] },
    { q: 25, options: ["대화 중 말을 끊고 들어갈 때가 있다", "결정을 서두르는 경향이 있다", "감정 기복이 커질 때가 있다", "결정을 망설이는 편이다"] },
    { q: 26, options: ["행동 패턴이 예측하기 어려울 수 있다", "감정을 표현하는 데 서툴 수 있다", "대인관계에서 존재감이 약하다고 느낄 수 있다", "관계 형성에 적극적이지 않을 때가 있다"] },
    { q: 27, options: ["즉흥적으로 흐름을 따를 때가 있다", "자신의 생각을 쉽게 바꾸지 않는다", "불만을 속으로 쌓아두는 편이다", "결정 앞에서 시간을 오래 쓴다"] },
    { q: 28, options: ["관리보다는 자유를 중시한다", "자신의 능력에 대한 자부심이 크다", "상황을 비관적으로 해석할 때가 있다", "눈에 띄지 않는 쪽이 편하다"] },
    { q: 29, options: ["감정이 겉으로 쉽게 드러난다", "논리적 토론을 즐긴다", "혼자만의 시간을 필요로 한다", "분명한 목표 설정이 어려울 때가 있다"] },
    { q: 30, options: ["깊이보다는 겉에서 처리할 때가 있다", "예민해질 때가 있다", "상황을 부정적으로 해석할 때가 있다", "긴장감이 낮아질 수 있다"] },
    { q: 31, options: ["인정받고 싶은 욕구가 크다", "일에 몰입하면 주변을 놓치기도 한다", "갈등에서 물러나는 편이다", "걱정이 많은 편이다"] },
    { q: 32, options: ["말이 많아질 때가 있다", "감정 표현이 적다", "작은 자극에도 상처받기 쉽다", "소극적으로 보일 수 있다"] },
    { q: 33, options: ["정리되지 않은 상태를 방치할 수 있다", "타인을 이끌려는 성향이 강해진다", "쉽게 낙담하는 편이다", "결정을 미루는 경향이 있다"] },
    { q: 34, options: ["일관성이 약해 보일 수 있다", "너그러움이 부족해질 때가 있다", "내향적으로 에너지를 회복한다", "관심 표현이 적다"] },
    { q: 35, options: ["주변이 어수선해질 수 있다", "타인을 활용하려는 선택을 할 때가 있다", "우울감에 빠질 때가 있다", "불만을 혼잣말로 표현한다"] },
    { q: 36, options: ["자신의 모습을 드러내고 싶어한다", "고집을 부릴 때가 있다", "의심이 많아질 수 있다", "속도가 느리다는 말을 듣는다"] },
    { q: 37, options: ["말소리가 커질 때가 있다", "자신의 주장을 강하게 펼친다", "혼자 있는 시간을 즐긴다", "행동이 느긋하다"] },
    { q: 38, options: ["집중력이 분산될 때가 있다", "성급해질 때가 있다", "타인을 쉽게 믿지 않는다", "의욕이 떨어질 수 있다"] },
    { q: 39, options: ["침착함을 잃을 때가 있다", "충분히 생각하지 못할 때가 있다", "마음속 응어리를 오래 품는다", "내키지 않아도 맞춰준다"] },
    { q: 40, options: ["기분에 따라 태도가 달라질 수 있다", "상황 판단이 빠르다", "비판적 시각이 강해질 수 있다", "갈등을 피하기 위해 타협한다"] }
];

const types = [
    { name: "표현형 (Expressive)", desc: "활기차고 사교적이며 분위기를 주도하는 에너지가 넘치는 유형", color: "orange" },
    { name: "추진형 (Driving)", desc: "목표 지향적이고 결단력이 있으며 리더십이 강한 유형", color: "purple" },
    { name: "성찰형 (Analytical)", desc: "신중하고 분석적이며 깊이 있는 사고를 하는 유형", color: "teal" },
    { name: "안정형 (Amiable)", desc: "평화롭고 조화로우며 타인을 배려하는 따뜻한 유형", color: "green" }
];

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0]; // Index 0: 표현형, 1: 추진형, 2: 성찰형, 3: 안정형

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionContainer = document.getElementById('question-container');
const progressBar = document.getElementById('progress-bar');
const questionNumber = document.getElementById('question-number');

function startTest() {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    currentQuestionIndex = 0;
    scores = [0, 0, 0, 0];
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update progress
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionNumber.innerHTML = `${currentQuestionIndex + 1}<span class="text-sm font-normal text-slate-400 ml-1">/ ${questions.length}</span>`;

    // Clear container
    questionContainer.innerHTML = '';
    
    // Fade in effect
    questionContainer.classList.remove('fade-in');
    void questionContainer.offsetWidth; // trigger reflow
    questionContainer.classList.add('fade-in');

    // Create Options
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 gap-3';
    
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn w-full text-left p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-purple-300 hover:bg-purple-50 text-slate-700 font-medium transition-all shadow-sm hover:shadow-md';
        btn.innerHTML = `<span class="inline-block w-7 h-7 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center mr-3 font-bold">${idx + 1}</span><span class="text-sm">${opt}</span>`;
        
        btn.onclick = () => handleAnswer(idx);
        grid.appendChild(btn);
    });
    
    questionContainer.appendChild(grid);
}

function handleAnswer(selectedIndex) {
    scores[selectedIndex]++;
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        // Small delay for better UX
        setTimeout(renderQuestion, 200);
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // Create array with scores and indices, then sort by score
    const scoreData = types.map((type, idx) => ({
        type: type,
        score: scores[idx],
        index: idx,
        percent: (scores[idx] / questions.length) * 100
    })).sort((a, b) => b.score - a.score); // Sort descending
    
    // 주기질 (1위)
    const primaryResult = scoreData[0];
    const primaryIndex = primaryResult.index;
    
    // 보조기질 (2위)
    const secondaryResult = scoreData[1];
    const secondaryIndex = secondaryResult.index;
    
    // 주기질 표시 (영문 제거하여 더 짧게)
    const primaryName = primaryResult.type.name.split('(')[0].trim();
    document.getElementById('result-type').textContent = primaryName;
    document.getElementById('result-desc').textContent = primaryResult.type.desc;
    
    // 주기질 카드 색상 적용
    const primaryCard = document.getElementById('primary-card');
    const primaryColor = primaryResult.type.color;
    if (primaryColor === 'orange') {
        primaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-orange-500';
    } else if (primaryColor === 'purple') {
        primaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-purple-500';
    } else if (primaryColor === 'teal') {
        primaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-teal-500';
    } else if (primaryColor === 'green') {
        primaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-green-500';
    }
    
    // 보조기질 표시 (영문 제거하여 더 짧게)
    const secondaryName = secondaryResult.type.name.split('(')[0].trim();
    document.getElementById('sub-result-type').textContent = secondaryName;
    document.getElementById('sub-result-desc').textContent = secondaryResult.type.desc;
    
    // 보조기질 카드 색상 적용
    const secondaryCard = document.getElementById('secondary-card');
    const secondaryColor = secondaryResult.type.color;
    if (secondaryColor === 'orange') {
        secondaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-orange-400';
    } else if (secondaryColor === 'purple') {
        secondaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-purple-400';
    } else if (secondaryColor === 'teal') {
        secondaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-teal-400';
    } else if (secondaryColor === 'green') {
        secondaryCard.className = 'p-4 rounded-xl shadow-lg text-white bg-green-400';
    }
    
    // Render details - Sort by score (descending) for better visibility
    const detailsContainer = document.getElementById('score-details');
    detailsContainer.innerHTML = '';
    
    scoreData.forEach((data, displayIdx) => {
        const { type, score, index, percent } = data;
        const isPrimary = index === primaryIndex;
        const isSecondary = index === secondaryIndex;
        
        // 타입별 색상 결정
        const typeColor = type.color;
        let bgClass, borderClass, textClass, barClass, rankClass;
        
        if (isPrimary) {
            if (typeColor === 'orange') {
                bgClass = 'bg-orange-50';
                borderClass = 'border-orange-300';
                textClass = 'text-orange-700';
                barClass = 'bg-orange-500';
                rankClass = 'text-orange-600';
            } else if (typeColor === 'purple') {
                bgClass = 'bg-purple-50';
                borderClass = 'border-purple-300';
                textClass = 'text-purple-700';
                barClass = 'bg-purple-500';
                rankClass = 'text-purple-600';
            } else if (typeColor === 'teal') {
                bgClass = 'bg-teal-50';
                borderClass = 'border-teal-300';
                textClass = 'text-teal-700';
                barClass = 'bg-teal-500';
                rankClass = 'text-teal-600';
            } else if (typeColor === 'green') {
                bgClass = 'bg-green-50';
                borderClass = 'border-green-300';
                textClass = 'text-green-700';
                barClass = 'bg-green-500';
                rankClass = 'text-green-600';
            }
        } else if (isSecondary) {
            if (typeColor === 'orange') {
                bgClass = 'bg-orange-50/70';
                borderClass = 'border-orange-200';
                textClass = 'text-orange-600';
                barClass = 'bg-orange-400';
                rankClass = 'text-orange-500';
            } else if (typeColor === 'purple') {
                bgClass = 'bg-purple-50/70';
                borderClass = 'border-purple-200';
                textClass = 'text-purple-600';
                barClass = 'bg-purple-400';
                rankClass = 'text-purple-500';
            } else if (typeColor === 'teal') {
                bgClass = 'bg-teal-50/70';
                borderClass = 'border-teal-200';
                textClass = 'text-teal-600';
                barClass = 'bg-teal-400';
                rankClass = 'text-teal-500';
            } else if (typeColor === 'green') {
                bgClass = 'bg-green-50/70';
                borderClass = 'border-green-200';
                textClass = 'text-green-600';
                barClass = 'bg-green-400';
                rankClass = 'text-green-500';
            }
        } else {
            bgClass = 'bg-slate-50';
            borderClass = 'border-slate-200';
            textClass = 'text-slate-600';
            if (typeColor === 'orange') {
                barClass = 'bg-orange-300';
            } else if (typeColor === 'purple') {
                barClass = 'bg-purple-300';
            } else if (typeColor === 'teal') {
                barClass = 'bg-teal-300';
            } else if (typeColor === 'green') {
                barClass = 'bg-green-300';
            }
            rankClass = 'text-slate-500';
        }
        
        const row = document.createElement('div');
        row.className = `p-3.5 rounded-xl border-2 transition-all ${bgClass} ${borderClass} shadow-sm hover:shadow-md`;
        
        row.innerHTML = `
            <div class="flex items-center justify-between mb-2.5">
                <div class="flex items-center gap-2.5 flex-1 min-w-0">
                    <span class="text-sm font-bold ${rankClass} whitespace-nowrap bg-white px-2 py-1 rounded-md">
                        ${displayIdx + 1}위
                    </span>
                    <span class="text-sm font-semibold ${textClass} truncate break-words">
                        ${type.name.split('(')[0].trim()}
                    </span>
                </div>
                <div class="text-right ml-2">
                    <div class="text-lg font-bold ${textClass}">
                        ${score}점
                    </div>
                </div>
            </div>
            <div class="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full ${barClass} transition-all duration-500 rounded-full" 
                     style="width: ${percent}%"></div>
            </div>
        `;
        
        detailsContainer.appendChild(row);
    });
}

function restartTest() {
    startTest();
}

function downloadResult() {
    // Get the download button
    const downloadBtn = event?.target?.closest('button') || document.querySelector('button[onclick*="downloadResult"]');
    if (!downloadBtn) {
        console.error('다운로드 버튼을 찾을 수 없습니다.');
        alert('다운로드 버튼을 찾을 수 없습니다.');
        return;
    }
    
    const originalHTML = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<span class="animate-pulse">저장 중...</span>';
    downloadBtn.disabled = true;
    
    // Get the result screen element
    const resultContent = document.getElementById('result-screen');
    if (!resultContent) {
        console.error('결과 화면을 찾을 수 없습니다.');
        downloadBtn.innerHTML = originalHTML;
        downloadBtn.disabled = false;
        alert('결과 화면을 찾을 수 없습니다.');
        return;
    }
    
    // Check if html2canvas is loaded
    if (typeof html2canvas === 'undefined') {
        alert('이미지 변환 라이브러리를 불러올 수 없습니다. 페이지를 새로고침해주세요.');
        downloadBtn.innerHTML = originalHTML;
        downloadBtn.disabled = false;
        return;
    }
    
    // 원본 요소의 상태 저장
    const wasHidden = resultContent.classList.contains('hidden');
    const originalStyle = resultContent.style.cssText;
    const originalBackground = resultContent.style.background;
    const originalBackgroundColor = resultContent.style.backgroundColor;
    const originalPaddingTop = resultContent.style.paddingTop;
    
    // 원본 요소를 보이게 만들기 (캡처를 위해)
    resultContent.classList.remove('hidden');
    resultContent.style.position = 'fixed';
    resultContent.style.left = '50%';
    resultContent.style.top = '40px'; // 충분한 상단 여백
    resultContent.style.transform = 'translateX(-50%)';
    resultContent.style.zIndex = '9999';
    resultContent.style.width = resultContent.offsetWidth + 'px';
    resultContent.style.background = '#ffffff'; // 흰색 배경 강제
    resultContent.style.backgroundColor = '#ffffff';
    resultContent.style.paddingTop = '40px'; // 충분한 상단 패딩
    resultContent.style.marginTop = '0';
    
    // 버튼들을 임시로 숨기기
    const buttons = resultContent.querySelectorAll('button');
    const buttonStates = [];
    buttons.forEach(btn => {
        buttonStates.push({
            element: btn,
            display: btn.style.display
        });
        btn.style.display = 'none';
    });
    
    // 이미지를 base64로 변환하여 로드 보장
    const images = resultContent.querySelectorAll('img');
    const imageDataUrls = new Map();
    
    // 모든 이미지를 base64로 변환
    const imagePromises = Array.from(images).map((img, index) => {
        return new Promise((resolve) => {
            const imgPath = img.getAttribute('src');
            if (!imgPath) {
                resolve();
                return;
            }
            
            // 이미 data URL이면 그대로 사용
            if (imgPath.startsWith('data:')) {
                imageDataUrls.set(img, imgPath);
                resolve();
                return;
            }
            
            // 이미지 경로를 절대 경로로 변환
            let absolutePath = imgPath;
            if (!imgPath.startsWith('http') && !imgPath.startsWith('data:')) {
                const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
                absolutePath = baseUrl + imgPath;
            }
            
            // 이미지가 이미 로드되어 있으면 바로 변환
            if (img.complete && img.naturalHeight !== 0 && img.naturalWidth !== 0) {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const dataUrl = canvas.toDataURL('image/png');
                    imageDataUrls.set(img, dataUrl);
                    console.log(`이미지 ${index} base64 변환 완료 (기존 로드)`);
                    resolve();
                } catch (e) {
                    console.warn(`이미지 ${index} base64 변환 실패:`, e);
                    // 새로 로드 시도
                    loadImageAsBase64(absolutePath, img, index, resolve);
                }
            } else {
                // 새로 로드
                loadImageAsBase64(absolutePath, img, index, resolve);
            }
        });
    });
    
    // 이미지를 base64로 로드하는 헬퍼 함수
    function loadImageAsBase64(url, originalImg, index, resolve) {
        const newImg = new Image();
        newImg.crossOrigin = 'anonymous';
        
        newImg.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = newImg.naturalWidth;
                canvas.height = newImg.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(newImg, 0, 0);
                const dataUrl = canvas.toDataURL('image/png');
                imageDataUrls.set(originalImg, dataUrl);
                console.log(`이미지 ${index} base64 변환 완료:`, url);
                resolve();
            } catch (e) {
                console.error(`이미지 ${index} base64 변환 오류:`, e);
                resolve(); // 에러가 나도 계속 진행
            }
        };
        
        newImg.onerror = () => {
            console.warn(`이미지 ${index} 로드 실패:`, url);
            resolve(); // 에러가 나도 계속 진행
        };
        
        newImg.src = url;
    }
    
    // 모든 이미지 로딩 대기
    Promise.all(imagePromises).then(() => {
        // base64로 변환된 이미지들을 원본 이미지 src에 적용
        imageDataUrls.forEach((dataUrl, img) => {
            img.src = dataUrl;
            console.log('이미지 src를 data URL로 교체');
        });
        
        // 약간의 추가 대기 후 캡처 (이미지 렌더링 시간 확보)
        setTimeout(() => {
            captureAndDownload();
        }, 300);
    });
    
    function captureAndDownload() {
        try {
            // blur 효과를 임시로 제거하여 선명도 향상
            const blurElements = resultContent.querySelectorAll('[class*="blur"]');
            const originalBlurStyles = [];
            blurElements.forEach(el => {
                originalBlurStyles.push({
                    element: el,
                    filter: el.style.filter,
                    backdropFilter: el.style.backdropFilter
                });
                el.style.filter = 'none';
                el.style.backdropFilter = 'none';
            });
            
            // 상단 여백을 위한 래퍼 컨테이너 생성
            const wrapper = document.createElement('div');
            wrapper.style.position = 'fixed';
            wrapper.style.left = '0';
            wrapper.style.top = '0';
            wrapper.style.width = resultContent.offsetWidth + 'px';
            wrapper.style.backgroundColor = '#ffffff';
            wrapper.style.paddingTop = '120px'; // 충분한 상단 여백
            wrapper.style.paddingBottom = '60px'; // 하단 여백
            wrapper.style.paddingLeft = '0';
            wrapper.style.paddingRight = '0';
            wrapper.style.boxSizing = 'border-box';
            wrapper.style.display = 'block';
            wrapper.style.visibility = 'hidden'; // 보이지 않게 하지만 렌더링은 됨
            wrapper.style.opacity = '0';
            wrapper.style.pointerEvents = 'none';
            wrapper.style.zIndex = '-1';
            
            // 원본 요소 복제
            const clonedContent = resultContent.cloneNode(true);
            clonedContent.id = 'result-screen-clone';
            clonedContent.classList.remove('hidden');
            clonedContent.style.position = 'relative';
            clonedContent.style.margin = '0';
            clonedContent.style.paddingTop = '0'; // 래퍼의 패딩 사용
            clonedContent.style.width = '100%';
            clonedContent.style.boxSizing = 'border-box';
            
            wrapper.appendChild(clonedContent);
            document.body.appendChild(wrapper);
            
            // 래퍼의 실제 높이 계산 (콘텐츠 + 패딩)
            const wrapperHeight = clonedContent.scrollHeight + 120 + 60; // 콘텐츠 높이 + 상단 패딩(120px) + 하단 패딩(60px)
            wrapper.style.height = wrapperHeight + 'px';
            
            // 약간의 대기 시간을 두어 렌더링 완료 보장 후 캡처 (Promise로 감싸기)
            const capturePromise = new Promise((resolve) => {
                setTimeout(() => {
                    // html2canvas로 캡처 (고해상도)
                    html2canvas(wrapper, {
                        backgroundColor: '#ffffff', // 순수 흰색 배경으로 변경
                        scale: 3, // 해상도 3배로 증가 (더 선명하게)
                        useCORS: true,
                        logging: false, // 디버깅 비활성화
                        allowTaint: true, // 이미지 로딩을 위해 true로 변경
                        foreignObjectRendering: true, // 텍스트 렌더링 개선
                        removeContainer: true,
                        imageTimeout: 30000, // 이미지 타임아웃 증가
                        letterRendering: true, // 텍스트 선명도 향상
                        width: wrapper.offsetWidth,
                        height: wrapperHeight,
                        onclone: function(clonedDoc, element) {
                            // 클론된 요소에 상단 여백 추가
                            const clonedResult = clonedDoc.getElementById('result-screen-clone');
                            if (clonedResult) {
                                clonedResult.style.paddingTop = '0';
                                clonedResult.style.marginTop = '0';
                            }
                            // 래퍼의 패딩 확인 및 강제 설정
                            const clonedWrapper = element;
                            if (clonedWrapper) {
                                clonedWrapper.style.paddingTop = '120px';
                                clonedWrapper.style.paddingBottom = '60px';
                                clonedWrapper.style.backgroundColor = '#ffffff';
                                clonedWrapper.style.boxSizing = 'border-box';
                                clonedWrapper.style.display = 'block';
                                clonedWrapper.style.width = resultContent.offsetWidth + 'px';
                                const clonedResultScreen = clonedDoc.getElementById('result-screen-clone');
                                if (clonedResultScreen) {
                                    clonedWrapper.style.height = (clonedResultScreen.scrollHeight + 120 + 60) + 'px';
                                }
                            }
                            // 클론된 문서의 이미지를 data URL로 교체
                            const clonedImages = clonedDoc.querySelectorAll('img');
                    clonedImages.forEach((img, index) => {
                        // 원본 이미지와 매칭하여 data URL 적용
                        const originalImg = Array.from(images).find(orig => {
                            const origSrc = orig.getAttribute('src');
                            const clonedSrc = img.getAttribute('src');
                            return origSrc === clonedSrc || orig.src === clonedSrc;
                        });
                        
                        if (originalImg && imageDataUrls.has(originalImg)) {
                            img.src = imageDataUrls.get(originalImg);
                            console.log(`클론 이미지 ${index} data URL 적용`);
                        } else if (img.src && !img.src.startsWith('data:')) {
                            // data URL이 없으면 원본 이미지에서 가져오기
                            const imgPath = img.getAttribute('src');
                            if (imgPath && !imgPath.startsWith('data:')) {
                                // 원본 이미지 찾기
                                const matchingOriginal = Array.from(images).find(orig => {
                                    return orig.getAttribute('src') === imgPath || orig.src.includes(imgPath);
                                });
                                if (matchingOriginal && imageDataUrls.has(matchingOriginal)) {
                                    img.src = imageDataUrls.get(matchingOriginal);
                                }
                            }
                        }
                        
                        // 이미지 스타일 강제
                        img.style.display = 'block';
                        img.style.visibility = 'visible';
                        img.style.opacity = '1';
                        img.style.width = '100%';
                        img.style.height = '100%';
                        img.style.objectFit = 'contain';
                            });
                            // 클론된 문서에서도 버튼 숨기기
                            const clonedButtons = clonedDoc.querySelectorAll('button');
                            clonedButtons.forEach(btn => {
                                btn.style.display = 'none';
                            });
                            
                            // 클론된 문서에서도 blur 제거
                            const clonedBlurElements = clonedDoc.querySelectorAll('[class*="blur"]');
                            clonedBlurElements.forEach(el => {
                                el.style.filter = 'none';
                                el.style.backdropFilter = 'none';
                                el.style.opacity = '1'; // 투명도 제거
                            });
                            
                            // glass-panel 효과 제거 (더 선명하게)
                            const glassPanels = clonedDoc.querySelectorAll('.glass-panel');
                            glassPanels.forEach(panel => {
                                panel.style.background = '#ffffff';
                                panel.style.backdropFilter = 'none';
                                panel.style.webkitBackdropFilter = 'none';
                            });
                            
                            // 배경을 흰색으로 강제
                            const resultScreen = clonedDoc.getElementById('result-screen');
                            const clonedResultScreen = clonedDoc.getElementById('result-screen-clone');
                            if (resultScreen) {
                                resultScreen.style.background = '#ffffff';
                                resultScreen.style.backgroundColor = '#ffffff';
                            }
                            if (clonedResultScreen) {
                                clonedResultScreen.style.background = '#ffffff';
                                clonedResultScreen.style.backgroundColor = '#ffffff';
                            }
                            
                            // FLOWLAB 텍스트 스타일 강제
                            const flowlabText = clonedDoc.querySelector('.flowlab-text');
                            if (flowlabText) {
                                flowlabText.style.color = '#ffffff';
                                flowlabText.style.fontWeight = '700';
                                flowlabText.style.letterSpacing = '0.15em';
                                flowlabText.style.textTransform = 'uppercase';
                                flowlabText.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';
                            }
                            const flowlabContainer = flowlabText?.parentElement?.parentElement;
                            if (flowlabContainer) {
                                const flowlabInner = flowlabText?.parentElement;
                                if (flowlabInner) {
                                    flowlabInner.style.background = 'linear-gradient(to bottom right, #0ea5e9, #0284c7)';
                                    flowlabInner.style.borderRadius = '9999px';
                                    flowlabInner.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                                    flowlabInner.style.padding = '10px 20px';
                                }
                            }
                            
                            // 로고 이미지가 잘 보이도록 스타일 강제
                            const logoImages = clonedDoc.querySelectorAll('img[src*="fl_logo"]');
                            logoImages.forEach((img, index) => {
                                // data URL이 이미 적용되어 있어야 함 (위에서 처리됨)
                                // 추가로 스타일 강제
                                img.style.width = '100%';
                                img.style.height = '100%';
                                img.style.maxWidth = '100%';
                                img.style.maxHeight = '100%';
                                img.style.objectFit = 'contain';
                                img.style.display = 'block';
                                img.style.visibility = 'visible';
                                img.style.opacity = '1';
                                img.style.borderRadius = '50%';
                                img.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))';
                            });
                            
                            // 로고 컨테이너 스타일 강제 (테두리 제거, 그림자 효과)
                            logoImages.forEach(img => {
                                const container = img.parentElement;
                                if (container && container.tagName === 'DIV') {
                                    container.style.width = '64px';
                                    container.style.height = '64px';
                                    container.style.display = 'flex';
                                    container.style.alignItems = 'center';
                                    container.style.justifyContent = 'center';
                                    container.style.border = 'none';
                                    container.style.borderRadius = '50%';
                                    container.style.background = 'linear-gradient(to bottom right, #f0f9ff, #ffffff)';
                                    container.style.boxShadow = '0 10px 25px -5px rgba(14, 165, 233, 0.2), 0 4px 6px -2px rgba(14, 165, 233, 0.1)';
                                    container.style.padding = '4px';
                                    container.style.visibility = 'visible';
                                    container.style.opacity = '1';
                                }
                            });
                            
                            // 텍스트 색상을 더 진하게 강제 (가독성 향상)
                            const textElements = clonedDoc.querySelectorAll('h2, h3, p, span, div');
                            textElements.forEach(el => {
                                const computedStyle = window.getComputedStyle(el);
                                const color = computedStyle.color;
                                
                                // 회색 계열 텍스트를 더 진하게
                                if (color.includes('rgb(148, 163, 184)') || // slate-400
                                    color.includes('rgb(100, 116, 139)') || // slate-500
                                    color.includes('rgb(71, 85, 105)')) {   // slate-600
                                    el.style.color = '#1e293b'; // slate-800로 강제
                                }
                                
                                // slate-700도 더 진하게
                                if (color.includes('rgb(51, 65, 85)')) { // slate-700
                                    el.style.color = '#0f172a'; // slate-900로 강제
                                }
                            });
                            
                            // 배경이 투명하거나 반투명한 요소들을 흰색으로
                            const bgElements = clonedDoc.querySelectorAll('[class*="bg-white"], [class*="bg-slate"]');
                            bgElements.forEach(el => {
                                const computedStyle = window.getComputedStyle(el);
                                const bgColor = computedStyle.backgroundColor;
                                if (bgColor.includes('rgba') && bgColor.includes('0.') || bgColor === 'transparent') {
                                    el.style.backgroundColor = '#ffffff';
                                }
                            });
                }
                }).then(canvas => {
                    resolve(canvas);
                }).catch(err => {
                    resolve(null); // 에러 발생 시 null 반환
                });
            }, 100);
            });
            
            capturePromise.then(canvas => {
                if (!canvas) {
                    throw new Error('캔버스 생성 실패');
                }
                // 래퍼 제거
                if (wrapper && wrapper.parentNode) {
                    document.body.removeChild(wrapper);
                }
                
                // blur 효과 복원
                originalBlurStyles.forEach(state => {
                    state.element.style.filter = state.filter;
                    state.element.style.backdropFilter = state.backdropFilter;
                });
                // 원본 요소 복원
                if (wasHidden) {
                    resultContent.classList.add('hidden');
                }
                resultContent.style.cssText = originalStyle;
                resultContent.style.background = originalBackground;
                resultContent.style.backgroundColor = originalBackgroundColor;
                resultContent.style.paddingTop = originalPaddingTop;
                resultContent.style.transform = '';
                resultContent.style.left = '';
                resultContent.style.top = '';
                
                // 버튼 복원
                buttonStates.forEach(state => {
                    state.element.style.display = state.display;
                });
                
                // Canvas가 비어있는지 확인
                if (!canvas || canvas.width === 0 || canvas.height === 0) {
                    throw new Error('캔버스가 비어있습니다.');
                }
                
                // 다운로드 함수
                const downloadImage = (dataUrl) => {
                    try {
                        const link = document.createElement('a');
                        link.download = '기질유형테스트_결과_' + new Date().getTime() + '.png';
                        link.href = dataUrl;
                        link.style.display = 'none';
                        
                        // 사파리 호환성을 위해 body에 추가
                        document.body.appendChild(link);
                        
                        // 다운로드 트리거
                        if (document.createEvent) {
                            const event = document.createEvent('MouseEvents');
                            event.initEvent('click', true, true);
                            link.dispatchEvent(event);
                        } else {
                            link.click();
                        }
                        
                        // 정리
                        setTimeout(() => {
                            if (link.parentNode) {
                                document.body.removeChild(link);
                            }
                            if (dataUrl.startsWith('blob:')) {
                                URL.revokeObjectURL(dataUrl);
                            }
                        }, 1000);
                        
                        // 버튼 복원
                        downloadBtn.innerHTML = originalHTML;
                        downloadBtn.disabled = false;
                    } catch (downloadErr) {
                        console.error('다운로드 실패:', downloadErr);
                        alert('다운로드에 실패했습니다: ' + downloadErr.message);
                        downloadBtn.innerHTML = originalHTML;
                        downloadBtn.disabled = false;
                    }
                };
                
                // Blob 방식 시도 (최고 품질)
                if (canvas.toBlob) {
                    canvas.toBlob(function(blob) {
                        if (blob) {
                            const url = URL.createObjectURL(blob);
                            downloadImage(url);
                        } else {
                            // Blob 실패 시 data URL 사용 (최고 품질)
                            const dataUrl = canvas.toDataURL('image/png', 1.0);
                            downloadImage(dataUrl);
                        }
                    }, 'image/png', 1.0); // 최고 품질 (1.0)
                } else {
                    // toBlob이 없는 경우 data URL 사용 (최고 품질)
                    const dataUrl = canvas.toDataURL('image/png', 1.0);
                    downloadImage(dataUrl);
                }
            }).catch(err => {
                // blur 효과 복원
                originalBlurStyles.forEach(state => {
                    state.element.style.filter = state.filter;
                    state.element.style.backdropFilter = state.backdropFilter;
                });
                
                console.error('html2canvas 오류:', err);
                
                // 원본 요소 복원
                if (wasHidden) {
                    resultContent.classList.add('hidden');
                }
                resultContent.style.cssText = originalStyle;
                resultContent.style.background = originalBackground;
                resultContent.style.backgroundColor = originalBackgroundColor;
                resultContent.style.paddingTop = originalPaddingTop;
                resultContent.style.transform = '';
                resultContent.style.left = '';
                resultContent.style.top = '';
                
                // 버튼 복원
                buttonStates.forEach(state => {
                    state.element.style.display = state.display;
                });
                
                alert('이미지 저장에 실패했습니다.\n오류: ' + (err.message || '알 수 없는 오류') + '\n\n브라우저 콘솔을 확인해주세요.');
                
                // 버튼 복원
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.disabled = false;
            });
        } catch (err) {
            // 래퍼 제거 (에러 발생 시)
            const existingWrapper = document.querySelector('div[style*="left: -9999px"]');
            if (existingWrapper && existingWrapper.parentNode) {
                document.body.removeChild(existingWrapper);
            }
            
            // blur 효과 복원
            originalBlurStyles.forEach(state => {
                state.element.style.filter = state.filter;
                state.element.style.backdropFilter = state.backdropFilter;
            });
            
            console.error('캡처 오류:', err);
            
            // 원본 요소 복원
            if (wasHidden) {
                resultContent.classList.add('hidden');
            }
            resultContent.style.cssText = originalStyle;
            resultContent.style.background = originalBackground;
            resultContent.style.backgroundColor = originalBackgroundColor;
            resultContent.style.paddingTop = originalPaddingTop;
            resultContent.style.transform = '';
            resultContent.style.left = '';
            resultContent.style.top = '';
            
            // 버튼 복원
            buttonStates.forEach(state => {
                state.element.style.display = state.display;
            });
            
            alert('이미지 저장 중 오류가 발생했습니다: ' + err.message);
            downloadBtn.innerHTML = originalHTML;
            downloadBtn.disabled = false;
        }
    }
}
