let questions = [];
let score = 0;

// تحميل الأسئلة
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
    ai: "يساعد في تسريع التصميم واكتشاف الأخطاء.",
    link: "https://www.autodesk.com/products/autocad/overview"
  },
  {
    name: "Civil 3D",
    img: "Civil 3D logo.png",
    desc: "تصميم الطرق والبنية التحتية.",
    ai: "تحليل التضاريس باستخدام AI.",
    link: "https://www.autodesk.com/products/civil-3d/overview"
  },
  {
    name: "Revit",
    img: "Revit logo.png",
    desc: "نمذجة BIM.",
    ai: "إدارة المشاريع وتحليل التصميم.",
    link: "https://www.autodesk.com/products/revit/overview"
  },
  {
    name: "SAP2000",
    img: "SAP2000 logo.png",
    desc: "تحليل المنشآت.",
    ai: "تحليل الأحمال والتنبؤ.",
    link: "https://www.csiamerica.com/products/sap2000"
  }
];

// عرض البرامج
function loadPrograms(){
  let html = "";

  programs.forEach((p,i) => {
    html += `
      <div class="card" onclick="showDetails(${i})">
        <img src="${p.img}">
        <p>${p.name}</p>
      </div>
    `;
  });

  document.querySelector(".programs").innerHTML = html;
}

// التفاصيل
function showDetails(i){
  let p = programs[i];

  document.getElementById("programDetails").innerHTML = `
    <h2>${p.name}</h2>
    <img src="${p.img}" width="150"><br><br>
    <p>${p.desc}</p>
    <p>🤖 ${p.ai}</p>

    <a href="${p.link}" target="_blank">
      <button>تحميل البرنامج</button>
    </a>
  `;
}

// تسجيل الدخول
function login(){
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if(u === "admin" && p === "1234"){
    document.getElementById("login").style.display="none";
    document.getElementById("dashboard").style.display="block";

    loadPrograms();

    // عرض آخر نتيجة
    let last = localStorage.getItem("score");
    if(last){
      document.getElementById("lastScore").innerText =
        "آخر نتيجة: " + last;
    }
  }else{
    alert("خطأ");
  }
}

// الاختبار
function startQuiz(){
  score = 0;
  let html = "";

  questions.forEach((q,i)=>{
    html += `<p>${i+1}) ${q.q}</p>`;
    q.a.forEach((a,j)=>{
      html += `<button onclick="check(${i},${j})">${a}</button>`;
    });
  });

  document.getElementById("quiz").innerHTML = html;
}

// التحقق
function check(i,j){
  if(questions[i].correct === j){
    score++;
  }

  if(i === questions.length-1){
    document.getElementById("result").innerHTML =
      `<h2>🎯 نتيجتك: ${score} / ${questions.length}</h2>`;

    localStorage.setItem("score", score);
  }
}