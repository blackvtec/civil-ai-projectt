let questions = [];
let filtered = [];
let page = 0;
let perPage = 50;

// تسجيل دخول
function login(){
  let u = username.value;
  let p = password.value;
  if(u && p){
    loginBox.style.display="none";
    dashboard.style.display="block";
  }else{
    alert("اكتب البيانات");
  }
}

// البرامج
function showProgram(type){
  let data = {
    autocad:{
      title:"AutoCAD",
      desc:"برنامج للرسم الهندسي ثنائي وثلاثي الأبعاد",
      ai:"يساعد AI في الأتمتة والتصميم الذكي",
      link:"https://www.autodesk.com/products/autocad"
    },
    revit:{
      title:"Revit",
      desc:"برنامج نمذجة معلومات المباني BIM",
      ai:"تحليل المباني والتصميم التلقائي",
      link:"https://www.autodesk.com/products/revit"
    },
    civil:{
      title:"Civil 3D",
      desc:"تصميم الطرق والبنية التحتية",
      ai:"تحليل التضاريس وتحسين التصميم",
      link:"https://www.autodesk.com/products/civil-3d"
    }
  };

  let p = data[type];

  programDetails.innerHTML = `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p>🤖 ${p.ai}</p>
      <a href="${p.link}" target="_blank">تحميل البرنامج</a>
    </div>
  `;
}

// تحميل الأسئلة
async function loadQ(){
  let res = await fetch("questions.json");
  questions = await res.json();
  filtered = questions;
}

// عرض البنك
async function showBank(){
  await loadQ();
  page = 0;
  render();
}

// عرض الصفحة
function render(){
  let start = page*perPage;
  let slice = filtered.slice(start, start+perPage);

  bank.innerHTML = slice.map((q,i)=>`
    <div class="card">
      <p><b>${start+i+1}) ${q.question}</b></p>
      ${q.options.map(o=>`<p>${o}</p>`).join("")}
      <p style="color:lightgreen">${q.answer}</p>
    </div>
  `).join("");

  bankControls.innerHTML = `
    <button onclick="prev()">⬅</button>
    <span>${page+1}</span>
    <button onclick="next()">➡</button>
  `;
}

function next(){
  if((page+1)*perPage < filtered.length){
    page++;
    render();
  }
}

function prev(){
  if(page>0){
    page--;
    render();
  }
}

// البحث
function searchQ(){
  let val = search.value.toLowerCase();
  filtered = questions.filter(q=>q.question.toLowerCase().includes(val));
  page=0;
  render();
}

// الفلترة
function filterQ(){
  let f = filter.value;
  if(f=="all") filtered=questions;
  else filtered = questions.filter(q=>q.level==f);
  page=0;
  render();
}

// اختبار
function startQuiz(){
  let q = questions.slice(0,10);
  let score=0;

  quiz.innerHTML = q.map((x,i)=>`
    <div class="card">
      <p>${x.question}</p>
      ${x.options.map(o=>`
        <button onclick="check('${o}','${x.answer}')">${o}</button>
      `).join("")}
    </div>
  `).join("");
}

function check(a,b){
  if(a==b) alert("✔ صح");
  else alert("❌ خطأ");
}