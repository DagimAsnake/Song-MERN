import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full max-w-9xl mx-auto pb-5">
      {<Outlet />}
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;