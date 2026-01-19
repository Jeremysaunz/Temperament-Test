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
    { name: "표현형 Expressive Type", shortName: "표현", code: "E", englishName: "Expressive", desc: "활기차고 사교적이며 분위기를 주도하는 에너지가 넘치는 유형", color: "orange" },
    { name: "추진형 Driving Type", shortName: "추진", code: "D", englishName: "Driving", desc: "목표 지향적이고 결단력이 있으며 리더십이 강한 유형", color: "purple" },
    { name: "성찰형 Reflective Type", shortName: "성찰", code: "R", englishName: "Reflective", desc: "신중하고 분석적이며 깊이 있는 사고를 하는 유형", color: "teal" },
    { name: "안정형 Stable Type", shortName: "안정", code: "S", englishName: "Stable", desc: "평화롭고 조화로우며 타인을 배려하는 따뜻한 유형", color: "green" }
];

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0]; // Index 0: 표현형, 1: 추진형, 2: 성찰형, 3: 안정형
let answers = []; // 사용자가 선택한 답변 저장
let currentCombination = null; // 현재 조합 결과 저장 (상세 설명용)
let temperamentDetails = null; // 상세 설명 데이터 저장
let currentLanguage = 'ko'; // 현재 언어 설정

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
    
    // 이전에 선택한 답변이 있는지 확인
    const previousAnswer = answers[currentQuestionIndex];
    
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        const isSelected = previousAnswer === idx;
        btn.className = `option-btn w-full text-left p-4 rounded-xl border-2 transition-all shadow-sm hover:shadow-md ${
            isSelected 
                ? 'border-purple-500 bg-purple-100 hover:bg-purple-100' 
                : 'border-slate-200 bg-white hover:border-purple-300 hover:bg-purple-50'
        } text-slate-700 font-medium`;
        btn.innerHTML = `<span class="inline-block w-7 h-7 rounded-full ${
            isSelected ? 'bg-purple-600' : 'bg-purple-500'
        } text-white text-xs flex items-center justify-center mr-3 font-bold">${idx + 1}</span><span class="text-sm">${opt}</span>`;
        
        btn.onclick = () => handleAnswer(idx);
        grid.appendChild(btn);
    });
    
    questionContainer.appendChild(grid);
    updatePrevButton();
}

