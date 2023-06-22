import './App.css';
import { Routes, Route } from 'react-router'
import { Home } from './Home';
import { Conversions } from './Conversions';
import { Expenses } from './Expenses';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
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
