const API_URL = 'http://localhost:3000/api/tareas'

// Recuperar tareas de localStorage
export async function cargarTareas() {
    // OLD -> return JSON.parse(localStorage.getItem('tareas')) || []
    const res = await fetch(API_URL)
    return await res.json()
}

// Guardar tareas en localStorage
/*OLD
export function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas))
}
*/
export async function guardarTarea(texto) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto })
    })
    const data = await res.json()
    return data
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
/*OLD
export function toogleTarea(tarea) {
    tarea.completada = !tarea.completada
}
*/

export async function toogleTarea(tarea) {
    await fetch(`${API_URL}/${tarea.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completada: !tarea.completada })
    });
}


// Eliminar tarea por ID
/*OLD
export function eliminarTarea(tareas, id) {
    return tareas.filter(t => t.id !== id)
}
*/
export async function eliminarTarea(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
