let acc = document.getElementsByClassName("questions");
let i;

for(i=0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let pan = this.nextElementSibling;
        if (pan.style.display === "block"){
            pan.style.display = "none"
        } else {
            pan.style.display = "block"
        }
    })
}

// switch buttons


const slider = document.querySelector('.slider')  
      const carousel = document.querySelector('.carousel') 

      const prev = document.querySelector('.prev')
      const next = document.querySelector('.next')

      var direction;

      prev.addEventListener('click', function(){
        if(direction == -1){
            direction = 1;
            slider.appendChild(slider.firstElementChild);
        }
        
        carousel.style.justifyContent = 'flex-end';
        slider.style.transform = 'translate(20%)'
      })

      next.addEventListener('click', function(){
        direction = -1;
        carousel.style.justifyContent = 'flex-start';
        slider.style.transform = 'translate(-20%)'
      })

      slider.addEventListener('transitionend' , function(){
        if(direction == -1){
            slider.appendChild(slider.firstElementChild);
        }else if(direction == 1) {
            slider.prepend(slider.lastElementChild);
        }
        
        slider.style.transition = "none"
        slider.style.transform = 'translate(0)';
        setTimeout(function(){
            slider.style.transition = 'all 0.5s';
            
        })
        
      })

 /// data filter
 
 function dataFilter(){

    const liItem=document.querySelectorAll(".project-list-box ul li");
    const projectBox=document.querySelectorAll(".project-box");
    
    liItem.forEach(li=>{
        li.addEventListener("click",function(){
            liItem.forEach(li =>{
                li.className="";
            })
            li.className="activeproject";
        
    
            // console.log(li.textContent);
            let value = li.textContent;
            updatedValue = value.replace("_"," ");
    
            projectBox.forEach(content=>{
            content.style.display="none";
            if(content.getAttribute("data-filter") == updatedValue.toLowerCase() || updatedValue=="All"){
                content.style.display="flex";
            }
        })
        })
        
    })
    }
    dataFilter();





