import { apiFetch } from "../api/apiConfig";

export const tareaService = {
  // GET /api/v1/tareas (Retorna TareaDTORes[])
  listarTareas: () => {
    return apiFetch("/api/v1/tareas");
  },

  // POST /api/v1/tareas (Envía TareaDTOReq)
  guardarTarea: (titulo, completado = false) => {
    return apiFetch("/api/v1/tareas", {
      method: "POST",
      body: JSON.stringify({ titulo, completado }),
    });
  },

  // DELETE /api/v1/tareas/{id}
  eliminarTarea: (idTare) => {
    return apiFetch(`/api/v1/tareas/${idTare}`, {
      method: "DELETE",
    });
  },
};
