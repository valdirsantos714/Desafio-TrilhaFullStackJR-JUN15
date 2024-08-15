package com.valdirsantos714.Api_Projetos.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.valdirsantos714.Api_Projetos.model.security.Users;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    //Gera o token
    public String geraToken(Users users) {
        try {
            Algorithm algorithm = Algorithm.HMAC256("12345");
            return JWT.create()
                    .withIssuer("Api_Projetos") //Nome da api
                    .withSubject(users.getLogin()) //o login da pessoa pra quem tá gerando
                    .withExpiresAt(dataExpiracao())
                    .sign(algorithm);

        } catch (JWTCreationException exception){
            throw new RuntimeException("Deu erro ao gerar token! ", exception);
        }
    }
    //Define que o token fica válido até no máximo 2 horas
    private Instant dataExpiracao() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

    //Verifica se o token é válido
    public String getSubject(String tokenJWT) {
        try {
            Algorithm algorithm = Algorithm.HMAC256("12345");
            return JWT.require(algorithm)
                    .withIssuer("Api_Projetos")
                    .build()
                    .verify(tokenJWT) //Verifica o token se existe e se é válido
                    .getSubject();

        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Deu erro no token service ao pegar subject " + exception);
        }

    }
}
