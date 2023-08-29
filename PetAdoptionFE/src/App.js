import './App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBarFull';
import HomePageOut from './Components/Home/HomePageOut.jsx';
import HomePageIn from './Components/Home/Dashboard.jsx';
import AllPets from './Components/Pets/AllPets.jsx';
import MyPets from './Components/Pets/MyPets.jsx';
import Search from './Components/Pets/Search/SearchPage.jsx';
import ProfilePage from './Components/Profile/ProfilePage.jsx';
import { AuthContext } from './Contexts/authContext';
import PetsTable from './Components/Admin/PetsTable.jsx';
import NewPetForm from './Components/Admin/NewPetForm.jsx';
import UsersList from './Components/Admin/UsersList.jsx';
import { useContext } from 'react';
import AdminDashboard from './Components/Admin/AdminDashboard';




function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  
  
  const [navBackground, setNavBackground] = useState('#343A40');
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setNavBackground('rgba(0, 0, 0, 0)');
    } else {
      setNavBackground('#343A40');
    }
  }, [location]);


  return (
    <div className="App">
      <NavBar navBackground={navBackground} setNavBackground={setNavBackground} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePageOut/>}/>
        <Route path="/adminDash" element={<AdminDashboard/>}/>
        <Route path="/dashboard" element={<HomePageIn/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/search-page" element={<Search/>}/>
        <Route path='/my-pets' element={<MyPets/>}/>
        <Route path='/all-pets' element={<AllPets/>}/>
        <Route path='/pets_list' element={<PetsTable/>}/>
        <Route path='/new_pet' element={<NewPetForm/>}/>
        <Route path='/users_list' element={<UsersList/>}/>
      </Routes>
    </div>
  );
}

export default App;
