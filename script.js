let questions = [];

// تحميل الأسئلة من الملف
fetch("questions.json")
.then(res => res.json())
.then(data => {
  questions = data;
});

// البرامج
const programs = [
  {
    name: "AutoCAD",
    img: "AutoCAD logo.png",
    desc: "برنامج للرسم الهندسي.",
    ai: "يستخدم الذكاء الاصطناعي لتسريع التصميم واكتشاف الأخطاء."
  },
  {
    name: "Civil 3D",
    img: "Civil 3D logo.png",
    desc: "برنامج لتصميم الطرق.",
    ai: "يحلل التضاريس باستخدام الذكاء الاصطناعي."
  },
  {
    name: "Revit",
    img: "Revit logo.png",
    desc: "برنامج BIM للنمذجة.",
    ai: "يساعد في إدارة المشاريع وتحليل التصميم."
  },
  {
    name: "SAP2000",
    img: "SAP2000 logo.png",
    desc: "تحليل المنشآت.",
    ai: "يستخدم AI لتحليل الأحمال والتنبؤ."
  }
];

// عرض البرامج
function loadPrograms(){
  let html = "";

  programs.forEach(p => {
    html += `
      <div class="card" onclick="showDetails('${p.name}','${p.desc}','${p.ai}')">
        <img src="${p.img}" width="120">
        <p>${p.name}</p>
      </div>
    `;
  });

  document.querySelector(".programs").innerHTML = html;
}

// تفاصيل البرنامج
function showDetails(name, desc, ai){
  document.getElementById("programDetails").innerHTML = `
    <h2>${name}</h2>
    <p><b>الوصف:</b> ${desc}</p>
    <p><b>الذكاء الاصطناعي:</b> ${ai}</p>
  `;
}

// تسجيل الدخول
function login(){
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if(u === "admin" && p === "1234"){
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadPrograms();
  }else{
    alert("خطأ");
  }
}

// عرض الاختبار
function startQuiz(){
  let html = "";

  questions.forEach((q, i) => {
    html += `<p>${q.q}</p>`;
    q.a.forEach((a, j) => {
      html += `<button onclick="check(${i},${j})">${a}</button>`;
    });
  });

  document.getElementById("quiz").innerHTML = html;
}

// التحقق
function check(i, j){
  alert(questions[i].correct === j ? "✅ صحيح" : "❌ خطأ");
}

// إدخال أسئلة جماعي
function importQuestions(){
  let text = document.getElementById("bulkInput").value.split("\n");

  for(let i=0;i<text.length;i+=5){
    if(text[i]){
      questions.push({
        q:text[i],
        a:[text[i+1],text[i+2],text[i+3]],
        correct:parseInt(text[i+4])
      });
    }
  }

  alert("تمت الإضافة");
}