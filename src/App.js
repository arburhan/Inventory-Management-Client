import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration';
import ResetPassword from './Components/Pages/ResetPassword/ResetPassword';
import NotFound from './Components/Shared/NotFound/NotFound';
import Home from './Components/Pages/Home/Home';
import Blogs from './Components/Pages/Blogs/Blogs';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import Inventory from './Components/Pages/Inventory/Inventory';
import RequreAuth from './Components/Pages/RequreAuth/RequreAuth';
import AddItem from './Components/Pages/AddItem/AddItem';
import MyItems from './Components/Pages/MyItems/MyItems';
import Footer from './Components/Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/inventory/:id' element={
          <RequreAuth>
            <Inventory></Inventory>
          </RequreAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequreAuth>
            <ManageInventory></ManageInventory>
          </RequreAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequreAuth>
            <MyItems></MyItems>
          </RequreAuth>
        }></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
