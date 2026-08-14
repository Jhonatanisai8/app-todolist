package com.isai.backend.models.dtos;

import lombok.Builder;

@Builder
public class TareaDTORes {
    private Long idTare;
    private String titulo;
    private Boolean completado = false;
}
