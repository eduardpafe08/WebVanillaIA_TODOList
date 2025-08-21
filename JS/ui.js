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
            const nuevasTareas = tareas.map(t => {
                if (t.id === tarea.id){
                    return {
                        ...t,
                        completada: !t.completada
                    }
                }
                return t
            })
            onUpdate(nuevasTareas)
        })

        const btnEliminar = document.createElement('button')
        btnEliminar.textContent = '🗑️'
        btnEliminar.addEventListener("click", async () => {
            await eliminarTarea(tarea.id)
            const nuevasTareas = tareas.filter(t => t.id !== tarea.id)
            onUpdate(nuevasTareas)
        })

        li.appendChild(btnToogle)
        li.appendChild(btnEliminar)
        lista.appendChild(li)
    });

}