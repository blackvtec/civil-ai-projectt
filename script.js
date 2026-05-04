// 🔐 LOGIN
function login(){
    if(
        document.getElementById("username").value==="admin" &&
        document.getElementById("password").value==="1234"
    ){
        loginBox.style.display="none";
        main.classList.remove("hidden");
    } else alert("❌ خطأ");
}

//////////////////////////////////////////////////
// 📦 البرامج
//////////////////////////////////////////////////
const programs=[
{
name:"AutoCAD",
img:"autocad.png",
desc:"برنامج الرسم الهندسي الأساسي",
link:"https://www.autodesk.com/products/autocad"
},
{
name:"Civil 3D",
img:"civil3d.png",
desc:"تصميم الطرق والبنية التحتية",
link:"https://www.autodesk.com/products/civil-3d"
},
{
name:"Revit",
img:"revit.png",
desc:"BIM تصميم المباني",
link:"https://www.autodesk.com/products/revit"
},
{
name:"SAP2000",
img:"sap2000.png",
desc:"تحليل إنشائي متقدم",
link:"https://www.csiamerica.com/products/sap2000"
}
];

function showPrograms(){
let html="<div class='grid'>";
programs.forEach(p=>{
html+=`
<div class="card" onclick="showDetails('${p.name}')">
<img src="${p.img}">
<h3>${p.name}</h3>
</div>`;
});
html+="</div>";
content.innerHTML=html;
}

function showDetails(name){
const p=programs.find(x=>x.name===name);
content.innerHTML=`
<div class="card">
<h2>${p.name}</h2>
<img src="${p.img}">
<p>${p.desc}</p>
<a href="${p.link}" target="_blank">
<button>تحميل البرنامج</button>
</a>
</div>`;
}

//////////////////////////////////////////////////
// 🧠 بنك أسئلة 200 (بدون تكرار)
//////////////////////////////////////////////////
const questions=[];

for(let i=1;i<=200;i++){
questions.push({
q:`سؤال رقم ${i}`,
o:["A","B","C","D"],
a:"A"
});
}

//////////////////////////////////////////////////
// 🟢 اختبار تفاعلي
//////////////////////////////////////////////////
let score=0;

function startQuiz(){
score=0;
let html="<h2>اختبار</h2>";

questions.slice(0,10).forEach((q,i)=>{
html+=`
<div class="card">
<h3>${i+1}) ${q.q}</h3>
${q.o.map(opt=>`<div class="option" onclick="check(this,'${q.a}')">${opt}</div>`).join("")}
</div>`;
});

html+=`<button onclick="finishQuiz()">إنهاء</button>`;
content.innerHTML=html;
}

function check(el,correct){
if(el.innerText===correct){
el.style.background="green";
score++;
}else{
el.style.background="red";
}
}

function finishQuiz(){
alert("درجتك: "+score+"/10");
}

//////////////////////////////////////////////////
// 📚 بنك الأسئلة (مقسم صفحات)
//////////////////////////////////////////////////
function showBank(page){

let perPage=20;
let start=(page-1)*perPage;
let end=start+perPage;

let html="<h2>📚 بنك الأسئلة</h2>";

questions.slice(start,end).forEach((q,i)=>{
html+=`
<div class="card">
<h3>${start+i+1}) ${q.q}</h3>
<p>${q.o.join(" - ")}</p>
</div>`;
});

// أزرار الصفحات
html+="<div>";
for(let i=1;i<=10;i++){
html+=`<button onclick="showBank(${i})">${i}</button>`;
}
html+="</div>";

content.innerHTML=html;
}