function handleAnswer(selectedIndex) {
    // 이전 답변의 점수 제거 (답변 변경 시)
    if (answers[currentQuestionIndex] !== undefined) {
        scores[answers[currentQuestionIndex]]--;
    }
    
    // 새 답변 저장 및 점수 추가
    answers[currentQuestionIndex] = selectedIndex;
    scores[selectedIndex]++;
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        // Small delay for better UX
        setTimeout(renderQuestion, 200);
    } else {
        showResult();
    }
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function updatePrevButton() {
    const prevButton = document.getElementById('prev-button');
    if (prevButton) {
        if (currentQuestionIndex === 0) {
            prevButton.disabled = true;
            prevButton.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevButton.disabled = false;
            prevButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
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
    
    // 조합 결과 생성: 예) "표현추진형 (Expressive–Driving)"
    const combinationName = `${primaryResult.type.shortName}${secondaryResult.type.shortName}형`;
    const combinationEnglish = `(${primaryResult.type.englishName}–${secondaryResult.type.englishName})`;
    const fullCombination = `${combinationName} ${combinationEnglish}`;
    
    // 현재 조합 결과 저장 (상세 설명용)
    // 영어 이름은 하이픈(-)으로 연결 (파일 형식과 일치)
    currentCombination = {
        koreanName: combinationName,
        englishName: `${primaryResult.type.englishName}-${secondaryResult.type.englishName}`,
        fullName: fullCombination
    };
    
    console.log('저장된 조합:', currentCombination);
    
    // 주기질 표시 (조합 결과 표시)
    document.getElementById('result-type').textContent = fullCombination;
    document.getElementById('result-desc').textContent = `${primaryResult.type.desc} + ${secondaryResult.type.desc}`;
    
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
    
    // 보조기질 카드는 숨기기 (조합 결과만 표시)
    const secondaryCard = document.getElementById('secondary-card');
    secondaryCard.style.display = 'none';
    
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
                        ${type.shortName}형
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

// 상세 설명 모달 열기
async function showDetailDescription() {
    if (!currentCombination) {
        alert('결과를 먼저 확인해주세요.');
        return;
    }
    
    console.log('현재 조합:', currentCombination);
    
    // 상세 설명 데이터가 없으면 로드
    if (!temperamentDetails) {
        console.log('상세 설명 데이터 로드 시작...');
        await loadTemperamentDetails();
        console.log('로드된 데이터:', temperamentDetails);
    }
    
    // 조합에 맞는 상세 설명 찾기
    const detail = findTemperamentDetail(currentCombination);
    console.log('찾은 상세 설명:', detail);
    
    if (!detail) {
        console.error('상세 설명을 찾을 수 없습니다. 현재 조합:', currentCombination);
        console.log('사용 가능한 키:', temperamentDetails ? Object.keys(temperamentDetails) : '없음');
        alert('상세 설명을 찾을 수 없습니다. 콘솔을 확인해주세요.');
        return;
    }
    
    // 모달 제목 설정
    document.getElementById('modal-title').textContent = currentCombination.fullName;
    
    // 모달 내용 설정
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = formatDetailContent(detail);
    
    // 모달 표시
    document.getElementById('detail-modal').classList.remove('hidden');
}

// 모달 닫기
function closeDetailModal() {
    document.getElementById('detail-modal').classList.add('hidden');
}

// 상세 설명 데이터 로드
async function loadTemperamentDetails() {
    try {
        const response = await fetch('12temperament_types.txt');
        const text = await response.text();
        temperamentDetails = parseTemperamentDetails(text);
    } catch (error) {
        console.error('상세 설명 파일을 불러올 수 없습니다:', error);
        alert('상세 설명을 불러올 수 없습니다. 파일이 같은 폴더에 있는지 확인해주세요.');
    }
}

// 텍스트 파일 파싱 (새로운 형식)
function parseTemperamentDetails(text) {
    const details = {};
    // === TYPE_XX === 형식으로 섹션 분리
    const sections = text.split(/=== TYPE_\d+ ===/);
    
    sections.forEach((section, index) => {
        if (index === 0) return; // 첫 번째 빈 섹션 건너뛰기
        
        const lines = section.trim().split('\n').map(line => line.trim());
        if (lines.length < 2) return;
        
        let koreanName = '';
        let englishName = '';
        let currentSection = null;
        let currentContent = [];
        const parsedSections = {};
        let lineIndex = 0;
        
        // name_ko: 또는 직접 이름 형식 모두 지원
        while (lineIndex < lines.length) {
            const line = lines[lineIndex];
            if (!line) {
                lineIndex++;
                continue;
            }
            
            // name_ko: 표현추진형 형식
            if (line.startsWith('name_ko:')) {
                koreanName = line.replace('name_ko:', '').trim();
                lineIndex++;
                continue;
            }
            // name_en: Expressive-Driving Type 형식
            else if (line.startsWith('name_en:')) {
                let en = line.replace('name_en:', '').trim();
                en = en.replace(/\s+Type$/, '').replace(/[–—]/g, '-');
                englishName = en;
                lineIndex++;
                continue;
            }
            // 직접 이름 형식: 첫 번째 줄이 한국어 이름이고, 두 번째 줄이 영어 이름
            else if (!koreanName && !englishName && lineIndex === 0) {
                koreanName = line;
                lineIndex++;
                // 다음 줄이 영어 이름인지 확인
                if (lineIndex < lines.length && lines[lineIndex] && !lines[lineIndex].includes(':')) {
                    englishName = lines[lineIndex].replace(/[–—]/g, '-');
                    lineIndex++;
                    continue;
                }
            }
            // 섹션 제목 감지 (예: "1. 이 기질은 어떤 에너지 구조인가")
            else if (line.match(/^\d+\.\s*(.+)$/)) {
                // 이전 섹션 저장
                if (currentSection) {
                    parsedSections[currentSection] = currentContent.join('\n').trim();
                }
                // 새 섹션 시작
                const match = line.match(/^\d+\.\s*(.+)$/);
                currentSection = match[1].trim();
                currentContent = [];
            }
            // 메타데이터 필드 건너뛰기
            else if (line.startsWith('one_line:') || 
                     line.startsWith('keywords:') || 
                     line.startsWith('strengths:') || 
                     line.startsWith('cautions:') ||
                     line.startsWith('- ')) {
                // 메타데이터는 건너뛰기
            }
            // 섹션 내용 추가
            else if (currentSection) {
                currentContent.push(line);
            }
            
            lineIndex++;
        }
        
        // 마지막 섹션 저장
        if (currentSection) {
            parsedSections[currentSection] = currentContent.join('\n').trim();
        }
        
        if (koreanName && englishName) {
            details[koreanName] = {
                koreanName: koreanName,
                englishName: englishName,
                sections: parsedSections
            };
            console.log(`파싱 완료: ${koreanName} (${englishName})`);
        }
    });
    
    console.log('총 파싱된 항목 수:', Object.keys(details).length);
    console.log('파싱된 키 목록:', Object.keys(details));
    return details;
}

// 내용을 섹션별로 파싱 (이미 parseTemperamentDetails에서 처리됨)
function parseContentSections(content) {
    // 이 함수는 더 이상 사용되지 않지만 호환성을 위해 유지
    return {};
}

// 조합에 맞는 상세 설명 찾기
function findTemperamentDetail(combination) {
    if (!temperamentDetails) return null;
    
    console.log('찾는 조합:', combination);
    console.log('사용 가능한 키:', Object.keys(temperamentDetails));
    
    // 한국어 이름으로 찾기
    let detail = temperamentDetails[combination.koreanName];
    
    // 영어 이름으로도 찾기 시도 (하이픈 정규화)
    if (!detail) {
        const normalizedEnglish = combination.englishName.replace(/[–—]/g, '-');
        for (const key in temperamentDetails) {
            const detailItem = temperamentDetails[key];
            const normalizedDetailEnglish = detailItem.englishName.replace(/[–—]/g, '-');
            if (normalizedDetailEnglish.toLowerCase() === normalizedEnglish.toLowerCase()) {
                detail = detailItem;
                console.log('영어 이름으로 찾음:', key);
                break;
            }
        }
    } else {
        console.log('한국어 이름으로 찾음:', combination.koreanName);
    }
    
    return detail;
}

// 상세 설명 내용 포맷팅
function formatDetailContent(detail) {
    if (!detail || !detail.sections) {
        return '<p class="text-slate-500 text-center py-8">상세 설명을 불러올 수 없습니다.</p>';
    }
    
    let html = '';
    
    // 섹션 순서 정의
    const sectionOrder = [
        '이 기질은 어떤 에너지 구조인가',
        '핵심 성향 한눈에 보기',
        '강점이 발휘되는 순간',
        '흔히 겪는 오해와 그림자',
        '감정 흐름과 회복 패턴',
        '관계 속에서의 기질 반응',
        '팀과 조직 안에서의 역할',
        '일하는 방식과 실행 리듬',
        '성장 방향과 기질 관리 전략',
        '이 기질을 한 문장으로 말하면'
    ];
    
    // 섹션별 색상 정의
    const sectionColors = {
        '이 기질은 어떤 에너지 구조인가': 'from-purple-500 to-pink-500',
        '핵심 성향 한눈에 보기': 'from-blue-500 to-cyan-500',
        '강점이 발휘되는 순간': 'from-green-500 to-emerald-500',
        '흔히 겪는 오해와 그림자': 'from-orange-500 to-red-500',
        '감정 흐름과 회복 패턴': 'from-pink-500 to-rose-500',
        '관계 속에서의 기질 반응': 'from-indigo-500 to-purple-500',
        '팀과 조직 안에서의 역할': 'from-teal-500 to-cyan-500',
        '일하는 방식과 실행 리듬': 'from-amber-500 to-orange-500',
        '성장 방향과 기질 관리 전략': 'from-violet-500 to-purple-500',
        '이 기질을 한 문장으로 말하면': 'from-rose-500 to-pink-500'
    };
    
    sectionOrder.forEach((sectionTitle, index) => {
        const content = detail.sections[sectionTitle];
        if (content) {
            const gradientColor = sectionColors[sectionTitle] || 'from-slate-500 to-slate-600';
            
            // 내용 포맷팅 (키워드 강조, 인용구 처리)
            const formattedContent = formatSectionContent(content);
            
            html += `
                <div class="mb-8 pb-8 border-b border-slate-100 last:border-0">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${gradientColor} text-white font-bold text-sm flex items-center justify-center shadow-md">
                            ${index + 1}
                        </span>
                        <h4 class="text-xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent">
                            ${sectionTitle}
                        </h4>
                    </div>
                    <div class="text-base leading-relaxed text-slate-700 ml-11 space-y-4">
                        ${formattedContent}
                    </div>
                </div>
            `;
        }
    });
    
    return html || '<p class="text-slate-500 text-center py-8">상세 설명 내용이 없습니다.</p>';
}

// 섹션 내용 포맷팅 (키워드 강조, 인용구 처리)
function formatSectionContent(content) {
    // 먼저 키워드 박스 처리 (다른 포맷팅 전에)
    let formatted = content;
    
    // 키워드 강조 (예: "핵심 키워드: 열정, 카리스마..." 형식)
    formatted = formatted.replace(/핵심 키워드:\s*([^\n]+)/g, 
        '<div class="my-5 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-400 shadow-sm"><span class="font-bold text-blue-700 text-base">핵심 키워드:</span> <span class="text-blue-600 font-semibold">$1</span></div>');
    
    // 문단을 줄바꿈 기준으로 분리
    const paragraphs = formatted.split(/\n\n+/).filter(p => p.trim());
    
    let result = '';
    
    paragraphs.forEach((para, idx) => {
        para = para.trim();
        if (!para) return;
        
        // 키워드 박스는 그대로 유지
        if (para.includes('핵심 키워드:')) {
            result += para;
            return;
        }
        
        // 문단 시작
        let paragraphHtml = '<p class="mb-5 leading-7 text-slate-700">';
        
        // 순수 텍스트만 처리하기 위해 HTML 태그를 임시로 마스킹
        const tagPlaceholders = [];
        let processedPara = para;
        let placeholderIndex = 0;
        
        // HTML 태그를 임시로 치환 (이미 생성된 태그 보호)
        processedPara = processedPara.replace(/<[^>]+>/g, (match) => {
            const placeholder = `__HTML_TAG_${placeholderIndex}__`;
            tagPlaceholders[placeholderIndex] = match;
            placeholderIndex++;
            return placeholder;
        });
        
        // 번호 항목 패턴: "첫째," 또는 "첫째는" 또는 "첫째 " 또는 "첫째."
        // 텍스트를 부분으로 나누어서 플레이스홀더가 아닌 부분만 처리
        const numberParts = processedPara.split(/(__HTML_TAG_\d+__)/g);
        let numberProcessed = '';
        
        numberParts.forEach(part => {
            if (part.match(/^__HTML_TAG_\d+__$/)) {
                // 플레이스홀더는 그대로 유지
                numberProcessed += part;
            } else {
                // 순수 텍스트 부분만 번호 항목 처리
                part = part.replace(/(첫째|둘째|셋째|넷째|다섯째)([는은,]|\.|,| )/g, (match, number, suffix) => {
                    let html = `<span class="inline-block my-2 px-3 py-1 bg-purple-100 text-purple-700 font-bold rounded-md">${number}</span>`;
                    if (suffix === ',' || suffix === '.') {
                        html += suffix;
                    } else if (suffix === '는' || suffix === '은') {
                        html += suffix;
                    } else {
                        html += '는 ';
                    }
                    return html;
                });
                numberProcessed += part;
            }
        });
        
        processedPara = numberProcessed;
        
        // 인용구 강조 ("..." 형식) - 플레이스홀더가 아닌 텍스트만
        const quoteParts = processedPara.split(/(__HTML_TAG_\d+__)/g);
        let quoteProcessed = '';
        
        quoteParts.forEach(part => {
            if (part.match(/^__HTML_TAG_\d+__$/)) {
                // 플레이스홀더는 그대로 유지
                quoteProcessed += part;
            } else {
                // 순수 텍스트 부분만 인용구 처리
                part = part.replace(/"([^"]+)"/g, 
                    '<span class="text-purple-600 font-semibold italic bg-purple-50 px-1 rounded">"$1"</span>');
                quoteProcessed += part;
            }
        });
        
        processedPara = quoteProcessed;
        
        // 중요한 문구 강조
        const importantPhrases = [
            '빠르고 강하게', '0에서 1', '일단 시작하고 보자', '열정적으로 말하고', 
            '과감하게 행동하는', '강력한 추진력', '폭발적인 에너지', '카리스마',
            '타고난 능력', '진정한 리더', '핵심', '본질', '중요한', '가장 빛나는',
            '강점', '역동성', '추진력', '에너지', '성장', '관리 전략'
        ];
        
        // 중요한 문구 강조 (플레이스홀더가 아닌 텍스트만)
        // 텍스트를 부분으로 나누어서 처리
        const parts = processedPara.split(/(__HTML_TAG_\d+__)/g);
        let finalPara = '';
        
        parts.forEach(part => {
            if (part.match(/^__HTML_TAG_\d+__$/)) {
                // 플레이스홀더는 그대로 유지
                finalPara += part;
            } else {
                // 순수 텍스트 부분만 강조 처리
                let text = part;
                importantPhrases.forEach(phrase => {
                    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(`(${escapedPhrase})`, 'g');
                    text = text.replace(regex, '<span class="text-orange-600 font-semibold">$1</span>');
                });
                finalPara += text;
            }
        });
        
        processedPara = finalPara;
        
        // 임시로 치환한 HTML 태그를 다시 복원
        tagPlaceholders.forEach((tag, index) => {
            processedPara = processedPara.replace(`__HTML_TAG_${index}__`, tag);
        });
        
        // 줄바꿈 처리
        processedPara = processedPara.replace(/\n/g, '<br>');
        
        paragraphHtml += processedPara;
        paragraphHtml += '</p>';
        
        result += paragraphHtml;
    });
    
    return result;
}

// 다국어 번역 데이터
const translations = {
    ko: {
        // 네비게이션
        navTitle: "기질유형테스트",
        currentLang: "한국어",
        // 시작 화면
        testTag: "✨ 심리 테스트",
        mainTitle: "기질유형테스트",
        subtitle: "나의 숨겨진 기질을 알아보세요",
        startButton: "테스트 시작하기",
        // 퀴즈 화면
        question: "Question",
        prevQuestion: "← 이전 질문",
        // 결과 화면
        resultTitle: "기질 유형 테스트 결과",
        temperamentType: "기질 유형",
        scoreDetails: "기질 유형별 점수",
        viewDetails: "나의 성향분석 내용 보기",
        restart: "다시하기",
        // home.txt 내용
        testIntro: "이 테스트는",
        testIntroDesc: "당신의 성격을 단순히 분류하기 위한 검사가 아닙니다.\n당신이 세상과 에너지를 주고받는 방식,\n결정하고 행동하며 관계를 맺는 기질의 흐름을 이해하기 위한 도구입니다.",
        modelOrigin: "기질 모델의 기원",
        modelOriginDesc: "이 기질 모델은 고대부터 이어져 온\n다혈질, 담즙질, 우울질, 점액질의 4기질 이론을 바탕으로 합니다.\n다만 시대에 맞지 않는 명칭과 고정적인 해석에서 벗어나,\n이를 표현, 추진, 성찰, 안정이라는 현대적 언어로 재구성했습니다.",
        allHaveFour: "모든 사람은 네 가지 기질을 가지고 있습니다",
        allHaveFourDesc: "사람은 누구나 이 네 가지 기질 요소를 모두 가지고 있습니다.\n차이는 '있다/없다'가 아니라\n어떤 기질이 더 자주, 더 강하게 작동하느냐에 있습니다.",
        testMethod: "테스트 방법",
        testMethodDesc: "이 테스트는 40개의 질문을 통해\n당신에게 가장 자연스럽게 나타나는 기질의 조합을 분석하고,\n그 결과를 12가지 기질 유형으로 제시합니다.",
        testMethodTip: "💡 가장 본인과 가깝다고 생각되는 문장을 선택해주세요.",
        detailedResult: "상세한 결과 제공",
        detailedResultDesc: "결과는 단순한 유형 이름이 아니라\n당신의 강점과 주의점, 관계 방식, 일과 학습 스타일,\n그리고 앞으로의 성장 방향까지 함께 안내합니다.",
        testPurpose: "테스트의 목적",
        testPurposeDesc: "이 테스트의 목적은\n\"나는 이런 사람이다\"라고 규정하는 것이 아니라,\n\"나는 이런 방식으로 성장할 수 있다\"를 이해하는 데 있습니다.",
        timeInfo: "⏱️ 약 5분이면 충분합니다.\n지금, 당신의 기질 흐름을 확인해보세요.",
        // 모달
        modalTitle: "상세 설명",
        // 타입 이름
        typeExpressive: "표현형",
        typeDriving: "추진형",
        typeReflective: "성찰형",
        typeStable: "안정형"
    },
    en: {
        navTitle: "Temperament Type Test",
        currentLang: "English",
        testTag: "✨ Psychology Test",
        mainTitle: "Temperament Type Test",
        subtitle: "Discover your hidden temperament",
        startButton: "Start Test",
        question: "Question",
        prevQuestion: "← Previous Question",
        resultTitle: "Temperament Type Test Results",
        temperamentType: "Temperament Type",
        scoreDetails: "Score by Type",
        viewDetails: "View My Analysis",
        restart: "Restart",
        testIntro: "This test is",
        testIntroDesc: "not a simple personality classification.\nIt's a tool to understand how you exchange energy with the world,\nhow you make decisions, act, and form relationships—your temperament flow.",
        modelOrigin: "Origin of the Temperament Model",
        modelOriginDesc: "This model is based on the ancient four-temperament theory:\nsanguine, choleric, melancholic, and phlegmatic.\nHowever, we've moved away from outdated names and rigid interpretations,\nreconstructing it with modern language: Expressive, Driving, Reflective, and Stable.",
        allHaveFour: "Everyone Has All Four Temperaments",
        allHaveFourDesc: "Everyone possesses all four temperament elements.\nThe difference is not 'have or not have',\nbut which temperament operates more frequently and strongly.",
        testMethod: "Test Method",
        testMethodDesc: "Through 40 questions,\nthis test analyzes the temperament combination that appears most naturally in you,\nand presents the result as one of 12 temperament types.",
        testMethodTip: "💡 Please select the statement that feels closest to you.",
        detailedResult: "Detailed Results",
        detailedResultDesc: "Results include not just a type name,\nbut your strengths, cautions, relationship style, work and learning style,\nand your growth direction.",
        testPurpose: "Purpose of the Test",
        testPurposeDesc: "The purpose is not to define\n\"I am this type of person\",\nbut to understand \"I can grow in this way\".",
        timeInfo: "⏱️ Takes about 5 minutes.\nCheck your temperament flow now.",
        modalTitle: "Detailed Description",
        typeExpressive: "Expressive",
        typeDriving: "Driving",
        typeReflective: "Reflective",
        typeStable: "Stable"
    },
    es: {
        navTitle: "Test de Tipo de Temperamento",
        currentLang: "Español",
        testTag: "✨ Test Psicológico",
        mainTitle: "Test de Tipo de Temperamento",
        subtitle: "Descubre tu temperamento oculto",
        startButton: "Comenzar Test",
        question: "Pregunta",
        prevQuestion: "← Pregunta Anterior",
        resultTitle: "Resultados del Test de Temperamento",
        temperamentType: "Tipo de Temperamento",
        scoreDetails: "Puntuación por Tipo",
        viewDetails: "Ver Mi Análisis",
        restart: "Reiniciar",
        testIntro: "Este test es",
        testIntroDesc: "no es una simple clasificación de personalidad.\nEs una herramienta para entender cómo intercambias energía con el mundo,\ncómo tomas decisiones, actúas y formas relaciones—tu flujo de temperamento.",
        modelOrigin: "Origen del Modelo de Temperamento",
        modelOriginDesc: "Este modelo se basa en la antigua teoría de los cuatro temperamentos:\nsanguíneo, colérico, melancólico y flemático.\nSin embargo, nos hemos alejado de nombres obsoletos e interpretaciones rígidas,\nreconstruyéndolo con lenguaje moderno: Expresivo, Impulsor, Reflexivo y Estable.",
        allHaveFour: "Todos Tienen los Cuatro Temperamentos",
        allHaveFourDesc: "Todos poseen los cuatro elementos del temperamento.\nLa diferencia no es 'tener o no tener',\nsino qué temperamento opera con más frecuencia e intensidad.",
        testMethod: "Método del Test",
        testMethodDesc: "A través de 40 preguntas,\neste test analiza la combinación de temperamentos que aparece más naturalmente en ti,\ny presenta el resultado como uno de los 12 tipos de temperamento.",
        testMethodTip: "💡 Por favor selecciona la afirmación que te resuene más.",
        detailedResult: "Resultados Detallados",
        detailedResultDesc: "Los resultados incluyen no solo un nombre de tipo,\nsino tus fortalezas, precauciones, estilo de relación, trabajo y estilo de aprendizaje,\ny tu dirección de crecimiento.",
        testPurpose: "Propósito del Test",
        testPurposeDesc: "El propósito no es definir\n\"Soy este tipo de persona\",\nsino entender \"Puedo crecer de esta manera\".",
        timeInfo: "⏱️ Toma aproximadamente 5 minutos.\nVerifica tu flujo de temperamento ahora.",
        modalTitle: "Descripción Detallada",
        typeExpressive: "Expresivo",
        typeDriving: "Impulsor",
        typeReflective: "Reflexivo",
        typeStable: "Estable"
    },
    fr: {
        navTitle: "Test de Type de Tempérament",
        currentLang: "Français",
        testTag: "✨ Test Psychologique",
        mainTitle: "Test de Type de Tempérament",
        subtitle: "Découvrez votre tempérament caché",
        startButton: "Commencer le Test",
        question: "Question",
        prevQuestion: "← Question Précédente",
        resultTitle: "Résultats du Test de Tempérament",
        temperamentType: "Type de Tempérament",
        scoreDetails: "Score par Type",
        viewDetails: "Voir Mon Analyse",
        restart: "Recommencer",
        testIntro: "Ce test est",
        testIntroDesc: "pas une simple classification de personnalité.\nC'est un outil pour comprendre comment vous échangez de l'énergie avec le monde,\ncomment vous prenez des décisions, agissez et formez des relations—votre flux de tempérament.",
        modelOrigin: "Origine du Modèle de Tempérament",
        modelOriginDesc: "Ce modèle est basé sur l'ancienne théorie des quatre tempéraments:\nsanguin, colérique, mélancolique et flegmatique.\nCependant, nous nous sommes éloignés des noms obsolètes et des interprétations rigides,\nle reconstruisant avec un langage moderne: Expressif, Poussant, Réfléchi et Stable.",
        allHaveFour: "Tout le Monde a les Quatre Tempéraments",
        allHaveFourDesc: "Tout le monde possède les quatre éléments du tempérament.\nLa différence n'est pas 'avoir ou ne pas avoir',\nmais quel tempérament fonctionne plus fréquemment et intensément.",
        testMethod: "Méthode du Test",
        testMethodDesc: "À travers 40 questions,\nce test analyse la combinaison de tempéraments qui apparaît le plus naturellement en vous,\net présente le résultat comme l'un des 12 types de tempérament.",
        testMethodTip: "💡 Veuillez sélectionner l'affirmation qui vous ressemble le plus.",
        detailedResult: "Résultats Détaillés",
        detailedResultDesc: "Les résultats incluent non seulement un nom de type,\nmais vos forces, précautions, style de relation, travail et style d'apprentissage,\net votre direction de croissance.",
        testPurpose: "Objectif du Test",
        testPurposeDesc: "L'objectif n'est pas de définir\n\"Je suis ce type de personne\",\nmais de comprendre \"Je peux grandir de cette manière\".",
        timeInfo: "⏱️ Prend environ 5 minutes.\nVérifiez votre flux de tempérament maintenant.",
        modalTitle: "Description Détaillée",
        typeExpressive: "Expressif",
        typeDriving: "Poussant",
        typeReflective: "Réfléchi",
        typeStable: "Stable"
    },
    ja: {
        navTitle: "気質タイプテスト",
        currentLang: "日本語",
        testTag: "✨ 心理テスト",
        mainTitle: "気質タイプテスト",
        subtitle: "あなたの隠された気質を発見しましょう",
        startButton: "テストを開始",
        question: "質問",
        prevQuestion: "← 前の質問",
        resultTitle: "気質タイプテスト結果",
        temperamentType: "気質タイプ",
        scoreDetails: "タイプ別スコア",
        viewDetails: "私の分析を見る",
        restart: "やり直す",
        testIntro: "このテストは",
        testIntroDesc: "単純な性格分類ではありません。\n世界とエネルギーを交換する方法、\n決定し、行動し、関係を築く気質の流れを理解するためのツールです。",
        modelOrigin: "気質モデルの起源",
        modelOriginDesc: "このモデルは古代から続く\n多血質、胆汁質、憂鬱質、粘液質の4気質理論に基づいています。\nしかし、時代に合わない名称と固定的な解釈から離れ、\n表現、推進、内省、安定という現代的な言語で再構成しました。",
        allHaveFour: "すべての人が4つの気質を持っています",
        allHaveFourDesc: "誰もがこの4つの気質要素をすべて持っています。\n違いは「ある/ない」ではなく、\nどの気質がより頻繁に、より強く機能するかです。",
        testMethod: "テスト方法",
        testMethodDesc: "40の質問を通じて、\nあなたに最も自然に現れる気質の組み合わせを分析し、\nその結果を12種類の気質タイプとして提示します。",
        testMethodTip: "💡 自分に最も近いと思う文章を選択してください。",
        detailedResult: "詳細な結果",
        detailedResultDesc: "結果は単純なタイプ名だけでなく、\nあなたの強みと注意点、関係の仕方、仕事と学習スタイル、\nそして今後の成長方向まで一緒に案内します。",
        testPurpose: "テストの目的",
        testPurposeDesc: "このテストの目的は、\n「私はこのような人だ」と規定するのではなく、\n「私はこの方法で成長できる」を理解することです。",
        timeInfo: "⏱️ 約5分で十分です。\n今、あなたの気質の流れを確認してください。",
        modalTitle: "詳細説明",
        typeExpressive: "表現型",
        typeDriving: "推進型",
        typeReflective: "内省型",
        typeStable: "安定型"
    },
    vi: {
        navTitle: "Bài Kiểm Tra Tính Cách",
        currentLang: "Tiếng Việt",
        testTag: "✨ Bài Kiểm Tra Tâm Lý",
        mainTitle: "Bài Kiểm Tra Tính Cách",
        subtitle: "Khám phá tính cách ẩn của bạn",
        startButton: "Bắt Đầu Kiểm Tra",
        question: "Câu Hỏi",
        prevQuestion: "← Câu Hỏi Trước",
        resultTitle: "Kết Quả Kiểm Tra Tính Cách",
        temperamentType: "Loại Tính Cách",
        scoreDetails: "Điểm Theo Loại",
        viewDetails: "Xem Phân Tích Của Tôi",
        restart: "Làm Lại",
        testIntro: "Bài kiểm tra này",
        testIntroDesc: "không phải là một bài phân loại tính cách đơn giản.\nĐây là công cụ để hiểu cách bạn trao đổi năng lượng với thế giới,\ncách bạn đưa ra quyết định, hành động và hình thành mối quan hệ—dòng tính cách của bạn.",
        modelOrigin: "Nguồn Gốc Mô Hình Tính Cách",
        modelOriginDesc: "Mô hình này dựa trên lý thuyết bốn tính cách cổ xưa:\nđa cảm, nóng nảy, u sầu và điềm tĩnh.\nTuy nhiên, chúng tôi đã rời xa những tên gọi lỗi thời và cách giải thích cứng nhắc,\ntái cấu trúc nó bằng ngôn ngữ hiện đại: Biểu Cảm, Thúc Đẩy, Suy Tư và Ổn Định.",
        allHaveFour: "Mọi Người Đều Có Bốn Tính Cách",
        allHaveFourDesc: "Mọi người đều sở hữu bốn yếu tố tính cách.\nSự khác biệt không phải là 'có hay không có',\nmà là tính cách nào hoạt động thường xuyên và mạnh mẽ hơn.",
        testMethod: "Phương Pháp Kiểm Tra",
        testMethodDesc: "Thông qua 40 câu hỏi,\nbài kiểm tra này phân tích sự kết hợp tính cách xuất hiện tự nhiên nhất trong bạn,\nvà trình bày kết quả như một trong 12 loại tính cách.",
        testMethodTip: "💡 Vui lòng chọn câu nói mà bạn cảm thấy gần gũi nhất.",
        detailedResult: "Kết Quả Chi Tiết",
        detailedResultDesc: "Kết quả bao gồm không chỉ tên loại,\nmà còn điểm mạnh, lưu ý, phong cách quan hệ, công việc và phong cách học tập,\nvà hướng phát triển của bạn.",
        testPurpose: "Mục Đích Của Bài Kiểm Tra",
        testPurposeDesc: "Mục đích không phải là xác định\n\"Tôi là loại người này\",\nmà là hiểu \"Tôi có thể phát triển theo cách này\".",
        timeInfo: "⏱️ Mất khoảng 5 phút.\nKiểm tra dòng tính cách của bạn ngay bây giờ.",
        modalTitle: "Mô Tả Chi Tiết",
        typeExpressive: "Biểu Cảm",
        typeDriving: "Thúc Đẩy",
        typeReflective: "Suy Tư",
        typeStable: "Ổn Định"
    },
    th: {
        navTitle: "แบบทดสอบประเภทอารมณ์",
        currentLang: "ไทย",
        testTag: "✨ แบบทดสอบจิตวิทยา",
        mainTitle: "แบบทดสอบประเภทอารมณ์",
        subtitle: "ค้นพบอารมณ์ที่ซ่อนอยู่ของคุณ",
        startButton: "เริ่มทำแบบทดสอบ",
        question: "คำถาม",
        prevQuestion: "← คำถามก่อนหน้า",
        resultTitle: "ผลการทดสอบประเภทอารมณ์",
        temperamentType: "ประเภทอารมณ์",
        scoreDetails: "คะแนนตามประเภท",
        viewDetails: "ดูการวิเคราะห์ของฉัน",
        restart: "ทำใหม่",
        testIntro: "แบบทดสอบนี้",
        testIntroDesc: "ไม่ใช่การจำแนกบุคลิกภาพแบบง่ายๆ\nเป็นเครื่องมือเพื่อทำความเข้าใจวิธีที่คุณแลกเปลี่ยนพลังงานกับโลก\nวิธีที่คุณตัดสินใจ กระทำ และสร้างความสัมพันธ์—การไหลของอารมณ์ของคุณ",
        modelOrigin: "ที่มาของแบบจำลองอารมณ์",
        modelOriginDesc: "แบบจำลองนี้อิงตามทฤษฎีอารมณ์สี่ประเภทโบราณ:\nเลือดร้อน ใจร้อน เศร้าโศก และเยือกเย็น\nอย่างไรก็ตาม เราได้ห่างไกลจากชื่อที่ล้าสมัยและการตีความที่เข้มงวด\nสร้างใหม่ด้วยภาษาสมัยใหม่: แสดงออก ขับเคลื่อน ไตร่ตรอง และมั่นคง",
        allHaveFour: "ทุกคนมีอารมณ์ทั้งสี่ประเภท",
        allHaveFourDesc: "ทุกคนมีองค์ประกอบอารมณ์ทั้งสี่ประเภท\nความแตกต่างไม่ใช่ 'มีหรือไม่มี'\nแต่อารมณ์ใดที่ทำงานบ่อยและเข้มข้นกว่า",
        testMethod: "วิธีการทดสอบ",
        testMethodDesc: "ผ่าน 40 คำถาม\nแบบทดสอบนี้วิเคราะห์การรวมกันของอารมณ์ที่ปรากฏตามธรรมชาติในตัวคุณมากที่สุด\nและนำเสนอผลลัพธ์เป็นหนึ่งใน 12 ประเภทอารมณ์",
        testMethodTip: "💡 กรุณาเลือกข้อความที่คุณรู้สึกใกล้เคียงที่สุด",
        detailedResult: "ผลลัพธ์โดยละเอียด",
        detailedResultDesc: "ผลลัพธ์รวมไม่เพียงแค่ชื่อประเภท\nแต่ยังรวมถึงจุดแข็ง ข้อควรระวัง สไตล์ความสัมพันธ์ งานและสไตล์การเรียนรู้\nและทิศทางการเติบโตของคุณ",
        testPurpose: "จุดประสงค์ของการทดสอบ",
        testPurposeDesc: "จุดประสงค์ไม่ใช่เพื่อกำหนด\n\"ฉันเป็นคนประเภทนี้\"\nแต่เพื่อเข้าใจ \"ฉันสามารถเติบโตในวิธีนี้\"",
        timeInfo: "⏱️ ใช้เวลาประมาณ 5 นาที\nตรวจสอบการไหลของอารมณ์ของคุณตอนนี้",
        modalTitle: "คำอธิบายโดยละเอียด",
        typeExpressive: "แสดงออก",
        typeDriving: "ขับเคลื่อน",
        typeReflective: "ไตร่ตรอง",
        typeStable: "มั่นคง"
    }
};

// 언어 변경 함수
function changeLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    if (!t) return;
    
    // 네비게이션 업데이트
    const navTitle = document.getElementById('nav-title');
    if (navTitle) navTitle.textContent = t.navTitle;
    
    const currentLangEl = document.getElementById('current-lang');
    if (currentLangEl) currentLangEl.textContent = t.currentLang;
    
    // 모든 화면 업데이트
    updateAllScreens();
    
    // 언어 메뉴 닫기
    const langMenu = document.getElementById('lang-menu');
    if (langMenu) langMenu.classList.add('hidden');
    
    // 로컬 스토리지에 저장
    localStorage.setItem('preferredLanguage', lang);
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;
}

