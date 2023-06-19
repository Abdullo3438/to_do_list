const form = document.querySelector(".task_enter")
const taskInput = document.querySelector(".task_enter input")
const ul = document.querySelector(".task")
form.addEventListener("submit", adderTask)


function adderTask(event) {
    event.preventDefault()
    console.log("ishladi")


    const li = document.createElement("li")
    ul.appendChild(li)



    const button = document.createElement("button")
    const p = document.createElement("p")
    

    li.appendChild(button)
    li.appendChild(p)
    li.className = "hi"

    

    p.innerHTML = taskInput.value

    taskInput.value = ""
    
    button.addEventListener("click", ()=>{
        button.parentElement.remove()
    })


}
