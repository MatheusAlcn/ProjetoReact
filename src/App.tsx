import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/footer';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/paginas/home/Login/Login';
import Cadastro from './assets/paginas/home/Cadastro/Cadastro';
import Home from './assets/paginas/home/Home/Home';
import ListaTemas from './components/Footer/footer';
import { AuthProvider } from './Context/AuthContext';
import FormularioTema from './components/Temas/formularioTema/FormularioTema';
import DeletarTema from './components/Temas/listaTemas/ListaTemas';
import ListaPostagens from './ListaPostagem/ListaPostagem';
import FormularioPostagem from './components/postagens/FormularioPostagem';
import DeletarPostagem from './components/postagens/DeletarPostagem';
import Perfil from '../src/assets/Perfil/Perfil';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;