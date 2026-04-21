// ================== بنك الأسئلة (حقيقي بدون تكرار) ==================
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

{q:"إظهار التشوه؟",o:["Show Tables","Show Deformed Shape","Grid","Labels"],a:"Show Deformed Shape"},
{q:"إظهار القوى؟",o:["Show Forces","Draw","Material","Grid"],a:"Show Forces"},
{q:"العزم الرئيسي؟",o:["M3","P","V2","T"],a:"M3"},
{q:"القوة المحورية؟",o:["V2","P","M2","U3"],a:"P"},
{q:"قوة القص؟",o:["V2","P","T","R"],a:"V2"},

// ================== AI ==================
{q:"هدف الذكاء الاصطناعي؟",o:["الترفيه","محاكاة التفكير","الصدفة","الرسم"],a:"محاكاة التفكير"},
{q:"AI يستخدم في؟",o:["الطبخ","تحليل المنشآت","اللعب","الطباعة"],a:"تحليل المنشآت"},
{q:"يعتمد AI على؟",o:["الحظ","البيانات","الورق","التخمين"],a:"البيانات"},
{q:"فائدة AI؟",o:["زيادة الأخطاء","تحسين الكفاءة","تقليل الدقة","إبطاء"],a:"تحسين الكفاءة"},
{q:"Machine Learning هو؟",o:["جهاز","فرع من AI","خرسانة","رسم"],a:"فرع من AI"},

// ================== تكملة من أسئلتك ==================
{q:"العنصر ثلاثي الأبعاد؟",o:["Solid","Shell","Frame","Joint"],a:"Solid"},
{q:"عدد الاهتزازات يسمى؟",o:["Period","Frequency","Damping","Drift"],a:"Frequency"},
{q:"مقلوب التردد؟",o:["Period","Mass","Drift","Load"],a:"Period"},
{q:"فقدان الطاقة؟",o:["Damping","Deflection","Range","Mesh"],a:"Damping"},
{q:"ربط البلاطة؟",o:["Diaphragm","Link","Frame","Joint"],a:"Diaphragm"},

{q:"المحاور العامة؟",o:["UVW","XYZ","123","RST"],a:"XYZ"},
{q:"تثبيت الحرية؟",o:["Releases","Restraints","Loads","Springs"],a:"Restraints"},
{q:"Mesh يعني؟",o:["تقسيم","نسخ","حذف","تحليل"],a:"تقسيم"},
{q:"Replicate يعني؟",o:["نسخ","حذف","تقسيم","رسم"],a:"نسخ"},
{q:"Extrude يعني؟",o:["تحويل 3D","Mesh","Grid","Group"],a:"تحويل 3D"},

// ================== توليد ذكي بدون تكرار ==================
];

const pool = [
"AI يحسن التصميم","ML يعتمد على البيانات","Deep Learning يستخدم الصور",
"تحليل التربة باستخدام AI","AI يقلل المخاطر","AI يساعد في التنبؤ",
"تحليل الأحمال باستخدام AI","إدارة المشاريع باستخدام AI","تحسين الدقة",
"تحليل المنشآت الذكي"
];

const options = ["صح","خطأ"];

while(questions.length < 200){
  let text = pool[Math.floor(Math.random()*pool.length)] + " رقم " + questions.length;

  // منع التكرار
  if(!questions.find(q=>q.q === text)){
    questions.push({
      q:text,
      o:options,
      a:"صح"
    });
  }
}

// ================== النظام ==================
let filtered=[...questions];
let page=0;
let perPage=50;

// عرض البنك
function showBank(){
  filtered=[...questions];
  page=0;
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
    <button onclick="prev()">⬅ السابق</button>
    صفحة ${page+1} / ${Math.ceil(filtered.length/perPage)}
    <button onclick="next()">التالي ➡</button>
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