// 언어 메뉴 토글
function toggleLanguageMenu() {
    const menu = document.getElementById('lang-menu');
    menu.classList.toggle('hidden');
}

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
    const langButton = document.getElementById('lang-button');
    const langMenu = document.getElementById('lang-menu');
    if (langButton && langMenu && !langButton.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.add('hidden');
    }
});

// 시작 화면 업데이트
function updateStartScreen(t) {
    // Hero 섹션
    const testTag = document.querySelector('#start-screen .rounded-full span');
    if (testTag) testTag.textContent = t.testTag;
    
    const mainTitle = document.querySelector('#start-screen h1 span');
    if (mainTitle) mainTitle.textContent = t.mainTitle;
    
    const subtitle = document.querySelector('#start-screen p.text-slate-600');
    if (subtitle) subtitle.textContent = t.subtitle;
    
    // 카드 내용 업데이트
    const cards = document.querySelectorAll('#start-screen .bg-gradient-to-br');
    if (cards.length >= 6) {
        // 첫 번째 카드
        const card1Title = cards[0].querySelector('h3');
        const card1Desc = cards[0].querySelector('p');
        if (card1Title) card1Title.textContent = t.testIntro;
        if (card1Desc) card1Desc.innerHTML = t.testIntroDesc.replace(/\n/g, '<br>');
        
        // 두 번째 카드
        const card2Title = cards[1].querySelector('h3');
        const card2Desc = cards[1].querySelector('p');
        if (card2Title) card2Title.textContent = t.modelOrigin;
        if (card2Desc) card2Desc.innerHTML = t.modelOriginDesc.replace(/\n/g, '<br>');
        
        // 세 번째 카드
        const card3Title = cards[2].querySelector('h3');
        const card3Desc = cards[2].querySelector('p');
        if (card3Title) card3Title.textContent = t.allHaveFour;
        if (card3Desc) card3Desc.innerHTML = t.allHaveFourDesc.replace(/\n/g, '<br>');
        
        // 네 번째 카드
        const card4Title = cards[3].querySelector('h3');
        const card4Desc = cards[3].querySelector('p');
        const card4Tip = cards[3].querySelector('.bg-white\\/60 strong');
        if (card4Title) card4Title.textContent = t.testMethod;
        if (card4Desc) card4Desc.innerHTML = t.testMethodDesc.replace(/\n/g, '<br>');
        if (card4Tip) card4Tip.textContent = t.testMethodTip.replace('💡 ', '');
        
        // 다섯 번째 카드
        const card5Title = cards[4].querySelector('h3');
        const card5Desc = cards[4].querySelector('p');
        if (card5Title) card5Title.textContent = t.detailedResult;
        if (card5Desc) card5Desc.innerHTML = t.detailedResultDesc.replace(/\n/g, '<br>');
        
        // 여섯 번째 카드
        const card6Title = cards[5].querySelector('h3');
        const card6Desc = cards[5].querySelector('p');
        if (card6Title) card6Title.textContent = t.testPurpose;
        if (card6Desc) card6Desc.innerHTML = t.testPurposeDesc.replace(/\n/g, '<br>');
    }
    
    // 시간 안내
    const timeInfo = document.querySelector('#start-screen .bg-gradient-to-r.from-slate-50');
    if (timeInfo) timeInfo.innerHTML = t.timeInfo.replace(/\n/g, '<br>');
    
    // 시작 버튼
    const startButton = document.querySelector('button[onclick="startTest()"]');
    if (startButton) startButton.textContent = t.startButton;
}

// 모든 화면 업데이트
function updateAllScreens() {
    const t = translations[currentLanguage];
    if (!t) return;
    
    updateStartScreen(t);
    
    // 퀴즈 화면
    const questionLabel = document.getElementById('question-label');
    if (questionLabel) questionLabel.textContent = t.question;
    
    const prevQuestionText = document.getElementById('prev-question-text');
    if (prevQuestionText) prevQuestionText.textContent = t.prevQuestion;
    
    // 결과 화면
    const resultTitle = document.getElementById('result-title');
    if (resultTitle) resultTitle.textContent = t.resultTitle;
    
    const scoreDetailsLabel = document.getElementById('score-details-label');
    if (scoreDetailsLabel) scoreDetailsLabel.textContent = t.scoreDetails;
    
    const viewDetailsText = document.getElementById('view-details-text');
    if (viewDetailsText) viewDetailsText.textContent = t.viewDetails;
    
    const restartText = document.getElementById('restart-text');
    if (restartText) restartText.textContent = t.restart;
}

// 페이지 로드 시 저장된 언어 불러오기
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ko';
    if (savedLang !== 'ko') {
        changeLanguage(savedLang);
    }
});
