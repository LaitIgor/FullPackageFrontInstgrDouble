import { Routes, Route } from 'react-router-dom';
import SignInForm from './Auth/forms/SignInForm';
import SignUpForm from './Auth/forms/SignUpForm';
import AuthLayout from './Auth/AuthLayout';
import RootLayout from './Root/RootLayout';
import { Home } from './Root/pages';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App