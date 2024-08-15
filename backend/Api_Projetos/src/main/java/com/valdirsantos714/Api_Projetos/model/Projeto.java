package com.valdirsantos714.Api_Projetos.model;

import com.valdirsantos714.Api_Projetos.model.security.Users;
import com.valdirsantos714.Api_Projetos.payloads.ProjetoRequestPayload;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "projeto")
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Projeto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String titulo;

    private String descricao;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    public Projeto(ProjetoRequestPayload payload) {
        this.titulo = payload.titulo();
        this.descricao = payload.descricao();
    }
}
