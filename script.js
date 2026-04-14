// تسجيل حساب
function register() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    localStorage.setItem(email, pass);
    document.getElementById("msg").innerText = "تم إنشاء الحساب ✅";
}

// تسجيل دخول
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let saved = localStorage.getItem(email);

    if (saved === pass) {
        localStorage.setItem("user", email);
        showDashboard();
    } else {
        document.getElementById("msg").innerText = "خطأ ❌";
    }
}

// دخول تلقائي
window.onload = function () {
    if (localStorage.getItem("user")) {
        showDashboard();
    }
}

function showDashboard() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

function logout() {
    localStorage.removeItem("user");
    location.reload();
}

// البرامج
function showInfo(type) {
    let box = document.getElementById("infoBox");

    if (type === "autocad") {
        box.innerHTML = `
        <h2>AutoCAD</h2>
        <p>برنامج رسم هندسي</p>
        <a href="https://www.autodesk.com/products/autocad" target="_blank">تحميل</a>
        `;
    }

    if (type === "civil") {
        box.innerHTML = `
        <h2>Civil 3D</h2>
        <p>تصميم الطرق</p>
        <a href="https://www.autodesk.com/products/civil-3d" target="_blank">تحميل</a>
        `;
    }

    if (type === "revit") {
        box.innerHTML = `
        <h2>Revit</h2>
        <p>نمذجة مباني</p>
        <a href="https://www.autodesk.com/products/revit" target="_blank">تحميل</a>
        `;
    }
}

// اختبار
let questions = [];

function startQuiz() {
    fetch("questions.json")
    .then(res => res.json())
    .then(data => {
        questions = data;
        showQuiz();
    });
}

function showQuiz() {
    let html = "";
    questions.forEach((q, i) => {
        html += `<p>${q.q}</p>`;
        q.options.forEach(opt => {
            html += `<button onclick="checkAnswer('${opt}','${q.answer}')">${opt}</button>`;
        });
    });
    document.getElementById("quizBox").innerHTML = html;
}

let score = 0;

function checkAnswer(ans, correct) {
    if (ans === correct) score++;
    document.getElementById("result").innerText = "درجتك: " + score;
}