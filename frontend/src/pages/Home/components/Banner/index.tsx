import { Link } from "react-router-dom"
import "./index.css"
import { useGlobalContext } from "../../../../hooks/useGlobalContext"

export const Banner = () => {

    const {apiKey} = useGlobalContext()

    return (
        <section>
            <div className="container-banner">
                <div className="elementos-banner">
                    <h2 id="h2-banner">Gerencie seus projetos facilmente</h2>
                    <p id="p-banner">Com o Gerenciador de projetos você pode adicionar, atualizar, listar e excluir projetos</p>
                    
                    {apiKey === "" ? (
                        <Link to="/login" id="btn-banner">
                            Gerenciar meus projetos agora!
                        </Link>
                    ) : (
                        <Link to="/projetos" id="btn-banner">
                            Gerenciar meus projetos agora!
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}