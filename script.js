/* ========================================= */
/*               script.js                   */
/* ========================================= */

window.onload = ()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);

animateStats();

};

// DARK MODE

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

themeBtn.innerHTML=
document.body.classList.contains("light")
? "☀️"
: "🌙";

};

// FAQ

function toggleFaq(el){

const p=el.nextElementSibling;

p.style.display=
p.style.display==="block"
? "none"
: "block";

}

// COUNTER

function animateValue(id,start,end,duration){

let range=end-start;

let current=start;

let increment=end>start?1:-1;

let stepTime=Math.abs(Math.floor(duration/range));

let obj=document.getElementById(id);

let timer=setInterval(()=>{

current+=increment;

obj.innerHTML=current+"+";

if(current==end){

clearInterval(timer);

}

},stepTime);

}

function animateStats(){

animateValue("students",0,5000,2000);

animateValue("questions",0,300,2000);

animateValue("programCount",0,4,2000);

animateValue("downloads",0,12000,2000);

}

// QUESTIONS

const questions={

autocad:[
{
q:"ما وظيفة أمر LINE؟",
a:["رسم خط","حذف","تلوين","تكبير"],
c:0
},
{
q:"ما وظيفة أمر OFFSET؟",
a:["نسخة موازية","حذف","إغلاق","تكبير"],
c:0
}
],

civil:[
{
q:"ما فائدة Civil 3D؟",
a:["تصميم الطرق","الألعاب","مونتاج","فيديو"],
c:0
}
],

revit:[
{
q:"ما استخدام Revit؟",
a:["BIM","مونتاج","ألعاب","تصوير"],
c:0
}
],

sap:[
{
q:"ما استخدام SAP2000؟",
a:["تحليل إنشائي","فوتوشوب","مونتاج","ألعاب"],
c:0
}
]

};

// SHOW QUESTIONS

function showQuestions(program){

document.getElementById("modal").style.display="block";

document.getElementById("programTitle").innerHTML=
program.toUpperCase();

const container=
document.getElementById("questionsContainer");

container.innerHTML="";

questions[program].forEach((q,index)=>{

container.innerHTML+=`

<div class="question">

<h2>${index+1} - ${q.q}</h2>

${q.a.map((option,i)=>

`<div class="option"
onclick="checkAnswer(this,${i},${q.c})">

${option}

</div>`

).join("")}

</div>

`;

});

}

// CHECK

function checkAnswer(el,selected,correct){

if(selected===correct){

el.classList.add("correct");

Swal.fire({

icon:"success",
title:"إجابة صحيحة 🚀"

});

}else{

el.classList.add("wrong");

Swal.fire({

icon:"error",
title:"إجابة خاطئة"

});

}

}

// CLOSE

function closeModal(){

document.getElementById("modal").style.display="none";

}