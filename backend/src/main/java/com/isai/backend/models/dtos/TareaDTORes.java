package com.isai.backend.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class TareaDTORes {
    private Long idTare;
    private String titulo;
    private Boolean completado;
}
