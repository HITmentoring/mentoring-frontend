import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useLogout } from "./hooks/useLogout";
import PageRoutes from "./pages/PageRoutes";
import AuthVerify from './utils/authVerify';

export default function App() {
  const { logout } = useLogout();

  return (
    <div id="root">
      <Navbar />
      <main>
        <PageRoutes />
      </main>
      <AuthVerify logout={logout} />
      <Footer />
    </div>
  );
}
