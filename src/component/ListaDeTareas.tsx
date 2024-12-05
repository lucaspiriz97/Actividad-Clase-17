import React, { useState } from 'react';

// Interfaz para las tareas
interface Tarea {
  id: number;
  texto: string;
}

const ListaDeTareas: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]); // Lista de tareas
  const [nuevaTarea, setNuevaTarea] = useState<string>(''); // Nueva tarea

  // Función para agregar tareas
  const agregarTarea = (evento: React.KeyboardEvent<HTMLInputElement>) => {
    if (evento.key === 'Enter' && nuevaTarea.trim() !== '') {
      const tarea: Tarea = { id: Date.now(), texto: nuevaTarea };
      setTareas([...tareas, tarea]); // Agregar la nueva tarea al array
      setNuevaTarea(''); // Limpiar el campo de entrada
    }
  };

  // Función para eliminar tareas
  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id)); // Filtrar la tarea eliminada
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      
      {/* Campo de entrada */}
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)} // Actualizar el estado del input
        onKeyDown={agregarTarea} // Detectar la tecla Enter
        placeholder="Escribe una tarea y presiona Enter"
      />
      
      {/* Lista de tareas */}
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.texto}
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;