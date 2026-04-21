// 🔐 بيانات الدخول
const USERNAME = "admin";
const PASSWORD = "1234";

// تسجيل الدخول
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === USERNAME && pass === PASSWORD) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("main").classList.remove("hidden");
    } else {
        alert("❌ بيانات الدخول غلط");
    }
}

// 🔥 توليد 200 سؤال
const questions = [];

for (let i = 1; i <= 200; i++) {
    questions.push({
        question: `سؤال رقم ${i} في الذكاء الاصطناعي`,
        options: ["A", "B", "C", "D"],
        answer: "A"
    });
}

// 🟢 اختبار
function showQuiz() {
    document.getElementById("bank").innerHTML = "";

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

// 🟣 بنك الأسئلة
function showBank() {
    document.getElementById("quiz").innerHTML = "";

    let html = "<h2>📚 بنك الأسئلة</h2>";

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