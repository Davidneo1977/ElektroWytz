
import { useState } from 'react'
import Header from './components/header';
import Footer from './components/footer';
import PrimeSidebar from './components/PrimeSidebar';
import Pricelist from './components/pricelist';
import ChatBox from './components/chatbox';
import './App.css'



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="app">
      <Header />
      <div className="content">
      <div className="main-container">
      <PrimeSidebar />
      <Pricelist />
      </div>
      <ChatBox />
      </div>
       <Footer />
      
     
      
    </div>
  );
}
export default App
