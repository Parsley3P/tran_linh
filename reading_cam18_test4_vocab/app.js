// --- Vocabulary Data ---
// Contains the English words translated into Vietnamese.
// Progress tracking happens via the correctCount property.
let words = [
    { word: "emissions", meaning: "khí thải", correctCount: 0 },
    { word: "quantities", meaning: "số lượng", correctCount: 0 },
    { word: "alternatives", meaning: "sự thay thế", correctCount: 0 },
    { word: "manufacture", meaning: "sản xuất", correctCount: 0 },
    { word: "mouldable", meaning: "dễ uốn / có thể đúc", correctCount: 0 },
    { word: "pourable", meaning: "có thể rót được", correctCount: 0 },
    { word: "marvellous", meaning: "kỳ diệu / tuyệt vời", correctCount: 0 },
    { word: "timber", meaning: "gỗ xây dựng", correctCount: 0 },
    { word: "pests", meaning: "côn trùng gây hại", correctCount: 0 },
    { word: "laminated", meaning: "được ép lớp", correctCount: 0 },
    { word: "crosswise", meaning: "theo chiều ngang / chéo", correctCount: 0 },
    { word: "ore", meaning: "quặng", correctCount: 0 },
    { word: "slag", meaning: "xỉ (kim loại)", correctCount: 0 },
    { word: "separate", meaning: "riêng biệt / tách rời", correctCount: 0 },
    { word: "wreckled", meaning: "tàn phá / hỏng hóc", correctCount: 0 },
    { word: "accelerate", meaning: "tăng tốc", correctCount: 0 },
    { word: "maintenance", meaning: "sự bảo trì", correctCount: 0 },
    { word: "evidence", meaning: "bằng chứng", correctCount: 0 },
    { word: "extract", meaning: "chiết xuất / khai thác", correctCount: 0 },
    { word: "literacy", meaning: "trình độ học vấn", correctCount: 0 },
    { word: "frustrate", meaning: "làm thất vọng / cản trở", correctCount: 0 },
    { word: "proximal", meaning: "gần / ở gốc", correctCount: 0 },
    { word: "scaffolding", meaning: "giàn giáo / sự nâng đỡ", correctCount: 0 },
    { word: "regardless", meaning: "bất chấp", correctCount: 0 },
    { word: "madness", meaning: "sự điên rồ", correctCount: 0 },
    { word: "empirical", meaning: "theo kinh nghiệm", correctCount: 0 },
    { word: "assigned", meaning: "được phân công", correctCount: 0 },
    { word: "representation", meaning: "sự trình bày / đại diện", correctCount: 0 },
    { word: "capable", meaning: "có khả năng", correctCount: 0 },
    { word: "underestimate", meaning: "đánh giá thấp", correctCount: 0 },
    { word: "constructivist", meaning: "người theo thuyết kiến tạo", correctCount: 0 },
    { word: "knowledgeable", meaning: "am hiểu / có kiến thức", correctCount: 0 },
    { word: "interaction", meaning: "sự tương tác", correctCount: 0 },
    { word: "freshness", meaning: "sự tươi mát", correctCount: 0 },
    { word: "expense", meaning: "chi phí", correctCount: 0 },
    { word: "demonstrate", meaning: "chứng minh / minh họa", correctCount: 0 },
    { word: "lush", meaning: "tươi tốt / xum xuê", correctCount: 0 },
    { word: "foliage", meaning: "tán lá / bộ lá", correctCount: 0 },
    { word: "mitigating", meaning: "giảm nhẹ / làm dịu", correctCount: 0 },
    { word: "radical", meaning: "triệt để / cấp tiến", correctCount: 0 },
    { word: "monumental", meaning: "vĩ đại / hoành tráng", correctCount: 0 },
    { word: "paved", meaning: "được lát (đường)", correctCount: 0 },
    { word: "doubling", meaning: "sự nhân đôi", correctCount: 0 },
    { word: "showcasing", meaning: "trưng bày / giới thiệu", correctCount: 0 },
    { word: "integrate", meaning: "hội nhập / tích hợp", correctCount: 0 },
    { word: "partially", meaning: "một phần", correctCount: 0 },
    { word: "covered", meaning: "được bao phủ", correctCount: 0 },
    { word: "prescribing", meaning: "kê đơn / quy định", correctCount: 0 },
    { word: "anxiety", meaning: "sự lo âu", correctCount: 0 },
    { word: "depression", meaning: "sự trầm cảm", correctCount: 0 },
    { word: "dementia", meaning: "chứng sa sút trí tuệ", correctCount: 0 },
    { word: "installed", meaning: "được cài đặt / lắp đặt", correctCount: 0 },
    { word: "policy", meaning: "chính sách", correctCount: 0 },
    { word: "requiring", meaning: "đòi hỏi / yêu cầu", correctCount: 0 },
    { word: "acquire", meaning: "đạt được / thu được", correctCount: 0 },
    { word: "help out", meaning: "giúp đỡ", correctCount: 0 },
    { word: "restriction", meaning: "sự hạn chế", correctCount: 0 },
    { word: "destruction", meaning: "sự phá hủy", correctCount: 0 },
    { word: "perhaps", meaning: "có lẽ", correctCount: 0 },
    { word: "convince", meaning: "thuyết phục", correctCount: 0 },
    { word: "worthwhile", meaning: "đáng giá / bõ công", correctCount: 0 },
    { word: "measuring", meaning: "việc đo lường", correctCount: 0 },
    { word: "standard", meaning: "tiêu chuẩn", correctCount: 0 },
    { word: "combination", meaning: "sự kết hợp", correctCount: 0 },
    { word: "vibrant", meaning: "sôi động / rực rỡ", correctCount: 0 },
    { word: "barriers", meaning: "rào cản", correctCount: 0 },
    { word: "potential", meaning: "tiềm năng", correctCount: 0 },
    { word: "reference", meaning: "sự tham khảo", correctCount: 0 },
    { word: "initiatives", meaning: "sáng kiến", correctCount: 0 },
    { word: "persuasive", meaning: "có sức thuyết phục", correctCount: 0 },
    { word: "argument", meaning: "lập luận / tranh cãi", correctCount: 0 },
    { word: "likelihood", meaning: "khả năng xảy ra", correctCount: 0 },
    { word: "edible", meaning: "có thể ăn được", correctCount: 0 },
    { word: "regulate", meaning: "điều chỉnh / quy định", correctCount: 0 },
    { word: "supplanted", meaning: "bị thay thế", correctCount: 0 },
    { word: "capabilities", meaning: "khả năng / năng lực", correctCount: 0 },
    { word: "quantify", meaning: "định lượng", correctCount: 0 },
    { word: "revolted", meaning: "nổi dậy / phẫn nộ", correctCount: 0 },
    { word: "destiny", meaning: "định mệnh", correctCount: 0 },
    { word: "sought", meaning: "đã tìm kiếm", correctCount: 0 },
    { word: "progressive", meaning: "tiến bộ", correctCount: 0 },
    { word: "hallways", meaning: "hành lang", correctCount: 0 },
    { word: "speeches", meaning: "bài phát biểu", correctCount: 0 },
    { word: "praise", meaning: "khen ngợi", correctCount: 0 },
    { word: "inferred", meaning: "được suy ra", correctCount: 0 },
    { word: "emphasised", meaning: "được nhấn mạnh", correctCount: 0 },
    { word: "implementing", meaning: "việc thực hiện", correctCount: 0 },
    { word: "obsessed", meaning: "ám ảnh", correctCount: 0 },
    { word: "dissonance", meaning: "sự bất hòa", correctCount: 0 },
    { word: "characteristic", meaning: "đặc điểm", correctCount: 0 },
    { word: "applaud", meaning: "vỗ tay / tán thưởng", correctCount: 0 },
    { word: "grades", meaning: "điểm số", correctCount: 0 },
    { word: "implementation", meaning: "sự thi hành / thực hiện", correctCount: 0 },
    { word: "criticism", meaning: "sự chỉ trích", correctCount: 0 },
    { word: "claim", meaning: "tuyên bố", correctCount: 0 },
    { word: "repeatedly", meaning: "nhiều lần", correctCount: 0 },
    { word: "null", meaning: "vô giá trị", correctCount: 0 },
    { word: "cope", meaning: "đối phó", correctCount: 0 },
    { word: "intervention", meaning: "sự can thiệp", correctCount: 0 },
    { word: "accordingly", meaning: "một cách tương ứng", correctCount: 0 },
    { word: "misapplied", meaning: "áp dụng sai", correctCount: 0 },
    { word: "misappropriated", meaning: "biển thủ", correctCount: 0 },
    { word: "delivered", meaning: "đã giao hàng / trình bày", correctCount: 0 },
    { word: "perceive", meaning: "nhận thức / hiểu", correctCount: 0 },
    { word: "correlation", meaning: "sự tương quan", correctCount: 0 },
    { word: "perception", meaning: "sự nhận thức", correctCount: 0 },
    { word: "elixir", meaning: "thuốc tiên", correctCount: 0 },
    { word: "proponent", meaning: "người đề xướng", correctCount: 0 },
    { word: "administered", meaning: "được quản lý / cấp", correctCount: 0 },
    { word: "paradoxically", meaning: "trớ trêu thay", correctCount: 0 },
    { word: "deluded", meaning: "bị ảo tưởng", correctCount: 0 },
    { word: "notion", meaning: "khái niệm / ý niệm", correctCount: 0 },
    { word: "indeed", meaning: "quả thực", correctCount: 0 },
    { word: "philosophy", meaning: "triết học", correctCount: 0 },
    { word: "ambition", meaning: "tham vọng", correctCount: 0 },
    { word: "concentrate", meaning: "tập trung", correctCount: 0 },
    { word: "methodology", meaning: "phương pháp luận", correctCount: 0 },
    { word: "interpreted", meaning: "được giải thích", correctCount: 0 },
    { word: "morale", meaning: "nhuệ khí / tinh thần", correctCount: 0 },
    { word: "admirable", meaning: "đáng khâm phục", correctCount: 0 },
    { word: "theory", meaning: "lý thuyết", correctCount: 0 },
    { word: "displacements", meaning: "sự dịch chuyển", correctCount: 0 },
    { word: "proposed", meaning: "được đề xuất", correctCount: 0 },
    { word: "extensively", meaning: "một cách rộng rãi", correctCount: 0 },
    { word: "controversy", meaning: "sự tranh cãi", correctCount: 0 },
    { word: "laterally", meaning: "theo chiều ngang / ở bên", correctCount: 0 },
    { word: "plausible", meaning: "hợp lý / có vẻ đúng", correctCount: 0 },
    { word: "paleontology", meaning: "cổ sinh vật học", correctCount: 0 },
    { word: "tectonics", meaning: "kiến tạo học", correctCount: 0 },
    { word: "proposal", meaning: "bản đề xuất", correctCount: 0 },
    { word: "evolutionary", meaning: "thuộc về tiến hóa", correctCount: 0 },
    { word: "descendants", meaning: "hậu duệ", correctCount: 0 },
    { word: "intriguing", meaning: "hấp dẫn / tò mò", correctCount: 0 },
    { word: "expedition", meaning: "cuộc thám hiểm", correctCount: 0 },
    { word: "biographer", meaning: "người viết tiểu sử", correctCount: 0 },
    { word: "accurate", meaning: "chính xác", correctCount: 0 }
];

