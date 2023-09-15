import '../dist/output.css'
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { Chat } from './pages/Chat';
import { Routes, Route } from 'react-router-dom';
import Private from './routes/Private';
import { AuthProvider } from './context/MainContext';

function App() {

  return (
    <>
    <div className='w-full h-full flex justify-center'>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/chat" element={<Private><Chat/></Private>} />
        </Routes>
      </AuthProvider>
    </div>
    </>
  )
}

export default App
