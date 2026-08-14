package com.isai.backend.models.entities;

import jakarta.persistence.*;
import lombok.*;

/**
 * Tarea
 */
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTare;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private Boolean completado = false;

}