import { Routes, Route  } from 'react-router'
import './globals.css'
import SigninForm from './_auth/Forms/SigninForm'
import SignupForm from './_auth/Forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile, AllUsers } from './_root/pages'
import { Toaster } from "@/components/ui/toaster"


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
            <Route path='/explore' element={<Explore />} />
            <Route path='/saved' element={<Saved />} />
            <Route path='/all-users' element={<AllUsers />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:id' element={<EditPost />} />
            <Route path='/posts/:id' element={<PostDetails />} />
            <Route path='/profile/:id/*' element={<Profile />} />
            <Route path="/update-profile/:id" element={<UpdateProfile />} />
            </Route>
        </Routes>

        <Toaster />
    </main>
  )
}

export default App