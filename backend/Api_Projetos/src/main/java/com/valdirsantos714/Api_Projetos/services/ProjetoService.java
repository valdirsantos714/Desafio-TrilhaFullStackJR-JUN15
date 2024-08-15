package com.valdirsantos714.Api_Projetos.services;

import com.valdirsantos714.Api_Projetos.model.Projeto;
import com.valdirsantos714.Api_Projetos.repositories.ProjetoRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProjetoService {

    @Autowired
    private ProjetoRepository repository;

    @Autowired
    private UsersService usersService;

    //Salva projeto e vincula um usuário a este projeto
    public Projeto save(Long idUser, Projeto projeto) {
        var user = usersService.findById(idUser); //Verifica se existe esse usuário
        projeto.setUser(user);
        repository.save(projeto);
        usersService.updateProjeto(idUser, projeto); //Vincula o projeto a esse usuário

        return repository.save(projeto);
    }

    //Procura projeto pelo id do usuário e pelo id do projeto
    public Projeto findById(Long idUser, Long idProjeto) {
        var user = usersService.findById(idUser); //Verifica se existe esse usuário

        var projeto = user.getProjetoList().stream().filter(p -> p.getId() == idProjeto).findFirst().orElseThrow(() -> new EntityNotFoundException("Projeto não encontrado"));

        return projeto;
    }

    //Retorna uma lista de todos os projetos de um certo usuário
    public List<Projeto> findAll(Long idUser) {
        var user = usersService.findById(idUser); //Verifica se existe esse usuário

        var list = user.getProjetoList().stream().toList();
        return list;
    }

    //Atualiza um projeto vinculado a um certo usuário, através do id do usuário e do id do projeto
    public Projeto update(Long idUser,Long idProjeto, Projeto projetoAtualizado){
        var projeto = findById(idUser, idProjeto); //Verifica se existe esse o usuário e o projeto vinculado a esse usuário

        projeto.setTitulo(projetoAtualizado.getTitulo());
        projeto.setDescricao(projetoAtualizado.getDescricao());

        repository.save(projeto); //Atualiza o projeto encontrado pelos atributos atualizados e salva

        return projeto;
    }

    //Exclui um projeto relacionado a um usuário
    public void delete(Long idUser, Long idProjeto) {
        var projeto = findById(idUser, idProjeto); //Verifica se existe esse o usuário e o projeto vinculado a esse usuário

        repository.deleteById(projeto.getId());
    }
}
