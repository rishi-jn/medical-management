import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Doctor from './Pages/Doctor';
import Nurse from './Pages/Nurse';
import Patient from './Pages/Patient';
function App() { 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/nurse" element={<Nurse/>}/>
        <Route path="/patient" element={<Patient/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