// App State
let userName = "";
let currentWord = null;
let activeWordList = [];
let selectedOptionIndex = null;
let appState = "answering"; // "answering" or "evaluating"
let totalWordsInitial = words.length;

// Audio Synthesizer for offline sound effects
let audioCtx;
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'wrong') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
    }
}

// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const completionScreen = document.getElementById("completion-screen");
const nameInput = document.getElementById("username-input");
const startBtn = document.getElementById("start-btn");
const wordDisplay = document.getElementById("target-word");
const optionsGrid = document.getElementById("options-grid");
const actionBtn = document.getElementById("action-btn");
const feedbackFooter = document.getElementById("feedback-footer");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackAnswer = document.getElementById("feedback-correct-answer");
const wordStatusBadge = document.getElementById("word-status");
const progressBar = document.getElementById("progress-bar");
const congratsName = document.getElementById("congrats-name");

// --- Initialization ---
startBtn.addEventListener("click", startGame);
nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") startGame();
});

function startGame() {
    if (nameInput.value.trim() === "") return;
    userName = nameInput.value.trim();
    initAudio(); // Initialize audio context on first user interaction
    welcomeScreen.classList.remove("active");
    quizScreen.classList.add("active");
    
    // Set up active list
    updateActiveWordList();
    loadNextQuestion();
}

