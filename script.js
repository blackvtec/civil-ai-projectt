// تحميل المستخدمين
let users = JSON.parse(localStorage.getItem("users")) || [];

// تسجيل حساب
function register() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (!email || !pass) {
        msg.innerText = "املأ كل البيانات";
        return;
    }

    let exists = users.find(u => u.email === email);
    if (exists) {
        msg.innerText = "الحساب موجود مسبقًا";
        return;
    }

    users.push({ email, pass });
    localStorage.setItem("users", JSON.stringify(users));

    msg.innerText = "تم إنشاء الحساب ✅";
}

// تسجيل دخول
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    let user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
        localStorage.setItem("currentUser", email);

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        msg.innerText = "بيانات غلط ❌";
    }
}

// تسجيل خروج
function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}

// دخول تلقائي
window.onload = function () {
    let current = localStorage.getItem("currentUser");
    if (current) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    }
};

// معلومات البرامج
function showInfo(type) {
    let box = document.getElementById("infoBox");

    if (type === "autocad") {
        box.innerHTML = `
        <h2>AutoCAD</h2>
        <p>برنامج تصميم هندسي</p>
        <p>AI يساعد في الرسم السريع</p>
        <a href="https://www.autodesk.com/products/autocad" target="_blank">تحميل</a>
        `;
    }

    if (type === "civil") {
        box.innerHTML = `
        <h2>Civil 3D</h2>
        <p>تصميم الطرق</p>
        <p>AI يحسن التحليل</p>
        <a href="https://www.autodesk.com/products/civil-3d" target="_blank">تحميل</a>
        `;
    }

    if (type === "revit") {
        box.innerHTML = `
        <h2>Revit</h2>
        <p>نمذجة المباني</p>
        <p>AI يساعد في التخطيط</p>
        <a href="https://www.autodesk.com/products/revit" target="_blank">تحميل</a>
        `;
    }
}