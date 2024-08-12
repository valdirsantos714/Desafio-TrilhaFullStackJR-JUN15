import { Link } from "react-router-dom"
import "./index.css"

export const Banner = () => {
    return (
        <section>
            <div className="container-banner">
                <div className="elementos-banner">
                    <h2 id="h2-banner">Gerencie seus projetos facilmente</h2>
                    <p id="p-banner">Com o Gerenciador de projetos você pode adicionar, atualizar, listar e excluir projetos</p>
                    <Link to={"/"} id="btn-banner">
                        Gerenciar meus projetos agora!
                    </Link>
                </div>
            </div>
        </section>
    )
}