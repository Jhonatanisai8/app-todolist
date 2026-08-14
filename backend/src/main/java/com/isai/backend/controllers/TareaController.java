package com.isai.backend.controllers;

import com.isai.backend.models.dtos.TareaDTOReq;
import com.isai.backend.models.dtos.TareaDTORes;
import com.isai.backend.repository.TareaRepository;
import com.isai.backend.service.ITareaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/tareas")
public class TareaController {

    private final ITareaService tareaService;


    @GetMapping
    public ResponseEntity<List<TareaDTORes>> listarTareas() {
        return new ResponseEntity<>(
                tareaService.listarTareas(),
                HttpStatus.OK
        );
    }


    @PostMapping
    public ResponseEntity<TareaDTOReq> guardarTarea(
            @RequestBody TareaDTOReq tareaDTOReq) {
        return new ResponseEntity<>(
                tareaService.registrarTarea(tareaDTOReq),
                HttpStatus.OK
        );
    }

}
