import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
        ) : (
          <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet/>
          </section>
          <img 
            className='hidden lg:block h-screen w-1/2 object-cover bg-no-repeat' 
            src="/assets/images/side-img.svg" 
            alt="Sign page bg picture" 
          />
          </> 
      )}
      
    </>
  )
}

export default AuthLayout