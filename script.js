/* === كود إخفاء البريلودر لما الموقع يحمل === */
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    preloader.style.display = 'none'; // اختفاء فوري بدون أي تأخير
});

/* === كود إغلاق القائمة في الموبايل === */

// 1. بنمسك "الشيك بوكس" اللي بيتحكم في فتح وقفل القائمة
const menuCheckbox = document.getElementById('click');

// 2. بنمسك كل اللينكات اللي جوه القائمة
const navLinks = document.querySelectorAll('.page-header ul li a');

// 3. بنقول لكل لينك: "لما حد يدوس عليك، شيل علامة الصح من الشيك بوكس"
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuCheckbox.checked = false; // دي الحركة اللي بتقفل القائمة
    });
});


/* === كود زرار الصعود === */
const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
  // لو نزلنا 300 بيكسل، اظهر الزرار
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    // غير كده اخفيه
    scrollTopBtn.classList.remove('show');
  }
});

/* === تحريك الماوس الجديد والتحكم في ظهوره === */
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    if (!cursor) return;

    // 1. تحريك الماوس
    document.addEventListener('mousemove', (e) => {
        // نتأكد إنه ظاهر الأول
        cursor.classList.remove('cursor-hidden');
        // نحركه لمكان المؤشر (السن بتاعه عند النقطة بالظبط)
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // 2. إخفاء الماوس لما يخرج بره حدود الصفحة (الحل للمشكلة اللي قولتها)
    document.addEventListener('mouseleave', () => {
        cursor.classList.add('cursor-hidden');
    });

    // 3. إظهاره تاني لما يرجع يدخل
    document.addEventListener('mouseenter', () => {
        cursor.classList.remove('cursor-hidden');
    });


    // 4. تأثير الضغط (اختياري)
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
});