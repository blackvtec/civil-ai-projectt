// ================= FIREBASE =================

// 🔥 حط بياناتك هنا فقط (من Firebase)
const firebaseConfig = {
   apiKey: "AIzaSy123456..."
  authDomain: "PASTE-YOUR-DOMAIN",
  projectId: "PASTE-YOUR-PROJECT-ID",
  appId: "PASTE-YOUR-APP-ID"
};

// تشغيل Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ================= AUTH =================

// تسجيل حساب
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        alert("تم إنشاء الحساب بنجاح ✅");
    })
    .catch(error => {
        alert(error.message);
    });
}

// تسجيل دخول
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    })
    .catch(error => {
        alert(error.message);
    });
}

// تسجيل خروج
function logout() {
    auth.signOut().then(() => {
        location.reload();
    });
}

// ================= البرامج =================

function showInfo(type) {
    const box = document.getElementById("infoBox");

    if (type === "autocad") {
        box.innerHTML = `
        <h2>AutoCAD</h2>
        <p>برنامج تصميم هندسي يستخدم في الرسم ثنائي وثلاثي الأبعاد.</p>
        <p>💡 الذكاء الاصطناعي يساعد في تسريع الرسم والتصميم.</p>
        <a href="https://www.autodesk.com/products/autocad" target="_blank">تحميل البرنامج</a>
        `;
    }

    if (type === "civil") {
        box.innerHTML = `
        <h2>Civil 3D</h2>
        <p>برنامج متخصص في تصميم الطرق والبنية التحتية.</p>
        <p>💡 AI يساعد في تحليل المشاريع والتخطيط.</p>
        <a href="https://www.autodesk.com/products/civil-3d" target="_blank">تحميل البرنامج</a>
        `;
    }

    if (type === "revit") {
        box.innerHTML = `
        <h2>Revit</h2>
        <p>برنامج نمذجة معلومات البناء BIM.</p>
        <p>💡 الذكاء الاصطناعي يساعد في إدارة المشروع.</p>
        <a href="https://www.autodesk.com/products/revit" target="_blank">تحميل البرنامج</a>
        `;
    }
}