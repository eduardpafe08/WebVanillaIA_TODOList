import { toogleTarea, eliminarTarea, guardarTarea } from "./logicaTareas.js";

export function renderTareas(tareas, onUpdate) {
    const lista = document.getElementById('listaTareas')
    lista.innerHTML = ''

    tareas.forEach(tarea => {
        const li = document.createElement('li')        
        li.textContent = tarea.texto
        li.className = tarea.completada ? 'completada' : ''

        const btnToogle = document.createElement('button')
        btnToogle.textContent = tarea.completada ? 'Deshacer' : 'Completar'
        btnToogle.addEventListener("click", () => {
            toogleTarea(tarea)
            guardarTareas(tareas)
            onUpdate()
        })

        const btnEliminar = document.createElement('button')
        btnEliminar.textContent = '🗑️'
        btnEliminar.addEventListener("click", () => {
            const nuevasTareas = eliminarTarea(tareas, tarea.id)
            guardarTareas(nuevasTareas)
            onUpdate(nuevasTareas)
        })

        li.appendChild(btnToogle)
        li.appendChild(btnEliminar)
        lista.appendChild(li)
    });

}