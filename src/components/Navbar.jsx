import { Link } from 'react-router-dom';
import logo from '../assets/hitlogo.png';
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { isLoggedIn } = useAuthContext();
  const { logout } = useLogout();

  return (
    <nav className="bg-green-600 text-white p-1">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-16 h-16 rounded-full mb-4" />
        </Link>
        <div className="space-x-4 flex items-center">
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <p>User</p>
              <button
                onClick={() => { logout() }}
                className="hover:text-gray-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="hover:text-gray-300">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
