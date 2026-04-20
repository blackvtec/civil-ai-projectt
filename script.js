// تسجيل دخول بسيط
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user && pass) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("اكتب البيانات");
  }
}

// معلومات البرامج
function showProgram(type) {
  let box = document.getElementById("programInfo");

  let data = {
    autocad: {
      title: "AutoCAD",
      desc: "برنامج للرسم الهندسي ثنائي وثلاثي الأبعاد.",
      ai: "يساعد الذكاء الاصطناعي في تسريع الرسم وتحليل الأخطاء.",
      link: "https://www.autodesk.com/products/autocad"
    },
    civil: {
      title: "Civil 3D",
      desc: "تصميم الطرق والبنية التحتية.",
      ai: "تحليل التضاريس والتصميم الذكي.",
      link: "https://www.autodesk.com/products/civil-3d"
    },
    revit: {
      title: "Revit",
      desc: "نمذجة معلومات البناء BIM.",
      ai: "تحسين التصميم واكتشاف التعارضات.",
      link: "https://www.autodesk.com/products/revit"
    },
    sap: {
      title: "SAP2000",
      desc: "تحليل وتصميم المنشآت.",
      ai: "تحليل إنشائي متقدم باستخدام الخوارزميات.",
      link: "https://www.csiamerica.com/products/sap2000"
    }
  };

  let p = data[type];

  box.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <p><b>🤖 الذكاء الاصطناعي:</b> ${p.ai}</p>
    <a href="${p.link}" target="_blank">
      <button>تحميل البرنامج</button>
    </a>
  `;
}

// الاختبار
let questions = [];

async function startQuiz() {
  const res = await fetch("questions.json");
  questions = await res.json();

  let quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  questions.forEach((q, i) => {
    let div = document.createElement("div");

    div.innerHTML += `<p>${i + 1}- ${q.question}</p>`;

    q.options.forEach(opt => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${opt}">
          ${opt}
        </label><br>
      `;
    });

    quiz.appendChild(div);
  });

  quiz.innerHTML += `<button onclick="submitQuiz()">إنهاء</button>`;
}

// التصحيح
function submitQuiz() {
  let score = 0;

  questions.forEach((q, i) => {
    let ans = document.querySelector(`input[name="q${i}"]:checked`);
    if (ans && ans.value === q.answer) score++;
  });

  document.getElementById("result").innerHTML =
    `🎯 نتيجتك: ${score} / ${questions.length}`;
}