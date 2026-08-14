package com.isai.backend.service;

import com.isai.backend.models.dtos.TareaDTOReq;
import com.isai.backend.models.dtos.TareaDTORes;

import java.util.List;

public interface ITareaService {
    List<TareaDTORes> listarTareas();

    TareaDTOReq registrarTarea(TareaDTOReq tareaDTOReq);
}
