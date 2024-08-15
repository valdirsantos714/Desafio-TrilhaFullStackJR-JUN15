import { api } from "../api"

export const findAll = async (apiKey:string, idUser:number) => {
    try {
        const response = await fetch(`${api}/projetos/${idUser}`, 
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` 

            }
        });
        
        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao procurar projetos " + e);
    }
}

export const findProjetos = async (apiKey:string, idUser:number) => {
    try {
        const response = await fetch(`${api}/projetos/${idUser}`, 
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` 

            }
        });
        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao procurar projetos " + e);
    }
}

export const findProjetosById= async (apiKey:string, idUser:number, idProjeto:number) => {
    try {
        const response = await fetch(`${api}/projetos/${idUser}/${idProjeto}`, 
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` 

            }
        });

        const data = await response.json();
        return data;

    } catch (e) {
        console.log("Deu erro ao procurar projeto " + e);
    }
}

export const save = async (apiKey:string, idUser:number, titulo:string, descricao:string) => {

    if (titulo === "" || descricao === "") {
        alert("Preencha os campos corretamente")

    }  else {

        try {
            const response = await fetch(`${api}/projetos/${idUser}`, 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` 

            },body: JSON.stringify({
                titulo: titulo,
                descricao: descricao
            })
        });

            const data = await response.json();
            alert("Projeto cadastrado com sucesso!")
            return data;

        } catch (e) {
            alert("Erro! Não foi possível salvar projeto! Tente novamente")
            console.log("Deu erro ao salvar projeto " + e);
        }
    }
}


export const update = async (apiKey:string, idUser:number, idProjeto:number, titulo:string, descricao:string) => {
    try {
        const response = await fetch(`${api}/projetos/${idUser}/${idProjeto}`, 
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` 

            },body: JSON.stringify({
                titulo: titulo,
                descricao: descricao
            })
        });

        const data = await response.json();
        alert("Projeto atualizado com sucesso!")
        return data;

    } catch (e) {
        alert("Deu erro ao atualizar projeto, tente novamente")
        console.log("Deu erro ao atualizar projeto" + e);
    }
}

export const deletar = async (apiKey:string, idUser:number, idProjeto:number) => {
    try {
        const response = await fetch(`${api}/projetos/${idUser}/${idProjeto}`, 
        {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${apiKey}` 
            }
        });
        alert("Projeto deletado com sucesso!")

    } catch (e) {
        alert("Deu erro ao deletar projeto, tente novamente")
        console.log("Deu erro ao deletar projeto" + e);
    }
}