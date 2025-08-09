function home(){
    document.getElementById("homes").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function program(){
    document.getElementById("programs").style.color="rgb(20,251,20)";
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function plan(){
    document.getElementById("plans").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("homes").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function blog(){
    document.getElementById("blogs").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("homes").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function contact(){
    document.getElementById("contacts").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("homes").style.color="white";
    document.getElementById("blogs").style.color="white";
}

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    
    if(name.value == ""){
        alert("please enter name")
    }
    else if(number.value == ""){
           alert("please enter number")
    }
    else{
           alert(`Thanks for joining ${name.value}`)
    }
}



function toggleMenu() {
    let menuList = document.getElementsByClassName("menuList")[0];
    menuList.classList.toggle("show");
}



const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  },
  {
    threshold: 0.1 // Trigger when 10% visible
  }
);

animatedElements.forEach(el => observer.observe(el));
