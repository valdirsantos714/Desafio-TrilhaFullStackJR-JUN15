import { useState } from "react"
import { useGlobalContext } from "../../hooks/useGlobalContext"
import "./index.css"
import { login } from "../../services/auth"
import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer"

export const Login = () => {

    const navigate = useNavigate()
    const {setApiKey, setIdUser} = useGlobalContext()

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

    const logar = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email === "" && senha === "") {
            alert("Digite o email e senha!")
        } else {
            try {
                const dadosUser = await login(email, senha)
                const id = dadosUser.idUser
                const token = dadosUser.tokenJWT
                setIdUser(id)
                setApiKey(token)
                
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
                <div className="div-container-login">
                    <h2 className="h2-login">Login</h2>
                    <p className="p-login">Faça login para acessar seus projetos</p>
                    <form onSubmit={logar} className="form-login">
                        <label className="label-login " htmlFor="email">
                            Email:
                        </label>
                        <input onChange={atualizaEmail} className="inputs-login" type="text" name="email" id="email" placeholder="Digite seu email" required/>
                        
                        <label className="label-login " htmlFor="senha"></label>
                        <input onChange={atualizaSenha}  className="inputs-login" type="text" name="senha" id="senha" placeholder="Digite sua senha" required/>
                        <button className="button-login">
                            Entrar
                        </button>

                    
                        <Link to={"/register"} style={{fontSize: "1.2rem"}}>
                        Não tem conta então <span className="button-telaCadastro">Cadastre-se</span>
                        </Link>
                        </form>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}