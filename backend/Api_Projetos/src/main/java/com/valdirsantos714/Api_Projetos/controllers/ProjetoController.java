package com.valdirsantos714.Api_Projetos.controllers;

import com.valdirsantos714.Api_Projetos.model.Projeto;
import com.valdirsantos714.Api_Projetos.payloads.ProjetoRequestPayload;
import com.valdirsantos714.Api_Projetos.payloads.ProjetoResponsePayload;
import com.valdirsantos714.Api_Projetos.services.ProjetoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/projetos")
@CrossOrigin("*")
public class ProjetoController {

    @Autowired
    private ProjetoService service;

    @Operation(security = { @SecurityRequirement(name = "bearer-key") },
            summary = "Chama o método que retorna uma lista com todos os projetos de acordo com o id do usuário",
            responses = {
            @ApiResponse(description = "Requisição feita com sucesso", responseCode = "200"),
            @ApiResponse(responseCode = "404", description = "Não foi encontrado projetos"),
            @ApiResponse(responseCode = "401", description = "Erro de Autenticação"),
            @ApiResponse(responseCode = "403", description = "Requisição não autorizada"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @GetMapping("/{idUser}")
    public ResponseEntity findAll(@PathVariable(name = "idUser") Long idUser) {
        var lista = service.findAll(idUser);

        return ResponseEntity.ok().body(lista.stream().map(ProjetoResponsePayload::new)); //Retorna a lista convertida em payload
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, summary = "Procura projetos pelo id, que está vinculado com o id do usuário",  responses = {
            @ApiResponse(description = "Requisição feita com sucesso", responseCode = "200"),
            @ApiResponse(responseCode = "404", description = "Não foi encontrado projetos"),
            @ApiResponse(responseCode = "401", description = "Erro de Autenticação"),
            @ApiResponse(responseCode = "403", description = "Requisição não autorizada"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @GetMapping("/{idUser}/{idProjeto}")
    public ResponseEntity findById(@PathVariable(name = "idUser") Long idUser ,@PathVariable(name = "idProjeto") Long idProjeto) {
        var projeto = service.findById(idUser, idProjeto);

        return ResponseEntity.ok().body(new ProjetoResponsePayload(projeto)); //Retorna o projeto convertido em payload
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, summary = "Salva um projeto vinculando a um usuário",  responses = {
            @ApiResponse(description = "Projeto salvo com sucesso", responseCode = "201"),
            @ApiResponse(responseCode = "401", description = "Erro de Autenticação"),
            @ApiResponse(responseCode = "403", description = "Requisição não autorizada"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @PostMapping("/{idUser}")
    public ResponseEntity save(@PathVariable(name = "idUser") Long idUser ,@RequestBody @Valid ProjetoRequestPayload payload, UriComponentsBuilder builder) {
        var projeto = service.save(idUser, new Projeto(payload));
        var uri = builder.path("/projetos/{id}").buildAndExpand(projeto.getId()).toUri();

        return ResponseEntity.created(uri).body(new ProjetoResponsePayload(projeto)); //Retorna o projeto convertido em payload
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, summary = "Atualiza um projeto pelo id do usuário e pelo id do projeto",  responses = {
            @ApiResponse(description = "Requisição feita com sucesso", responseCode = "200"),
            @ApiResponse(responseCode = "404", description = "Não foi encontrado o projeto"),
            @ApiResponse(responseCode = "401", description = "Erro de Autenticação"),
            @ApiResponse(responseCode = "403", description = "Requisição não autorizada"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @PutMapping("/{idUser}/{idProjeto}")
    public ResponseEntity update(@PathVariable(name = "idUser") Long idUser ,@PathVariable(name = "idProjeto") Long idProjeto, @RequestBody @Valid ProjetoRequestPayload payload) {
        var projeto = service.update(idUser, idProjeto, new Projeto(payload));

        return ResponseEntity.ok().body(new ProjetoResponsePayload(projeto)); //Retorna o projeto convertido em payload
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, summary = "Deleta um projeto pelo id do usuário e pelo id do projeto",  responses = {
            @ApiResponse(responseCode = "204", description = "Requisição feita com sucesso"),
            @ApiResponse(responseCode = "401", description = "Erro de Autenticação"),
            @ApiResponse(responseCode = "403", description = "Requisição não autorizada"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @DeleteMapping("/{idUser}/{idProjeto}")
    public ResponseEntity delete(@PathVariable(name = "idUser") Long idUser ,@PathVariable(name = "idProjeto") Long idProjeto) {
        service.delete(idUser, idProjeto);
        return ResponseEntity.noContent().build(); //Não retorna nada
    }
}
