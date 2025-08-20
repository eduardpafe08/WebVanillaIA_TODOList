// Recuperar tareas de localStorage
export function cargarTareas() {
    return JSON.parse(localStorage.getItem('tareas')) || []
}

// Guardar tareas en localStorage
export function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas))
}

// Crear una nueva tarea
export function crearTarea(texto) {
    return {
        id: Date.now(),
        texto,
        completada: false
    }
}

// Alternar estado completada
export function toogleTarea(tarea) {
    tarea.completada = !tarea.completada
}

// Eliminar tarea por ID
export function eliminarTarea(tareas, id) {
    return tareas.filter(t => t.id !== id)
}