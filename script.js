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
    vi: 'VI'
};

// 언어별 국기 이모지 매핑
const languageFlags = {
    ko: '🇰🇷',
    en: '🇺🇸',
    es: '🇪🇸',
    vi: '🇻🇳'
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
        // 현재 언어에 맞는 파일명 결정
        const lang = currentLanguage || 'ko';
        const filename = `12temperament_types-${lang}.txt`;
        
        const response = await fetch(filename);
        if (!response.ok) {
            // 해당 언어 파일이 없으면 한국어 파일로 폴백
            const fallbackResponse = await fetch('12temperament_types-ko.txt');
            if (!fallbackResponse.ok) {
                throw new Error(`Fallback file 12temperament_types-ko.txt not found: ${fallbackResponse.status}`);
            }
            const fallbackText = await fallbackResponse.text();
            temperamentDetails = parseTemperamentDetails(fallbackText);
            console.warn(`Language-specific file ${filename} not found. Falling back to 12temperament_types-ko.txt.`);
        } else {
            const text = await response.text();
            temperamentDetails = parseTemperamentDetails(text);
        }
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
    
    // 섹션별 색상 정의 (인덱스 기반)
    const sectionColors = [
        'from-purple-500 to-pink-500',
        'from-blue-500 to-cyan-500',
        'from-green-500 to-emerald-500',
        'from-orange-500 to-red-500',
        'from-pink-500 to-rose-500',
        'from-indigo-500 to-purple-500',
        'from-teal-500 to-cyan-500',
        'from-amber-500 to-orange-500',
        'from-violet-500 to-purple-500',
        'from-rose-500 to-pink-500'
    ];
    
    // 실제 파싱된 섹션들을 순서대로 표시
    const sections = Object.keys(detail.sections);
    sections.forEach((sectionTitle, index) => {
        const content = detail.sections[sectionTitle];
        if (content) {
            const gradientColor = sectionColors[index % sectionColors.length] || 'from-slate-500 to-slate-600';
            
            // 내용 포맷팅 (플레인 텍스트)
            const formattedContent = formatSectionContent(content);
            
            html += `
                <div class="mb-8 pb-8 border-b border-slate-200 last:border-0">
                    <div class="flex items-center gap-3 mb-5">
                        <span class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${gradientColor} text-white font-bold text-sm flex items-center justify-center">
                            ${index + 1}
                        </span>
                        <h4 class="text-lg font-bold text-slate-800">
                            ${sectionTitle}
                        </h4>
                    </div>
                    <div class="text-base leading-relaxed text-slate-700 ml-11">
                        ${formattedContent}
                    </div>
                </div>
            `;
        }
    });
    
    return html || '<p class="text-slate-500 text-center py-8">상세 설명 내용이 없습니다.</p>';
}

// 섹션 내용 포맷팅 (플레인 텍스트로 단순화)
function formatSectionContent(content) {
    if (!content) return '';
    
    // HTML 태그 제거
    let text = content.replace(/<[^>]+>/g, '');
    
    // 문단을 줄바꿈 기준으로 분리
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim());
    
    let result = '';
    
    paragraphs.forEach((para) => {
        para = para.trim();
        if (!para) return;
        
        // 줄바꿈을 <br>로 변환
        para = para.replace(/\n/g, '<br>');
        
        // 문단을 <p> 태그로 감싸기
        result += `<p class="mb-4 leading-7 text-slate-700">${para}</p>`;
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
