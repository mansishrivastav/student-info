
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Input from "./Input";
import Navbar from "./Navbar";
import Show from "./Show";
import Error from './Error';
import Edit from './Edit';
import { AppContextProvider } from './AppContextProvider'

export default function App() {
  
  return (
    <>
    <AppContextProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/input' element={<Input/>}/>
      <Route path='/show' element={ <Show/>}/>
      <Route path='/*' element={ <Error/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      </AppContextProvider>
    
      </>
    
  )
}
