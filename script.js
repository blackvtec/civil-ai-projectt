let questions = [];
let filtered = [];
let page = 0;
let perPage = 50;

// 🔥 توليد 200 سؤال تلقائي
for(let i=1;i<=200;i++){
questions.push({
question:"سؤال رقم "+i+" في الذكاء الاصطناعي والهندسة المدنية",
options:["A","B","C","D"],
answer:"A",
level:["easy","medium","hard"][i%3]
});
}
filtered = questions;

// تسجيل دخول
function login(){
  if(username.value && password.value){
    loginBox.style.display="none";
    dashboard.style.display="block";
  }else{
    alert("اكتب البيانات");
  }
}

// البرامج
function showProgram(type){
  let data={
    autocad:{
      title:"AutoCAD",
      desc:"برنامج رسم هندسي",
      ai:"يساعد AI في الأتمتة",
      link:"https://www.autodesk.com/products/autocad"
    },
    revit:{
      title:"Revit",
      desc:"نمذجة المباني",
      ai:"تحليل ذكي",
      link:"https://www.autodesk.com/products/revit"
    },
    civil:{
      title:"Civil 3D",
      desc:"تصميم طرق",
      ai:"تحليل التضاريس",
      link:"https://www.autodesk.com/products/civil-3d"
    }
  };

  let p=data[type];

  programDetails.innerHTML=`
  <div class="card">
  <h3>${p.title}</h3>
  <p>${p.desc}</p>
  <p>🤖 ${p.ai}</p>
  <a href="${p.link}" target="_blank">تحميل</a>
  </div>
  `;
}

// عرض البنك
function showBank(){
  page=0;
  render();
}

// عرض
function render(){
  let start=page*perPage;
  let slice=filtered.slice(start,start+perPage);

  bank.innerHTML=slice.map((q,i)=>`
  <div class="card">
  <p><b>${start+i+1}) ${q.question}</b></p>
  ${q.options.map(o=>`<p>${o}</p>`).join("")}
  <p style="color:lightgreen">✔ ${q.answer}</p>
  </div>
  `).join("");

  bankControls.innerHTML=`
  <button onclick="prev()">⬅</button>
  <span>صفحة ${page+1}</span>
  <button onclick="next()">➡</button>
  `;
}

// تنقل
function next(){
  if((page+1)*perPage<filtered.length){
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

// بحث
function searchQ(){
  let val=search.value.toLowerCase();
  filtered=questions.filter(q=>q.question.toLowerCase().includes(val));
  page=0;
  render();
}

// فلترة
function filterQ(){
  let f=filter.value;
  if(f=="all") filtered=questions;
  else filtered=questions.filter(q=>q.level==f);
  page=0;
  render();
}

// اختبار
function startQuiz(){
  let q=questions.slice(0,10);

  quiz.innerHTML=q.map(x=>`
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