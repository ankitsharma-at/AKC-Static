
import { useState } from 'react';
import { Home } from './pages/Home';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 ">
          <Home />
        </main>
      </div>
      <Footer />
      <div className=' shadow-md right-4 fixed bottom-4  z-50 rounded-full bg-green-500 '><a href="https://api.whatsapp.com/send?phone=9351433289&text=" target="_blank">
<i className="fa fa-whatsapp text-4xl text-white my-float m-2"></i>
</a> </div>
    </div>
  );
}

export default App;