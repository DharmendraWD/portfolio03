let nav = document.querySelector("nav")
let body = document.body
let footer = document.querySelector('footer')
nav.innerHTML=`<div class="logo left">
<a href="index.html"><h1>Zayn Here</h1></a>
</div>

<div class="hamBurger">
<span class="hChild"></span>
<span class="hChild"></span>
<span class="hChild"></span>
</div>
<div class="right">
<a href="/">Home</a>
<a href="about.html">About</a>
<a href="services.html">Service</a>
<a href="portfolio.html">Portfolio</a>
<a  href="cheatsheet.html">CheatSheets</a>
<a href="https://www.upwork.com/freelancers/~010c382fc0726fb09b"><button>Hire Me</button></a>
</div>`

let hChild = document.querySelectorAll(".hChild")
let hamBurger = document.querySelector(".hamBurger")
// Hamburger 

let flag=1;

hamBurger.addEventListener("click", function(){
    if(flag==1){
        hChild[0].style.display="none"
        hChild[1].style.transform = 'rotate(45deg)';
        hChild[1].style.position = 'fixed';
        hChild[1].style.right = '15px';
        hChild[2].style.transform = 'rotate(-45deg)';
        hChild[2].style.position = 'fixed';
        hChild[2].style.right = '15px';
        body.classList.add("hamB")
        body.classList.add("navHeight")
        hamBurger.style.top="15px"
        flag=0;
        
    }
    else{
        hChild[0].style.display="block"
        hChild[1].style.transform = 'rotate(0deg)';
        hChild[1].style.position = 'relative';
        hChild[1].style.right = '0px';
        hChild[2].style.transform = 'rotate(0deg)';
        hChild[2].style.position = 'relative';
        hChild[2].style.right = '0px'; 
        body.classList.remove("hamB")
        body.classList.remove("navHeight")
        flag=1;
    }
    
})


// Adding footer in every last page 

footer.innerHTML=`<a href="index.html"><p>Zayn © 2023</p></a>
<a href="index.html"><p>Home</p></a>
<a href="about.html"><p>About me</p></a>`
console.log(footer)