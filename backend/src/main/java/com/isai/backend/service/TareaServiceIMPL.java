package com.isai.backend.service;

import com.isai.backend.mappers.TareaMapper;
import com.isai.backend.models.dtos.TareaDTOReq;
import com.isai.backend.models.dtos.TareaDTORes;
import com.isai.backend.models.entities.Tarea;
import com.isai.backend.repository.TareaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TareaServiceIMPL
        implements ITareaService {

    private final TareaRepository tareaRepository;

    @Override
    public List<TareaDTORes> listarTareas() {
        List<Tarea> tareas = new ArrayList<>();
        tareaRepository.findAll().forEach(tareas::add);
        return tareas.stream()
                .map(TareaMapper::toDTO)
                .toList();
    }

    @Override
    public TareaDTOReq registrarTarea(TareaDTOReq tareaDTOReq) {
        Tarea tarea = TareaMapper.toEntity(tareaDTOReq);
        tareaRepository.save(tarea);
        return tareaDTOReq;
    }

    @Override
    public void eliminarTarea(Long id) {
        tareaRepository.deleteById(id);
    }


}
