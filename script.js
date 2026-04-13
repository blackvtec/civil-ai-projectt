let questions = [];
let current = 0;
let score = 0;

// تسجيل الدخول
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "admin" && p === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("خطأ في البيانات");
  }
}

// عرض تفاصيل البرامج
function showProgram(name) {
  let content = "";

  if (name === "civil") {
    content = `
    <h3>Civil 3D</h3>
    <p>برنامج لتصميم الطرق والبنية التحتية.</p>
    <h4>🤖 الذكاء الاصطناعي:</h4>
    <p>يساعد في تحسين المسارات وتقليل التكلفة.</p>
    <h4>⭐ المميزات:</h4>
    <ul>
    <li>تصميم الطرق</li>
    <li>تحليل التضاريس</li>
    <li>حساب الكميات</li>
    </ul>`;
  }

  if (name === "revit") {
    content = `
    <h3>Revit</h3>
    <p>برنامج لنمذجة معلومات البناء (BIM).</p>
    <h4>🤖 الذكاء الاصطناعي:</h4>
    <p>يساعد في اكتشاف الأخطاء وتحسين التصميم.</p>
    <h4>⭐ المميزات:</h4>
    <ul>
    <li>نمذجة ثلاثية الأبعاد</li>
    <li>تنسيق المشاريع</li>
    <li>تقليل التعارضات</li>
    </ul>`;
  }

  if (name === "autocad") {
    content = `
    <h3>AutoCAD</h3>
    <p>برنامج للرسم الهندسي.</p>
    <h4>🤖 الذكاء الاصطناعي:</h4>
    <p>يساعد في تسريع الرسم وأتمتة الأوامر.</p>
    <h4>⭐ المميزات:</h4>
    <ul>
    <li>دقة عالية</li>
    <li>سهل الاستخدام</li>
    <li>مستخدم عالميًا</li>
    </ul>`;
  }

  if (name === "sap") {
    content = `
    <h3>SAP2000</h3>
    <p>برنامج لتحليل المنشآت.</p>
    <h4>🤖 الذكاء الاصطناعي:</h4>
    <p>يساعد في تحليل الأحمال والتنبؤ بالسلوك.</p>
    <h4>⭐ المميزات:</h4>
    <ul>
    <li>تحليل إنشائي قوي</li>
    <li>تصميم الجسور</li>
    <li>دقة عالية</li>
    </ul>`;
  }

  document.getElementById("programDetails").innerHTML = content;
}

// إدخال أسئلة
function importQuestions() {
  let text = document.getElementById("bulkInput").value.trim().split("\n");

  for (let i = 0; i < text.length; i += 5) {
    if (text[i]) {
      questions.push({
        q: text[i],
        a: [text[i + 1], text[i + 2], text[i + 3]],
        correct: parseInt(text[i + 4])
      });
    }
  }

  alert("تمت إضافة " + questions.length + " سؤال");
}

// بدء الاختبار
function startQuiz() {
  if (questions.length === 0) {
    alert("أضف أسئلة أولاً");
    return;
  }

  current = 0;
  score = 0;
  showQuestion();
}

// عرض السؤال
function showQuestion() {
  if (current >= questions.length) {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerHTML =
      "<h2>🎯 نتيجتك: " + score + " / " + questions.length + "</h2>";
    return;
  }

  let q = questions[current];
  let html = "<h3>" + q.q + "</h3>";

  for (let i = 0; i < q.a.length; i++) {
    html += `<button onclick="answer(${i})">${q.a[i]}</button>`;
  }

  document.getElementById("quiz").innerHTML = html;
}

// التحقق
function answer(i) {
  if (i === questions[current].correct) {
    score++;
  }
  current++;
  showQuestion();
}