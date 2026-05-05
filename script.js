// LOGIN
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

// NAVIGATION
function showSection(section){
    document.getElementById("programs").classList.add("hidden");
    document.getElementById("quiz").classList.add("hidden");

    document.getElementById(section).classList.remove("hidden");

    if(section === "quiz"){
        startQuiz();
    }
}

// 🔥 بنك الأسئلة الحقيقي
let questions = [
{
q:"ما الوظيفة الأساسية لبرنامج SAP2000؟",
a:["التصميم المعماري","التحليل والتصميم الإنشائي","المونتاج","الرسم فقط"],
c:1
},
{
q:"يعتمد SAP2000 على أي طريقة تحليل؟",
a:["GIS","FEM","Photoshop","Excel"],
c:1
},
{
q:"العنصر المستخدم للكمرات والأعمدة هو:",
a:["Shell","Frame","Solid","Cable"],
c:1
},
{
q:"العنصر المستخدم للبلاطات والجدران هو:",
a:["Area/Shell","Joint","Link","Tendon"],
c:0
},
{
q:"الحمل الميت يسمى:",
a:["Live","Wind","Dead","Temp"],
c:2
},
{
q:"حمل الأشخاص يسمى:",
a:["Dead","Live","Seismic","Snow"],
c:1
},
{
q:"أحمال الرياح تسمى:",
a:["Wind","Dead","Drift","Modal"],
c:0
},
{
q:"الأمر لتشغيل التحليل:",
a:["Run Analysis","Assign","Draw","Define"],
c:0
},
{
q:"العزم الرئيسي:",
a:["M3","P","V2","T"],
c:0
},
{
q:"القوة المحورية:",
a:["V2","P","M2","U3"],
c:1
}
];

// 🔥 يكمل إلى 200 بدون تكرار
for(let i=questions.length+1; i<=200; i++){
    questions.push({
        q:"سؤال تدريبي رقم " + i,
        a:["A","B","C","D"],
        c:Math.floor(Math.random()*4)
    });
}

// خلط عشوائي
questions.sort(() => Math.random() - 0.5);

let index = 0;
let score = 0;

// START QUIZ
function startQuiz(){
    index = 0;
    score = 0;
    document.getElementById("result").innerText = "";
    loadQuestion();
}

// LOAD QUESTION
function loadQuestion(){
    if(index >= questions.length){
        showResult();
        return;
    }

    const q = questions[index];
    let html = `<h3>${q.q}</h3>`;

    q.a.forEach((ans,i)=>{
        html += `<button onclick="answer(${i})">${ans}</button>`;
    });

    document.getElementById("questionBox").innerHTML = html;
}

// ANSWER
function answer(i){
    if(i === questions[index].c){
        score++;
    }
    index++;
    loadQuestion();
}

// RESULT
function showResult(){
    let level = "";

    if(score > 160) level = "🔥 ممتاز";
    else if(score > 120) level = "👍 جيد جداً";
    else if(score > 80) level = "🙂 جيد";
    else level = "⚠️ يحتاج تحسين";

    document.getElementById("questionBox").innerHTML = "";
    document.getElementById("result").innerText =
    `نتيجتك: ${score}/200 — ${level}`;
}