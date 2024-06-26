import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Projetos from './pages/projetos/Projetos'
import Sobre from './pages/sobre/Sobre'
import { GlobalS } from "./components/header/header.styled"

export default function AppRoutes() {
  return (
      <>
        <GlobalS/>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projetos' element={<Projetos/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
        </Router>
      </>
  )
}
