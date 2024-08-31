import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages//Register';
import { Login } from './pages/Login';
import { Logout } from './pages/Signout';
import { Navbar } from './pages/layout/Navbar'
import { Footer } from './pages/layout/Footer'
import { JobList } from './pages/JobList';
import { Form } from './pages/Form'

const App = () => {
  return (
    <>
      <div className=" overflow-x-hidden">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<JobList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/Form' element={<Form />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
