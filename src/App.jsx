import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { SigninForm } from './MainComponents/auth/Forms/SigninForm'
import { SignupForm } from './MainComponents/auth/Forms/SignupForm'
import { AuthLayout } from './MainComponents/auth/AuthLayout'
import { RootLayout } from './MainComponents/root/RootLayout'
import { ErrorPage } from "./MainComponents/root/ErrorPage"
import { Home } from './MainComponents/root/pages/Home'

function App() {
  return (
    <main className='flex h-screen p-0 m-0'>
    <BrowserRouter>
      <Routes>
      {/* Private Routes */}  
        <Route element={<AuthLayout/>}>
        <Route path='/signin' element={<SigninForm/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        </Route>
      
      {/* Public Routes*/}
        <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        </Route>
      
      {/* For-All routes */}
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
     
    </main>
  )
}

export default App
