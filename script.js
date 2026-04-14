// تسجيل حساب
function register() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (!email || !pass) {
        document.getElementById("msg").innerText = "املأ البيانات";
        return;
    }

    localStorage.setItem(email, pass);
    document.getElementById("msg").innerText = "تم إنشاء الحساب ✅";
}

// تسجيل دخول
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let savedPass = localStorage.getItem(email);

    if (savedPass === pass) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        document.getElementById("msg").innerText = "بيانات غلط ❌";
    }
}

// تسجيل خروج
function logout() {
    location.reload();
}

// عرض معلومات
function showInfo(type) {
    let box = document.getElementById("infoBox");

    if (type === "autocad") {
        box.innerHTML = "AutoCAD: برنامج رسم هندسي";
    }

    if (type === "civil") {
        box.innerHTML = "Civil 3D: تصميم طرق";
    }

    if (type === "revit") {
        box.innerHTML = "Revit: نمذجة مباني";
    }
}