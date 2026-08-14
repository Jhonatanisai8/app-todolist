package com.isai.backend.repository;

import com.isai.backend.models.entities.Tarea;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository
        extends CrudRepository<Tarea, Long> {
}
