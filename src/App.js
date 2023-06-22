import './App.css';
import { Routes, Route } from 'react-router'
import { Home } from './Home';
import { Conversions } from './pages/Conversions';
import { Expenses } from './pages/Expenses';
import { BrowserRouter } from 'react-router-dom';
import Container from './chat/Container'

function App() {
  return (
    <div className="h-screen">
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} /> 
                <Route path="conversions" element={<Conversions />} />
                <Route path="expenses" element={<Expenses />} />
            </Routes>
        </BrowserRouter>
        <Container />
    </div>
    
  );
}

export default App;
