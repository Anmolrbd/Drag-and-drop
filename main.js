const dragitem= document.querySelectorAll(".dragitem");
const container2 = document.getElementById("container2");
const container1 = document.getElementById("container1");
dragitem.forEach((items =>{
    items.addEventListener("dragstart", (e)=>{
        e.target.classList.add("dragging");
    })
}) )
dragitem.forEach((items =>{
    items.addEventListener("dragend", (e)=>{
        e.target.classList.remove("dragging");
    })
}) )

container2.addEventListener("dragover",(e)=>{
    e.preventDefault();
    const draggingitem = document.querySelector(".dragging");
    container2.appendChild(draggingitem);
})

container1.addEventListener("dragover",(e)=>{
    e.preventDefault();
    const draggingitem = document.querySelector(".dragging");
    container1.appendChild(draggingitem);
})
