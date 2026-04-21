// 🔐 تسجيل الدخول
function login() {
    if (
        document.getElementById("username").value === "admin" &&
        document.getElementById("password").value === "1234"
    ) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("main").classList.remove("hidden");
    } else {
        alert("❌ خطأ");
    }
}

// 📦 البرامج (صورك + وصف + روابط)
const programs = [
    {
        name: "AutoCAD",
        img: "autocad.png",
        desc: "برنامج الرسم الهندسي الأساسي المستخدم في المخططات المعمارية والمدنية",
        link: "https://www.autodesk.com/products/autocad"
    },
    {
        name: "Civil 3D",
        img: "civil3d.png",
        desc: "برنامج تصميم الطرق والبنية التحتية وتحليل التضاريس",
        link: "https://www.autodesk.com/products/civil-3d"
    },
    {
        name: "Revit",
        img: "revit.png",
        desc: "برنامج نمذجة معلومات البناء BIM لتصميم المباني بشكل متكامل",
        link: "https://www.autodesk.com/products/revit"
    },
    {
        name: "SAP2000",
        img: "sap2000.png",
        desc: "برنامج تحليل وتصميم إنشائي متقدم يستخدم في الجسور والمنشآت",
        link: "https://www.csiamerica.com/products/sap2000"
    }
];

// عرض البرامج
function showPrograms() {
    let html = "<h2>البرامج الهندسية</h2>";

    programs.forEach(p => {
        html += `
        <div class="card">
            <h3>${p.name}</h3>
            <img src="${p.img}" onclick="showDetails('${p.name}')">
        </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

// تفاصيل البرنامج
function showDetails(name) {
    const p = programs.find(x => x.name === name);

    document.getElementById("content").innerHTML = `
    <div class="card">
        <h2>${p.name}</h2>
        <img src="${p.img}">
        <p>${p.desc}</p>
        <a href="${p.link}" target="_blank">
            <button>تحميل البرنامج</button>
        </a>
    </div>
    `;
}

//////////////////////////////////////////////////
// 🧠 الأسئلة (بدون تكرار فعلي)
//////////////////////////////////////////////////

const questions = [
    { q: "ما وظيفة SAP2000؟", o: ["تصميم معماري","تحليل إنشائي","مونتاج","رسم"], a: "تحليل إنشائي" },
    { q: "ما هو ML؟", o: ["خرسانة","ذكاء اصطناعي","جهاز","لغة"], a: "ذكاء اصطناعي" },
    { q: "ما هو AutoCAD؟", o: ["لعبة","برنامج رسم","برنامج تحليل","متصفح"], a: "برنامج رسم" },
    { q: "ما هو Revit؟", o: ["BIM","لعبة","محرك","Excel"], a: "BIM" },
    { q: "ما هو الحمل الميت؟", o: ["Live","Wind","Dead","Temp"], a: "Dead" }
];

// اختبار
function showQuiz() {
    let html = "<h2>اختبار</h2>";

    questions.forEach((q, i) => {
        html += `
        <div class="card">
            <h3>${i + 1}) ${q.q}</h3>
            <p>${q.o.join("<br>")}</p>
            <p style="color:lightgreen">✔ ${q.a}</p>
        </div>
        `;
    });

    document.getElementById("content").innerHTML = html;
}

// بنك الأسئلة
function showBank() {
    showQuiz(); // بدون تكرار
}
