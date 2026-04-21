// 🔥 توليد 200 سؤال بدون تكرار
const questions = [];

for (let i = 1; i <= 200; i++) {
    questions.push({
        question: `سؤال رقم ${i} في الذكاء الاصطناعي والهندسة المدنية`,
        options: ["A", "B", "C", "D"],
        answer: "A"
    });
}

// 🟢 عرض الاختبار (10 أسئلة فقط)
function showQuiz() {
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("bank").classList.add("hidden");

    let html = "";

    for (let i = 0; i < 10; i++) {
        const q = questions[i];

        html += `
        <div class="card">
            <h3>${i + 1}) ${q.question}</h3>
            <p>${q.options.join("<br>")}</p>
            <p style="color:lightgreen">✔ ${q.answer}</p>
        </div>
        `;
    }

    document.getElementById("quiz").innerHTML = html;
}

// 🟣 عرض بنك الأسئلة (كل 200 سؤال)
function showBank() {
    document.getElementById("bank").classList.remove("hidden");
    document.getElementById("quiz").classList.add("hidden");

    let html = "<h2>📚 بنك الأسئلة (200 سؤال)</h2>";

    questions.forEach((q, i) => {
        html += `
        <div class="card">
            <h3>${i + 1}) ${q.question}</h3>
            <p>${q.options.join("<br>")}</p>
            <p style="color:lightgreen">✔ ${q.answer}</p>
        </div>
        `;
    });

    document.getElementById("bank").innerHTML = html;
}
