
import { useState } from 'react'
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import PriceList from './components/pricelist';
import ChatBox from './components/chatbox';
import './App.css'



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="app">
      <Header />
      <div className="content">
       <Sidebar onSelectCategory={setSelectedCategory} />
       <PriceList category={selectedCategory} />
       </div>
       <ChatBox />
       <Footer />
      
     
      
    </div>
  );
}
export default App
