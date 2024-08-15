package com.valdirsantos714.Api_Projetos.payloads.auth;

import com.valdirsantos714.Api_Projetos.model.security.UserRole;
import com.valdirsantos714.Api_Projetos.model.security.Users;

public record DadosAdmin(Long id, String login, String senha, UserRole
        role) {
    public DadosAdmin(Users user) {
        this(user.getId(), user.getLogin(), user.getSenha(), user.getRole());
    }
}