// --- Core Logic ---
function updateActiveWordList() {
    // Rule 3: 4th time got right -> delete from list
    activeWordList = words.filter(w => w.correctCount < 4);
    
    // Update progress bar
    const wordsCompleted = totalWordsInitial - activeWordList.length;
    const progressPercent = (wordsCompleted / totalWordsInitial) * 100;
    progressBar.style.width = `${progressPercent}%`;

    if (activeWordList.length === 0) {
        showCompletionScreen();
    }
}

function loadNextQuestion() {
    if (activeWordList.length === 0) return;

    // Reset UI
    appState = "answering";
    selectedOptionIndex = null;
    feedbackFooter.classList.remove("show", "correct", "wrong");
    feedbackAnswer.classList.add("hidden");
    actionBtn.innerText = "Check";
    actionBtn.disabled = true;
    optionsGrid.innerHTML = "";

    // Pick a random word from the active list
    const randomIndex = Math.floor(Math.random() * activeWordList.length);
    currentWord = activeWordList[randomIndex];

    // Word Status (Maintained / Mastered logic)
    wordDisplay.innerText = currentWord.word;
    wordStatusBadge.className = "status-badge";
    if (currentWord.correctCount === 0 || currentWord.correctCount === 1) {
        wordStatusBadge.innerText = "Learning";
    } else if (currentWord.correctCount === 2) {
        wordStatusBadge.innerText = "Maintained";
        wordStatusBadge.classList.add("maintained");
    } else if (currentWord.correctCount === 3) {
        wordStatusBadge.innerText = "Mastered";
        wordStatusBadge.classList.add("mastered");
    }

    // Generate 3 wrong options from the full list
    let options = [currentWord.meaning];
    while (options.length < 4) {
        let randomWrong = words[Math.floor(Math.random() * words.length)].meaning;
        if (!options.includes(randomWrong)) {
            options.push(randomWrong);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Render options
    options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.className = "option-card";
        div.innerText = opt;
        div.addEventListener("click", () => selectOption(index, div));
        optionsGrid.appendChild(div);
    });
}

