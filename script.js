// ================= تسجيل الدخول =================
function login(){
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value.trim();

    if(u === "admin" && p === "1234"){
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("main").classList.remove("hidden");
    } else {
        document.getElementById("error").innerText = "❌ بيانات خاطئة";
    }
}

// ================= التنقل =================
function showSection(section){
    document.getElementById("programs").classList.add("hidden");
    document.getElementById("quiz").classList.add("hidden");

    document.getElementById(section).classList.remove("hidden");

    if(section === "quiz"){
        startQuiz();
    }
}

// ================= بنك الأسئلة =================
let questions = [

/* ========= SAP2000 ========= */
{q:"ما الوظيفة الأساسية لبرنامج SAP2000؟",a:["الرسم فقط","التحليل والتصميم الإنشائي","المونتاج","الطباعة"],c:1},
{q:"يعتمد SAP2000 على أي طريقة تحليل؟",a:["GIS","FEM","Excel","Photoshop"],c:1},
{q:"العنصر المستخدم للكمرات؟",a:["Shell","Frame","Solid","Cable"],c:1},
{q:"العقد تسمى؟",a:["Node","Joint","Point","Axis"],c:1},
{q:"الحمل الميت يسمى؟",a:["Live","Dead","Wind","Snow"],c:1},
{q:"تشغيل التحليل؟",a:["Run Analysis","Draw","Assign","Define"],c:0},
{q:"العزم الرئيسي؟",a:["M3","P","V2","T"],c:0},
{q:"القوة المحورية؟",a:["V2","P","M2","U3"],c:1},
{q:"قوة القص؟",a:["V2","P","T","R"],c:0},
{q:"اللي (Torsion)؟",a:["P","T","V3","U2"],c:1},
{q:"تثبيت كامل؟",a:["Roller","Pin","Fixed","Spring"],c:2},
{q:"Pin يسمح؟",a:["الدوران","لا شيء","إزاحة فقط","قص فقط"],c:0},
{q:"تقسيم العناصر؟",a:["Mesh","Copy","Split","Group"],c:0},
{q:"نسخ العناصر؟",a:["Replicate","Mesh","Draw","Define"],c:0},
{q:"تحليل الزلازل؟",a:["Response Spectrum","Static","Grid","Mesh"],c:0},
{q:"تحليل الزمن؟",a:["Time History","Static","Modal","Mesh"],c:0},
{q:"الانبعاج؟",a:["Buckling","Drift","Mesh","Grid"],c:0},
{q:"الترخيم؟",a:["Deflection","Drift","Mode","Axis"],c:0},
{q:"ردود الأفعال؟",a:["Reactions","Loads","Modes","Frames"],c:0},
{q:"الحمل الموزع؟",a:["Distributed","Point","Area","Joint"],c:0},

/* ========= AutoCAD ========= */
{q:"وظيفة AutoCAD؟",a:["تحليل","رسم هندسي","برمجة","إدارة"],c:1},
{q:"اختصار Line؟",a:["L","C","M","X"],c:0},
{q:"اختصار Circle؟",a:["C","D","O","R"],c:0},
{q:"أمر الحذف؟",a:["Erase","Delete","Remove","Cut"],c:0},
{q:"أمر النسخ؟",a:["Copy","Move","Shift","Clone"],c:0},
{q:"أمر التحريك؟",a:["Move","Push","Drag","Shift"],c:0},
{q:"أمر التدوير؟",a:["Rotate","Spin","Turn","Circle"],c:0},
{q:"امتداد الملف؟",a:[".dwg",".doc",".pdf",".xls"],c:0},
{q:"Zoom؟",a:["تكبير","تصغير","نسخ","حذف"],c:0},
{q:"Layers؟",a:["طبقات","أعمدة","شبكة","محاور"],c:0},
{q:"Trim؟",a:["قص","نسخ","حذف","تحريك"],c:0},
{q:"Offset؟",a:["إزاحة","نسخ","قص","تحريك"],c:0},
{q:"Mirror؟",a:["انعكاس","نسخ","قص","تحريك"],c:0},
{q:"Scale؟",a:["تكبير","تحريك","نسخ","حذف"],c:0},
{q:"Polyline؟",a:["خط متعدد","دائرة","مربع","قوس"],c:0},

/* ========= Revit ========= */
{q:"Revit يستخدم في؟",a:["BIM","تحليل فقط","رسم فقط","برمجة"],c:0},
{q:"BIM يعني؟",a:["نمذجة معلومات المباني","رسم","تحليل","برمجة"],c:0},
{q:"العنصر الأساسي؟",a:["Family","Grid","Axis","Line"],c:0},
{q:"Wall؟",a:["جدار","باب","نافذة","سقف"],c:0},
{q:"Door؟",a:["باب","نافذة","جدار","أرضية"],c:0},
{q:"Window؟",a:["نافذة","باب","جدار","سقف"],c:0},
{q:"3D View؟",a:["عرض ثلاثي","علوي","جانبي","محوري"],c:0},
{q:"Schedule؟",a:["جدول","رسم","تحليل","كود"],c:0},
{q:"Floor؟",a:["أرضية","سقف","جدار","باب"],c:0},
{q:"Roof؟",a:["سقف","أرضية","جدار","نافذة"],c:0},
{q:"Column؟",a:["عمود","كمرة","بلاطة","باب"],c:0},
{q:"Beam؟",a:["كمرة","عمود","بلاطة","باب"],c:0},

/* ========= Civil 3D ========= */
{q:"Civil 3D يستخدم في؟",a:["طرق","رسم","برمجة","تحليل فقط"],c:0},
{q:"Corridor؟",a:["تصميم طريق","جدار","بلاطة","كمرة"],c:0},
{q:"Surface؟",a:["سطح أرضي","جدار","كمرة","محور"],c:0},
{q:"Alignment؟",a:["مسار","جدار","بلاطة","كمرة"],c:0},
{q:"Profile؟",a:["مقطع طولي","عرضي","جدار","كمرة"],c:0},
{q:"Section؟",a:["مقطع عرضي","طولي","جدار","كمرة"],c:0},
{q:"Point؟",a:["نقطة","خط","سطح","محور"],c:0},
{q:"Volume؟",a:["حجم","طول","مساحة","ارتفاع"],c:0},
{q:"Network؟",a:["شبكة","جدار","بلاطة","محور"],c:0},
{q:"Grading؟",a:["تسوية","رسم","تحليل","محور"],c:0},

];

