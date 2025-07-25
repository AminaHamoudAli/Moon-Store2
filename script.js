
const menuBtn=document.getElementById('menu-btn')
const mobilMenu=document.getElementById('mobil-btn')

menuBtn.addEventListener("click" ,() =>{
    mobilMenu.classList.toggle("hidden");
});

