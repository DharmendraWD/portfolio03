
// Hamburger 
let hamBurger = document.querySelector(".hamBurger")
let hChild = document.querySelectorAll(".hChild")
let nav = document.querySelectorAll("nav")
let body = document.body
flag=1;

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
        hamBurger.style.top="40px"
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
hChild[0].style.backgroundColor= 'white';
hChild[2].style.backgroundColor= 'white';
hChild[1].style.backgroundColor= 'white';