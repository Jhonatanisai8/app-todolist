package com.isai.backend.mappers;

import com.isai.backend.models.dtos.TareaDTOReq;
import com.isai.backend.models.dtos.TareaDTORes;
import com.isai.backend.models.entities.Tarea;

public class TareaMapper {
    public static TareaDTORes toDTO(Tarea tarea) {
        return TareaDTORes.builder()
                .idTare(tarea.getIdTare())
                .titulo(tarea.getTitulo())
                .completado(tarea.getCompletado())
                .build();
    }

    public static Tarea toEntity(TareaDTOReq tareaDTOReq) {
        return Tarea.builder()
                .titulo(tareaDTOReq.getTitulo())
                .completado(tareaDTOReq.getCompletado())
                .build();
    }
}
