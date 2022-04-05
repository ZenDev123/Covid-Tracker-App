import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar  from './components/Navbar';
import TrackedDATA from './components/Tracked-DATA';
// import Table from './components/Table';
import TableDisplay from './components/TableDisplay';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/data' element={<TrackedDATA />} />
          <Route path='/table-display' element={<TableDisplay />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
