package com.isai.backend.models.dtos;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class TareaDTOReq {
    private String titulo;
    private Boolean completado = false;

}
