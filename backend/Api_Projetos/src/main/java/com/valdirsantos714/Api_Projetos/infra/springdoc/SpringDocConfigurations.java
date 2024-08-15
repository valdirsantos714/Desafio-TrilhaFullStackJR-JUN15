package com.valdirsantos714.Api_Projetos.infra.springdoc;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfigurations {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .components(new Components()
                        .addSecuritySchemes("bearer-key",
                                new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")))
                .info(new Info()
                        .title("Api de Projetos")
                        .description("Api de gerenciamento de projetos, com base no Desafio da Trilha Inicial FullStack Jr | Codigo Certo Coders com funcionalidades de cadastrar, atualizar, deletar e buscar projetos.")
                        .contact(new Contact()
                                .name("Valdir Santos")
                                .email("valdirsantost40@gmail.com"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://github.com/valdirsantos714/Desafio-TrilhaFullStackJR-JUN15")));
    }
}