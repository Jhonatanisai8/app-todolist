import { useState, useEffect, useCallback } from 'react';
import { tareaService } from '../services/tareaService';

export const useTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cargarTareas = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await tareaService.listarTareas();
      setTareas(data || []);
    } catch (err) {
      setError(err.message || 'Error al cargar tareas');
    } finally {
      setLoading(false);
    }
  }, []);

  const agregarTarea = async (titulo) => {
    try {
      await tareaService.guardarTarea(titulo);
      // Recargamos la lista para obtener el ID real de la base de datos
      await cargarTareas();
    } catch (err) {
      setError(err.message || 'Error al agregar tarea');
    }
  };

  const borrarTarea = async (idTare) => {
    try {
      await tareaService.eliminarTarea(idTare);
      setTareas((prev) => prev.filter((t) => t.idTare !== idTare));
    } catch (err) {
      setError(err.message || 'Error al borrar tarea');
    }
  };

  useEffect(() => {
    cargarTareas();
  }, [cargarTareas]);

  return {
    tareas,
    loading,
    error,
    agregarTarea,
    borrarTarea,
    refetch: cargarTareas
  };
};
