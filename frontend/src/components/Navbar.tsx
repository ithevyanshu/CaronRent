import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const islogin = localStorage.getItem('x-var') ? true : false;

  const logout = () => {
    localStorage.removeItem('x-var');
    navigate('/');
  }
  return (
    <>
      <nav className="fixed w-full flex font-semibold justify-between items-center shadow-lg bg-slate-200 text-gray-700 p-3 sm:px-16">
        <Link to="/" className="text-3xl font-bold text-black">Car-on-Rent</Link>
        <div>
          <Link to="/" className="p-1 hover:underline"> All Rentals </Link>
          <Link to="/admin/add-car" className="p-1 hover:underline"> Add Car </Link>
          <Link to="/dashboard/agreements" className="p-1 hover:underline"> Agreements </Link>
          <Link to="/admin/return-request" className="p-1 hover:underline"> Return Request </Link>
        </div>
        <div className="flex content-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          {islogin ? <button className="p-1 hover:underline" onClick={logout}>Logout</button> :
            <>
              <Link to="/auth/login" className="p-1 hover:underline"> Login </Link>
              <span className="py-1">/</span>
              <Link to="/auth/signup" className="p-1 hover:underline "> Register</Link>
            </>
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar