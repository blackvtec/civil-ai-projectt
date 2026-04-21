// ================== الأسئلة ==================
let questions = [

{q:"ما الوظيفة الأساسية لبرنامج SAP2000؟",o:["التصميم المعماري","التحليل والتصميم الإنشائي","المونتاج","الرسم فقط"],a:"التحليل والتصميم الإنشائي"},
{q:"يعتمد SAP2000 على أي طريقة تحليل؟",o:["GIS","FEM","Photoshop","Excel"],a:"FEM"},
{q:"العنصر المستخدم للكمرات والأعمدة هو؟",o:["Shell","Frame","Solid","Cable"],a:"Frame"},
{q:"العنصر المستخدم للبلاطات والجدران؟",o:["Area/Shell","Joint","Link","Tendon"],a:"Area/Shell"},
{q:"العقد في البرنامج تسمى؟",o:["Joints","Frames","Areas","Loads"],a:"Joints"},
{q:"الحمل الميت يسمى؟",o:["Live","Wind","Dead","Temp"],a:"Dead"},
{q:"حمل الأشخاص والأثاث يسمى؟",o:["Dead","Live","Seismic","Snow"],a:"Live"},
{q:"أحمال الرياح تسمى؟",o:["Wind","Dead","Drift","Modal"],a:"Wind"},
{q:"أحمال الزلازل تسمى؟",o:["Static","Quake","Mesh","Plate"],a:"Quake"},
{q:"تشغيل التحليل؟",o:["Run Analysis","Assign","Draw","Define"],a:"Run Analysis"},

{q:"هدف الذكاء الاصطناعي؟",o:["الترفيه","محاكاة التفكير","الصدفة","الرسم"],a:"محاكاة التفكير"},
{q:"AI يستخدم في؟",o:["الطبخ","تحليل المنشآت","اللعب","الطباعة"],a:"تحليل المنشآت"},
{q:"يعتمد AI على؟",o:["الحظ","البيانات","الورق","التخمين"],a:"البيانات"},
{q:"فائدة AI؟",o:["زيادة الأخطاء","تحسين الكفاءة","تقليل الدقة","إبطاء"],a:"تحسين الكفاءة"},
{q:"Machine Learning هو؟",o:["جهاز","فرع من AI","خرسانة","رسم"],a:"فرع من AI"}

];

// ================== توليد حتى 200 بدون تكرار ==================
const pool = [
"AI يحسن التصميم","ML يعتمد على البيانات","Deep Learning يستخدم الصور",
"تحليل التربة باستخدام AI","AI يقلل المخاطر","AI يساعد في التنبؤ",
"تحليل الأحمال باستخدام AI","إدارة المشاريع باستخدام AI"
];

while(questions.length < 200){
  let text = pool[Math.floor(Math.random()*pool.length)] + " رقم " + questions.length;

  if(!questions.find(q=>q.q === text)){
    questions.push({
      q:text,
      o:["صح","خطأ"],
      a:"صح"
    });
  }
}

// ================== النظام ==================
let filtered=[...questions];
let page=0;
let perPage=50;

// عرض بنك الأسئلة
function showBank(){
  filtered=[...questions];
  page=0;
  quiz.innerHTML="";
  render();
}

// عرض الصفحة
function render(){
  let start=page*perPage;
  let slice=filtered.slice(start,start+perPage);

  bank.innerHTML = slice.map((q,i)=>`
    <div class="card">
      <b>${start+i+1}) ${q.q}</b>
      ${q.o.map(o=>`<p>${o}</p>`).join("")}
      <p style="color:#00ff88">✔ ${q.a}</p>
    </div>
  `).join("");

  controls.innerHTML = `
    <button onclick="prev()">⬅</button>
    صفحة ${page+1}
    <button onclick="next()">➡</button>
  `;
}

// تنقل
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

// بحث
function searchQ(){
  let v = search.value.toLowerCase();
  filtered = questions.filter(q=>q.q.toLowerCase().includes(v));
  page=0;
  render();
}

// اختبار
function startQuiz(){
  let q = questions.sort(()=>0.5-Math.random()).slice(0,10);

  bank.innerHTML="";
  quiz.innerHTML = q.map(x=>`
    <div class="card">
      <p>${x.q}</p>
      ${x.o.map(o=>`<button onclick="check('${o}','${x.a}')">${o}</button>`).join("")}
    </div>
  `).join("");
}

function check(a,b){
  alert(a===b ? "✔ صح" : "❌ خطأ");
}
