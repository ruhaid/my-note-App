let input= document.getElementById("input");
let content= document.getElementById("content");
let addBtn= document.querySelector(".addBtn");
let output= document.querySelector(".output");


addBtn.addEventListener("click",()=>{
  if(input.value =='' || content.value==""){
    alert('please inter some text in inputs')
  }else{
   let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let outBtn= document.createElement("button");
   
    
output.appendChild(div);
    h3.innerHTML= input.value;
    div.appendChild(h3);
    div.classList.add("output-box");

    p.innerHTML=content.value;
   div.appendChild(p);

    outBtn.classList.add('outBtn');
    outBtn.innerHTML="X"
    div.appendChild(outBtn);

div.addEventListener("click",(e)=>{
    if(e.target.tagName == "BUTTON"){
      e.target.parentElement.remove(); 
    }
    
   })

  }
  input.value="";
  content.value="";
})








// function updateTime() {
//   const now = new Date();
//   const time = now.toLocaleTimeString(); // e.g., "11:35:01 AM"
//   document.querySelector(".date").innerText = time;
// }

// // Run immediately
// updateTime();

// // Update every second
// setInterval(updateTime, 1000);

