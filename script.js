// ================== بنك الأسئلة ==================
let questions = [
{q:"ما الوظيفة الأساسية لبرنامج SAP2000؟",o:["التصميم المعماري","التحليل والتصميم الإنشائي","المونتاج","الرسم فقط"],a:"التحليل والتصميم الإنشائي"},
{q:"يعتمد SAP2000 على أي طريقة تحليل؟",o:["GIS","FEM","Photoshop","Excel"],a:"FEM"},
{q:"العنصر المستخدم للكمرات والأعمدة هو؟",o:["Shell","Frame","Solid","Cable"],a:"Frame"},
{q:"العنصر المستخدم للبلاطات والجدران هو؟",o:["Area/Shell","Joint","Link","Tendon"],a:"Area/Shell"},
{q:"العقد في البرنامج تسمى؟",o:["Joints","Frames","Areas","Loads"],a:"Joints"},
{q:"الحمل الميت يسمى؟",o:["Live","Wind","Dead","Temp"],a:"Dead"},
{q:"حمل الأشخاص والأثاث يسمى؟",o:["Dead","Live","Seismic","Snow"],a:"Live"},
{q:"أحمال الرياح تسمى؟",o:["Wind","Dead","Drift","Modal"],a:"Wind"},
{q:"أحمال الزلازل تسمى؟",o:["Static","Quake","Mesh","Plate"],a:"Quake"},
{q:"الأمر المستخدم لتشغيل التحليل؟",o:["Run Analysis","Assign","Draw","Define"],a:"Run Analysis"},

{q:"إظهار التشوه بعد التحليل؟",o:["Show Tables","Show Deformed Shape","Show Grid","Show Labels"],a:"Show Deformed Shape"},
{q:"إظهار العزوم والقص؟",o:["Show Forces","Draw Frame","Define Material","Grid"],a:"Show Forces"},
{q:"العزم الرئيسي في الكمرة؟",o:["M3","P","V2","T"],a:"M3"},
{q:"القوة المحورية؟",o:["V2","P","M2","U3"],a:"P"},
{q:"قوة القص؟",o:["V2","P","T","R"],a:"V2"},

// ================== AI ==================
{q:"الهدف من الذكاء الاصطناعي؟",o:["الترفيه","محاكاة التفكير","تقليل الحواسيب","الصدفة"],a:"محاكاة التفكير"},
{q:"AI يستخدم في الهندسة؟",o:["الطبخ","تحليل المنشآت","الرسم","الزراعة"],a:"تحليل المنشآت"},
{q:"يعتمد AI على؟",o:["الحظ","البيانات","الورق","التخمين"],a:"البيانات"},
{q:"فائدة AI؟",o:["زيادة الأخطاء","تحسين الكفاءة","تقليل الدقة","إبطاء"],a:"تحسين الكفاءة"},
{q:"Machine Learning هو؟",o:["جهاز","فرع من AI","خرسانة","برنامج رسم"],a:"فرع من AI"},

// ================== توليد تلقائي لباقي 200 ==================
];

for(let i=questions.length+1;i<=200;i++){
  questions.push({
    q:"سؤال هندسي متقدم رقم "+i,
    o:["A","B","C","D"],
    a:"A"
  });
}

// ================== نظام العرض ==================
let filtered=[...questions];
let page=0;
let perPage=50;

// عرض بنك الأسئلة
function showBank(){
  filtered=[...questions];
  page=0;
  render();
}

// عرض
function render(){
  let start=page*perPage;
  let slice=filtered.slice(start,start+perPage);

  bank.innerHTML=slice.map((q,i)=>`
    <div class="card">
      <b>${start+i+1}) ${q.q}</b>
      ${q.o.map(o=>`<p>${o}</p>`).join("")}
      <p style="color:green">✔ ${q.a}</p>
    </div>
  `).join("");

  controls.innerHTML=`
    <button onclick="prev()">⬅</button>
    صفحة ${page+1}
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
  let v=search.value.toLowerCase();
  filtered=questions.filter(q=>q.q.toLowerCase().includes(v));
  page=0;
  render();
}

// اختبار
function startQuiz(){
  let q=questions.slice(0,10);
  quiz.innerHTML=q.map(x=>`
    <div class="card">
      <p>${x.q}</p>
      ${x.o.map(o=>`<button onclick="check('${o}','${x.a}')">${o}</button>`).join("")}
    </div>
  `).join("");
}

function check(a,b){
  alert(a===b?"✔ صح":"❌ خطأ");
}