import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Form from './components/Forms'
import Table from './components/Table';
import Dashboard from './components/Dashboard';

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element={<Dashboard />} />
          <Route path='/form' element={<Form/>} />
          <Route path='/table' element={<Table/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
