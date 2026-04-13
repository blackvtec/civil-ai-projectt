let questions = [];

// تحميل الأسئلة
fetch("questions.json")
.then(res => res.json())
.then(data => {
  questions = data;
});

// البرامج
const programs = [
{
name:"AutoCAD",
img:"autocad.png",
desc:"برنامج للرسم الهندسي 2D و 3D",
ai:"يساعد الذكاء الاصطناعي في تسريع الرسم وتحليل المخططات",
features:"✔ رسم دقيق\n✔ تصميم 3D\n✔ أدوات ذكية",
link:"https://www.autodesk.com/products/autocad"
},
{
name:"Civil 3D",
img:"civil3d.png",
desc:"برنامج لتصميم الطرق والبنية التحتية",
ai:"يستخدم AI لتحليل التضاريس وتحسين التصميم",
features:"✔ تصميم طرق\n✔ تحليل أراضي\n✔ شبكات",
link:"https://www.autodesk.com/products/civil-3d"
},
{
name:"Revit",
img:"revit.png",
desc:"برنامج BIM لنمذجة المباني",
ai:"يساعد في التصميم التلقائي وتحليل المباني",
features:"✔ نمذجة ثلاثية\n✔ تعاون\n✔ تحليل",
link:"https://www.autodesk.com/products/revit"
},
{
name:"SAP2000",
img:"sap2000.png",
desc:"تحليل المنشآت والهياكل",
ai:"تحليل ذكي للأحمال والتوقعات",
features:"✔ تحليل إنشائي\n✔ دقة عالية\n✔ نمذجة",
link:"https://www.csiamerica.com/products/sap2000"
}
];

// عرض البرامج
let html="";
programs.forEach(p=>{
html+=`
<div class="card" onclick="showDetails('${p.name}')">
<img src="${p.img}" width="100">
<p>${p.name}</p>
</div>`;
});

document.addEventListener("DOMContentLoaded",()=>{
document.querySelector(".programs").innerHTML=html;
});

// تفاصيل البرنامج
function showDetails(name){
let p = programs.find(x=>x.name===name);

document.getElementById("programDetails").innerHTML=`
<h2>${p.name}</h2>
<p><b>📌 الوصف:</b> ${p.desc}</p>
<p><b>🤖 الذكاء الاصطناعي:</b> ${p.ai}</p>
<p><b>⭐ المميزات:</b><br>${p.features.replace(/\n/g,"<br>")}</p>

<br>
<a href="${p.link}" target="_blank">
<button style="background:#10b981">تحميل البرنامج</button>
</a>
`;
}

// تسجيل الدخول
function login(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u==="admin" && p==="1234"){
document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";
}else{
alert("خطأ في تسجيل الدخول");
}
}

// عرض الاختبار
function startQuiz(){
let html="";

questions.forEach((q,i)=>{
html+=`<p>${q.q}</p>`;
q.a.forEach((a,j)=>{
html+=`<button onclick="check(${i},${j})">${a}</button>`;
});
});

document.getElementById("quiz").innerHTML=html;
}

// التحقق
function check(i,j){
if(questions[i].correct===j){
alert("✅ صحيح");
}else{
alert("❌ خطأ");
}
}