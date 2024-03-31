import { BrowserRouter as Router, Routes , Route , Navigate} from 'react-router-dom';
import './App.css';
import LoginComponent from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import MovieBooking from './MovieBooking';
import Snack from './snacks';

function App() {
  return (
    <div>
      {/* <LoginComponent/> */}
      {/* <Register/> */}
      {/* <ResetPassword/> */}
      {/* <MovieBooking/> */}
      <Router>
     <Routes>
     <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />
     <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpass" element={<ResetPassword/>} />
        <Route path="/movie" element={<MovieBooking />} />
        <Route path="/snack" element={<Snack />}/>

        </Routes>
    </Router>
      
 
    </div>
  );
}

export default App;