function selectOption(index, element) {
    if (appState !== "answering") return;
    
    selectedOptionIndex = index;
    actionBtn.disabled = false;
    
    // Remove selected class from all
    document.querySelectorAll(".option-card").forEach(card => card.classList.remove("selected"));
    // Add to clicked
    element.classList.add("selected");
}

function checkAnswer() {
    if (selectedOptionIndex === null) return;
    appState = "evaluating";
    
    const selectedText = document.querySelectorAll(".option-card")[selectedOptionIndex].innerText;
    const isCorrect = (selectedText === currentWord.meaning);

    feedbackFooter.classList.add("show");

    if (isCorrect) {
        playSound("correct");
        feedbackFooter.classList.add("correct");
        feedbackTitle.innerText = "Correct!";
        feedbackAnswer.classList.add("hidden");
        // Rule 1 & 2 logic: Increment correct count
        currentWord.correctCount += 1; 
    } else {
        playSound("wrong");
        feedbackFooter.classList.add("wrong");
        feedbackTitle.innerText = "Incorrect";
        feedbackAnswer.classList.remove("hidden");
        feedbackAnswer.querySelector("span").innerText = currentWord.meaning;
        // Rule 4: Do not reset progress on wrong answer (correctCount remains as is)
    }

    actionBtn.innerText = "Next";
}

function showCompletionScreen() {
    quizScreen.classList.remove("active");
    completionScreen.classList.add("active");
    congratsName.innerText = userName;
}

// --- Event Listeners for Buttons & Keyboard ---
actionBtn.addEventListener("click", () => {
    if (appState === "answering") {
        checkAnswer();
    } else {
        updateActiveWordList();
        loadNextQuestion();
    }
});

// --- Event Listeners for Buttons & Keyboard ---
actionBtn.addEventListener("click", () => {
    if (appState === "answering") {
        checkAnswer();
    } else {
        updateActiveWordList();
        loadNextQuestion();
    }
});

// Laptop/Desktop Keyboard Support (Laptop Mode)
document.addEventListener("keydown", (e) => {
    // Only listen for keys if the quiz is actively running
    if (!quizScreen.classList.contains("active")) return;

    // 1. Number keys (1-4) to quickly select multiple-choice options
    if (appState === "answering" && ["1", "2", "3", "4"].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        const optionCards = document.querySelectorAll(".option-card");
        if (optionCards[index]) {
            selectOption(index, optionCards[index]);
        }
    }

    // 2. Enter or Spacebar to Check Answer OR proceed to Next
    if (e.key === "Enter" || e.key === " ") {
        // Prevent default spacebar scrolling
        if (e.key === " ") e.preventDefault(); 
        
        if (appState === "answering" && selectedOptionIndex !== null) {
            checkAnswer();
        } else if (appState === "evaluating") {
            updateActiveWordList();
            loadNextQuestion();
        }
    }
    
    // 3. Right Arrow as an explicit "Next" button when evaluating
    if (e.key === "ArrowRight" && appState === "evaluating") {
        updateActiveWordList();
        loadNextQuestion();
    }
});