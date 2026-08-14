package com.isai.backend.service;

import com.isai.backend.models.dtos.TareaDTOReq;
import com.isai.backend.models.dtos.TareaDTORes;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TareaServiceIMPL
        implements ITareaService {

    @Override
    public List<TareaDTORes> listarTareas() {
        return List.of();
    }

    @Override
    public TareaDTOReq registrarTarea(TareaDTOReq tareaDTOReq) {
        return null;
    }

    @Override
    public void eliminarTarea(Long id) {

    }


}
