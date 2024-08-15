import {api} from '../api'

export const login =  async (email:string, senha:string) => {

    const obj = {
        login: email,
        senha: senha,
        role: null
    }

    try{
        const response = await fetch(`${api}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        })

        //Tá funcionando

        const dadosUser = await response.json();
        return dadosUser;

    } catch(e) {
        alert("Login ou senha incorretos, tente novamente!")
        console.log("Deu erro ao fazer login "+ e);
    }
}


export const cadastre =  async (email:string, senha:string) => {

    const obj = {
        login: email,
        senha: senha,
        role: "ADMIN"
    }

    try{
        const response = await fetch(`${api}/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        })

        //Tá funcionando

        const resposta = await response.json();
        return resposta;

    } catch(e) {
        console.log("Deu erro ao fazer cadastro "+ e);
    }
}
