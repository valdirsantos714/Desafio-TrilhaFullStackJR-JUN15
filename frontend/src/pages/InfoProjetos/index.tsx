import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../../hooks/useGlobalContext"
import { deletar, findProjetosById, update } from "../../services/data"
import "./index.css"
import { Footer } from "../../components/Footer"

export const InfoProjetos = () => {
    const navigate = useNavigate()
    const params = useParams()
    
    const idProjeto:number = params.id ? parseInt(params.id) : 0; //Pega o id passado como parâmetro e se a não conseguir passar o id, o valor fica sendo zero

    const [titulo, setTitulo] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")

    const {apiKey, idUser} = useGlobalContext()

    useEffect(() => {
        procuraProjetoPorId()
    },[])

    const atualizaTitulo = (e:React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value
        setTitulo(valor);
    }

    const atualizaDescricao = (e:React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value
        setDescricao(valor);
    }

    const procuraProjetoPorId = async() => {
        try {
            const response = await findProjetosById(apiKey, idUser, idProjeto);
            const title = response.titulo;
            const description = response.descricao

            setTitulo(title)
            setDescricao(description)
            
            
        } catch (error) {
            console.log(error);
        }
    }

    const atualizar = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (titulo === "" || descricao === "") {
            alert("Digite o email e senha!")
        } else {
            try {
                const response = await update(apiKey, idUser,idProjeto, titulo, descricao);
                navigate("/projetos")
               
            } catch (error) {
                console.log(error);
            }
        }
    }

    const excluir = async () => {
        
        try {
            const response = await deletar(apiKey, idUser, idProjeto);

            navigate("/projetos")
               
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
        <main>
            <section>
                <div className="div-infoProjeto">
                    <h2 className="h2-infoProjeto">Informações do projeto </h2>
                    <p className="p-infoProjeto">Exclua o projeto ou atualize informações sobre ele</p>
                    <form onSubmit={atualizar} className="form-infoProjeto">
                        <div className="div-form-infoProjeto">
                        <label htmlFor="titulo" className="label-infoProjeto">
                        Título
                        </label>
                            <input onChange={atualizaTitulo} type="text" placeholder="Digite o título do projeto"  value={titulo} required 
                            className="input-infoProjeto"
                            name="titulo" id="titulo"/>
                            <label 
                            className="label-infoProjeto" htmlFor="descricao">
                                Descrição
                            </label>
                            
                            <input onChange={atualizaDescricao} type="text"
                            value={descricao} placeholder="Digite a descrição do projeto" required name="descricao" 
                            className="input-infoProjeto" id="descricao"/>
                            <div className="div-buttons">
                            <button className="button-infoProjeto">
                                Atualizar Projeto
                            </button>
                            <button onClick={excluir} className="button-infoProjeto">
                                Excluir Projeto
                            </button>
                            </div>
                        </div>
                        </form>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}