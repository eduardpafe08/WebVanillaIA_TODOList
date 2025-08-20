import { cargarTareas, guardarTareas, crearTarea } from "./logicaTareas";
import { renderTareas } from "./ui";

const form = document.getElementById("formTarea")
const input = document.getElementById("inputTarea")

let tareas = cargarTareas()

function actualizarVista(nuevasTareas = tareas) {
    tareas = nuevasTareas
    renderTareas(tareas, actualizarVista)
}

form.addEventListener("submit", e = () => {
    e.preventDefault()

    const texto = input.ariaValueMax.trim()
    if (!texto) return
    const nuevaTarea = crearTarea(texto)
    tareas.push(nuevaTarea)
    guardarTareas(tareas)
    input.value = ''
    actualizarVista()
})

actualizarVista()
