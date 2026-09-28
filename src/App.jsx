import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Footer from './components/Footer';
import Top from './components/Top';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Top />
      <div className=''>
        <Navbar />
        <div className='-z-50 mt-36 lg:mt-50'>
          <Outlet />
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
