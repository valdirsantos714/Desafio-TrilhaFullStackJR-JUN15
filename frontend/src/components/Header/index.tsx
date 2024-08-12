import { useState } from "react"
import "./index.css"
import { Link, Outlet } from "react-router-dom";

export const Header = () => {

    const [verLista, setVerLista] = useState(false)

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

                    <Link to={"/"} onClick={mostraLista}>
                        <li>Cadastrar</li>
                    </Link>

                    <Link to={"/"} onClick={mostraLista}>
                        <li>Atualizar</li>
                    </Link>

                    <Link to={"/"} onClick={mostraLista} >
                        <li>Listar</li>
                    </Link>

                    <Link to={"/"} onClick={mostraLista}>
                        <li>Deletar</li>
                    </Link>
                </ul>
            </nav>
            )}
            
            <nav className="nav-tablet-pc">
                <ul className="lista-opcoes-tablet-ou-pc">

                    <Link to={"/"} onClick={mostraLista}>
                        <li>Cadastrar</li>
                    </Link>

                    <Link to={"/"} onClick={mostraLista}>
                        <li>Atualizar</li>
                    </Link>

                    <Link to={"/"} onClick={mostraLista} >
                        <li>Listar</li>
                    </Link>

                    <Link to={"/"} onClick={mostraLista}>
                        <li>Deletar</li>
                    </Link>
                </ul>
            </nav>

            
        </header>
        
        <Outlet/>
        </>
    )
}