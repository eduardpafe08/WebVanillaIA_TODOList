// main.js
const form = document.getElementById("formTarea")
const input = document.getElementById("inputTarea")
const lista = document.getElementById("listaTareas")

let tareas = JSON.parse(localStorage.getItem('tareas')) || []

renderTareas()

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const texto = input.value.trim()

    if (texto === '') return

    const nuevaTarea = {
        id: Date.now(),
        texto,
        completada: false
    }

    tareas.push(nuevaTarea)
    input.value = ''
    guardarTareas()
    renderTareas()
})

function renderTareas(){
    lista.innerHTML = ''
    tareas.forEach(tarea => {
        const li = document.createElement('li')
        li.textContent = tarea.texto
        li.className = tarea.completada ? "completada" : ""

        // Botón para marcar como completada
        const btn = document.createElement('button')
        btn.textContent = tarea.completada ? "Deshacer" : "Completar"
        btn.addEventListener("click", () => {
            tarea.completada = !tarea.completada
            guardarTareas()
            renderTareas()
        })

        li.appendChild(btn)
        lista.appendChild(li)
    })
}

function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas))
}