let forMore = document.querySelectorAll(".forMore");
let explanations = document.querySelectorAll(".explanations");
let flag =0;

forMore.forEach(function (elem, index) {
    elem.addEventListener('click', function (elem) {
        // paragraph opacity hide/show 
        for(let i=0; i<explanations.length;i++){
            explanations[i].classList.remove('opacityShow')
            explanations[i].style.position="absolute"
             }

        if(flag==0){
            explanations[index].classList.add('opacityShow')
            flag=1;
            explanations[index].style.position="relative"
        }
        else if(flag==1){
            explanations[index].classList.remove('opacityShow') 
            flag=0;
            explanations[index].style.position="absolute"
        }
       
    })
})



// firstElementChild
// lastElementChild
// children.parentElement

let parent= document.querySelector(".parent")
parent.setAttribute("title", "title added by dom")
