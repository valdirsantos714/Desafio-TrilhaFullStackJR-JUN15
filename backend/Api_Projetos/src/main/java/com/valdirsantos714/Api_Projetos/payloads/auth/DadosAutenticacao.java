package com.valdirsantos714.Api_Projetos.payloads.auth;

import com.valdirsantos714.Api_Projetos.model.security.UserRole;
import com.valdirsantos714.Api_Projetos.model.security.Users;

public record DadosAutenticacao(String login, String senha, UserRole role) {
    public DadosAutenticacao(Users u) {
        this(u.getLogin(), u.getSenha(), u.getRole());
    }
}