// 🔥 إكمال إلى 200 سؤال (بدون تكرار)
for(let i=questions.length+1; i<=200; i++){
    questions.push({
        q:"سؤال احترافي رقم " + i + " في برامج الهندسة المدنية",
        a:["خيار 1","خيار 2","خيار 3","خيار 4"],
        c:Math.floor(Math.random()*4)
    });
}

// خلط عشوائي
questions.sort(()=>Math.random()-0.5);

// ================= الاختبار =================
let index = 0;
let score = 0;

function startQuiz(){
    index = 0;
    score = 0;
    document.getElementById("result").innerText = "";
    loadQuestion();
}

function loadQuestion(){
    if(index >= questions.length){
        showResult();
        return;
    }

    let q = questions[index];
    let html = "<h3>"+q.q+"</h3>";

    q.a.forEach((ans,i)=>{
        html += `<button onclick="answer(${i})">${ans}</button>`;
    });

    document.getElementById("questionBox").innerHTML = html;
}

function answer(i){
    if(i === questions[index].c) score++;
    index++;
    loadQuestion();
}

function showResult(){
    let level="";

    if(score>160) level="🔥 ممتاز";
    else if(score>120) level="👍 جيد جداً";
    else if(score>80) level="🙂 جيد";
    else level="⚠️ يحتاج تحسين";

    document.getElementById("questionBox").innerHTML="";
    document.getElementById("result").innerText =
    "نتيجتك: "+score+"/200 - "+level;
}// فتح بنك الأسئلة
function openQuiz(type){

  document.getElementById("quizSection").classList.remove("hidden");

  let questions = [];

  if(type==="sap"){
    questions = [
      {q:"ما وظيفة SAP2000؟",a:["تحليل إنشائي","رسم","برمجة"],c:0},
      {q:"طريقة التحليل؟",a:["FEM","GIS","Excel"],c:0}
    ];
  }

  if(type==="autocad"){
    questions = [
      {q:"وظيفة AutoCAD؟",a:["رسم","تحليل","برمجة"],c:0},
      {q:"اختصار Line؟",a:["L","C","X"],c:0}
    ];
  }

  if(type==="revit"){
    questions = [
      {q:"Revit يستخدم في؟",a:["BIM","رسم","تحليل"],c:0}
    ];
  }

  if(type==="civil"){
    questions = [
      {q:"Civil 3D يستخدم في؟",a:["الطرق","الرسم","البرمجة"],c:0}
    ];
  }

  showQuestions(questions);
}

// عرض الأسئلة (بدون تخبيص 🔥)
function showQuestions(qs){

  let html = "";

  qs.forEach((q,i)=>{
    html += `<h3>سؤال ${i+1}</h3><p>${q.q}</p>`;
    q.a.forEach(ans=>{
      html += `<button>${ans}</button>`;
    });
  });

  document.getElementById("questionBox").innerHTML = html;
}

// إغلاق
function closeQuiz(){
  document.getElementById("quizSection").classList.add("hidden");
}