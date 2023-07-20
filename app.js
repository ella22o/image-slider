const scrollContainer = document.querySelector('.gallery');
const nextbtn = document.getElementById('nextbtn');
const backbtn = document.getElementById('backbtn');


scrollContainer.addEventListener('wheel', function(event){
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = 'smooth';
});
nextbtn.addEventListener('click', function(){
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = 'smooth';
});
backbtn.addEventListener('click', function(){
    scrollContainer.scrollLeft -= 900;
});

