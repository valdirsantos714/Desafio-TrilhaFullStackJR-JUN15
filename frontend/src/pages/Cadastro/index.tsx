import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { cadastre } from "../../services/auth"
import "./index.css"
import { Footer } from "../../components/Footer"

export const Cadastro = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const atualizaEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value
        setEmail(valor);
    }

    const atualizaSenha = (e:React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value
        setSenha(valor);
    }

    const cadastrar = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email === "" && senha === "") {
            alert("Digite o email e senha!")
        } else {
            try {
                const dadosUser = await cadastre(email, senha)
                console.log(dadosUser);
                
                
                navigate("/login")
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
        <main>
            <section>
                <div className="div-container-cadastro">
                    <h2 className="h2-cadastro">Cadastro</h2>
                    <p className="p-cadastro">Faça cadastro antes de fazer login</p>
                    <form onSubmit={cadastrar}  className="form-cadastro">
                        <label className="label-cadastro " htmlFor="email">
                            Email:
                        </label>
                        <input onChange={atualizaEmail} className="inputs-cadastro" type="text" name="email" id="email" placeholder="Digite seu email" required/>
                        
                        <label className="label-cadastro " htmlFor="senha">
                            Senha:
                        </label>
                        <input onChange={atualizaSenha}  className="inputs-cadastro" type="password" name="senha" id="senha" placeholder="Digite sua senha" required/>
                        <button className="button-cadastro">
                            Cadastrar-se
                        </button>
                        </form>
                </div>
            </section>
        </main>
        
        <Footer/>
        
        </>
    )
}