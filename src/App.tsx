import { Routes, Route  } from 'react-router'
import './globals.css'
import SigninForm from './_auth/Forms/SigninForm'
import SignupForm from './_auth/Forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'


const App = () => {
  return (
    <main className="flex h-screen">
        <Routes >
            {/* Public routes */}
            <Route element={<AuthLayout />}>

            <Route path="/sign-in" element={<SigninForm />} />
            <Route path='/sign-up' element={<SignupForm />} />
            </Route>
            {/* Private routes */}
            <Route element={<RootLayout />}>

            <Route index  element={<Home />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App