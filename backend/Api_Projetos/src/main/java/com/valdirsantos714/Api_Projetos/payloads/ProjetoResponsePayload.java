package com.valdirsantos714.Api_Projetos.payloads;

import com.valdirsantos714.Api_Projetos.model.Projeto;
import jakarta.validation.constraints.NotNull;

public record ProjetoResponsePayload(Long id,String titulo, String descricao
){

    public ProjetoResponsePayload(Projeto p) {
        this(p.getId() ,p.getTitulo(), p.getDescricao());
    }
}
