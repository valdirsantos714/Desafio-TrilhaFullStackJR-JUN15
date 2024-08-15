import { useState } from "react"
import "./index.css"
import { Link, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const Header = () => {

    const [verLista, setVerLista] = useState(false)
    const {apiKey} = useGlobalContext()


    function mostraLista():void {
        setVerLista(state => !state);
    }

    return (
        <>
        <header className="header-container">

            <span onClick={mostraLista} className="hamburguer"></span>
            <h2 className="titulo-header">Gerenciador de projetos</h2>

            {verLista && (
                <nav className="nav-opcoes">
                <ul className="lista-opcoes-mobile">

                    {apiKey === "" ? (
                        <>
                        <Link to={"/login"} onClick={mostraLista}>
                            <li>Fazer login</li>
                        </Link>

                        <Link to={"/register"} onClick={mostraLista} >
                            <li>Cadastro</li>
                        </Link>

                        <Link to={"/"} onClick={mostraLista}>
                            <li>Ir para tela inicial</li>
                        </Link>
                        </>

                    ):(
                        <>
                        <Link to={"/projetos"} onClick={mostraLista}>
                            <li>Ver meus Projetos</li>
                        </Link>

                        <Link to={"/cadastroProjetos"} onClick={mostraLista} >
                            <li>Cadastrar projetos</li>
                        </Link>

                        <Link to={"/"} onClick={mostraLista}>
                            <li>Ir para tela inicial</li>
                        </Link>
                        </>
                    )}
    
                </ul>
            </nav>
            )}
            
            <nav className="nav-tablet-pc">
                <ul className="lista-opcoes-tablet-ou-pc">

                {apiKey === "" ? (
                        <>
                        <Link to={"/login"}>
                            <li>Fazer login</li>
                        </Link>

                        <Link to={"/register"} >
                            <li>Cadastro</li>
                        </Link>

                        <Link to={"/"}>
                            <li>Ir para tela inicial</li>
                        </Link>
                        </>

                    ):(
                        <>
                        <Link to={"/projetos"}>
                            <li>Ver meus Projetos</li>
                        </Link>

                        <Link to={"/cadastroProjetos"} >
                            <li>Cadastrar projetos</li>
                        </Link>

                        <Link to={"/"}>
                            <li>Ir para tela inicial</li>
                        </Link>
                        </>
                    )}

                </ul>
            </nav>

            
        </header>
        
        <Outlet/>
        </>
    )
}