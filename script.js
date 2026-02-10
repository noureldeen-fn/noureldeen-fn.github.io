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