// 질문 데이터는 translations 객체의 questions 속성으로 이동
// 이 배열은 한국어 기본값으로 유지 (하위 호환성)
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

// 언어별 언어 코드 매핑
const languageCodes = {
    ko: 'KO',
    en: 'EN',
    es: 'ES',
    fr: 'FR',
    ja: 'JA',
    vi: 'VI',
    th: 'TH'
};

// 언어별 국기 이모지 매핑
const languageFlags = {
    ko: '🇰🇷',
    en: '🇺🇸',
    es: '🇪🇸',
    fr: '🇫🇷',
    ja: '🇯🇵',
    vi: '🇻🇳',
    th: '🇹🇭'
};

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

// 현재 언어에 맞는 질문 가져오기
function getCurrentQuestions() {
    const langQuestions = translations[currentLanguage]?.questions;
    if (langQuestions && Array.isArray(langQuestions) && langQuestions.length === 40) {
        return langQuestions;
    }
    // 번역이 없으면 한국어 기본값 사용
    return questions;
}

function renderQuestion() {
    const currentQuestions = getCurrentQuestions();
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionNumber.innerHTML = `${currentQuestionIndex + 1}<span class="text-sm font-normal text-slate-400 ml-1">/ ${currentQuestions.length}</span>`;

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
    
    const currentQuestions = getCurrentQuestions();
    if (currentQuestionIndex < currentQuestions.length - 1) {
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
    
    const currentQuestions = getCurrentQuestions();
    // Create array with scores and indices, then sort by score
    const scoreData = types.map((type, idx) => ({
        type: type,
        score: scores[idx],
        index: idx,
        percent: (scores[idx] / currentQuestions.length) * 100
    })).sort((a, b) => b.score - a.score); // Sort descending
    
    // 주기질 (1위)
    const primaryResult = scoreData[0];
    const primaryIndex = primaryResult.index;
    
    // 보조기질 (2위)
    const secondaryResult = scoreData[1];
    const secondaryIndex = secondaryResult.index;
    
    // 현재 언어에 맞는 타입 정보 가져오기
    const t = translations[currentLanguage];
    const langTypes = t?.types || types.map(t => ({ shortName: t.shortName, englishName: t.englishName, desc: t.desc }));
    
    // 번역된 타입 정보 사용
    const primaryType = langTypes[primaryIndex];
    const secondaryType = langTypes[secondaryIndex];
    
    // 조합 결과 생성: 언어에 따라 형식 변경
    let combinationName, combinationEnglish, fullCombination;
    if (currentLanguage === 'ko') {
        combinationName = `${primaryType.shortName}${secondaryType.shortName}형`;
        combinationEnglish = `(${primaryType.englishName}–${secondaryType.englishName})`;
        fullCombination = `${combinationName} ${combinationEnglish}`;
    } else {
        // 영어 및 기타 언어: 영어 형식 사용
        combinationName = `${primaryType.englishName}-${secondaryType.englishName}`;
        fullCombination = combinationName;
    }
    
    // 현재 조합 결과 저장 (상세 설명용)
    currentCombination = {
        koreanName: currentLanguage === 'ko' ? combinationName : `${primaryType.shortName}${secondaryType.shortName}형`,
        englishName: `${primaryType.englishName}-${secondaryType.englishName}`,
        fullName: fullCombination
    };
    
    console.log('저장된 조합:', currentCombination);
    
    // 주기질 표시 (조합 결과 표시)
    document.getElementById('result-type').textContent = fullCombination;
    document.getElementById('result-desc').textContent = `${primaryType.desc} + ${secondaryType.desc}`;
    
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
        
        // 번역된 타입 정보 사용
        const langType = langTypes[index];
        const typeName = langType ? langType.shortName : type.shortName;
        const typeSuffix = currentLanguage === 'ko' ? '형' : '';
        
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
                        ${typeName}${typeSuffix}
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
        // 질문 데이터
        questions: [
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
        ],
        // 타입 설명
        types: [
            { shortName: "표현", englishName: "Expressive", desc: "활기차고 사교적이며 분위기를 주도하는 에너지가 넘치는 유형" },
            { shortName: "추진", englishName: "Driving", desc: "목표 지향적이고 결단력이 있으며 리더십이 강한 유형" },
            { shortName: "성찰", englishName: "Reflective", desc: "신중하고 분석적이며 깊이 있는 사고를 하는 유형" },
            { shortName: "안정", englishName: "Stable", desc: "평화롭고 조화로우며 타인을 배려하는 따뜻한 유형" }
        ],
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
        // 질문 데이터
        questions: [
            { q: 1, options: ["I easily get energized by new people or situations", "I'm relatively open to new challenges", "I tend to analyze and understand situations", "I tend to adapt flexibly to situations"] },
            { q: 2, options: ["I tend to brighten the atmosphere", "I try to convey my opinions persuasively", "Once I start something, I see it through to the end", "I don't have big emotional fluctuations"] },
            { q: 3, options: ["I gain strength from being with people", "When I have a goal, I push hard for it", "I often give up my own things for others", "I adapt relatively well to given environments"] },
            { q: 4, options: ["I tend to make a good first impression", "I feel motivated in competitive situations", "I'm good at understanding people's feelings or positions", "I tend to keep emotions inside rather than show them"] },
            { q: 5, options: ["I like coming up with new ideas", "I'm evaluated as having excellent problem-solving skills", "I value respecting others", "I tend to be cautious in new situations"] },
            { q: 6, options: ["I feel good in active situations", "I prefer to decide and act alone", "I'm sensitive to emotional changes", "I tend to accept others' opinions well"] },
            { q: 7, options: ["I often naturally take the lead", "I try to interpret situations positively", "I value making and following plans", "I'm relatively patient"] },
            { q: 8, options: ["I tend to react and act immediately", "I'm confident in my choices", "I find it comfortable to follow set procedures or plans", "I'm not very talkative"] },
            { q: 9, options: ["I generally have an optimistic perspective", "I express my thoughts and feelings relatively honestly", "I value organization and systems", "I tend to embrace diverse people"] },
            { q: 10, options: ["I'm good at telling stories in an interesting way", "I have clear standards and perspectives", "I'm considered a trustworthy person", "I have a kind and considerate attitude"] },
            { q: 11, options: ["I find joy in life", "I can be bold even in risky situations", "I pay attention to details", "I coordinate smoothly in relationships"] },
            { q: 12, options: ["My expressions and tone are bright", "I have relatively strong self-confidence", "I value dignity and courtesy", "I prefer stable states"] },
            { q: 13, options: ["I'm easily motivated by external stimuli", "I tend to judge and act independently", "I value ideal values and meanings", "I give a gentle and mild impression"] },
            { q: 14, options: ["I'm familiar with expressing my thoughts", "I'm quick when making decisions", "I tend to immerse deeply in one thing", "I use seriousness and humor together"] },
            { q: 15, options: ["I adapt relatively easily to new gatherings", "I frequently suggest ideas or opinions", "I enjoy artistic, musical, and emotional activities", "I play a mediating role in conflicts"] },
            { q: 16, options: ["I like communicating through words", "I value results and outcomes", "I tend to think thoroughly before deciding", "I'm tolerant of others' mistakes"] },
            { q: 17, options: ["My emotions and passion are relatively clear", "I feel responsible for tasks I take on", "I value trust and loyalty in relationships", "I listen well to others' stories"] },
            { q: 18, options: ["I don't feel burdened by being in front of people", "I often take on leadership roles", "I value organization and structure", "I'm satisfied with the current state"] },
            { q: 19, options: ["I tend to become well-known among people", "I emphasize efficiency and productivity", "I tend to aim for high completion", "I pursue comfort and stability"] },
            { q: 20, options: ["My energy shows outwardly well", "I respond calmly even in difficult situations", "I value courtesy and rules", "I prefer the middle ground rather than extremes"] },
            { q: 21, options: ["I sometimes want to be noticed", "I show a tendency to direct or control", "I can shrink in unfamiliar situations", "I tend to space out when motivation drops"] },
            { q: 22, options: ["I sometimes have difficulty controlling emotions", "I try not to be swayed by emotions", "I remember hurts for a long time", "My passion may seem low"] },
            { q: 23, options: ["My explanations can become lengthy", "I sometimes want to challenge authority", "I tend to keep emotions bottled up", "I sometimes procrastinate on things I need to do"] },
            { q: 24, options: ["I often forget things", "I sometimes get misunderstood because of my honesty", "My standards may seem too high and picky", "Worry often comes first"] },
            { q: 25, options: ["I sometimes interrupt during conversations", "I tend to rush decisions", "My emotional fluctuations can be large", "I tend to hesitate on decisions"] },
            { q: 26, options: ["My behavior patterns can be hard to predict", "I may be awkward at expressing emotions", "I may feel my presence is weak in relationships", "I'm sometimes not proactive in forming relationships"] },
            { q: 27, options: ["I sometimes follow the flow spontaneously", "I don't easily change my thoughts", "I tend to accumulate dissatisfaction inside", "I spend a long time before decisions"] },
            { q: 28, options: ["I value freedom over management", "I have great pride in my abilities", "I sometimes interpret situations pessimistically", "I prefer not to stand out"] },
            { q: 29, options: ["My emotions easily show outwardly", "I enjoy logical discussions", "I need time alone", "I sometimes have difficulty setting clear goals"] },
            { q: 30, options: ["I sometimes handle things superficially rather than deeply", "I can become sensitive", "I sometimes interpret situations negatively", "My tension can drop"] },
            { q: 31, options: ["I have a strong desire to be recognized", "When I'm immersed in work, I can miss things around me", "I tend to withdraw from conflicts", "I worry a lot"] },
            { q: 32, options: ["I can become talkative", "I express emotions little", "I'm easily hurt by small stimuli", "I may seem passive"] },
            { q: 33, options: ["I can leave things in disorganized states", "My tendency to lead others becomes strong", "I tend to get discouraged easily", "I tend to postpone decisions"] },
            { q: 34, options: ["My consistency may seem weak", "I can lack generosity", "I recover energy introvertedly", "I express interest little"] },
            { q: 35, options: ["My surroundings can become messy", "I sometimes choose to use others", "I can fall into depression", "I express dissatisfaction through muttering"] },
            { q: 36, options: ["I want to reveal myself", "I can be stubborn", "I can become very suspicious", "I hear that I'm slow"] },
            { q: 37, options: ["My voice can become loud", "I strongly assert my opinions", "I enjoy time alone", "My actions are leisurely"] },
            { q: 38, options: ["My concentration can be scattered", "I can become hasty", "I don't easily trust others", "My motivation can drop"] },
            { q: 39, options: ["I can lose composure", "I sometimes don't think enough", "I hold grudges for a long time", "I comply even when I don't want to"] },
            { q: 40, options: ["My attitude can change depending on my mood", "I judge situations quickly", "My critical perspective can become strong", "I compromise to avoid conflicts"] }
        ],
        // 타입 설명
        types: [
            { shortName: "Expressive", englishName: "Expressive", desc: "Energetic, sociable, and full of energy that leads the atmosphere" },
            { shortName: "Driving", englishName: "Driving", desc: "Goal-oriented, decisive, and strong in leadership" },
            { shortName: "Reflective", englishName: "Reflective", desc: "Cautious, analytical, and deep in thinking" },
            { shortName: "Stable", englishName: "Stable", desc: "Peaceful, harmonious, and warm type that cares for others" }
        ],
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
        // 질문 데이터
        questions: [
            { q: 1, options: ["Me energizo fácilmente con personas o situaciones nuevas", "Soy relativamente abierto a nuevos desafíos", "Tiendo a analizar y entender situaciones", "Tiendo a adaptarme flexiblemente a las situaciones"] },
            { q: 2, options: ["Tiendo a alegrar el ambiente", "Intento transmitir mis opiniones de manera persuasiva", "Una vez que empiezo algo, lo llevo hasta el final", "No tengo grandes fluctuaciones emocionales"] },
            { q: 3, options: ["Obtengo fuerza al estar con personas", "Cuando tengo un objetivo, lo persigo con fuerza", "A menudo renuncio a mis propias cosas por otros", "Me adapto relativamente bien a los entornos dados"] },
            { q: 4, options: ["Tiendo a causar una buena primera impresión", "Me siento motivado en situaciones competitivas", "Soy bueno entendiendo los sentimientos o posiciones de las personas", "Tiendo a mantener las emociones dentro en lugar de mostrarlas"] },
            { q: 5, options: ["Me gusta generar nuevas ideas", "Soy evaluado como alguien con excelentes habilidades para resolver problemas", "Valoro respetar a los demás", "Tiendo a ser cauteloso en situaciones nuevas"] },
            { q: 6, options: ["Me siento bien en situaciones activas", "Prefiero decidir y actuar solo", "Soy sensible a los cambios emocionales", "Tiendo a aceptar bien las opiniones de otros"] },
            { q: 7, options: ["A menudo tomo el liderazgo naturalmente", "Intento interpretar las situaciones positivamente", "Valoro hacer y seguir planes", "Soy relativamente paciente"] },
            { q: 8, options: ["Tiendo a reaccionar y actuar inmediatamente", "Tengo confianza en mis elecciones", "Me siento cómodo siguiendo procedimientos o planes establecidos", "No soy muy hablador"] },
            { q: 9, options: ["Generalmente tengo una perspectiva optimista", "Expreso mis pensamientos y sentimientos relativamente honestamente", "Valoro la organización y los sistemas", "Tiendo a abrazar personas diversas"] },
            { q: 10, options: ["Soy bueno contando historias de manera interesante", "Tengo estándares y perspectivas claras", "Soy considerado una persona confiable", "Tengo una actitud amable y considerada"] },
            { q: 11, options: ["Encuentro alegría en la vida", "Puedo ser audaz incluso en situaciones riesgosas", "Presto atención a los detalles", "Coordinó suavemente en las relaciones"] },
            { q: 12, options: ["Mis expresiones y tono son brillantes", "Tengo una autoconfianza relativamente fuerte", "Valoro la dignidad y la cortesía", "Prefiero estados estables"] },
            { q: 13, options: ["Me motivo fácilmente con estímulos externos", "Tiendo a juzgar y actuar independientemente", "Valoro los valores y significados ideales", "Doy una impresión gentil y suave"] },
            { q: 14, options: ["Estoy familiarizado con expresar mis pensamientos", "Soy rápido al tomar decisiones", "Tiendo a sumergirme profundamente en una cosa", "Uso la seriedad y el humor juntos"] },
            { q: 15, options: ["Me adapto relativamente fácilmente a nuevas reuniones", "Frecuentemente sugiero ideas u opiniones", "Disfruto actividades artísticas, musicales y emocionales", "Juego un papel mediador en conflictos"] },
            { q: 16, options: ["Me gusta comunicarme a través de palabras", "Valoro los resultados y los resultados", "Tiendo a pensar a fondo antes de decidir", "Soy tolerante con los errores de otros"] },
            { q: 17, options: ["Mis emociones y pasión son relativamente claras", "Me siento responsable de las tareas que asumo", "Valoro la confianza y la lealtad en las relaciones", "Escucho bien las historias de otros"] },
            { q: 18, options: ["No me siento agobiado al estar frente a personas", "A menudo asumo roles de liderazgo", "Valoro la organización y la estructura", "Estoy satisfecho con el estado actual"] },
            { q: 19, options: ["Tiendo a volverme conocido entre las personas", "Enfatizo la eficiencia y la productividad", "Tiendo a apuntar a una alta finalización", "Persigo la comodidad y la estabilidad"] },
            { q: 20, options: ["Mi energía se muestra externamente bien", "Respondo con calma incluso en situaciones difíciles", "Valoro la cortesía y las reglas", "Prefiero el término medio en lugar de los extremos"] },
            { q: 21, options: ["A veces quiero ser notado", "Muestro una tendencia a dirigir o controlar", "Puedo encogerme en situaciones desconocidas", "Tiendo a distraerme cuando la motivación baja"] },
            { q: 22, options: ["A veces tengo dificultad para controlar las emociones", "Intento no dejarme llevar por las emociones", "Recuerdo los dolores durante mucho tiempo", "Mi pasión puede parecer baja"] },
            { q: 23, options: ["Mis explicaciones pueden volverse largas", "A veces quiero desafiar la autoridad", "Tiendo a mantener las emociones reprimidas", "A veces pospongo las cosas que necesito hacer"] },
            { q: 24, options: ["A menudo olvido cosas", "A veces me malinterpretan por mi honestidad", "Mis estándares pueden parecer demasiado altos y exigentes", "La preocupación a menudo viene primero"] },
            { q: 25, options: ["A veces interrumpo durante las conversaciones", "Tiendo a apresurar las decisiones", "Mis fluctuaciones emocionales pueden ser grandes", "Tiendo a vacilar en las decisiones"] },
            { q: 26, options: ["Mis patrones de comportamiento pueden ser difíciles de predecir", "Puedo ser torpe expresando emociones", "Puedo sentir que mi presencia es débil en las relaciones", "A veces no soy proactivo en formar relaciones"] },
            { q: 27, options: ["A veces sigo el flujo espontáneamente", "No cambio fácilmente mis pensamientos", "Tiendo a acumular insatisfacción dentro", "Paso mucho tiempo antes de las decisiones"] },
            { q: 28, options: ["Valoro la libertad sobre la gestión", "Tengo gran orgullo en mis habilidades", "A veces interpreto las situaciones pesimistamente", "Prefiero no destacar"] },
            { q: 29, options: ["Mis emociones se muestran fácilmente externamente", "Disfruto las discusiones lógicas", "Necesito tiempo a solas", "A veces tengo dificultad para establecer metas claras"] },
            { q: 30, options: ["A veces manejo las cosas superficialmente en lugar de profundamente", "Puedo volverme sensible", "A veces interpreto las situaciones negativamente", "Mi tensión puede bajar"] },
            { q: 31, options: ["Tengo un fuerte deseo de ser reconocido", "Cuando estoy inmerso en el trabajo, puedo perder cosas a mi alrededor", "Tiendo a retirarme de los conflictos", "Me preocupo mucho"] },
            { q: 32, options: ["Puedo volverme hablador", "Expreso emociones poco", "Me lastimo fácilmente con pequeños estímulos", "Puedo parecer pasivo"] },
            { q: 33, options: ["Puedo dejar las cosas en estados desorganizados", "Mi tendencia a liderar a otros se vuelve fuerte", "Tiendo a desanimarme fácilmente", "Tiendo a posponer decisiones"] },
            { q: 34, options: ["Mi consistencia puede parecer débil", "Puedo carecer de generosidad", "Recupero energía de manera introvertida", "Expreso interés poco"] },
            { q: 35, options: ["Mi entorno puede volverse desordenado", "A veces elijo usar a otros", "Puedo caer en depresión", "Expreso insatisfacción a través de murmullos"] },
            { q: 36, options: ["Quiero revelarme", "Puedo ser terco", "Puedo volverme muy sospechoso", "Escucho que soy lento"] },
            { q: 37, options: ["Mi voz puede volverse fuerte", "Afirmo fuertemente mis opiniones", "Disfruto el tiempo a solas", "Mis acciones son pausadas"] },
            { q: 38, options: ["Mi concentración puede estar dispersa", "Puedo volverme apresurado", "No confío fácilmente en otros", "Mi motivación puede bajar"] },
            { q: 39, options: ["Puedo perder la compostura", "A veces no pienso lo suficiente", "Guardo rencores durante mucho tiempo", "Cumplo incluso cuando no quiero"] },
            { q: 40, options: ["Mi actitud puede cambiar dependiendo de mi estado de ánimo", "Juzgo situaciones rápidamente", "Mi perspectiva crítica puede volverse fuerte", "Hago compromisos para evitar conflictos"] }
        ],
        // 타입 설명
        types: [
            { shortName: "Expresivo", englishName: "Expressive", desc: "Enérgico, sociable y lleno de energía que lidera la atmósfera" },
            { shortName: "Impulsor", englishName: "Driving", desc: "Orientado a objetivos, decidido y fuerte en liderazgo" },
            { shortName: "Reflexivo", englishName: "Reflective", desc: "Cauteloso, analítico y profundo en el pensamiento" },
            { shortName: "Estable", englishName: "Stable", desc: "Pacífico, armonioso y cálido tipo que se preocupa por los demás" }
        ],
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
        // 질문 데이터
        questions: [
            { q: 1, options: ["Je me sens facilement énergisé par de nouvelles personnes ou situations", "Je suis relativement ouvert aux nouveaux défis", "J'ai tendance à analyser et comprendre les situations", "J'ai tendance à m'adapter flexiblement aux situations"] },
            { q: 2, options: ["J'ai tendance à égayer l'atmosphère", "J'essaie de transmettre mes opinions de manière persuasive", "Une fois que je commence quelque chose, je vais jusqu'au bout", "Je n'ai pas de grandes fluctuations émotionnelles"] },
            { q: 3, options: ["Je gagne de la force en étant avec les gens", "Quand j'ai un objectif, je le poursuis avec force", "Je renonce souvent à mes propres choses pour les autres", "Je m'adapte relativement bien aux environnements donnés"] },
            { q: 4, options: ["J'ai tendance à faire une bonne première impression", "Je me sens motivé dans les situations compétitives", "Je suis bon pour comprendre les sentiments ou positions des gens", "J'ai tendance à garder les émotions à l'intérieur plutôt que de les montrer"] },
            { q: 5, options: ["J'aime trouver de nouvelles idées", "Je suis évalué comme ayant d'excellentes compétences en résolution de problèmes", "Je valorise le respect des autres", "J'ai tendance à être prudent dans les nouvelles situations"] },
            { q: 6, options: ["Je me sens bien dans les situations actives", "Je préfère décider et agir seul", "Je suis sensible aux changements émotionnels", "J'ai tendance à bien accepter les opinions des autres"] },
            { q: 7, options: ["Je prends souvent naturellement le leadership", "J'essaie d'interpréter les situations positivement", "Je valorise la création et le suivi de plans", "Je suis relativement patient"] },
            { q: 8, options: ["J'ai tendance à réagir et agir immédiatement", "J'ai confiance en mes choix", "Je trouve confortable de suivre des procédures ou plans établis", "Je ne suis pas très bavard"] },
            { q: 9, options: ["J'ai généralement une perspective optimiste", "J'exprime mes pensées et sentiments relativement honnêtement", "Je valorise l'organisation et les systèmes", "J'ai tendance à embrasser des personnes diverses"] },
            { q: 10, options: ["Je suis bon pour raconter des histoires de manière intéressante", "J'ai des standards et perspectives clairs", "Je suis considéré comme une personne digne de confiance", "J'ai une attitude gentille et attentionnée"] },
            { q: 11, options: ["Je trouve de la joie dans la vie", "Je peux être audacieux même dans des situations risquées", "Je prête attention aux détails", "Je coordonne en douceur dans les relations"] },
            { q: 12, options: ["Mes expressions et ton sont brillants", "J'ai une confiance en soi relativement forte", "Je valorise la dignité et la courtoisie", "Je préfère les états stables"] },
            { q: 13, options: ["Je suis facilement motivé par des stimuli externes", "J'ai tendance à juger et agir indépendamment", "Je valorise les valeurs et significations idéales", "Je donne une impression douce et douce"] },
            { q: 14, options: ["Je suis familier avec l'expression de mes pensées", "Je suis rapide pour prendre des décisions", "J'ai tendance à m'immerger profondément dans une chose", "J'utilise la sérieux et l'humour ensemble"] },
            { q: 15, options: ["Je m'adapte relativement facilement aux nouveaux rassemblements", "Je suggère fréquemment des idées ou opinions", "J'apprécie les activités artistiques, musicales et émotionnelles", "Je joue un rôle de médiation dans les conflits"] },
            { q: 16, options: ["J'aime communiquer par des mots", "Je valorise les résultats et les résultats", "J'ai tendance à réfléchir à fond avant de décider", "Je suis tolérant envers les erreurs des autres"] },
            { q: 17, options: ["Mes émotions et passion sont relativement claires", "Je me sens responsable des tâches que j'assume", "Je valorise la confiance et la loyauté dans les relations", "J'écoute bien les histoires des autres"] },
            { q: 18, options: ["Je ne me sens pas accablé d'être devant les gens", "Je prends souvent des rôles de leadership", "Je valorise l'organisation et la structure", "Je suis satisfait de l'état actuel"] },
            { q: 19, options: ["J'ai tendance à devenir bien connu parmi les gens", "J'insiste sur l'efficacité et la productivité", "J'ai tendance à viser une haute finalisation", "Je poursuis le confort et la stabilité"] },
            { q: 20, options: ["Mon énergie se montre extérieurement bien", "Je réponds calmement même dans des situations difficiles", "Je valorise la courtoisie et les règles", "Je préfère le juste milieu plutôt que les extrêmes"] },
            { q: 21, options: ["Je veux parfois être remarqué", "Je montre une tendance à diriger ou contrôler", "Je peux rétrécir dans des situations inconnues", "J'ai tendance à m'évader quand la motivation baisse"] },
            { q: 22, options: ["J'ai parfois des difficultés à contrôler les émotions", "J'essaie de ne pas être influencé par les émotions", "Je me souviens des blessures pendant longtemps", "Ma passion peut sembler faible"] },
            { q: 23, options: ["Mes explications peuvent devenir longues", "Je veux parfois défier l'autorité", "J'ai tendance à garder les émotions refoulées", "Je remets parfois à plus tard les choses que je dois faire"] },
            { q: 24, options: ["J'oublie souvent des choses", "Je suis parfois mal compris à cause de mon honnêteté", "Mes standards peuvent sembler trop élevés et pointilleux", "L'inquiétude vient souvent en premier"] },
            { q: 25, options: ["J'interromps parfois pendant les conversations", "J'ai tendance à précipiter les décisions", "Mes fluctuations émotionnelles peuvent être importantes", "J'ai tendance à hésiter sur les décisions"] },
            { q: 26, options: ["Mes modèles de comportement peuvent être difficiles à prédire", "Je peux être maladroit à exprimer des émotions", "Je peux sentir que ma présence est faible dans les relations", "Je ne suis parfois pas proactif dans la formation de relations"] },
            { q: 27, options: ["Je suis parfois le flux spontanément", "Je ne change pas facilement mes pensées", "J'ai tendance à accumuler l'insatisfaction à l'intérieur", "Je passe beaucoup de temps avant les décisions"] },
            { q: 28, options: ["Je valorise la liberté sur la gestion", "J'ai une grande fierté dans mes capacités", "J'interprète parfois les situations de manière pessimiste", "Je préfère ne pas me démarquer"] },
            { q: 29, options: ["Mes émotions se montrent facilement extérieurement", "J'apprécie les discussions logiques", "J'ai besoin de temps seul", "J'ai parfois des difficultés à fixer des objectifs clairs"] },
            { q: 30, options: ["Je gère parfois les choses superficiellement plutôt que profondément", "Je peux devenir sensible", "J'interprète parfois les situations négativement", "Ma tension peut baisser"] },
            { q: 31, options: ["J'ai un fort désir d'être reconnu", "Quand je suis immergé dans le travail, je peux manquer des choses autour de moi", "J'ai tendance à me retirer des conflits", "Je m'inquiète beaucoup"] },
            { q: 32, options: ["Je peux devenir bavard", "J'exprime peu d'émotions", "Je suis facilement blessé par de petits stimuli", "Je peux sembler passif"] },
            { q: 33, options: ["Je peux laisser les choses dans des états désorganisés", "Ma tendance à diriger les autres devient forte", "J'ai tendance à me décourager facilement", "J'ai tendance à reporter les décisions"] },
            { q: 34, options: ["Ma cohérence peut sembler faible", "Je peux manquer de générosité", "Je récupère l'énergie de manière introvertie", "J'exprime peu d'intérêt"] },
            { q: 35, options: ["Mon environnement peut devenir désordonné", "Je choisis parfois d'utiliser les autres", "Je peux tomber en dépression", "J'exprime l'insatisfaction par des murmures"] },
            { q: 36, options: ["Je veux me révéler", "Je peux être têtu", "Je peux devenir très méfiant", "J'entends que je suis lent"] },
            { q: 37, options: ["Ma voix peut devenir forte", "J'affirme fortement mes opinions", "J'apprécie le temps seul", "Mes actions sont paisibles"] },
            { q: 38, options: ["Ma concentration peut être dispersée", "Je peux devenir précipité", "Je ne fais pas facilement confiance aux autres", "Ma motivation peut baisser"] },
            { q: 39, options: ["Je peux perdre mon sang-froid", "Je ne pense parfois pas assez", "Je garde des rancunes pendant longtemps", "Je me conforme même quand je ne veux pas"] },
            { q: 40, options: ["Mon attitude peut changer selon mon humeur", "Je juge les situations rapidement", "Ma perspective critique peut devenir forte", "Je fais des compromis pour éviter les conflits"] }
        ],
        // 타입 설명
        types: [
            { shortName: "Expressif", englishName: "Expressive", desc: "Énergique, sociable et plein d'énergie qui mène l'atmosphère" },
            { shortName: "Poussant", englishName: "Driving", desc: "Orienté objectif, décisif et fort en leadership" },
            { shortName: "Réfléchi", englishName: "Reflective", desc: "Prudent, analytique et profond dans la pensée" },
            { shortName: "Stable", englishName: "Stable", desc: "Type paisible, harmonieux et chaleureux qui se soucie des autres" }
        ],
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
        // 질문 데이터
        questions: [
            { q: 1, options: ["新しい人や状況に簡単にエネルギーが湧く", "新しい挑戦に比較的抵抗がない", "状況を分析し理解しようとする傾向がある", "状況に合わせて柔軟に調整する傾向がある"] },
            { q: 2, options: ["雰囲気を明るくする傾向がある", "自分の意見を説得力を持って伝えようとする", "一度始めたことは最後までやり遂げる", "感情の起伏が大きくない"] },
            { q: 3, options: ["人と一緒にいることで力を得る", "目標ができたら強く押し進める傾向がある", "他人のために自分のものを譲ることが多い", "与えられた環境に比較的よく適応する"] },
            { q: 4, options: ["第一印象で好印象を与える傾向がある", "競争状況でモチベーションを感じる", "人の気持ちや立場をよく理解する", "感情を外に出すよりも内に秘める傾向がある"] },
            { q: 5, options: ["新しいアイデアを思いつくのが好き", "問題解決能力が優れていると評価される", "他人を尊重する態度を重要視する", "初めて会う状況では慎重な傾向がある"] },
            { q: 6, options: ["活動的な状況で気分が良くなる", "一人で決めて実行することを好む", "感情の変化に敏感な傾向がある", "他人の意見をよく受け入れる傾向がある"] },
            { q: 7, options: ["自然に主導権を握ることが多い", "状況を肯定的に解釈しようとする", "計画を立てて従うことを重要視する", "比較的忍耐強い"] },
            { q: 8, options: ["即座に反応して行動する傾向がある", "自分の選択に自信を持っている", "決められた手順や計画に従うのが楽", "口数は多くない"] },
            { q: 9, options: ["全体的に楽観的な視点を持っている", "考えや感情を比較的率直に表現する", "整理整頓と体系を重要視する", "多様な人を受け入れる傾向がある"] },
            { q: 10, options: ["話を面白く展開するのが得意", "自分の基準と視点が明確", "周りから信頼できる人と見なされる", "親切で思いやりのある態度がある"] },
            { q: 11, options: ["人生で喜びを見つける傾向がある", "危険な状況でも大胆になれることがある", "細部まで気を配る傾向がある", "人間関係でスムーズに調整する"] },
            { q: 12, options: ["表情と口調が明るい", "自分に対する自信が比較的強い", "品位と礼儀を重要視する", "安定した状態を好む"] },
            { q: 13, options: ["外部刺激に簡単に動機づけられる", "独立して判断し行動する傾向がある", "理想的な価値と意味を重要視する", "穏やかで優しい印象を与える"] },
            { q: 14, options: ["自分の考えを表現することに慣れている", "決定を下すときは速い", "一つのことに深く没頭する傾向がある", "真剣さとユーモアを一緒に使う"] },
            { q: 15, options: ["新しい集まりにも比較的簡単に適応する", "アイデアや意見を頻繁に提案する", "芸術・音楽・感情的な活動を楽しむ", "対立状況で調停役を果たす"] },
            { q: 16, options: ["言葉でコミュニケーションするのが好き", "成果と結果を重要視する", "決定前に十分に考える傾向がある", "他人の間違いに寛容な傾向がある"] },
            { q: 17, options: ["感情と情熱が比較的明確", "引き受けた仕事に責任感を感じる", "関係で信頼と忠誠を重要視する", "相手の話をよく聞く"] },
            { q: 18, options: ["人前に出ることに負担を感じない", "リーダー役を担うことが多い", "組織と構造を重要視する", "現在の状態に満足している"] },
            { q: 19, options: ["人々によく知られる傾向がある", "効率と生産性を重視する", "完成度を高めようとする傾向がある", "快適さと安定感を追求する"] },
            { q: 20, options: ["エネルギーが外によく現れる", "困難な状況でも冷静に対応する", "礼儀と規則を重要視する", "極端よりも中間を好む"] },
            { q: 21, options: ["注目されたい気持ちが生じることがある", "指示したり制御しようとする傾向が現れる", "見知らぬ状況で萎縮することがある", "意欲が低下するとぼーっとする傾向がある"] },
            { q: 22, options: ["感情のコントロールが難しいことがある", "感情に振り回されないようにしようとする", "傷を長く覚えている傾向がある", "情熱が低く見えることがある"] },
            { q: 23, options: ["説明が長くなる場合がある", "権威に挑戦したくなることがある", "心の中に感情を溜め込む傾向がある", "やるべきことを先延ばしにする場合がある"] },
            { q: 24, options: ["忘れることがよくある", "率直さのために誤解されることもある", "基準が高く厳しく感じられることがある", "心配が先に立つことがある"] },
            { q: 25, options: ["会話中に割り込むことがある", "決定を急ぐ傾向がある", "感情の起伏が大きくなることがある", "決定をためらう傾向がある"] },
            { q: 26, options: ["行動パターンが予測しにくいことがある", "感情を表現するのが苦手なことがある", "人間関係で存在感が弱いと感じることがある", "関係形成に積極的でないことがある"] },
            { q: 27, options: ["即興的に流れに従うことがある", "自分の考えを簡単に変えない", "不満を内に溜め込む傾向がある", "決定の前に時間を長く使う"] },
            { q: 28, options: ["管理よりも自由を重視する", "自分の能力に対する誇りが大きい", "状況を悲観的に解釈することがある", "目立たない方が楽"] },
            { q: 29, options: ["感情が外に簡単に現れる", "論理的な討論を楽しむ", "一人の時間を必要とする", "明確な目標設定が難しいことがある"] },
            { q: 30, options: ["深さよりも表面で処理することがある", "敏感になることがある", "状況を否定的に解釈することがある", "緊張感が低下することがある"] },
            { q: 31, options: ["認められたい欲求が強い", "仕事に没頭すると周りを見落とすことがある", "対立から退く傾向がある", "心配が多い"] },
            { q: 32, options: ["話が多くなることがある", "感情表現が少ない", "小さな刺激にも傷つきやすい", "消極的に見えることがある"] },
            { q: 33, options: ["整理されていない状態を放置することがある", "他人を導こうとする傾向が強くなる", "簡単に落胆する傾向がある", "決定を延期する傾向がある"] },
            { q: 34, options: ["一貫性が弱く見えることがある", "寛大さが不足することがある", "内向的にエネルギーを回復する", "関心表現が少ない"] },
            { q: 35, options: ["周囲が乱雑になることがある", "他人を利用しようとする選択をすることがある", "うつ状態に陥ることがある", "不満を独り言で表現する"] },
            { q: 36, options: ["自分の姿を表に出したい", "頑固になることがある", "疑いが多くなることがある", "速度が遅いと言われる"] },
            { q: 37, options: ["声が大きくなることがある", "自分の主張を強く展開する", "一人の時間を楽しむ", "行動がのんびりしている"] },
            { q: 38, options: ["集中力が分散することがある", "せっかちになることがある", "他人を簡単に信じない", "意欲が低下することがある"] },
            { q: 39, options: ["冷静さを失うことがある", "十分に考えないことがある", "心の中のわだかまりを長く抱える", "気が進まなくても合わせる"] },
            { q: 40, options: ["気分によって態度が変わることがある", "状況判断が速い", "批判的な視点が強くなることがある", "対立を避けるために妥協する"] }
        ],
        // 타입 설명
        types: [
            { shortName: "表現", englishName: "Expressive", desc: "活気に満ち、社交的で雰囲気をリードするエネルギーに溢れたタイプ" },
            { shortName: "推進", englishName: "Driving", desc: "目標指向で決断力があり、リーダーシップが強いタイプ" },
            { shortName: "内省", englishName: "Reflective", desc: "慎重で分析的、深い思考をするタイプ" },
            { shortName: "安定", englishName: "Stable", desc: "平和で調和があり、他者を思いやる温かいタイプ" }
        ],
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
        // 질문 데이터
        questions: [
            { q: 1, options: ["Tôi dễ dàng tràn đầy năng lượng với người mới hoặc tình huống mới", "Tôi tương đối cởi mở với thử thách mới", "Tôi có xu hướng phân tích và hiểu tình huống", "Tôi có xu hướng thích ứng linh hoạt với tình huống"] },
            { q: 2, options: ["Tôi có xu hướng làm sáng bầu không khí", "Tôi cố gắng truyền đạt ý kiến của mình một cách thuyết phục", "Một khi tôi bắt đầu điều gì, tôi sẽ làm đến cùng", "Tôi không có biến động cảm xúc lớn"] },
            { q: 3, options: ["Tôi có được sức mạnh từ việc ở cùng mọi người", "Khi tôi có mục tiêu, tôi đẩy mạnh vì nó", "Tôi thường từ bỏ những thứ của mình cho người khác", "Tôi thích ứng tương đối tốt với môi trường được cho"] },
            { q: 4, options: ["Tôi có xu hướng tạo ấn tượng đầu tốt", "Tôi cảm thấy có động lực trong tình huống cạnh tranh", "Tôi giỏi hiểu cảm xúc hoặc vị trí của mọi người", "Tôi có xu hướng giữ cảm xúc bên trong thay vì thể hiện chúng"] },
            { q: 5, options: ["Tôi thích nghĩ ra ý tưởng mới", "Tôi được đánh giá là có kỹ năng giải quyết vấn đề xuất sắc", "Tôi coi trọng việc tôn trọng người khác", "Tôi có xu hướng thận trọng trong tình huống mới"] },
            { q: 6, options: ["Tôi cảm thấy tốt trong tình huống năng động", "Tôi thích quyết định và hành động một mình", "Tôi nhạy cảm với thay đổi cảm xúc", "Tôi có xu hướng chấp nhận ý kiến của người khác tốt"] },
            { q: 7, options: ["Tôi thường tự nhiên nắm quyền lãnh đạo", "Tôi cố gắng diễn giải tình huống tích cực", "Tôi coi trọng việc lập và tuân theo kế hoạch", "Tôi tương đối kiên nhẫn"] },
            { q: 8, options: ["Tôi có xu hướng phản ứng và hành động ngay lập tức", "Tôi tự tin vào lựa chọn của mình", "Tôi cảm thấy thoải mái khi tuân theo quy trình hoặc kế hoạch đã đặt", "Tôi không nói nhiều"] },
            { q: 9, options: ["Tôi thường có quan điểm lạc quan", "Tôi thể hiện suy nghĩ và cảm xúc của mình tương đối thành thật", "Tôi coi trọng tổ chức và hệ thống", "Tôi có xu hướng chấp nhận nhiều người đa dạng"] },
            { q: 10, options: ["Tôi giỏi kể chuyện một cách thú vị", "Tôi có tiêu chuẩn và quan điểm rõ ràng", "Tôi được coi là người đáng tin cậy", "Tôi có thái độ tốt bụng và chu đáo"] },
            { q: 11, options: ["Tôi tìm thấy niềm vui trong cuộc sống", "Tôi có thể táo bạo ngay cả trong tình huống rủi ro", "Tôi chú ý đến chi tiết", "Tôi phối hợp mượt mà trong các mối quan hệ"] },
            { q: 12, options: ["Biểu cảm và giọng điệu của tôi sáng sủa", "Tôi có sự tự tin tương đối mạnh", "Tôi coi trọng phẩm giá và lịch sự", "Tôi thích trạng thái ổn định"] },
            { q: 13, options: ["Tôi dễ dàng được thúc đẩy bởi kích thích bên ngoài", "Tôi có xu hướng phán đoán và hành động độc lập", "Tôi coi trọng giá trị và ý nghĩa lý tưởng", "Tôi tạo ấn tượng nhẹ nhàng và dịu dàng"] },
            { q: 14, options: ["Tôi quen với việc thể hiện suy nghĩ của mình", "Tôi nhanh khi đưa ra quyết định", "Tôi có xu hướng đắm chìm sâu vào một điều", "Tôi sử dụng sự nghiêm túc và hài hước cùng nhau"] },
            { q: 15, options: ["Tôi thích ứng tương đối dễ dàng với các cuộc tụ họp mới", "Tôi thường xuyên đề xuất ý tưởng hoặc ý kiến", "Tôi thích các hoạt động nghệ thuật, âm nhạc và cảm xúc", "Tôi đóng vai trò hòa giải trong xung đột"] },
            { q: 16, options: ["Tôi thích giao tiếp qua lời nói", "Tôi coi trọng kết quả và kết quả", "Tôi có xu hướng suy nghĩ kỹ trước khi quyết định", "Tôi khoan dung với sai lầm của người khác"] },
            { q: 17, options: ["Cảm xúc và niềm đam mê của tôi tương đối rõ ràng", "Tôi cảm thấy có trách nhiệm với các nhiệm vụ tôi đảm nhận", "Tôi coi trọng sự tin cậy và lòng trung thành trong các mối quan hệ", "Tôi lắng nghe tốt những câu chuyện của người khác"] },
            { q: 18, options: ["Tôi không cảm thấy gánh nặng khi đứng trước mọi người", "Tôi thường đảm nhận vai trò lãnh đạo", "Tôi coi trọng tổ chức và cấu trúc", "Tôi hài lòng với trạng thái hiện tại"] },
            { q: 19, options: ["Tôi có xu hướng trở nên nổi tiếng trong mọi người", "Tôi nhấn mạnh hiệu quả và năng suất", "Tôi có xu hướng nhắm đến hoàn thành cao", "Tôi theo đuổi sự thoải mái và ổn định"] },
            { q: 20, options: ["Năng lượng của tôi thể hiện ra ngoài tốt", "Tôi phản ứng bình tĩnh ngay cả trong tình huống khó khăn", "Tôi coi trọng lịch sự và quy tắc", "Tôi thích điểm giữa hơn là cực đoan"] },
            { q: 21, options: ["Đôi khi tôi muốn được chú ý", "Tôi thể hiện xu hướng chỉ đạo hoặc kiểm soát", "Tôi có thể co lại trong tình huống không quen thuộc", "Tôi có xu hướng mơ màng khi động lực giảm"] },
            { q: 22, options: ["Đôi khi tôi gặp khó khăn trong việc kiểm soát cảm xúc", "Tôi cố gắng không bị cảm xúc chi phối", "Tôi nhớ những tổn thương trong thời gian dài", "Niềm đam mê của tôi có vẻ thấp"] },
            { q: 23, options: ["Giải thích của tôi có thể trở nên dài dòng", "Đôi khi tôi muốn thách thức quyền lực", "Tôi có xu hướng giữ cảm xúc bị kìm nén", "Đôi khi tôi trì hoãn những việc tôi cần làm"] },
            { q: 24, options: ["Tôi thường quên mọi thứ", "Đôi khi tôi bị hiểu lầm vì sự trung thực của mình", "Tiêu chuẩn của tôi có vẻ quá cao và khó tính", "Lo lắng thường đến trước"] },
            { q: 25, options: ["Đôi khi tôi ngắt lời trong cuộc trò chuyện", "Tôi có xu hướng vội vàng quyết định", "Biến động cảm xúc của tôi có thể lớn", "Tôi có xu hướng do dự về quyết định"] },
            { q: 26, options: ["Mô hình hành vi của tôi có thể khó dự đoán", "Tôi có thể vụng về khi thể hiện cảm xúc", "Tôi có thể cảm thấy sự hiện diện của mình yếu trong các mối quan hệ", "Đôi khi tôi không chủ động trong việc hình thành mối quan hệ"] },
            { q: 27, options: ["Đôi khi tôi theo dòng chảy một cách tự phát", "Tôi không dễ dàng thay đổi suy nghĩ của mình", "Tôi có xu hướng tích tụ sự bất mãn bên trong", "Tôi dành nhiều thời gian trước quyết định"] },
            { q: 28, options: ["Tôi coi trọng tự do hơn quản lý", "Tôi có niềm tự hào lớn về khả năng của mình", "Đôi khi tôi diễn giải tình huống một cách bi quan", "Tôi thích không nổi bật"] },
            { q: 29, options: ["Cảm xúc của tôi dễ dàng thể hiện ra ngoài", "Tôi thích thảo luận logic", "Tôi cần thời gian một mình", "Đôi khi tôi gặp khó khăn trong việc đặt mục tiêu rõ ràng"] },
            { q: 30, options: ["Đôi khi tôi xử lý mọi thứ một cách hời hợt hơn là sâu sắc", "Tôi có thể trở nên nhạy cảm", "Đôi khi tôi diễn giải tình huống một cách tiêu cực", "Sự căng thẳng của tôi có thể giảm"] },
            { q: 31, options: ["Tôi có mong muốn mạnh mẽ được công nhận", "Khi tôi đắm chìm trong công việc, tôi có thể bỏ lỡ những thứ xung quanh", "Tôi có xu hướng rút lui khỏi xung đột", "Tôi lo lắng rất nhiều"] },
            { q: 32, options: ["Tôi có thể trở nên nói nhiều", "Tôi thể hiện cảm xúc ít", "Tôi dễ bị tổn thương bởi kích thích nhỏ", "Tôi có vẻ thụ động"] },
            { q: 33, options: ["Tôi có thể để mọi thứ trong trạng thái không có tổ chức", "Xu hướng dẫn dắt người khác của tôi trở nên mạnh", "Tôi có xu hướng dễ nản lòng", "Tôi có xu hướng hoãn quyết định"] },
            { q: 34, options: ["Sự nhất quán của tôi có vẻ yếu", "Tôi có thể thiếu sự hào phóng", "Tôi phục hồi năng lượng một cách hướng nội", "Tôi thể hiện sự quan tâm ít"] },
            { q: 35, options: ["Môi trường xung quanh của tôi có thể trở nên lộn xộn", "Đôi khi tôi chọn sử dụng người khác", "Tôi có thể rơi vào trầm cảm", "Tôi thể hiện sự bất mãn qua lời nói lẩm bẩm"] },
            { q: 36, options: ["Tôi muốn tiết lộ bản thân", "Tôi có thể cứng đầu", "Tôi có thể trở nên rất nghi ngờ", "Tôi nghe nói rằng tôi chậm"] },
            { q: 37, options: ["Giọng nói của tôi có thể trở nên to", "Tôi khẳng định mạnh mẽ ý kiến của mình", "Tôi thích thời gian một mình", "Hành động của tôi thong thả"] },
            { q: 38, options: ["Sự tập trung của tôi có thể bị phân tán", "Tôi có thể trở nên vội vàng", "Tôi không dễ dàng tin tưởng người khác", "Động lực của tôi có thể giảm"] },
            { q: 39, options: ["Tôi có thể mất bình tĩnh", "Đôi khi tôi không suy nghĩ đủ", "Tôi giữ mối hận trong thời gian dài", "Tôi tuân thủ ngay cả khi tôi không muốn"] },
            { q: 40, options: ["Thái độ của tôi có thể thay đổi tùy theo tâm trạng", "Tôi phán đoán tình huống nhanh chóng", "Quan điểm phê phán của tôi có thể trở nên mạnh", "Tôi thỏa hiệp để tránh xung đột"] }
        ],
        // 타입 설명
        types: [
            { shortName: "Biểu Cảm", englishName: "Expressive", desc: "Năng động, hòa đồng và tràn đầy năng lượng dẫn dắt bầu không khí" },
            { shortName: "Thúc Đẩy", englishName: "Driving", desc: "Định hướng mục tiêu, quyết đoán và mạnh mẽ trong lãnh đạo" },
            { shortName: "Suy Tư", englishName: "Reflective", desc: "Thận trọng, phân tích và sâu sắc trong suy nghĩ" },
            { shortName: "Ổn Định", englishName: "Stable", desc: "Hòa bình, hài hòa và ấm áp, quan tâm đến người khác" }
        ],
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
        // 질문ข้อมูล
        questions: [
            { q: 1, options: ["ฉันได้รับพลังงานอย่างง่ายดายจากคนใหม่หรือสถานการณ์ใหม่", "ฉันค่อนข้างเปิดรับความท้าทายใหม่", "ฉันมีแนวโน้มที่จะวิเคราะห์และทำความเข้าใจสถานการณ์", "ฉันมีแนวโน้มที่จะปรับตัวได้อย่างยืดหยุ่นกับสถานการณ์"] },
            { q: 2, options: ["ฉันมีแนวโน้มที่จะทำให้บรรยากาศสดใส", "ฉันพยายามถ่ายทอดความคิดเห็นของฉันอย่างน่าเชื่อถือ", "เมื่อฉันเริ่มทำอะไรสักอย่าง ฉันจะทำจนเสร็จ", "ฉันไม่มีความผันผวนทางอารมณ์มาก"] },
            { q: 3, options: ["ฉันได้รับพลังจากการอยู่กับผู้คน", "เมื่อฉันมีเป้าหมาย ฉันจะผลักดันอย่างหนัก", "ฉันมักจะสละสิ่งของของตัวเองเพื่อผู้อื่น", "ฉันปรับตัวได้ค่อนข้างดีกับสภาพแวดล้อมที่ได้รับ"] },
            { q: 4, options: ["ฉันมีแนวโน้มที่จะสร้างความประทับใจแรกที่ดี", "ฉันรู้สึกมีแรงจูงใจในสถานการณ์การแข่งขัน", "ฉันเก่งในการเข้าใจความรู้สึกหรือตำแหน่งของผู้คน", "ฉันมีแนวโน้มที่จะเก็บอารมณ์ไว้ข้างในมากกว่าที่จะแสดงออก"] },
            { q: 5, options: ["ฉันชอบคิดไอเดียใหม่ๆ", "ฉันได้รับการประเมินว่ามีทักษะการแก้ปัญหาที่ยอดเยี่ยม", "ฉันให้ความสำคัญกับการเคารพผู้อื่น", "ฉันมีแนวโน้มที่จะระมัดระวังในสถานการณ์ใหม่"] },
            { q: 6, options: ["ฉันรู้สึกดีในสถานการณ์ที่กระตือรือร้น", "ฉันชอบตัดสินใจและลงมือทำคนเดียว", "ฉันไวต่อการเปลี่ยนแปลงทางอารมณ์", "ฉันมีแนวโน้มที่จะยอมรับความคิดเห็นของผู้อื่นได้ดี"] },
            { q: 7, options: ["ฉันมักจะรับบทบาทผู้นำอย่างเป็นธรรมชาติ", "ฉันพยายามตีความสถานการณ์ในเชิงบวก", "ฉันให้ความสำคัญกับการวางแผนและทำตามแผน", "ฉันค่อนข้างอดทน"] },
            { q: 8, options: ["ฉันมีแนวโน้มที่จะตอบสนองและลงมือทำทันที", "ฉันมั่นใจในการเลือกของฉัน", "ฉันรู้สึกสบายใจกับการทำตามขั้นตอนหรือแผนที่กำหนดไว้", "ฉันไม่ค่อยพูดมาก"] },
            { q: 9, options: ["ฉันโดยทั่วไปมีมุมมองในแง่ดี", "ฉันแสดงความคิดและความรู้สึกของฉันค่อนข้างซื่อสัตย์", "ฉันให้ความสำคัญกับการจัดระเบียบและระบบ", "ฉันมีแนวโน้มที่จะยอมรับผู้คนที่หลากหลาย"] },
            { q: 10, options: ["ฉันเก่งในการเล่าเรื่องอย่างน่าสนใจ", "ฉันมีมาตรฐานและมุมมองที่ชัดเจน", "ฉันถูกมองว่าเป็นคนที่เชื่อถือได้", "ฉันมีทัศนคติที่ใจดีและเอาใจใส่"] },
            { q: 11, options: ["ฉันพบความสุขในชีวิต", "ฉันสามารถกล้าหาญได้แม้ในสถานการณ์ที่เสี่ยง", "ฉันใส่ใจรายละเอียด", "ฉันประสานงานได้อย่างราบรื่นในความสัมพันธ์"] },
            { q: 12, options: ["การแสดงออกและน้ำเสียงของฉันสดใส", "ฉันมีความมั่นใจในตัวเองค่อนข้างแข็งแกร่ง", "ฉันให้ความสำคัญกับศักดิ์ศรีและมารยาท", "ฉันชอบสถานะที่มั่นคง"] },
            { q: 13, options: ["ฉันถูกกระตุ้นได้ง่ายด้วยสิ่งเร้าภายนอก", "ฉันมีแนวโน้มที่จะตัดสินและกระทำอย่างอิสระ", "ฉันให้ความสำคัญกับค่านิยมและความหมายในอุดมคติ", "ฉันให้ความประทับใจที่นุ่มนวลและอ่อนโยน"] },
            { q: 14, options: ["ฉันคุ้นเคยกับการแสดงความคิดของฉัน", "ฉันเร็วเมื่อต้องตัดสินใจ", "ฉันมีแนวโน้มที่จะจดจ่อลึกซึ้งกับสิ่งหนึ่ง", "ฉันใช้ความจริงจังและอารมณ์ขันร่วมกัน"] },
            { q: 15, options: ["ฉันปรับตัวได้ค่อนข้างง่ายกับการพบปะใหม่ๆ", "ฉันมักจะเสนอไอเดียหรือความคิดเห็น", "ฉันสนุกกับกิจกรรมทางศิลปะ ดนตรี และอารมณ์", "ฉันเล่นบทบาทเป็นผู้ไกล่เกลี่ยในความขัดแย้ง"] },
            { q: 16, options: ["ฉันชอบสื่อสารผ่านคำพูด", "ฉันให้ความสำคัญกับผลลัพธ์และผลลัพธ์", "ฉันมีแนวโน้มที่จะคิดอย่างละเอียดก่อนตัดสินใจ", "ฉันอดทนต่อข้อผิดพลาดของผู้อื่น"] },
            { q: 17, options: ["อารมณ์และความหลงใหลของฉันค่อนข้างชัดเจน", "ฉันรู้สึกมีความรับผิดชอบต่องานที่ฉันรับผิดชอบ", "ฉันให้ความสำคัญกับความไว้วางใจและความภักดีในความสัมพันธ์", "ฉันฟังเรื่องราวของผู้อื่นได้ดี"] },
            { q: 18, options: ["ฉันไม่รู้สึกเป็นภาระเมื่ออยู่ต่อหน้าผู้คน", "ฉันมักจะรับบทบาทผู้นำ", "ฉันให้ความสำคัญกับการจัดระเบียบและโครงสร้าง", "ฉันพอใจกับสถานะปัจจุบัน"] },
            { q: 19, options: ["ฉันมีแนวโน้มที่จะเป็นที่รู้จักในหมู่ผู้คน", "ฉันเน้นประสิทธิภาพและผลผลิต", "ฉันมีแนวโน้มที่จะมุ่งไปสู่การเสร็จสมบูรณ์สูง", "ฉันแสวงหาความสะดวกสบายและความมั่นคง"] },
            { q: 20, options: ["พลังงานของฉันแสดงออกมาภายนอกได้ดี", "ฉันตอบสนองอย่างสงบแม้ในสถานการณ์ที่ยากลำบาก", "ฉันให้ความสำคัญกับมารยาทและกฎเกณฑ์", "ฉันชอบจุดกึ่งกลางมากกว่าสุดขั้ว"] },
            { q: 21, options: ["ฉันบางครั้งต้องการได้รับความสนใจ", "ฉันแสดงแนวโน้มที่จะชี้นำหรือควบคุม", "ฉันสามารถหดตัวในสถานการณ์ที่ไม่คุ้นเคย", "ฉันมีแนวโน้มที่จะเหม่อลอยเมื่อแรงจูงใจลดลง"] },
            { q: 22, options: ["ฉันบางครั้งมีปัญหาในการควบคุมอารมณ์", "ฉันพยายามไม่ให้ถูกชักจูงโดยอารมณ์", "ฉันจำความเจ็บปวดได้นาน", "ความหลงใหลของฉันอาจดูต่ำ"] },
            { q: 23, options: ["คำอธิบายของฉันอาจยาวขึ้น", "ฉันบางครั้งต้องการท้าทายอำนาจ", "ฉันมีแนวโน้มที่จะเก็บอารมณ์ไว้ข้างใน", "ฉันบางครั้งผัดผ่อนสิ่งที่ฉันต้องทำ"] },
            { q: 24, options: ["ฉันมักจะลืมสิ่งต่างๆ", "ฉันบางครั้งถูกเข้าใจผิดเพราะความซื่อสัตย์ของฉัน", "มาตรฐานของฉันอาจดูสูงเกินไปและจู้จี้", "ความกังวลมักมาก่อน"] },
            { q: 25, options: ["ฉันบางครั้งขัดจังหวะระหว่างการสนทนา", "ฉันมีแนวโน้มที่จะรีบเร่งการตัดสินใจ", "ความผันผวนทางอารมณ์ของฉันอาจใหญ่", "ฉันมีแนวโน้มที่จะลังเลในการตัดสินใจ"] },
            { q: 26, options: ["รูปแบบพฤติกรรมของฉันอาจคาดเดาได้ยาก", "ฉันอาจจะงุ่มง่ามในการแสดงอารมณ์", "ฉันอาจรู้สึกว่าการมีอยู่ของฉันอ่อนแอในความสัมพันธ์", "ฉันบางครั้งไม่กระตือรือร้นในการสร้างความสัมพันธ์"] },
            { q: 27, options: ["ฉันบางครั้งทำตามกระแสอย่างเป็นธรรมชาติ", "ฉันไม่เปลี่ยนความคิดของฉันได้ง่าย", "ฉันมีแนวโน้มที่จะสะสมความไม่พอใจไว้ข้างใน", "ฉันใช้เวลานานก่อนการตัดสินใจ"] },
            { q: 28, options: ["ฉันให้ความสำคัญกับเสรีภาพมากกว่าการจัดการ", "ฉันมีความภาคภูมิใจอย่างมากในความสามารถของฉัน", "ฉันบางครั้งตีความสถานการณ์ในแง่ร้าย", "ฉันชอบไม่โดดเด่น"] },
            { q: 29, options: ["อารมณ์ของฉันแสดงออกมาภายนอกได้ง่าย", "ฉันสนุกกับการอภิปรายเชิงตรรกะ", "ฉันต้องการเวลาอยู่คนเดียว", "ฉันบางครั้งมีปัญหาในการตั้งเป้าหมายที่ชัดเจน"] },
            { q: 30, options: ["ฉันบางครั้งจัดการสิ่งต่างๆ อย่างผิวเผินมากกว่าลึกซึ้ง", "ฉันสามารถกลายเป็นอ่อนไหว", "ฉันบางครั้งตีความสถานการณ์ในแง่ลบ", "ความตึงเครียดของฉันอาจลดลง"] },
            { q: 31, options: ["ฉันมีความปรารถนาอย่างแรงกล้าที่จะได้รับการยอมรับ", "เมื่อฉันจดจ่อกับงาน ฉันอาจพลาดสิ่งต่างๆ รอบตัว", "ฉันมีแนวโน้มที่จะถอนตัวจากความขัดแย้ง", "ฉันกังวลมาก"] },
            { q: 32, options: ["ฉันสามารถกลายเป็นพูดมาก", "ฉันแสดงอารมณ์น้อย", "ฉันถูกทำร้ายได้ง่ายด้วยสิ่งเร้าเล็กๆ", "ฉันอาจดูเฉื่อยชา"] },
            { q: 33, options: ["ฉันสามารถปล่อยให้สิ่งต่างๆ อยู่ในสถานะที่ไม่เป็นระเบียบ", "แนวโน้มของฉันในการนำผู้อื่นกลายเป็นแข็งแกร่ง", "ฉันมีแนวโน้มที่จะท้อแท้ง่าย", "ฉันมีแนวโน้มที่จะเลื่อนการตัดสินใจ"] },
            { q: 34, options: ["ความสอดคล้องของฉันอาจดูอ่อนแอ", "ฉันสามารถขาดความเอื้ออาทร", "ฉันฟื้นฟูพลังงานอย่างเก็บตัว", "ฉันแสดงความสนใจน้อย"] },
            { q: 35, options: ["สภาพแวดล้อมรอบตัวฉันอาจกลายเป็นยุ่งเหยิง", "ฉันบางครั้งเลือกใช้ผู้อื่น", "ฉันสามารถตกอยู่ในภาวะซึมเศร้า", "ฉันแสดงความไม่พอใจผ่านการบ่นพึมพำ"] },
            { q: 36, options: ["ฉันต้องการเปิดเผยตัวเอง", "ฉันสามารถดื้อรั้น", "ฉันสามารถกลายเป็นสงสัยมาก", "ฉันได้ยินว่าฉันช้า"] },
            { q: 37, options: ["เสียงของฉันสามารถกลายเป็นดัง", "ฉันยืนยันความคิดเห็นของฉันอย่างแข็งแกร่ง", "ฉันสนุกกับเวลาอยู่คนเดียว", "การกระทำของฉันเป็นไปอย่างสบายๆ"] },
            { q: 38, options: ["ความเข้มข้นของฉันอาจกระจัดกระจาย", "ฉันสามารถกลายเป็นรีบร้อน", "ฉันไม่ไว้วางใจผู้อื่นได้ง่าย", "แรงจูงใจของฉันอาจลดลง"] },
            { q: 39, options: ["ฉันสามารถสูญเสียความสงบ", "ฉันบางครั้งคิดไม่เพียงพอ", "ฉันเก็บความแค้นไว้นาน", "ฉันยอมตามแม้ว่าฉันจะไม่ต้องการ"] },
            { q: 40, options: ["ทัศนคติของฉันสามารถเปลี่ยนไปตามอารมณ์", "ฉันตัดสินสถานการณ์ได้อย่างรวดเร็ว", "มุมมองเชิงวิพากษ์ของฉันสามารถกลายเป็นแข็งแกร่ง", "ฉันประนีประนอมเพื่อหลีกเลี่ยงความขัดแย้ง"] }
        ],
        // 타입 설명
        types: [
            { shortName: "แสดงออก", englishName: "Expressive", desc: "กระตือรือร้น สังคม และเต็มไปด้วยพลังงานที่นำบรรยากาศ" },
            { shortName: "ขับเคลื่อน", englishName: "Driving", desc: "มุ่งเน้นเป้าหมาย มีความเด็ดขาด และแข็งแกร่งในการเป็นผู้นำ" },
            { shortName: "ไตร่ตรอง", englishName: "Reflective", desc: "ระมัดระวัง วิเคราะห์ และลึกซึ้งในการคิด" },
            { shortName: "มั่นคง", englishName: "Stable", desc: "สงบ กลมกลืน และอบอุ่น ใส่ใจผู้อื่น" }
        ],
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
    
    // 언어 코드 및 국기 업데이트 (16personalities 스타일)
    const currentLangCode = document.getElementById('current-lang-code');
    if (currentLangCode) currentLangCode.textContent = languageCodes[lang] || lang.toUpperCase();
    
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) currentFlag.textContent = languageFlags[lang] || '🌐';
    
    // 모든 화면 업데이트
    updateAllScreens();
    
    // 테스트 진행 중이면 질문도 다시 렌더링
    if (!quizScreen.classList.contains('hidden')) {
        renderQuestion();
    }
    
    // 언어 메뉴 닫기
    const langMenu = document.getElementById('lang-menu');
    if (langMenu) langMenu.classList.add('hidden');
    
    // 화살표 회전 초기화
    const langArrow = document.getElementById('lang-arrow');
    if (langArrow) langArrow.classList.remove('rotate-180');
    
    // 로컬 스토리지에 저장
    localStorage.setItem('preferredLanguage', lang);
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;
}

