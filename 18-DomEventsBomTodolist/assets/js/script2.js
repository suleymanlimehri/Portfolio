let form = document.querySelector("form")
let input = document.querySelector(".inputtext")
let list = document.querySelector(".list")
let clearBtn = document.querySelector(".clear-btn")

form.addEventListener("submit", todolist)

function todolist(e){
  e.preventDefault()
  if (!input.value.trim()) return;

  let li = document.createElement("li")
  li.classList.add("list_item")

  let number = document.createElement("span")
  number.textContent = `${list.children.length + 1}.`
  number.style.fontWeight = "bold"

  let span = document.createElement("span")
  span.textContent = input.value
  span.style.color = "red"

  let doneBtn = document.createElement("button")
  doneBtn.textContent = "Done"
  doneBtn.classList.add("done-btn")

  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Sil"
  deleteBtn.classList.add("delete-btn")
  deleteBtn.disabled = true

  let editBtn = document.createElement("button")
  editBtn.textContent = "Edit"
  editBtn.classList.add("edit-btn")

  doneBtn.addEventListener("click", () => {
    span.style.textDecoration = "line-through"
    span.style.color = "green"
    doneBtn.disabled = true
    deleteBtn.disabled = false
  })

  deleteBtn.addEventListener("click", () => {
    li.remove()
    updateIndexes()
  })

  editBtn.addEventListener("click", () => {
    const newVal = prompt("Yeni yaz:", span.textContent)
    if (newVal && newVal.trim()) {
      span.textContent = newVal.trim()
    }
  })

  li.append(number, span, doneBtn, deleteBtn, editBtn)
  list.appendChild(li)
  input.value = ""
}

clearBtn.addEventListener("click", () => {
  list.innerHTML = ""
})

function updateIndexes() {
  list.querySelectorAll(".list_item").forEach((li, i) => {
    li.children[0].textContent = `${i + 1}.`
  })
}
