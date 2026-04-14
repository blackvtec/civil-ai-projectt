// 🔥 Firebase Config (حط بياناتك هنا)
const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-DBOW_lucaGcVHmsxA47t2K3mnpPjh0s",
  authDomain: "civil-ai-project.firebaseapp.com",
  projectId: "civil-ai-project",
  storageBucket: "civil-ai-project.firebasestorage.app",
  messagingSenderId: "3214650046",
  appId: "1:3214650046:web:85523aa143603c6d384cef",
  measurementId: "G-3V97NZCWQG"
};,
  authDomain: "PUT-YOUR-DOMAIN",
  projectId: "PUT-YOUR-ID",
  appId: "PUT-YOUR-APP-ID"
};

// تشغيل Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


// تسجيل حساب
function register() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, pass)
    .then(() => {
        alert("تم إنشاء الحساب ✅");
    })
    .catch(e => alert(e.message));
}

// تسجيل دخول
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    })
    .catch(e => alert(e.message));
}

// تسجيل خروج
function logout() {
    auth.signOut();
    location.reload();
}

// عرض معلومات البرامج
function showInfo(type) {
    let box = document.getElementById("infoBox");

    if (type === "autocad") {
        box.innerHTML = `
        <h3>AutoCAD</h3>
        <p>برنامج للرسم الهندسي ثنائي وثلاثي الأبعاد</p>
        <p>🔹 الذكاء الاصطناعي يساعد في تسريع التصميم</p>
        <a href="https://www.autodesk.com/products/autocad" target="_blank">تحميل</a>
        `;
    }

    if (type === "civil") {
        box.innerHTML = `
        <h3>Civil 3D</h3>
        <p>تصميم الطرق والبنية التحتية</p>
        <p>🔹 AI يحسن تحليل المشاريع</p>
        <a href="https://www.autodesk.com/products/civil-3d" target="_blank">تحميل</a>
        `;
    }

    if (type === "revit") {
        box.innerHTML = `
        <h3>Revit</h3>
        <p>نمذجة معلومات البناء BIM</p>
        <p>🔹 AI يساعد في التخطيط الذكي</p>
        <a href="https://www.autodesk.com/products/revit" target="_blank">تحميل</a>
        `;
    }
}