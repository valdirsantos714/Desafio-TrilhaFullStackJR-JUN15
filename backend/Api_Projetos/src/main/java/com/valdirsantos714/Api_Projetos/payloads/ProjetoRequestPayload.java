package com.valdirsantos714.Api_Projetos.payloads;

import com.valdirsantos714.Api_Projetos.model.Projeto;
import jakarta.validation.constraints.NotNull;

public record ProjetoRequestPayload (@NotNull(message = "Titulo não pode ser null") String titulo, @NotNull(message = "Descrição não pode ser null") String descricao
){

    public ProjetoRequestPayload(Projeto p) {
        this(p.getTitulo(), p.getDescricao());
    }
}
