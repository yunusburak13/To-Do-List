let addBtn=document.querySelector("#btn");
let list=document.querySelector("#liste")
let inputText=document.querySelector("#score")

addBtn.addEventListener('click' , function(event){
    event.preventDefault()
    let li=document.createElement("li");
    li.classList.add('yapılacaklar');
    li.classList.add('yapılacaklar:nth-child(odd)');
    list.appendChild(li);
    li.innerHTML=inputText.value;
    inputText.value="";

    li.addEventListener("click" , function(){

        li.style.textDecoration ='line-through'
    });
    
    li.addEventListener("dblclick" , function(){

        li.remove();

    });
});

