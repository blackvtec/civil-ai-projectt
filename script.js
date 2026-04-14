import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔴 حط بياناتك هنا
const firebaseConfig = {
  apiKey: "PUT_HERE",
  authDomain: "PUT_HERE",
  projectId: "PUT_HERE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// تحديد الدكتور
function isAdmin(email) {
  return email === "admin@ai.com";
}

// تسجيل
window.register = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("تم إنشاء الحساب"))
    .catch(e => alert(e.message));
}

// دخول
window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .catch(e => alert(e.message));
}

// حالة المستخدم
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("login").style.display = "none";

    if (isAdmin(user.email)) {
      document.getElementById("adminPanel").style.display = "block";
    } else {
      document.getElementById("studentPanel").style.display = "block";
    }
  }
});

// خروج
window.logout = function() {
  signOut(auth).then(() => location.reload());
}

// تفاصيل البرامج
window.showDetails = function(program) {
  let content = "";

  if (program === "autocad") {
    content = "برنامج AutoCAD للرسم الهندسي + يدعم الذكاء الاصطناعي";
  }

  if (program === "civil3d") {
    content = "برنامج Civil 3D لتصميم الطرق والبنية التحتية";
  }

  if (program === "revit") {
    content = "برنامج Revit لنمذجة المباني BIM";
  }

  if (program === "sap2000") {
    content = "برنامج SAP2000 للتحليل الإنشائي";
  }

  document.getElementById("details").innerText = content;
}

// بنك الأسئلة
let questions = [];

fetch("questions.json")
  .then(res => res.json())
  .then(data => questions = data);

// إضافة سؤال
window.addQuestion = function() {
  const q = document.getElementById("q").value;
  const a = document.getElementById("a").value;

  questions.push({question:q, answer:a});
  alert("تمت الإضافة");
}

// اختبار
window.startQuiz = function() {
  let html = "";

  questions.slice(0,5).forEach((q,i) => {
    html += `
      <p>${q.question}</p>
      <input id="ans${i}">
    `;
  });

  html += `<button onclick="submitQuiz()">إرسال</button>`;

  document.getElementById("quiz").innerHTML = html;
}

// تصحيح
window.submitQuiz = function() {
  let score = 0;

  questions.slice(0,5).forEach((q,i) => {
    if(document.getElementById("ans"+i).value === q.answer){
      score++;
    }
  });

  document.getElementById("result").innerText = "درجتك: " + score;
}