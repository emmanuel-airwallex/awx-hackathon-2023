import './App.css';
import { Routes, Route } from 'react-router'
import { Home } from './Home';
import { Conversions } from './pages/Conversions';
import { Expenses } from './pages/Expenses';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = 'Airwallex';
  }, []);

  return (
    <div className="h-screen">
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} /> 
                <Route path="conversions" element={<Conversions />} />
                <Route path="expenses" element={<Expenses />} />
            </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
