const form = document.querySelector("#create-task-form")

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener("submit",function(event){
    event.preventDefault()
    //console.log(event.target.new-task-description.value)
    tasklist(document.querySelector("#new-task-description").value)
    form.reset()
  })
});

function tasklist(tasks){
  let li = document.createElement("li")
  let button = document.createElement("button")
   button.addEventListener("click", deleteTask)
  button.textContent = "delete"
  li.textContent = `${tasks}  `
  li.appendChild(button)
  document.querySelector("#tasks").appendChild(li)

}

function deleteTask(event){
  event.target.parentNode.remove()
}