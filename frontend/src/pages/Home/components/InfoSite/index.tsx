import { Div } from "./components/Div"

export const InfoSite = () => {
    return (
        <main>
            <Div h2="Gerencie todos os seus projetos em um só lugar" p="Com este site você pode cadastrar seus projetos, e modificá-los como desejar" imgUrl="/imgs/lista.png" altImg='Icone de Lista de tarefas'/>

            <Div h2="Organize seus projetos" p="Neste site você poderá listar, cadastrar, editar e excluir projetos com apenas um clique" imgUrl="/imgs/organizando.jpg" altImg='Pessoa checando projetos no papel'/>
        </main>
    )
}