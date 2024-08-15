package com.valdirsantos714.Api_Projetos.services;

import com.valdirsantos714.Api_Projetos.model.Projeto;
import com.valdirsantos714.Api_Projetos.model.security.Users;
import com.valdirsantos714.Api_Projetos.repositories.UsersRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UsersService {

    @Autowired
    private UsersRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    //Salva o usuário
    public Users save(Users users) {
        users.setSenha(passwordEncoder.encode(users.getSenha())); //Transforma a senha que digitar em BCrypt
        return repository.save(users); //Salva o usuário
    }

    //Retorna uma Lista com todos os usuários
    public List<Users> findAll() {
        return repository.findAll();
    }

    //Procura o usuário pelo id
    public Users findById(Long id) {
        var user = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado!"));

        return user;
    }

    //Atualiza o projeto relacionado a um usuário específico
    public Users updateProjeto(Long idUser,Projeto projeto) {
        var user = findById(idUser);

        user.getProjetoList().add(projeto);
        return repository.save(user);
    }

    //Pega o id do usuário pelo login
    public Long getIdByLogin(String login) {
        var user = findAll().stream().filter(u -> u.getLogin().equals(login)).findFirst().orElseThrow(() -> new EntityNotFoundException("Erro usuário não encontrado"));
        Long idUser = user.getId();
        return idUser;
    }

    //Exclui um usuário
    public void delete(Long id) {
        var user = findById(id);
        repository.delete(user);
    }

    //Atualiza um usuário
    public Users update(Long id, Users userAtualizado) {
        var user = findById(id);
        user.setLogin(userAtualizado.getLogin());
        user.setSenha(userAtualizado.getSenha());
        user.setRole(userAtualizado.getRole());

        repository.save(user);
        return user;
    }
}
