import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { GlobalProvider } from './context/GlobalContext'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { ProjetosInicio } from './pages/ProjetosInicio'
import { CadastroProjetos } from './pages/CadastroProjetos'
import { InfoProjetos } from './pages/InfoProjetos'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Cadastro/>
      },
      {
        path: "/projetos",
        element: <ProjetosInicio/>
      },
      {
        path: "/cadastroProjetos",
        element: <CadastroProjetos/>
      },

      {
        path: "/infoProjetos/:id",
        element: <InfoProjetos/>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <RouterProvider router={rotas}/>
  </GlobalProvider>,
)
