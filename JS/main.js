import { cargarTareas, guardarTarea, crearTarea } from "./logicaTareas.js";
import { renderTareas } from "./ui.js";

const form = document.getElementById("formTarea")
const input = document.getElementById("inputTarea")
let tareas =  await cargarTareas()
console.log(tareas)


function actualizarVista(nuevasTareas = tareas) {
    tareas = nuevasTareas
    renderTareas(tareas, actualizarVista)
    console.log(tareas)
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const texto = input.value.trim()
    if (!texto) return
    const nuevaTarea = await guardarTarea(texto)
    tareas.push({id: nuevaTarea.id, texto: nuevaTarea.texto, completada: nuevaTarea.completada, dataCreacion: Date.now()})
    input.value = ''
    actualizarVista()
})

actualizarVista()
