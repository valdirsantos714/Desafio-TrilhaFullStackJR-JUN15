import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotas}/>
  </StrictMode>,
)
