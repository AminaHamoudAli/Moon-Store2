// زر الناف
const menuBtn=document.getElementById('menu-btn')
const mobilMenu=document.getElementById('mobil-btn')

menuBtn.addEventListener("click" ,() =>{
    mobilMenu.classList.toggle("hidden");
});

 const slider = document.getElementById('product-slider');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const popupImg = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupCompany = document.getElementById('popup-company');
    const popupDescription = document.getElementById('popup-description');
    const popupPrice = document.getElementById('popup-price');
    const popupStars = document.getElementById('popup-stars');

    // تمرير يدوي
    prevBtn.onclick = () => slider.scrollBy({ left: -300, behavior: 'smooth' });
    nextBtn.onclick = () => slider.scrollBy({ left: 300, behavior: 'smooth' });

    // تمرير تلقائي
    setInterval(() => slider.scrollBy({ left: 300, behavior: 'smooth' }), 4000);

    // فتح النافذة عند الضغط على منتج
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img').src;
        const title = card.querySelector('h2').innerText;
        const price = card.querySelector('p').innerText;
        const rating = [...card.querySelectorAll('.star')].filter(star => star.classList.contains('filled')).length;

        popupImg.src = img;
        popupTitle.innerText = title;
        popupPrice.innerText = price;
        popupDescription.innerText = " .";

        popupStars.querySelectorAll('.star').forEach((star, i) => {
          star.classList.toggle('filled', i < rating);
        });

        popup.classList.remove('hidden');
      });
    });

    // إغلاق النافذة
    closePopup.onclick = () => popup.classList.add('hidden');

