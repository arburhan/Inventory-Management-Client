import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration';
import ResetPassword from './Components/Pages/ResetPassword/ResetPassword';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
    </div>
  );
}

export default App;
