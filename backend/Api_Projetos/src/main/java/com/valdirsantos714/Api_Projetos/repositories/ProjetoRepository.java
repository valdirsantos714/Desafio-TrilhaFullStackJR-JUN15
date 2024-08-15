package com.valdirsantos714.Api_Projetos.repositories;

import com.valdirsantos714.Api_Projetos.model.Projeto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjetoRepository extends JpaRepository<Projeto, Long> {
}
