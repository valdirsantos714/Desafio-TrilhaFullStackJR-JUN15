import { useEffect, useState } from "react"
import { useGlobalContext } from "../../hooks/useGlobalContext"
import { findAll } from "../../services/data"
import "./index.css"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"

interface Projetos {
    id: number,
    titulo: string
    descricao: string
}

export const ProjetosInicio = () => {
    const {apiKey, idUser} = useGlobalContext()
    const [projetos, setProjetos] = useState<Projetos[]>([])
    
    useEffect(() => {
        chamaProjetos()
    },[])

    const chamaProjetos = async () => {
        try {
            const list = await findAll(apiKey, idUser);
            setProjetos(list)
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
        <main>
            <div className="container-projetos">
            <section>
                <div className="div-projetos">
                    <h2 className="h2-projetos">Seus Projetos </h2>
                    <p className="p-projetos">Veja a lista dos seus projetos </p>
                    <Link to={"/cadastroProjetos"} className="button-projetos">Cadastrar projetos</Link>
                    
                </div>
            </section>

            <section className=".section-listaProjetos">
                <ul className="ul-listaProjetos">
                    {
                        projetos.map((p) => (
                        <Link key={p.id} to={`/infoProjetos/${p.id}`}>
                        
                        <li  className="li-projetos">
                            <h2>{p.titulo}</h2>
                            <p>{p.descricao}</p>
                            <p className="p-editar">Clique para editar ou excluir</p>
                        </li>
                        </Link>
                    ))}
                </ul>
            </section>
            </div>
        </main>
        <Footer/>
        </>
    )
}