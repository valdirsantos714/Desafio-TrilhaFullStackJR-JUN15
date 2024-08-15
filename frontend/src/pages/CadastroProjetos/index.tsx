import { useState } from "react"
import "./index.css"
import { save } from "../../services/data"
import { useGlobalContext } from "../../hooks/useGlobalContext"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer"

export const CadastroProjetos = () => {
    
    const [titulo, setTitulo] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const navigate = useNavigate()

    const {apiKey, idUser} = useGlobalContext()

    const atualizaTitulo = (e:React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value
        setTitulo(valor);
    }

    const atualizaDescricao = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const valor = e.target.value
        setDescricao(valor);
    }

    const salvar = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (titulo === "" || descricao === "") {
            alert("Digite o email e senha!")
        } else {
            try {
                const response = await save(apiKey, idUser, titulo, descricao);
                console.log(response);
                
                navigate("/projetos")

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
        <main>
            <section>
                <div className="div-cadastroProjeto">
                    <h2 className="h2-cadastroProjeto">Cadastre seu projeto </h2>
                    <p className="p-cadastroProjeto">Cadastre seu projeto apenas escrevendo o titulo e a descrição dele</p>
                    <form onSubmit={salvar} className="form-cadastroProjeto">
                        <div className="div-form-cadastroProjeto">
                        <label htmlFor="titulo" className="label-cadastroProjeto">
                        Título
                        </label>
                            <input onChange={atualizaTitulo} type="text" placeholder="Digite o título do projeto" required 
                            className="input-cadastroProjeto"
                            name="titulo" id="titulo"/>
                            <label 
                            className="label-cadastroProjeto" htmlFor="descricao">
                                Descrição
                            </label>
                            
                            <textarea onChange={atualizaDescricao}  placeholder="Digite a descrição do projeto" required name="descricao" 
                            className="input-cadastroProjeto" id="descricao"/>
                            <button className="button-cadastroProjeto">
                                Cadastrar Projeto
                            </button>
                        </div>
                        </form>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}