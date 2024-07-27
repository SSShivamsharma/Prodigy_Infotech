// slicing text 
const texts = ["Frontend Developer",
    "Java Developer",
    "React Developer"];
let textindex = 0, charindex = 0, isdeleting = false;
const speed = 100, pause = 1000, deletespeed = 50;
const textContainer = document.getElementById("textid");

function typeText() {
    const currentText = texts[textindex];
    textContainer.textContent = isdeleting ? currentText.slice(0, charindex--) : currentText.slice(0, ++charindex);

    if ((!isdeleting && charindex > currentText.length) || (isdeleting && charindex === 0)) {
        isdeleting = !isdeleting;
        if (!isdeleting) {
            textindex = (textindex + 1) % texts.length;
            setTimeout(typeText, pause);
        } else {
            setTimeout(typeText, deletespeed);
        }

    } else {
        setTimeout(typeText, isdeleting ? deletespeed : speed);
    }
}
typeText();


// onload function to show a message 
window.onload = function(){
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function(){
        popup.style.display = 'none';
    } , 4000);
}

// function for togle menu 

document.addEventListener('DOMContentLoaded' ,() =>{
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuItems = document.querySelectorAll('.menu-item');

   
   
    // close menu when butto is clicked 
    menuItems.forEach(item =>{
        item.addEventListener('click' , () =>{
            navMenu.classList.add('active');
        });
    });
    // Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
     if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
       navMenu.classList.remove('active');
      }
    });


});