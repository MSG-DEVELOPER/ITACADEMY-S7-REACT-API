import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Films from './pages/Films/Films'
import Credits from './pages/Credits/Credits'
import SharedNavbar from './components/Shared/NavbarShared/NavbarShared'

function App() {

  return (
    <>
    <SharedNavbar/>
     <Routes>
      <Route path='/' element=<Home/> > </Route>
      <Route path='/films' element=<Films/> > </Route>
      <Route path='/credits/:filmId' element=<Credits/> > </Route>
     </Routes>
    </>
  )
}

export default App
