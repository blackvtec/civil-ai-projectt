let questions = [];
let score = 0;
let answered = 0;

// تحميل الأسئلة
fetch("questions.json")
.then(res => res.json())
.then(data => {
  questions = data;
});

// تسجيل الدخول
function login(){
  let name = document.getElementById("username").value;

  if(name !== ""){
    localStorage.setItem("student", name);

    document.getElementById("login").style.display="none";
    document.getElementById("dashboard").style.display="block";

    document.getElementById("welcome").innerText =
    "👋 أهلاً " + name;

    showLastScore();
    showLeaderboard();
  }
}

// عرض آخر نتيجة
function showLastScore(){
  let last = localStorage.getItem("lastScore");

  if(last){
    document.getElementById("lastScore").innerText =
    "📊 آخر نتيجة لك: " + last;
  }
}

// البرامج
const programs = [
{
name:"AutoCAD",
img:"autocad.png",
desc:"برنامج للرسم الهندسي",
ai:"AI يساعد في الرسم الذكي",
features:"✔ رسم\n✔ 3D\n✔ أدوات",
link:"https://www.autodesk.com/products/autocad"
},
{
name:"Civil 3D",
img:"civil3d.png",
desc:"تصميم الطرق",
ai:"تحليل تضاريس ذكي",
features:"✔ طرق\n✔ شبكات\n✔ تحليل",
link:"https://www.autodesk.com/products/civil-3d"
},
{
name:"Revit",
img:"revit.png",
desc:"نمذجة المباني",
ai:"تحليل ذكي",
features:"✔ BIM\n✔ تعاون\n✔ تحليل",
link:"https://www.autodesk.com/products/revit"
},
{
name:"SAP2000",
img:"sap2000.png",
desc:"تحليل إنشائي",
ai:"تحليل الأحمال",
features:"✔ دقة\n✔ نمذجة\n✔ تحليل",
link:"https://www.csiamerica.com/products/sap2000"
}
];

// عرض البرامج
document.addEventListener("DOMContentLoaded",()=>{
let html="";
programs.forEach(p=>{
html+=`
<div class="card" onclick="showDetails('${p.name}')">
<img src="${p.img}" width="100">
<p>${p.name}</p>
</div>`;
});
document.querySelector(".programs").innerHTML=html;
});

// التفاصيل
function showDetails(name){
let p = programs.find(x=>x.name===name);

document.getElementById("programDetails").innerHTML=`
<h2>${p.name}</h2>
<p>${p.desc}</p>
<p><b>AI:</b> ${p.ai}</p>
<p>${p.features.replace(/\n/g,"<br>")}</p>

<a href="${p.link}" target="_blank">
<button>تحميل</button>
</a>
`;
}

// بدء الاختبار
function startQuiz(){
score = 0;
answered = 0;

let html="";

questions.forEach((q,i)=>{
html+=`<p>${i+1}- ${q.q}</p>`;
q.a.forEach((a,j)=>{
html+=`<button onclick="check(${i},${j})">${a}</button>`;
});
});

document.getElementById("quiz").innerHTML=html;
}

// التحقق
function check(i,j){
answered++;

if(questions[i].correct === j){
score++;
}

if(answered === questions.length){
finish();
}
}

// إنهاء
function finish(){
let name = localStorage.getItem("student");

document.getElementById("result").innerText =
"🎯 نتيجتك: " + score + " / " + questions.length;

localStorage.setItem("lastScore", score);

// Leaderboard
let board = JSON.parse(localStorage.getItem("leaderboard")) || [];
board.push({name:name, score:score});
localStorage.setItem("leaderboard", JSON.stringify(board));

showLeaderboard();
}

// ترتيب الطلاب
function showLeaderboard(){
let board = JSON.parse(localStorage.getItem("leaderboard")) || [];

board.sort((a,b)=>b.score - a.score);

let html="";
board.forEach((p,i)=>{
html += `<p>${i+1}- ${p.name} : ${p.score}</p>`;
});

document.getElementById("leaderboard").innerHTML = html;
}

// إعادة
function resetQuiz(){
document.getElementById("quiz").innerHTML="";
document.getElementById("result").innerText="";
}