// 언어 메뉴 토글
function toggleLanguageMenu() {
    const menu = document.getElementById('lang-menu');
    const arrow = document.getElementById('lang-arrow');
    if (menu) {
        menu.classList.toggle('hidden');
        if (arrow) {
            arrow.classList.toggle('rotate-180');
        }
    }
}

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
    const langButton = document.getElementById('lang-button');
    const langMenu = document.getElementById('lang-menu');
    if (langButton && langMenu && !langButton.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.add('hidden');
        const arrow = document.getElementById('lang-arrow');
        if (arrow) arrow.classList.remove('rotate-180');
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

// 페이지 로드 시 현재 언어로 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 현재 HTML 파일의 언어에 맞게 초기화
    const htmlLang = document.documentElement.lang || 'ko';
    const lang = htmlLang === 'ko' ? 'ko' : 
                 htmlLang === 'en' ? 'en' :
                 htmlLang === 'es' ? 'es' :
                 htmlLang === 'fr' ? 'fr' :
                 htmlLang === 'ja' ? 'ja' :
                 htmlLang === 'vi' ? 'vi' :
                 htmlLang === 'th' ? 'th' : 'ko';
    
    // currentLanguage가 이미 설정되어 있지 않으면 설정
    if (!currentLanguage || currentLanguage === 'ko') {
        currentLanguage = lang;
    }
    
    // 초기 언어 코드 및 국기 설정
    const currentLangCode = document.getElementById('current-lang-code');
    if (currentLangCode) {
        currentLangCode.textContent = languageCodes[currentLanguage] || currentLanguage.toUpperCase();
    }
    const currentFlag = document.getElementById('current-flag');
    if (currentFlag) {
        currentFlag.textContent = languageFlags[currentLanguage] || '🌐';
    }
    
    // 현재 언어에 맞게 모든 화면 업데이트
    const t = translations[currentLanguage];
    if (t) {
        updateAllScreens();
    }
});
